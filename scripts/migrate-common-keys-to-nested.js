/**
 * Migrate Common Keys to Nested Structure Script
 * 
 * This script migrates existing common.* keys from flat structure to nested structure.
 * Example: common.save → common.actions.save
 * 
 * Usage:
 * node scripts/migrate-common-keys-to-nested.js
 */

const fs = require('fs');
const path = require('path');

const TH_FILE = path.join(__dirname, '../src/assets/i18n/th.json');
const EN_FILE = path.join(__dirname, '../src/assets/i18n/en.json');

// Mapping from flat common.* keys to nested structure
const COMMON_KEYS_MAPPING = {
  // Actions
  'common.addNew': 'common.actions.addNew',
  'common.save': 'common.actions.save',
  'common.delete': 'common.actions.delete',
  'common.edit': 'common.actions.edit',
  'common.cancel': 'common.actions.cancel',
  'common.close': 'common.actions.close',
  'common.confirm': 'common.actions.confirm',
  'common.search': 'common.actions.search',
  'common.reset': 'common.actions.reset',
  'common.export': 'common.actions.export',
  'common.import': 'common.actions.import',
  'common.download': 'common.actions.download',
  'common.upload': 'common.actions.upload',
  'common.select': 'common.actions.select',
  'common.selectAll': 'common.actions.selectAll',
  'common.clear': 'common.actions.clear',
  'common.ok': 'common.actions.ok',
  'common.yes': 'common.actions.yes',
  'common.no': 'common.actions.no',
  'common.retry': 'common.actions.retry',
  'common.complete': 'common.actions.complete',
  'common.previous': 'common.actions.previous',
  'common.next': 'common.actions.next',
  'common.optional': 'common.actions.optional',
  'common.moreDetails': 'common.actions.moreDetails',
  
  // Labels
  'common.status': 'common.labels.status',
  'common.errorCode': 'common.labels.errorCode',
  'common.home': 'common.labels.home',
  'common.all': 'common.labels.all',
  
  // Status (keep as is, but ensure nested structure)
  // common.status.* keys are already nested, no migration needed
};

/**
 * Migrate common keys to nested structure
 */
function migrateCommonKeys(data) {
  const migrated = { ...data };
  const migratedCount = { added: 0, removed: 0 };
  
  for (const [oldKey, newKey] of Object.entries(COMMON_KEYS_MAPPING)) {
    if (migrated[oldKey] && !migrated[newKey]) {
      // Add new nested key
      migrated[newKey] = migrated[oldKey];
      migratedCount.added++;
      
      // Remove old flat key (only if new key doesn't exist)
      delete migrated[oldKey];
      migratedCount.removed++;
    } else if (migrated[oldKey] && migrated[newKey]) {
      // Both exist - remove old one (new one takes precedence)
      delete migrated[oldKey];
      migratedCount.removed++;
    }
  }
  
  return { data: migrated, count: migratedCount };
}

/**
 * Main migration function
 */
function migrate() {
  console.log('🔄 Migrating common keys to nested structure...\n');
  
  // Read files
  console.log('📖 Reading translation files...');
  const thContent = fs.readFileSync(TH_FILE, 'utf-8');
  const enContent = fs.readFileSync(EN_FILE, 'utf-8');
  
  const thData = JSON.parse(thContent);
  const enData = JSON.parse(enContent);
  
  console.log(`   th.json: ${Object.keys(thData).length} keys`);
  console.log(`   en.json: ${Object.keys(enData).length} keys\n`);
  
  // Migrate common keys
  console.log('🔄 Migrating common keys...');
  const thResult = migrateCommonKeys(thData);
  const enResult = migrateCommonKeys(enData);
  
  console.log(`   th.json: Added ${thResult.count.added} nested keys, Removed ${thResult.count.removed} flat keys`);
  console.log(`   en.json: Added ${enResult.count.added} nested keys, Removed ${enResult.count.removed} flat keys\n`);
  
  // Create backup
  console.log('💾 Creating backup...');
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
  console.log('   ✅ Backup created\n');
  
  // Write migrated files
  console.log('💾 Writing migrated files...');
  fs.writeFileSync(TH_FILE, JSON.stringify(thResult.data, null, 2), 'utf-8');
  fs.writeFileSync(EN_FILE, JSON.stringify(enResult.data, null, 2), 'utf-8');
  console.log('   ✅ Migration complete!\n');
  
  // Summary
  console.log('📊 Migration Summary:');
  console.log(`   th.json: ${Object.keys(thResult.data).length} keys (${thResult.count.added} added, ${thResult.count.removed} removed)`);
  console.log(`   en.json: ${Object.keys(enResult.data).length} keys (${enResult.count.added} added, ${enResult.count.removed} removed)`);
  console.log('\n✅ Migration completed successfully!');
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

module.exports = { migrate, migrateCommonKeys };

