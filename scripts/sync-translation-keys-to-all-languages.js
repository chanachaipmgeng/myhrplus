const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const LANGUAGES = ['th', 'en', 'lo', 'my', 'vi', 'zh'];
const REFERENCE_LANG = 'th'; // Use Thai as reference

/**
 * Sync translation keys to all languages
 * 
 * 1. Migrate existing keys in lo, my, vi, zh to match th/en structure
 * 2. Add missing keys from reference language (th.json)
 * 3. Keep existing translations when available
 */

// Mapping rules (same as Phase 3)
const COMPANY_ENTITY_MAPPING = {
  'company.branchSocialSecurity': 'features.company.entities.branchSocialSecurity',
  'company.division': 'features.company.entities.division',
  'company.department': 'features.company.entities.department',
  'company.section': 'features.company.entities.section',
  'company.subsection': 'features.company.entities.subsection',
  'company.branch': 'features.company.entities.branch',
  'company.position': 'features.company.entities.position',
  'company.shift': 'features.company.entities.shift',
  'company.calendar': 'features.company.entities.calendar',
  'company.employee': 'features.company.entities.employee',
  'company.orgchart': 'features.company.entities.orgchart',
  'company.policy': 'features.company.entities.policy',
  'company.visionMission': 'features.company.entities.visionMission',
  'company.profile': 'features.company.entities.profile',
};

const MENU_MAPPING = {
  'menu.home': 'menu.main.home',
  'menu.company': 'menu.main.company',
  'menu.employee': 'menu.main.employee',
  'menu.hr-management': 'menu.main.hrManagement',
  'menu.appraisal': 'menu.main.appraisal',
  'menu.company-profile': 'menu.company.profile',
  'menu.vision-mission': 'menu.company.visionMission',
  'menu.orgchart': 'menu.company.orgchart',
  'menu.calendar-company': 'menu.company.calendar',
  'menu.employee-list': 'menu.company.employeeList',
  'menu.policy': 'menu.company.policy',
  'menu.employee-profile': 'menu.personal.profile',
  'menu.employee-work-information': 'menu.personal.workInformation',
  'menu.employee-timestamp': 'menu.personal.timestamp',
  'menu.employee-time-warning': 'menu.personal.timeWarning',
  'menu.employee-attendance': 'menu.personal.attendance',
  'menu.employee-payslip': 'menu.personal.payslip',
  'menu.employee-twi50': 'menu.personal.twi50',
  'menu.employee-pnd91': 'menu.personal.pnd91',
  'menu.employee-leaverole': 'menu.personal.leaveRole',
  'menu.employee-otstatistic': 'menu.personal.otStatistic',
  'menu.employee-leavestatistic': 'menu.personal.leaveStatistic',
  'menu.employee-edittimestatistic': 'menu.personal.editTimeStatistic',
  'menu.working-history-data': 'menu.personal.workingHistoryData',
  'menu.empview-welfare': 'menu.welfare.main',
  'menu.welfare-data': 'menu.welfare.data',
  'menu.welfare-check': 'menu.welfare.check',
  'menu.welfare-history': 'menu.welfare.history',
  'menu.welfare-history-year': 'menu.welfare.historyYear',
  'menu.empview-traning': 'menu.training.main',
  'menu.traning-plan': 'menu.training.plan',
  'menu.traning-history': 'menu.training.history',
  'menu.traning-recommend': 'menu.training.recommend',
  'menu.empview-emp-supervisor': 'menu.supervisor.main',
  'menu.sup-emp-list': 'menu.supervisor.empList',
  'menu.sup-emp-detail': 'menu.supervisor.empDetail',
  'menu.sup-timestamp': 'menu.supervisor.timestamp',
  'menu.working-time-detail-device': 'menu.supervisor.workingTimeDetailDevice',
  'menu.sup-time-warning': 'menu.supervisor.timeWarning',
  'menu.setup-shift-employees': 'menu.supervisor.setupShiftEmployees',
  'menu.daily-time-attendance': 'menu.supervisor.dailyTimeAttendance',
  'menu.working-time-detail-history': 'menu.supervisor.workingTimeDetailHistory',
  'menu.set-dayoff': 'menu.supervisor.setDayoff',
  'menu.sup-timeattendance': 'menu.supervisor.timeAttendance',
  'menu.subordinate-group': 'menu.supervisor.subordinateGroup',
  'menu.workingtime-pattern': 'menu.supervisor.workingTimePattern',
  'menu.import-mtime2': 'menu.supervisor.importMtime2',
  'menu.sup-leavestatistic': 'menu.supervisor.leaveStatistic',
  'menu.sup-leavestatistic2': 'menu.supervisor.leaveStatistic2',
  'menu.sup-training-history': 'menu.supervisor.trainingHistory',
  'menu.empview-workflow': 'menu.workflow.main',
  'menu.myhr-create-doc': 'menu.workflow.createDoc',
  'menu.myhr-in-box': 'menu.workflow.inBox',
  'menu.myhr-center-box': 'menu.workflow.centerBox',
  'menu.myhr-out-box': 'menu.workflow.outBox',
  'menu.myhr-delete-doc': 'menu.workflow.deleteDoc',
  'menu.myhr-move-doc': 'menu.workflow.moveDoc',
  'menu.myhr-manage-doc': 'menu.workflow.manageDoc',
  'menu.ability.evaluation.tkc': 'menu.appraisal.abilityEvaluation',
};

