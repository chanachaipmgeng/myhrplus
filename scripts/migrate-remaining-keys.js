/**
 * Migrate Remaining Keys Script
 * 
 * This script migrates remaining flat keys and common.* keys to nested structure.
 * 
 * Usage:
 * node scripts/migrate-remaining-keys.js
 */

const fs = require('fs');
const path = require('path');

const TH_FILE = path.join(__dirname, '../src/assets/i18n/th.json');
const EN_FILE = path.join(__dirname, '../src/assets/i18n/en.json');

// Flat keys to migrate
const FLAT_KEYS_MAPPING = {
  'All': 'common.labels.all',
  'Home': 'common.labels.home'
};

// Common.* keys to nest
const COMMON_KEYS_TO_NEST = {
  'common.active': 'common.status.active',
  'common.inactive': 'common.status.inactive',
  'common.noData': 'common.labels.noData',
  'common.noDataDescription': 'common.labels.noDataDescription',
  'common.clearAll': 'common.actions.clearAll'
};

/**
 * Migrate keys
 */
function migrateKeys(data, mapping) {
  const migrated = { ...data };
  const count = { added: 0, removed: 0 };
  
  for (const [oldKey, newKey] of Object.entries(mapping)) {
    if (migrated[oldKey] && !migrated[newKey]) {
      migrated[newKey] = migrated[oldKey];
      delete migrated[oldKey];
      count.added++;
      count.removed++;
    } else if (migrated[oldKey] && migrated[newKey]) {
      // Both exist - remove old one
      delete migrated[oldKey];
      count.removed++;
    }
  }
  
  return { data: migrated, count };
}

/**
 * Main migration function
 */
function migrate() {
  console.log('🔄 Migrating remaining keys...\n');
  
  // Read files
  const thContent = fs.readFileSync(TH_FILE, 'utf-8');
  const enContent = fs.readFileSync(EN_FILE, 'utf-8');
  
  const thData = JSON.parse(thContent);
  const enData = JSON.parse(enContent);
  
  console.log(`📖 th.json: ${Object.keys(thData).length} keys`);
  console.log(`📖 en.json: ${Object.keys(enData).length} keys\n`);
  
  // Migrate flat keys
  console.log('🔄 Migrating flat keys...');
  const thFlatResult = migrateKeys(thData, FLAT_KEYS_MAPPING);
  const enFlatResult = migrateKeys(enData, FLAT_KEYS_MAPPING);
  
  console.log(`   th.json: ${thFlatResult.count.added} added, ${thFlatResult.count.removed} removed`);
  console.log(`   en.json: ${enFlatResult.count.added} added, ${enFlatResult.count.removed} removed\n`);
  
  // Migrate common.* keys
  console.log('🔄 Migrating common.* keys to nested...');
  const thCommonResult = migrateKeys(thFlatResult.data, COMMON_KEYS_TO_NEST);
  const enCommonResult = migrateKeys(enFlatResult.data, COMMON_KEYS_TO_NEST);
  
  console.log(`   th.json: ${thCommonResult.count.added} added, ${thCommonResult.count.removed} removed`);
  console.log(`   en.json: ${enCommonResult.count.added} added, ${enCommonResult.count.removed} removed\n`);
  
  // Create backup
  const backupDir = path.join(__dirname, '../backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  const timestamp = Date.now();
  fs.writeFileSync(
    path.join(backupDir, `th.json.backup.${timestamp}.json`),
    JSON.stringify(thData, null, 2),
    'utf-8'
  );
  fs.writeFileSync(
    path.join(backupDir, `en.json.backup.${timestamp}.json`),
    JSON.stringify(enData, null, 2),
    'utf-8'
  );
  console.log('💾 Backup created\n');
  
  // Write files
  fs.writeFileSync(TH_FILE, JSON.stringify(thCommonResult.data, null, 2), 'utf-8');
  fs.writeFileSync(EN_FILE, JSON.stringify(enCommonResult.data, null, 2), 'utf-8');
  console.log('✅ Migration complete!\n');
  
  console.log('📊 Summary:');
  console.log(`   th.json: ${Object.keys(thCommonResult.data).length} keys`);
  console.log(`   en.json: ${Object.keys(enCommonResult.data).length} keys`);
}

if (require.main === module) {
  try {
    migrate();
  } catch (error) {
    console.error('❌ Failed:', error);
    process.exit(1);
  }
}

module.exports = { migrate, migrateKeys };

