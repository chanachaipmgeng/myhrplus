const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const LANGUAGES = ['th', 'en', 'lo', 'my', 'vi', 'zh'];
const REFERENCE_LANGUAGE = 'th'; // Use Thai as reference

/**
 * Get all keys from a JSON file (including nested keys)
 */
function getAllKeys(obj, prefix = '') {
  const keys = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        // Nested object - recursively get keys
        keys.push(...getAllKeys(obj[key], fullKey));
      } else {
        // Leaf key
        keys.push(fullKey);
      }
    }
  }
  return keys;
}

/**
 * Get value from nested object using dot notation
 */
function getNestedValue(obj, key) {
  const parts = key.split('.');
  let value = obj;
  for (const part of parts) {
    if (value && typeof value === 'object' && value.hasOwnProperty(part)) {
      value = value[part];
    } else {
      return undefined;
    }
  }
  return value;
}

/**
 * Set value in nested object using dot notation
 */
function setNestedValue(obj, key, value) {
  const parts = key.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!current[part] || typeof current[part] !== 'object') {
      current[part] = {};
    }
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
}

/**
 * Check if a key is a system code (should be kept as-is)
 */
function isSystemCode(key) {
  return key.startsWith('systemcode.') || 
         key.startsWith('system.') ||
         /^\d+$/.test(key) || // Numeric keys like "3", "404"
         key.includes('systemcode') ||
         key.includes('BU_DESC') ||
         key.includes('{{') ||
         key.includes('}}');
}

/**
 * Main function to sync translation keys
 */
