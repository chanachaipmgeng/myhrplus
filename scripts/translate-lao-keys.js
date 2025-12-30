/**
 * Translate remaining untranslated keys in lo.json to Lao
 */

const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const LO_FILE = path.join(I18N_DIR, 'lo.json');
const TH_FILE = path.join(I18N_DIR, 'th.json');
const EN_FILE = path.join(I18N_DIR, 'en.json');

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
 * Translate keys to Lao
 */
function translateLaoKeys() {
  console.log('🔍 Loading translation files...\n');
  
  const loData = loadJSON(LO_FILE);
  const thData = loadJSON(TH_FILE);
  const enData = loadJSON(EN_FILE);
  
  // Translations for specific keys
  const translations = {
    'systemcode.coursekind.null': '', // Empty string is fine for null values
    'changemoney.format.undefined': '', // Empty string is fine
    'changemoney.format.0': '', // Empty string is fine (0 means default/normal)
    'systemcode.child.amount.tax': getNestedValue(thData, 'systemcode.child.amount.tax') || '',
    'systemcode.child.bdate.before.2561': getNestedValue(thData, 'systemcode.child.bdate.before.2561') || '',
    'systemcode.parents.extends.child': getNestedValue(thData, 'systemcode.parents.extends.child') || '',
    'systemcode.life.insurance.premium2': getNestedValue(thData, 'systemcode.life.insurance.premium2') || '',
    'ot_type': '', // Empty string is fine (this is a key, not a value)
    'FIX_TIME': '', // Empty string is fine (this is a key, not a value)
    'LEAVE_FORMAT': '', // Empty string is fine (this is a key, not a value)
    'menu.company.orgchart': 'ໂຄງສ້າງອົງກອນ', // Organization structure
    'common.languages.thai': 'ພາສາໄທ' // Thai language
  };
  
  console.log('📝 Translating keys...\n');
  
  let updated = 0;
  
  // Apply translations
  for (const [key, value] of Object.entries(translations)) {
    const currentValue = getNestedValue(loData, key);
    
    // Only update if value is empty or contains Thai text
    if (currentValue === '' || currentValue === undefined || /[\u0E00-\u0E7F]/.test(currentValue)) {
      setNestedValue(loData, key, value);
      updated++;
      console.log(`✅ ${key}: "${currentValue}" → "${value}"`);
    } else {
      console.log(`⏭️  ${key}: Already translated (${currentValue})`);
    }
  }
  
  // Special handling for menu.company.orgchart - remove Thai text
  const orgchartValue = getNestedValue(loData, 'menu.company.orgchart');
  if (orgchartValue && /[\u0E00-\u0E7F]/.test(orgchartValue)) {
    setNestedValue(loData, 'menu.company.orgchart', 'ໂຄງສ້າງອົງກອນ');
    updated++;
    console.log(`✅ menu.company.orgchart: Removed Thai text → "ໂຄງສ້າງອົງກອນ"`);
  }
  
  // Special handling for common.languages.thai - translate from Thai
  const thaiLangValue = getNestedValue(loData, 'common.languages.thai');
  if (thaiLangValue === 'ไทย' || /[\u0E00-\u0E7F]/.test(thaiLangValue)) {
    setNestedValue(loData, 'common.languages.thai', 'ພາສາໄທ');
    updated++;
    console.log(`✅ common.languages.thai: "${thaiLangValue}" → "ພາສາໄທ"`);
  }
  
  console.log(`\n📊 Updated ${updated} keys\n`);
  
  // Save file
  console.log('💾 Saving lo.json...\n');
  saveJSON(LO_FILE, loData);
  
  console.log('✅ Translation complete!\n');
  
  return updated;
}

// Run translation
if (require.main === module) {
  try {
    translateLaoKeys();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

module.exports = { translateLaoKeys };

