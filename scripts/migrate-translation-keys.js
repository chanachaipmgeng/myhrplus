/**
 * Translation Keys Migration Script
 * 
 * This script helps migrate translation keys from flat structure to nested structure
 * and removes duplicate keys.
 * 
 * Usage:
 * node scripts/migrate-translation-keys.js
 */

const fs = require('fs');
const path = require('path');

const TH_FILE = path.join(__dirname, '../src/assets/i18n/th.json');
const EN_FILE = path.join(__dirname, '../src/assets/i18n/en.json');

// Flat keys to migrate to common.actions
const FLAT_ACTION_KEYS = {
  'Save': 'common.actions.save',
  'Delete': 'common.actions.delete',
  'Edit': 'common.actions.edit',
  'Add': 'common.actions.add',
  'Cancel': 'common.actions.cancel',
  'Close': 'common.actions.close',
  'Search': 'common.actions.search',
  'Reset': 'common.actions.reset',
  'Export': 'common.actions.export',
  'Import': 'common.actions.import',
  'Download': 'common.actions.download',
  'Upload': 'common.actions.upload',
  'Select': 'common.actions.select',
  'Clear': 'common.actions.clear',
  'OK': 'common.actions.ok',
  'Yes': 'common.actions.yes',
  'No': 'common.actions.no',
  'Retry': 'common.actions.retry',
  'Complete': 'common.actions.complete',
  'Previous': 'common.actions.previous',
  'Next': 'common.actions.next',
  'Optional': 'common.actions.optional',
  'More Details': 'common.actions.moreDetails',
  'Transfer': 'common.actions.transfer'
};

// Flat keys to migrate to common.labels
const FLAT_LABEL_KEYS = {
  'Detail': 'common.labels.detail',
  'No.': 'common.labels.no',
  'Employee ID': 'common.labels.employeeId',
  'Name-Surname': 'common.labels.nameSurname',
  'Error Code': 'common.labels.errorCode',
  'Status': 'common.labels.status',
  'Actions': 'common.labels.actions'
};

/**
 * Convert flat JSON to nested structure
 */
function convertToNested(obj) {
  const nested = {};
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      nested[key] = convertToNested(value);
    } else {
      const parts = key.split('.');
      let current = nested;
      
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
      
      current[parts[parts.length - 1]] = value;
    }
  }
  
  return nested;
}

/**
 * Convert nested JSON to flat structure
 */
function convertToFlat(obj, prefix = '') {
  const flat = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(flat, convertToFlat(value, newKey));
    } else {
      flat[newKey] = value;
    }
  }
  
  return flat;
}

/**
 * Migrate flat keys to nested structure
 */
function migrateFlatKeys(data, flatKeyMap) {
  const migrated = { ...data };
  const toRemove = [];
  
  for (const [flatKey, nestedKey] of Object.entries(flatKeyMap)) {
    if (migrated[flatKey]) {
      // Check if nested key already exists
      if (!migrated[nestedKey]) {
        // Create nested structure if it doesn't exist
        const parts = nestedKey.split('.');
        let current = migrated;
        
        for (let i = 0; i < parts.length - 1; i++) {
          if (!current[parts[i]]) {
            current[parts[i]] = {};
          }
          current = current[parts[i]];
        }
        
        current[parts[parts.length - 1]] = migrated[flatKey];
      }
      
      // Mark for removal
      toRemove.push(flatKey);
    }
  }
  
  // Remove flat keys
  toRemove.forEach(key => {
    delete migrated[key];
  });
  
  return migrated;
}

/**
 * Find duplicate keys
 */
function findDuplicates(data) {
  const duplicates = [];
  const seen = new Map();
  
  for (const [key, value] of Object.entries(data)) {
    if (seen.has(value)) {
      duplicates.push({
        key,
        duplicateOf: seen.get(value),
        value
      });
    } else {
      seen.set(value, key);
    }
  }
  
  return duplicates;
}

/**
 * Main migration function
 */
