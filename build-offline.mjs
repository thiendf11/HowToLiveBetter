import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const read = name => readFileSync(resolve(root, name), 'utf8');
const readme = read('README.md');
const paths = [...new Set([...readme.matchAll(/\]\((book\/[^)]+\.md)\)/g)].map(match => match[1]))];
if (paths.length !== 34) throw new Error(`Mục lục phải dẫn tới 34 chương, hiện có ${paths.length}`);

const corpus = Object.fromEntries(paths.map(path => [path, read(path)]));
const docPaths = [...new Set([...readme.matchAll(/\]\((docs\/[^)]+\.md)\)/g)].map(match => match[1]))];
const docs = Object.fromEntries(docPaths.map(path => [path, read(path)]));
const json = JSON.stringify({readme, parts:corpus, docs}).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
const marker = '<script>\n/* ---------- 调试面板';
let html = read('index.html');
if (!html.includes(marker)) throw new Error('Không tìm thấy điểm chèn corpus trong index.html');
html = html.replace(/<!-- ga:start[\s\S]*?<!-- ga:end -->\s*/, '');
html = html.replace(marker, `<script>window.__CORPUS__=${json};</script>\n<script>\n/* ---------- 调试面板`);
writeFileSync(resolve(root, 'offline.html'), html);
console.log(`Đã tạo offline.html với ${paths.length} chương và ${docPaths.length} bài hướng dẫn, nội dung ${Buffer.byteLength(json)} byte.`);
