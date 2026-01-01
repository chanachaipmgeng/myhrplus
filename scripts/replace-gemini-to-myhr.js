/**
 * Script to replace all instances of 'gemini' with 'myhr' in theme-related code
 * Usage: node scripts/replace-gemini-to-myhr.js
 */

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

// Patterns to replace
const replacements = [
  { pattern: /theme-gemini:/g, replacement: 'theme-myhr:' },
  { pattern: /gemini-header/g, replacement: 'myhr-header' },
  { pattern: /gemini-footer/g, replacement: 'myhr-footer' },
  { pattern: /gemini-text-glow/g, replacement: 'myhr-text-glow' },
  { pattern: /body\.theme-gemini/g, replacement: 'body.theme-myhr' },
  { pattern: /\[data-theme='gemini'\]/g, replacement: "[data-theme='myhr']" },
  { pattern: /\[class\*='theme-gemini'\]/g, replacement: "[class*='theme-myhr']" },
];

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    replacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Updated: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other build directories
      if (!['node_modules', '.angular', 'dist', '.git'].includes(file)) {
        walkDir(filePath, fileList);
      }
    } else if (stat.isFile()) {
      // Process HTML, SCSS, TS, and MD files
      if (/\.(html|scss|ts|md)$/.test(file)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

// Main execution
console.log('Starting replacement of gemini to myhr...\n');

const files = walkDir(srcDir);
let updatedCount = 0;

files.forEach((file) => {
  if (processFile(file)) {
    updatedCount++;
  }
});

console.log(`\n✓ Completed! Updated ${updatedCount} files.`);

