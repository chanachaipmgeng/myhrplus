/**
 * Check Missing Translation Keys
 * ตรวจสอบว่า components มีการเรียกใช้ translation keys ที่ไม่มีใน th.json หรือไม่
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src/app');
const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const TH_FILE = path.join(I18N_DIR, 'th.json');

/**
 * Flatten nested object to dot notation
 */
function flattenObject(obj, prefix = '') {
  const flattened = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(flattened, flattenObject(obj[key], newKey));
      } else {
        flattened[newKey] = obj[key];
      }
    }
  }
  
  return flattened;
}

/**
 * Load JSON file
 */
function loadJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/**
 * Find all TypeScript and HTML files
 */
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other excluded directories
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
        findFiles(filePath, fileList);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Extract translation keys from file content
 */
function extractTranslationKeys(content, filePath) {
  const keys = new Set();
  
  // Pattern 1: 'key' | translate
  const pipeTranslatePattern = /['"]([^'"]+)['"]\s*\|\s*translate/g;
  let match;
  while ((match = pipeTranslatePattern.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  // Pattern 2: translate.instant('key')
  const instantPattern = /translate\.instant\(['"]([^'"]+)['"]/g;
  while ((match = instantPattern.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  // Pattern 3: translate.get('key')
  const getPattern = /translate\.get\(['"]([^'"]+)['"]/g;
  while ((match = getPattern.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  // Pattern 4: TRANSLATION_KEYS.* (nested object access)
  const translationKeysPattern = /TRANSLATION_KEYS\.([A-Z_]+(?:\.[A-Z_]+)*)/g;
  while ((match = translationKeysPattern.exec(content)) !== null) {
    // Convert TRANSLATION_KEYS.COMMON.ACTIONS.ADD_NEW to common.actions.addNew
    const keyPath = match[1].toLowerCase().split('.').join('.');
    // This is approximate - we'll need to check against actual TRANSLATION_KEYS structure
    keys.add(keyPath);
  }
  
  // Pattern 5: {{ 'key' | translate }}
  const interpolationPattern = /\{\{\s*['"]([^'"]+)['"]\s*\|\s*translate\s*\}\}/g;
  while ((match = interpolationPattern.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  // Pattern 6: [translate]="'key'"
  const attributePattern = /\[translate\]=['"]([^'"]+)['"]/g;
  while ((match = attributePattern.exec(content)) !== null) {
    keys.add(match[1]);
  }
  
  return Array.from(keys);
}

/**
 * Check if key exists in translation file
 */
function keyExists(key, translationKeys) {
  // Direct key match
  if (translationKeys.has(key)) {
    return true;
  }
  
  // Check if it's a nested key (e.g., 'common.actions.addNew')
  const parts = key.split('.');
  let current = translationKeys;
  
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return false;
    }
  }
  
  return true;
}

/**
 * Main function
 */
function checkMissingTranslationKeys() {
  console.log('🔍 Checking for missing translation keys...\n');
  
  // Load reference translation file (th.json)
  const thData = loadJSON(TH_FILE);
  const thKeys = flattenObject(thData);
  const thKeysSet = new Set(Object.keys(thKeys));
  
  console.log(`📊 Reference translation file (th.json): ${thKeysSet.size} keys\n`);
  
  // Find all component files
  console.log('📁 Scanning component files...\n');
  const files = findFiles(SRC_DIR);
  console.log(`Found ${files.length} files to check\n`);
  
  const missingKeys = new Map(); // file -> [keys]
  const allUsedKeys = new Set();
  
  // Check each file
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const keys = extractTranslationKeys(content, file);
      
      if (keys.length > 0) {
        const missing = [];
        
        for (const key of keys) {
          allUsedKeys.add(key);
          
          // Check if key exists in th.json
          if (!thKeysSet.has(key)) {
            missing.push(key);
          }
        }
        
        if (missing.length > 0) {
          missingKeys.set(file, missing);
        }
      }
    } catch (error) {
      console.warn(`⚠️  Error reading file ${file}:`, error.message);
    }
  }
  
  // Report results
  console.log('📈 Summary:\n');
  console.log(`Total files checked: ${files.length}`);
  console.log(`Total unique keys used: ${allUsedKeys.size}`);
  console.log(`Files with missing keys: ${missingKeys.size}\n`);
  
  if (missingKeys.size === 0) {
    console.log('✅ No missing translation keys found!\n');
  } else {
    console.log('🔴 Missing Translation Keys:\n');
    
    // Group by key (not by file)
    const keysByFile = {};
    for (const [file, keys] of missingKeys.entries()) {
      const relativePath = path.relative(path.join(__dirname, '..'), file);
      keysByFile[relativePath] = keys;
    }
    
    // Sort files
    const sortedFiles = Object.keys(keysByFile).sort();
    
    for (const file of sortedFiles) {
      const keys = keysByFile[file];
      console.log(`\n📄 ${file} (${keys.length} missing keys):`);
      keys.forEach(key => {
        console.log(`  - ${key}`);
      });
    }
    
    // Summary of all missing keys
    const allMissingKeys = new Set();
    for (const keys of missingKeys.values()) {
      keys.forEach(key => allMissingKeys.add(key));
    }
    
    console.log(`\n\n📊 Total unique missing keys: ${allMissingKeys.size}`);
    console.log('\nMissing keys list:');
    Array.from(allMissingKeys).sort().forEach(key => {
      console.log(`  - ${key}`);
    });
  }
  
  // Save report
  const report = {
    totalFiles: files.length,
    totalUniqueKeys: allUsedKeys.size,
    filesWithMissingKeys: missingKeys.size,
    missingKeysByFile: Object.fromEntries(
      Array.from(missingKeys.entries()).map(([file, keys]) => [
        path.relative(path.join(__dirname, '..'), file),
        keys
      ])
    ),
    allMissingKeys: Array.from(
      new Set(Array.from(missingKeys.values()).flat())
    ).sort()
  };
  
  const reportPath = path.join(__dirname, '../MISSING_TRANSLATION_KEYS_REPORT.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  
  return report;
}

// Run check
if (require.main === module) {
  try {
    checkMissingTranslationKeys();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

module.exports = { checkMissingTranslationKeys };

