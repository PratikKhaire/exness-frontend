CODEBASE INDEX
================

This repository includes a small, automatically generated index that describes the source files under `src/` and their exported symbols.

Files
-----

- `.codebase-index.json` — the generated JSON file containing a `summary` and `files` array. Each file entry contains:
  - `path` — path relative to the repo root
  - `exports` — an object with `default` (string or null) and `named` (array of strings)
  - `isReact` — boolean heuristic indicating if the file likely contains React/JSX
  - `components` — array of exported names that look like React components (capitalized)

How to regenerate
------------------

An indexer script is included at `scripts/generate-index.js`. You can regenerate the index with:

```bash
npm run generate-index
```

Notes and heuristics
--------------------
- The indexer uses simple regex heuristics and a filename-based fallback for anonymous default exports. It's intended for developer convenience (quick cross-referencing), not as a full AST-based symbol extractor.
- If your project uses non-standard export patterns or extremely dynamic exports, consider enhancing the script to use a real parser (e.g., @babel/parser / TypeScript compiler API).

If you want, I can make the indexer TypeScript-based or add it as a small dev-dependency and include more detailed parsing.
