#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import ts from 'typescript';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, '.codebase-index-ast.json');

function walkSync(dir) {
  const list = [];
  const entries = fs.readdir(dir, { withFileTypes: true });
  return entries.then(ents => Promise.all(ents.map(async ent => {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.git') return [];
      return walkSync(full);
    }
    if (ent.isFile() && /\.(js|jsx|ts|tsx|mjs|cjs)$/.test(ent.name)) return [full];
    return [];
  }))).then(arr => arr.flat());
}

function serializeSymbol(sym) {
  if (!sym) return null;
  return {
    name: sym.getName(),
    flags: ts.SymbolFlags[sym.getFlags()] || sym.getFlags()
  };
}

function getJsDoc(node) {
  const docs = ts.getJSDocCommentsAndTags(node);
  if (!docs || docs.length === 0) return null;
  // take the first /** ... */ text
  for (const d of docs) {
    if (d.kind === ts.SyntaxKind.JSDocComment) {
      return (d.comment && d.comment.toString()) || null;
    }
  }
  return null;
}

function analyzeFile(filePath, program) {
  const source = program.getSourceFile(filePath);
  if (!source) return null;
  const checker = program.getTypeChecker();
  const rel = path.relative(ROOT, filePath);
  const exports = [];
  const imports = [];
  let hasJsx = false;
  let lines = 0;

  const text = source.getFullText();
  lines = text.split(/\r?\n/).length;
  hasJsx = /<\s*[A-Za-z]/.test(text) || ts.isJsxText ? true : false;

  ts.forEachChild(source, node => {
    if (ts.isImportDeclaration(node)) {
      const moduleName = node.moduleSpecifier.text;
      imports.push(moduleName);
    }

    // exports
    if (ts.isExportAssignment(node)) {
      // export default X
      let name = null;
      if (ts.isIdentifier(node.expression)) name = node.expression.text;
      exports.push({ kind: 'default', name, docs: getJsDoc(node) });
    }

    if (ts.isExportDeclaration(node)) {
      // export { a as b } from '...'
      const clause = node.exportClause;
      if (clause && ts.isNamedExports(clause)) {
        for (const elt of clause.elements) {
          const name = elt.name.text;
          const orig = (elt.propertyName && elt.propertyName.text) || name;
          exports.push({ kind: 'named', name, original: orig, from: node.moduleSpecifier ? node.moduleSpecifier.text : null });
        }
      } else if (!clause && node.moduleSpecifier) {
        // export * from '...'
        exports.push({ kind: 're-export-all', from: node.moduleSpecifier.text });
      }
    }

    if (ts.isFunctionDeclaration(node) && node.modifiers && node.modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) {
      exports.push({ kind: 'named', name: node.name ? node.name.text : null, docs: getJsDoc(node) });
    }

    if (ts.isVariableStatement(node) && node.modifiers && node.modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) {
      for (const decl of node.declarationList.declarations) {
        if (ts.isIdentifier(decl.name)) exports.push({ kind: 'named', name: decl.name.text, docs: getJsDoc(node) });
      }
    }

    if (ts.isClassDeclaration(node) && node.modifiers && node.modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) {
      exports.push({ kind: 'named', name: node.name ? node.name.text : null, docs: getJsDoc(node) });
    }
  });

  // attempt to find default export name via symbol table
  const sfSymbol = checker.getSymbolAtLocation(source);
  // collect exported symbols via checker
  const moduleSymbol = checker.getSymbolAtLocation(source) || checker.getSymbolAtLocation(source);

  return { path: rel, exports, imports, isReact: hasJsx, lines };
}

async function main() {
  try {
    const files = await walkSync(SRC);
    if (files.length === 0) {
      console.error('No source files found under', SRC);
      process.exit(1);
    }

    const options = { allowJs: true, jsx: ts.JsxEmit.React, target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext };
    const program = ts.createProgram(files, options);

    const results = [];
    for (const f of files) {
      const r = analyzeFile(f, program);
      if (r) results.push(r);
    }

    const out = { summary: { totalFiles: results.length, generatedAt: new Date().toISOString() }, files: results };
    await fs.writeFile(OUT, JSON.stringify(out, null, 2), 'utf8');
    console.log('Wrote', OUT, 'with', results.length, 'files.');
  } catch (err) {
    console.error('AST indexer failed:', err && err.stack ? err.stack : err);
    process.exit(2);
  }
}

main();