const AUTH_MAPPING = {
  'auth.unauthorized': 'features.auth.unauthorized',
  'auth.forgotPassword': 'features.auth.forgotPassword',
  'auth.login': 'features.auth.login',
};

/**
 * Migrate keys based on mapping rules
 */
function migrateKeys(data, mapping, prefix) {
  const migrated = [];
  const newData = JSON.parse(JSON.stringify(data));
  
  const keysToMigrate = Object.keys(data).filter(key => key.startsWith(prefix));
  
  for (const oldKey of keysToMigrate) {
    let newKey = null;
    
    for (const [oldPrefix, newPrefix] of Object.entries(mapping)) {
      if (oldKey.startsWith(oldPrefix + '.')) {
        const suffix = oldKey.substring(oldPrefix.length);
        newKey = newPrefix + suffix;
        break;
      } else if (oldKey === oldPrefix) {
        newKey = newPrefix;
        break;
      }
    }
    
    if (newKey && oldKey in newData) {
      const value = newData[oldKey];
      if (value !== undefined) {
        newData[newKey] = value;
        delete newData[oldKey];
        migrated.push({ old: oldKey, new: newKey });
      }
    }
  }
  
  return { data: newData, migrated };
}

/**
 * Get all keys from reference file
 */
function getAllKeys(referenceData) {
  return Object.keys(referenceData);
}

/**
 * Add missing keys from reference, keeping existing translations
 */
function syncKeys(targetData, referenceData, lang) {
  const added = [];
  const referenceKeys = getAllKeys(referenceData);
  
  for (const key of referenceKeys) {
    if (!(key in targetData)) {
      // Key missing - add from reference (will need translation later)
      targetData[key] = referenceData[key];
      added.push(key);
    }
  }
  
  return { data: targetData, added };
}

/**
 * Process a single language file
 */
function processLanguageFile(lang) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`   ⚠️  File not found: ${filePath}`);
    return null;
  }
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let totalMigrated = 0;
  let totalAdded = 0;
  const changes = [];
  
  // 1. Migrate Company keys
  const companyResult = migrateKeys(data, COMPANY_ENTITY_MAPPING, 'company.');
  data = companyResult.data;
  totalMigrated += companyResult.migrated.length;
  if (companyResult.migrated.length > 0) {
    changes.push(`Migrated ${companyResult.migrated.length} company keys`);
  }
  
  // 2. Migrate Menu keys
  const menuResult = migrateKeys(data, MENU_MAPPING, 'menu.');
  data = menuResult.data;
  totalMigrated += menuResult.migrated.length;
  if (menuResult.migrated.length > 0) {
    changes.push(`Migrated ${menuResult.migrated.length} menu keys`);
  }
  
  // 3. Migrate Auth keys
  const authResult = migrateKeys(data, AUTH_MAPPING, 'auth.');
  data = authResult.data;
  totalMigrated += authResult.migrated.length;
  if (authResult.migrated.length > 0) {
    changes.push(`Migrated ${authResult.migrated.length} auth keys`);
  }
  
  // 4. Sync missing keys from reference
  const referenceData = JSON.parse(fs.readFileSync(path.join(I18N_DIR, `${REFERENCE_LANG}.json`), 'utf8'));
  const syncResult = syncKeys(data, referenceData, lang);
  data = syncResult.data;
  totalAdded = syncResult.added.length;
  if (syncResult.added.length > 0) {
    changes.push(`Added ${syncResult.added.length} missing keys from ${REFERENCE_LANG}.json`);
  }
  
  // Write updated file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  
  return {
    lang,
    migrated: totalMigrated,
    added: totalAdded,
    changes
  };
}

/**
 * Main function
 */
function syncAllLanguages() {
  console.log('🚀 Syncing translation keys to all languages\n');
  console.log(`📖 Reference language: ${REFERENCE_LANG}\n`);
  
  const results = [];
  
  for (const lang of LANGUAGES) {
    if (lang === REFERENCE_LANG) {
      console.log(`⏭️  Skipping ${lang} (reference language)\n`);
      continue;
    }
    
    console.log(`📝 Processing ${lang}...`);
    try {
      const result = processLanguageFile(lang);
      if (result) {
        results.push(result);
        console.log(`   ✅ Migrated: ${result.migrated} keys`);
        console.log(`   ✅ Added: ${result.added} missing keys`);
        if (result.changes.length > 0) {
          result.changes.forEach(change => console.log(`   - ${change}`));
        }
      }
    } catch (error) {
      console.error(`   ❌ Error: ${error.message}`);
    }
    console.log('');
  }
  
  console.log('📊 Summary:');
  results.forEach(result => {
    console.log(`   ${result.lang}: ${result.migrated} migrated, ${result.added} added`);
  });
  
  // Save log
  const logFile = path.join(__dirname, '../SYNC_LANGUAGES_LOG.json');
  fs.writeFileSync(logFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    reference: REFERENCE_LANG,
    results
  }, null, 2), 'utf8');
  
  console.log(`\n✅ Sync complete! Log saved to: ${logFile}`);
  console.log('\n⚠️  Note: Added keys use reference language. Please translate them.');
}

// Run
try {
  syncAllLanguages();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}

