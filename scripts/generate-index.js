#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src');
const OUT_FILE = path.join(ROOT, '.codebase-index.json');

const exts = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.git') continue;
      files.push(...await walk(full));
    } else if (ent.isFile()) {
      if (exts.has(path.extname(ent.name))) files.push(full);
    }
  }
  return files;
}

function extractExports(source, filename) {
  const named = new Set();
  let defaultExport = null;

  // default export patterns
  const m1 = source.match(/export\s+default\s+function\s+([A-Za-z0-9_$]+)/);
  if (m1) defaultExport = m1[1];

  const m2 = source.match(/export\s+default\s+class\s+([A-Za-z0-9_$]+)/);
  if (m2) defaultExport = m2[1];

  // export default NAME;
  const m3 = source.match(/export\s+default\s+([A-Za-z0-9_$]+)/);
  if (m3 && !defaultExport) defaultExport = m3[1];

  // named exports like: export const Foo =, export function Bar(), export class Baz
  const reNamed = /export\s+(?:const|let|var|function|class|type|interface|enum)\s+([A-Za-z0-9_$]+)/g;
  let r;
  while ((r = reNamed.exec(source)) !== null) named.add(r[1]);

  // export { A, B as C }
  const reBrace = /export\s*\{([^}]+)\}/g;
  while ((r = reBrace.exec(source)) !== null) {
    const parts = r[1].split(',').map(s => s.trim());
    for (const p of parts) {
      const asMatch = p.match(/([A-Za-z0-9_$]+)(?:\s+as\s+([A-Za-z0-9_$]+))?/);
      if (asMatch) named.add(asMatch[2] || asMatch[1]);
    }
  }

  // heuristics: if default export is anonymous (export default () => ...), fall back to filename's PascalCase
  if (!defaultExport) {
    const anonDefault = /export\s+default\s*(?:\(|(?:async\s+)?function\s*\(|\w*=>)/.test(source);
    if (anonDefault) {
      const base = path.basename(filename, path.extname(filename));
      // convert kebab/underscore to PascalCase
      defaultExport = base.split(/[-_\.]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
    }
  }

  return { default: defaultExport, named: Array.from(named) };
}

function isReactFile(source) {
  if (/from\s+['\"]react['\"]/i.test(source)) return true;
  if (/<[A-Za-z]/.test(source) && /\/\*/.test(source) === false) return true; // naive JSX test
  return false;
}

async function main() {
  try {
    const found = await walk(SRC_DIR);
    const files = [];
    for (const f of found) {
      const rel = path.relative(ROOT, f);
      let src = '';
      try { src = await fs.readFile(f, 'utf8'); } catch (e) { continue; }
      const exports = extractExports(src, f);
      const react = isReactFile(src);
      const components = [];
      if (react) {
        // components are exported names that start with capital letter or default
        if (exports.default) components.push(exports.default);
        for (const n of exports.named) if (/^[A-Z]/.test(n)) components.push(n);
      }

      files.push({ path: rel, exports, isReact: react, components });
    }

    const summary = {
      totalFiles: files.length,
      reactFiles: files.filter(f => f.isReact).length,
      generatedAt: new Date().toISOString()
    };

    const out = { summary, files };
    await fs.writeFile(OUT_FILE, JSON.stringify(out, null, 2), 'utf8');
    console.log('Wrote', OUT_FILE, 'with', files.length, 'files.');
  } catch (err) {
    console.error('Indexer failed:', err);
    process.exit(2);
  }
}

main();