function syncTranslationKeys() {
  console.log('🔄 Starting translation keys synchronization...\n');

  // Read all language files
  const translations = {};
  const allKeys = new Set();

  for (const lang of LANGUAGES) {
    const filePath = path.join(I18N_DIR, `${lang}.json`);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      translations[lang] = JSON.parse(content);
      
      // Get all keys (including nested)
      const keys = getAllKeys(translations[lang]);
      keys.forEach(k => allKeys.add(k));
      
      console.log(`✅ Loaded ${lang}.json: ${keys.length} keys`);
    } catch (error) {
      console.error(`❌ Error reading ${lang}.json: ${error.message}`);
      return;
    }
  }

  console.log(`\n📊 Total unique keys across all languages: ${allKeys.size}`);

  // Use reference language (th) as the master
  const referenceKeys = getAllKeys(translations[REFERENCE_LANGUAGE]);
  console.log(`\n📋 Reference language (${REFERENCE_LANGUAGE}): ${referenceKeys.length} keys`);

  // Find missing keys in each language
  const missingKeys = {};
  const extraKeys = {};
  
  for (const lang of LANGUAGES) {
    if (lang === REFERENCE_LANGUAGE) continue;
    
    const langKeys = getAllKeys(translations[lang]);
    missingKeys[lang] = referenceKeys.filter(k => !langKeys.includes(k));
    extraKeys[lang] = langKeys.filter(k => !referenceKeys.includes(k));
    
    console.log(`\n${lang.toUpperCase()}:`);
    console.log(`  - Has: ${langKeys.length} keys`);
    console.log(`  - Missing: ${missingKeys[lang].length} keys`);
    console.log(`  - Extra: ${extraKeys[lang].length} keys`);
  }

  // Add missing keys to each language (including system codes)
  console.log('\n🔧 Adding missing keys...');
  for (const lang of LANGUAGES) {
    if (lang === REFERENCE_LANGUAGE) continue;
    
    let addedCount = 0;
    let skippedCount = 0;
    for (const key of missingKeys[lang]) {
      // Get value from reference language
      let refValue = getNestedValue(translations[REFERENCE_LANGUAGE], key);
      
      // If not found as nested, try as flat key
      if (refValue === undefined && translations[REFERENCE_LANGUAGE].hasOwnProperty(key)) {
        refValue = translations[REFERENCE_LANGUAGE][key];
      }
      
      if (refValue !== undefined) {
        // If value is an object, copy it recursively
        if (typeof refValue === 'object' && refValue !== null && !Array.isArray(refValue)) {
          // For nested objects, we need to set each nested key
          const nestedKeys = getAllKeys(refValue, key);
          for (const nestedKey of nestedKeys) {
            const nestedValue = getNestedValue(translations[REFERENCE_LANGUAGE], nestedKey);
            if (nestedValue !== undefined) {
              setNestedValue(translations[lang], nestedKey, nestedValue);
            }
          }
        } else {
          // Copy value from reference (including system codes)
          // Check if it exists as flat key in reference
          if (translations[REFERENCE_LANGUAGE].hasOwnProperty(key)) {
            // It's a flat key in reference, so add as flat key
            translations[lang][key] = refValue;
          } else {
            // It's a nested key, use setNestedValue
            setNestedValue(translations[lang], key, refValue);
          }
        }
        addedCount++;
      } else {
        skippedCount++;
      }
    }
    
    console.log(`  ✅ ${lang}: Added ${addedCount} missing keys${skippedCount > 0 ? `, skipped ${skippedCount}` : ''}`);
  }

  // Remove extra keys that are not in reference
  console.log('\n🗑️  Removing extra keys...');
  for (const lang of LANGUAGES) {
    if (lang === REFERENCE_LANGUAGE) continue;
    
    let removedCount = 0;
    let keptCount = 0;
    for (const key of extraKeys[lang]) {
      // Check if key exists in reference (both nested and flat)
      let refValue = getNestedValue(translations[REFERENCE_LANGUAGE], key);
      if (refValue === undefined && translations[REFERENCE_LANGUAGE].hasOwnProperty(key)) {
        refValue = translations[REFERENCE_LANGUAGE][key];
      }
      
      if (refValue === undefined) {
        // Check if it's a flat key first
        if (translations[lang].hasOwnProperty(key)) {
          delete translations[lang][key];
          removedCount++;
        } else {
          // Try to remove from nested object
          const parts = key.split('.');
          let current = translations[lang];
          let found = true;
          
          // Navigate to parent object
          for (let i = 0; i < parts.length - 1; i++) {
            if (current && typeof current === 'object' && current.hasOwnProperty(parts[i])) {
              current = current[parts[i]];
            } else {
              found = false;
              break;
            }
          }
          
          // Delete the key
          if (found && current && typeof current === 'object' && current.hasOwnProperty(parts[parts.length - 1])) {
            delete current[parts[parts.length - 1]];
            removedCount++;
          }
        }
      } else {
        keptCount++;
      }
    }
    
    console.log(`  ✅ ${lang}: Removed ${removedCount} extra keys${keptCount > 0 ? `, kept ${keptCount}` : ''}`);
  }

  // Write updated files
  console.log('\n💾 Writing updated files...');
  for (const lang of LANGUAGES) {
    const filePath = path.join(I18N_DIR, `${lang}.json`);
    try {
      // Sort keys for better readability
      const sorted = sortObjectKeys(translations[lang]);
      fs.writeFileSync(filePath, JSON.stringify(sorted, null, 2) + '\n', 'utf8');
      console.log(`  ✅ ${lang}.json updated`);
    } catch (error) {
      console.error(`  ❌ Error writing ${lang}.json: ${error.message}`);
    }
  }

  // Final summary
  console.log('\n📊 Final Summary:');
  for (const lang of LANGUAGES) {
    const keys = getAllKeys(translations[lang]);
    console.log(`  ${lang}: ${keys.length} keys`);
  }

  console.log('\n✅ Synchronization complete!');
}

/**
 * Sort object keys recursively
 */
function sortObjectKeys(obj) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return obj;
  }

  const sorted = {};
  const keys = Object.keys(obj).sort((a, b) => {
    // Sort system codes and numeric keys first
    const aIsSystem = isSystemCode(a) || /^\d+$/.test(a);
    const bIsSystem = isSystemCode(b) || /^\d+$/.test(b);
    
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
syncTranslationKeys();

