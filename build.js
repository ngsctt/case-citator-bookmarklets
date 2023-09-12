import { readdir } from 'fs/promises';
import * as esbuild from 'esbuild';
import { join as joinPath } from 'node:path';
import { Eta } from 'eta';
import { outputFile } from 'fs-extra';

const SOURCE = 'source';
const OUTPUT = 'docs';

const inputs = await readdir(SOURCE, {withFileTypes: true, recursive: false});
const bookmarklets = new Map();

for (const input of inputs) {
  if (! input.isFile()) continue;

  const {name} = input;

  const output =  await esbuild.build({
    entryPoints: [joinPath(SOURCE, name)], // points to normal javascript
    bundle: true,
    minify: true,
    // outfile: joinPath('dist', name), // where to save bookmarklet javascript
    write: false,
    format: 'iife',
    target: ['es6'],
  });

  bookmarklets.set(name, output.outputFiles[0].text);
}

const bkmrklt = k => 'javascript:' + bookmarklets.get(k).trim();

const eta = new Eta({useWith: true, views: '.'});
const res = await eta.renderAsync('index', { bkmrklt });

outputFile(joinPath(OUTPUT, 'index.html'), res);