/**
 * Translate remaining untranslated keys in my.json to Myanmar
 */

const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const MY_FILE = path.join(I18N_DIR, 'my.json');
const TH_FILE = path.join(I18N_DIR, 'th.json');
const EN_FILE = path.join(I18N_DIR, 'en.json');

/**
 * Check if value contains Thai characters
 */
function containsThai(value) {
  if (typeof value !== 'string') return false;
  return /[\u0E00-\u0E7F]/.test(value);
}

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

/**
 * Set nested value in object using dot notation
 */
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const target = keys.reduce((current, key) => {
    if (!current[key]) current[key] = {};
    return current[key];
  }, obj);
  target[lastKey] = value;
}

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
 * Flatten object to dot notation
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
 * Translate keys to Myanmar
 */
function translateMyanmarKeys() {
  console.log('🔍 Loading translation files...\n');
  
  const myData = loadJSON(MY_FILE);
  const thData = loadJSON(TH_FILE);
  const enData = loadJSON(EN_FILE);
  
  const myFlat = flattenObject(myData);
  const thFlat = flattenObject(thData);
  const enFlat = flattenObject(enData);
  
  console.log('📝 Finding keys with Thai text...\n');
  
  let updated = 0;
  const translations = {};
  
  // Manual translations for common keys
  const manualTranslations = {
    'save': 'သိမ်းဆည်းပါ',
    'delete': 'ဖျက်ပါ',
    'edit': 'ပြင်ဆင်ပါ',
    'add': 'ထည့်သွင်းပါ',
    'close': 'ပိတ်ပါ',
    'search': 'ရှာဖွေပါ',
    'export': 'တင်ပို့ပါ',
    'import': 'တင်သွင်းပါ',
    'clear': 'ရှင်းလင်းပါ',
    'ok': 'အိုကေ',
    'yes': 'ဟုတ်ကဲ့',
    'no': 'မဟုတ်ပါ',
    'next': 'နောက်တစ်ခု',
    'transfer': 'လွှဲပြောင်းပါ',
    'detail': 'အသေးစိတ်',
    'employeeId': 'ဝန်ထမ်းကုဒ်',
    'nameSurname': 'အမည်-နာမည်',
    'status': 'အခြေအနေ'
  };
  
  // Find and translate keys with Thai text
  for (const key in myFlat) {
    const value = myFlat[key];
    
    if (containsThai(value)) {
      // Check if there's a manual translation
      if (manualTranslations[value]) {
        translations[key] = manualTranslations[value];
        console.log(`✅ ${key}: "${value}" → "${manualTranslations[value]}"`);
        updated++;
      } else {
        // Try to get English translation first
        const enValue = enFlat[key];
        if (enValue && !containsThai(enValue)) {
          // Use English as reference, but keep Myanmar if available
          console.log(`⚠️  ${key}: "${value}" (Thai) - English: "${enValue}" - Needs manual translation`);
        } else {
          console.log(`⚠️  ${key}: "${value}" (Thai) - Needs manual translation`);
        }
      }
    }
  }
  
  // Apply translations
  for (const [key, value] of Object.entries(translations)) {
    setNestedValue(myData, key, value);
  }
  
  console.log(`\n📊 Updated ${updated} keys\n`);
  
  // Save file
  if (updated > 0) {
    console.log('💾 Saving my.json...\n');
    saveJSON(MY_FILE, myData);
    console.log('✅ Translation complete!\n');
  } else {
    console.log('ℹ️  No keys to translate (all empty strings are system codes)\n');
  }
  
  return updated;
}

// Run translation
if (require.main === module) {
  try {
    translateMyanmarKeys();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

module.exports = { translateMyanmarKeys };

