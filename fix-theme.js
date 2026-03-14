import fs from 'fs';
import path from 'path';

const SRC_DIR = 'C:/Users/HP/Desktop/Projects/playza-frontend/src';

const replacements = [
  // Text colors
  { regex: /\btext-white\b/g, replacement: 'text-slate-900 dark:text-white' },
  { regex: /\btext-slate-100\b/g, replacement: 'text-slate-900 dark:text-slate-100' },
  { regex: /\btext-slate-200\b/g, replacement: 'text-slate-800 dark:text-slate-200' },
  { regex: /\btext-slate-300\b/g, replacement: 'text-slate-700 dark:text-slate-300' },
  { regex: /\btext-slate-400\b/g, replacement: 'text-slate-600 dark:text-slate-400' },
  { regex: /\btext-slate-50\b/g, replacement: 'text-slate-900 dark:text-slate-50' },
  
  // Background colors
  { regex: /\bbg-slate-900\b/g, replacement: 'bg-slate-100 dark:bg-slate-900' },
  { regex: /\bbg-slate-950\b/g, replacement: 'bg-slate-50 dark:bg-slate-950' },
  { regex: /\bbg-slate-800\b/g, replacement: 'bg-white dark:bg-slate-800' },
  { regex: /\bbg-slate-700\b/g, replacement: 'bg-slate-200 dark:bg-slate-700' },
  { regex: /\bbg-\[#020617\]\b/g, replacement: 'bg-background' },
  { regex: /\bbg-white\/5\b/g, replacement: 'bg-slate-900/5 dark:bg-white/5' },
  { regex: /\bbg-white\/10\b/g, replacement: 'bg-slate-900/10 dark:bg-white/10' },
  { regex: /\bbg-white\/20\b/g, replacement: 'bg-slate-900/20 dark:bg-white/20' },
  
  // Border colors
  { regex: /\bborder-slate-800\b/g, replacement: 'border-slate-200 dark:border-slate-800' },
  { regex: /\bborder-slate-700\b/g, replacement: 'border-slate-300 dark:border-slate-700' },
  { regex: /\bborder-white\/10\b/g, replacement: 'border-slate-900/10 dark:border-white/10' },
  { regex: /\bborder-white\/20\b/g, replacement: 'border-slate-900/20 dark:border-white/20' },

  // Hover states - carefully handling simple cases
  { regex: /\bhover:bg-slate-800\b/g, replacement: 'hover:bg-slate-200 dark:hover:bg-slate-800' },
  { regex: /\bhover:bg-slate-700\b/g, replacement: 'hover:bg-slate-300 dark:hover:bg-slate-700' },
  { regex: /\bhover:bg-white\/5\b/g, replacement: 'hover:bg-slate-900/5 dark:hover:bg-white/5' },
  { regex: /\bhover:bg-white\/10\b/g, replacement: 'hover:bg-slate-900/10 dark:hover:bg-white/10' },
  { regex: /\bhover:text-white\b/g, replacement: 'hover:text-slate-900 dark:hover:text-white' },

  // SVG Strokes/Fills if any
  { regex: /\bstroke-slate-400\b/g, replacement: 'stroke-slate-600 dark:stroke-slate-400' },
  { regex: /\bfill-slate-400\b/g, replacement: 'fill-slate-600 dark:fill-slate-400' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // To avoid doubling up (e.g., matching 'text-white' inside 'dark:text-white'),
  // we first need to verify what we are matching. But the regex limits to word boundaries
  // which matches `text-white` but wait, `-white` is word bounded.
  // Actually, \b matches boundary between word and non-word. ':' is non-word, so
  // \btext-white\b matches in 'dark:text-white'. This would result in 'dark:text-slate-900 dark:text-white'.
  // This is a common bug. Let's fix the regex to negative lookbehind for ':' to prevent modifying existing dual-classes.
  // JavaScript supports negative lookbehinds: /(?<![:\w-])\btext-white\b/g
  
  for (const { regex, replacement } of replacements) {
    // Enhance regex to avoid replacing things that are already dark: prefixed or something: prefixed
    const source = regex.source;
    // Remove the word boundary at start and replace with negative lookbehind
    const enhancedSource = `(?<![:\\w\\-])` + source;
    const enhancedRegex = new RegExp(enhancedSource, 'g');
    
    content = content.replace(enhancedRegex, replacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(SRC_DIR);
console.log('Done mapping utility classes.');
