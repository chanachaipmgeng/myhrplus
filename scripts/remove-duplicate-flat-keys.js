const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const LANGUAGES = ['th', 'en', 'lo', 'my', 'vi', 'zh'];

/**
 * Get all keys from nested object
 */
function getNestedKeys(obj, prefix = '') {
  const keys = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        keys.push(...getNestedKeys(obj[key], fullKey));
      } else {
        keys.push(fullKey);
      }
    }
  }
  return keys;
}

/**
 * Remove flat keys that exist in nested object
 */
function removeDuplicateFlatKeys() {
  console.log('🔍 Checking for duplicate flat keys in nested objects...\n');

  for (const lang of LANGUAGES) {
    const filePath = path.join(I18N_DIR, `${lang}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Get nested keys for features.auth.login
    const nestedLoginKeys = getNestedKeys(data.features?.auth?.login || {}, 'features.auth.login');
    
    // Get flat keys that match nested keys
    const flatKeysToRemove = Object.keys(data).filter(key => {
      return key.startsWith('features.auth.login.') && nestedLoginKeys.includes(key);
    });

    if (flatKeysToRemove.length > 0) {
      console.log(`${lang.toUpperCase()}: Found ${flatKeysToRemove.length} duplicate flat keys:`);
      flatKeysToRemove.forEach(key => {
        console.log(`  - ${key}`);
        delete data[key];
      });

      // Write updated file
      const sorted = sortObjectKeys(data);
      fs.writeFileSync(filePath, JSON.stringify(sorted, null, 2) + '\n', 'utf8');
      console.log(`  ✅ Removed ${flatKeysToRemove.length} duplicate keys\n`);
    } else {
      console.log(`${lang.toUpperCase()}: No duplicate keys found\n`);
    }
  }

  console.log('✅ Cleanup complete!');
}

/**
 * Sort object keys
 */
function sortObjectKeys(obj) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return obj;
  }

  const sorted = {};
  const keys = Object.keys(obj).sort((a, b) => {
    // Sort system codes and numeric keys first
    const aIsSystem = /^(systemcode|system)\./.test(a) || /^\d+$/.test(a);
    const bIsSystem = /^(systemcode|system)\./.test(b) || /^\d+$/.test(b);
    
    if (aIsSystem && !bIsSystem) return -1;
    if (!aIsSystem && bIsSystem) return 1;
    
    // Then sort alphabetically
    return a.localeCompare(b);
  });

  for (const key of keys) {
    sorted[key] = sortObjectKeys(obj[key]);
  }

  return sorted;
}

// Run the script
removeDuplicateFlatKeys();

