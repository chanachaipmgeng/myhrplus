/**
 * Add Missing Translation Keys to th.json
 * เพิ่ม missing translation keys ที่พบใน components แต่ไม่มีใน th.json
 */

const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const TH_FILE = path.join(I18N_DIR, 'th.json');

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
 * Get nested value from object using dot notation
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
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
 * Add missing translation keys
 */
function addMissingTranslationKeys() {
  console.log('🔍 Loading th.json...\n');
  
  const thData = loadJSON(TH_FILE);
  
  // Missing keys to add (mapped to correct keys or new translations)
  const missingKeys = {
    // These should use existing keys (aliases)
    'common.actions.add_new': 'common.actions.addNew', // Alias
    'common.image_upload.supported_formats': 'common.imageUpload.supportedFormats', // Alias
    'common.image_upload.max_size': 'common.imageUpload.maxSize', // Alias
    'common.labels.no_data': 'common.labels.noData', // Alias
    'common.labels.error_code': 'common.labels.errorCode', // Alias
    'common.actions.more_details': 'common.actions.moreDetails', // Alias
    
    // New keys to add
    'common.home': 'หน้าแรก',
    'common.confirm': 'ยืนยัน',
    'common.retry': 'ลองอีกครั้ง',
    'common.all': 'ทั้งหมด',
    'common.clearAll': 'ล้างทั้งหมด',
    'common.noDataDescription': 'ไม่พบข้อมูล',
    'features.auth.forgotPassword.success': 'สำเร็จ',
    'features.auth.forgotPassword.error.title': 'เกิดข้อผิดพลาด',
    'features.auth.login.error.title': 'เกิดข้อผิดพลาด',
    'Export': 'ส่งออก', // Should use common.actions.export, but adding for compatibility
    'module.title': 'โมดูล'
  };
  
  // Auth keys that should use features.auth.forgotPassword prefix
  const authKeys = {
    'auth.forgotPassword.error.emailInvalid': 'features.auth.forgotPassword.error.emailInvalid',
    'auth.forgotPassword.error.emailRequired': 'features.auth.forgotPassword.error.emailRequired',
    'auth.forgotPassword.successMessage': 'features.auth.forgotPassword.successMessage',
    'auth.forgotPassword.error.sendFailed': 'features.auth.forgotPassword.error.sendFailed',
    'auth.forgotPassword.error.invalidCredentials': 'features.auth.forgotPassword.error.invalidCredentials',
    'auth.forgotPassword.error.incompleteData': 'features.auth.forgotPassword.error.incompleteData'
  };
  
  console.log('📝 Adding missing translation keys...\n');
  
  let added = 0;
  let aliased = 0;
  
  // Add new keys
  for (const [key, value] of Object.entries(missingKeys)) {
    const existingValue = getNestedValue(thData, key);
    
    if (!existingValue) {
      // Check if it's an alias
      if (typeof value === 'string' && value.startsWith('common.') || value.startsWith('features.')) {
        // It's an alias - get the actual value
        const actualValue = getNestedValue(thData, value);
        if (actualValue) {
          setNestedValue(thData, key, actualValue);
          aliased++;
          console.log(`✅ Added alias: ${key} → ${value} (${actualValue})`);
        } else {
          console.warn(`⚠️  Alias target not found: ${value}`);
        }
      } else {
        // It's a new translation
        setNestedValue(thData, key, value);
        added++;
        console.log(`✅ Added: ${key} = "${value}"`);
      }
    } else {
      console.log(`⏭️  Already exists: ${key}`);
    }
  }
  
  // Check auth keys (they should already exist with features.auth.forgotPassword prefix)
  console.log('\n📝 Checking auth keys...\n');
  for (const [oldKey, newKey] of Object.entries(authKeys)) {
    const existingValue = getNestedValue(thData, newKey);
    if (existingValue) {
      // Add alias
      setNestedValue(thData, oldKey, existingValue);
      aliased++;
      console.log(`✅ Added alias: ${oldKey} → ${newKey} (${existingValue})`);
    } else {
      console.warn(`⚠️  Key not found: ${newKey}`);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  - New keys added: ${added}`);
  console.log(`  - Aliases added: ${aliased}`);
  console.log(`  - Total: ${added + aliased}\n`);
  
  // Save file
  console.log('💾 Saving th.json...\n');
  saveJSON(TH_FILE, thData);
  
  console.log('✅ Done!\n');
  
  return { added, aliased };
}

// Run
if (require.main === module) {
  try {
    addMissingTranslationKeys();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

module.exports = { addMissingTranslationKeys };

