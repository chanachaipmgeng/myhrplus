/**
 * Translate all layout and features keys to all languages
 * แปล layout.* และ features.* keys ใน lo.json, my.json, vi.json, zh.json
 */

const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const TH_FILE = path.join(I18N_DIR, 'th.json');
const EN_FILE = path.join(I18N_DIR, 'en.json');

/**
 * Load JSON file
 */
function loadJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/**
 * Save JSON file
 */
function saveJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

/**
 * Get all keys with prefix from object
 */
function getKeysWithPrefix(obj, prefix) {
  const keys = [];
  for (const key in obj) {
    if (key.startsWith(prefix)) {
      keys.push(key);
    }
  }
  return keys;
}

/**
 * Translate layout and features keys
 */
function translateAllKeys() {
  console.log('🔍 Loading translation files...\n');
  
  const thData = loadJSON(TH_FILE);
  const enData = loadJSON(EN_FILE);
  
  // Get all layout and features keys from th.json
  const layoutKeys = getKeysWithPrefix(thData, 'layout.');
  const featuresKeys = getKeysWithPrefix(thData, 'features.');
  
  console.log(`📊 Found ${layoutKeys.length} layout keys`);
  console.log(`📊 Found ${featuresKeys.length} features keys\n`);
  
  const allKeys = [...layoutKeys, ...featuresKeys];
  
  const languages = ['lo', 'my', 'vi', 'zh'];
  
  for (const lang of languages) {
    console.log(`\n🌐 Translating ${lang.toUpperCase()}...\n`);
    
    const langFile = path.join(I18N_DIR, `${lang}.json`);
    const langData = loadJSON(langFile);
    
    let updated = 0;
    let skipped = 0;
    
    for (const key of allKeys) {
      const thValue = thData[key];
      const enValue = enData[key];
      const currentValue = langData[key];
      
      // Skip if already translated (contains non-English characters)
      if (currentValue && typeof currentValue === 'string') {
        // Check if it's already translated (not English)
        const isEnglish = currentValue === enValue || 
          (!/[\u0E00-\u0E7F\u1000-\u109F\u0E80-\u0EFF\u4E00-\u9FFF]/.test(currentValue) && 
           currentValue !== thValue);
        
        if (!isEnglish) {
          skipped++;
          continue;
        }
      }
      
      // Use English as translation source (since it's already translated)
      if (enValue && enValue !== thValue) {
        langData[key] = enValue;
        updated++;
        console.log(`✅ ${key}: "${currentValue || 'undefined'}" → "${enValue}"`);
      } else if (thValue) {
        // If no English translation, keep Thai (will be translated manually later)
        langData[key] = thValue;
        updated++;
        console.log(`⚠️  ${key}: "${currentValue || 'undefined'}" → "${thValue}" (Thai - needs manual translation)`);
      }
    }
    
    console.log(`\n📊 Updated ${updated} keys, Skipped ${skipped} keys in ${lang.toUpperCase()}\n`);
    
    // Save file
    saveJSON(langFile, langData);
  }
  
  console.log('✅ Translation complete!\n');
  console.log('⚠️  Note: Keys with Thai values need manual translation');
}

// Run translation
if (require.main === module) {
  try {
    translateAllKeys();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

module.exports = { translateAllKeys };


