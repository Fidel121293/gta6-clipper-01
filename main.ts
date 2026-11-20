// gta6-clipper-01 entry: hands the clip's YouTube address to the grader.
// The entry is the video itself; this program only copies VIDEO.json from
// the repository root into the grader's output directory, unchanged.
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Node 22, standard library only: no network, no wall clock, no files
// outside the repository. Two runs write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Refuse a missing or malformed address early, so a bad VIDEO.json fails
// loudly here instead of silently handing the grader junk.
const video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8'));
if (typeof video.url !== 'string' || !video.url.startsWith('http')) {
  throw new Error('VIDEO.json must hold a video address in its url field');
}

copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