function migrate() {
  console.log('🔄 Starting translation keys migration...\n');
  
  // Read files
  console.log('📖 Reading translation files...');
  const thContent = fs.readFileSync(TH_FILE, 'utf-8');
  const enContent = fs.readFileSync(EN_FILE, 'utf-8');
  
  const thData = JSON.parse(thContent);
  const enData = JSON.parse(enContent);
  
  console.log(`   th.json: ${Object.keys(thData).length} keys`);
  console.log(`   en.json: ${Object.keys(enData).length} keys\n`);
  
  // Find duplicates
  console.log('🔍 Finding duplicate keys...');
  const thDuplicates = findDuplicates(thData);
  const enDuplicates = findDuplicates(enData);
  
  console.log(`   th.json: ${thDuplicates.length} duplicate values found`);
  console.log(`   en.json: ${enDuplicates.length} duplicate values found\n`);
  
  // Migrate flat keys
  console.log('🔄 Migrating flat keys to nested structure...');
  const thMigrated = migrateFlatKeys(thData, { ...FLAT_ACTION_KEYS, ...FLAT_LABEL_KEYS });
  const enMigrated = migrateFlatKeys(enData, { ...FLAT_ACTION_KEYS, ...FLAT_LABEL_KEYS });
  
  console.log(`   th.json: Migrated ${Object.keys(thData).length - Object.keys(thMigrated).length} keys`);
  console.log(`   en.json: Migrated ${Object.keys(enData).length - Object.keys(enMigrated).length} keys\n`);
  
  // Convert to nested structure (optional - for review only)
  console.log('🔄 Converting to nested structure (for review)...');
  let thNested, enNested;
  try {
    thNested = convertToNested(thMigrated);
    enNested = convertToNested(enMigrated);
  } catch (error) {
    console.log('   ⚠️  Skipping nested conversion (some keys may conflict)');
    thNested = null;
    enNested = null;
  }
  
  // Write backup files
  console.log('💾 Creating backup files...');
  const backupDir = path.join(__dirname, '../backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(backupDir, `th.json.backup.${Date.now()}.json`),
    JSON.stringify(thData, null, 2),
    'utf-8'
  );
  fs.writeFileSync(
    path.join(backupDir, `en.json.backup.${Date.now()}.json`),
    JSON.stringify(enData, null, 2),
    'utf-8'
  );
  console.log('   ✅ Backup files created\n');
  
  // Write nested structure (for review)
  if (thNested && enNested) {
    console.log('💾 Writing nested structure (for review)...');
    fs.writeFileSync(
      path.join(backupDir, 'th.nested.json'),
      JSON.stringify(thNested, null, 2),
      'utf-8'
    );
    fs.writeFileSync(
      path.join(backupDir, 'en.nested.json'),
      JSON.stringify(enNested, null, 2),
      'utf-8'
    );
    console.log('   ✅ Nested files created\n');
  }
  
  // Write migrated flat structure (ready to use)
  console.log('💾 Writing migrated flat structure...');
  fs.writeFileSync(
    TH_FILE,
    JSON.stringify(thMigrated, null, 2),
    'utf-8'
  );
  fs.writeFileSync(
    EN_FILE,
    JSON.stringify(enMigrated, null, 2),
    'utf-8'
  );
  console.log('   ✅ Migration complete!\n');
  
  // Summary
  console.log('📊 Migration Summary:');
  console.log(`   Original keys (th.json): ${Object.keys(thData).length}`);
  console.log(`   Migrated keys (th.json): ${Object.keys(thMigrated).length}`);
  console.log(`   Keys removed: ${Object.keys(thData).length - Object.keys(thMigrated).length}`);
  console.log(`   Duplicate values found: ${thDuplicates.length}`);
  console.log('\n✅ Migration completed successfully!');
  console.log('⚠️  Please review the nested files in backup/ directory before proceeding.');
}

// Run migration
if (require.main === module) {
  try {
    migrate();
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

module.exports = { migrate, convertToNested, convertToFlat, findDuplicates };

