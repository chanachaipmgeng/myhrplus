const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const TH_FILE = path.join(I18N_DIR, 'th.json');
const EN_FILE = path.join(I18N_DIR, 'en.json');

/**
 * Phase 3: Migrate Feature Keys
 * 
 * 1. Company keys: company.* → features.company.entities.*
 * 2. Menu keys: menu.* → menu.main.*, menu.company.*, menu.personal.*, etc.
 * 3. Auth keys: auth.* → features.auth.*
 */

// Mapping rules for company keys
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

// Mapping rules for menu keys
const MENU_MAPPING = {
  // Main menu
  'menu.home': 'menu.main.home',
  'menu.company': 'menu.main.company',
  'menu.employee': 'menu.main.employee',
  'menu.hr-management': 'menu.main.hrManagement',
  'menu.appraisal': 'menu.main.appraisal',
  
  // Company submenu
  'menu.company-profile': 'menu.company.profile',
  'menu.vision-mission': 'menu.company.visionMission',
  'menu.orgchart': 'menu.company.orgchart',
  'menu.calendar-company': 'menu.company.calendar',
  'menu.employee-list': 'menu.company.employeeList',
  'menu.policy': 'menu.company.policy',
  
  // Personal/Employee submenu
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
  
  // Welfare submenu
  'menu.empview-welfare': 'menu.welfare.main',
  'menu.welfare-data': 'menu.welfare.data',
  'menu.welfare-check': 'menu.welfare.check',
  'menu.welfare-history': 'menu.welfare.history',
  'menu.welfare-history-year': 'menu.welfare.historyYear',
  
  // Training submenu
  'menu.empview-traning': 'menu.training.main',
  'menu.traning-plan': 'menu.training.plan',
  'menu.traning-history': 'menu.training.history',
  'menu.traning-recommend': 'menu.training.recommend',
  
  // Supervisor submenu
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
  
  // Workflow submenu
  'menu.empview-workflow': 'menu.workflow.main',
  'menu.myhr-create-doc': 'menu.workflow.createDoc',
  'menu.myhr-in-box': 'menu.workflow.inBox',
  'menu.myhr-center-box': 'menu.workflow.centerBox',
  'menu.myhr-out-box': 'menu.workflow.outBox',
  'menu.myhr-delete-doc': 'menu.workflow.deleteDoc',
  'menu.myhr-move-doc': 'menu.workflow.moveDoc',
  'menu.myhr-manage-doc': 'menu.workflow.manageDoc',
  
  // Appraisal submenu
  'menu.ability.evaluation.tkc': 'menu.appraisal.abilityEvaluation',
};

// Mapping rules for auth keys
const AUTH_MAPPING = {
  'auth.unauthorized': 'features.auth.unauthorized',
  'auth.forgotPassword': 'features.auth.forgotPassword',
  'auth.login': 'features.auth.login',
};

/**
 * Convert flat key to nested object
 */
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key]) {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
}

/**
 * Get nested value from object
 */
function getNestedValue(obj, path) {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  
  return current;
}

/**
 * Delete nested key from object
 */
function deleteNestedValue(obj, path) {
  const keys = path.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return false;
    }
  }
  
  const lastKey = keys[keys.length - 1];
  if (current && typeof current === 'object' && lastKey in current) {
    delete current[lastKey];
    return true;
  }
  
  return false;
}

/**
 * Convert flat keys to nested object structure
 */
function convertToNested(flatData) {
  const nested = {};
  
  for (const [key, value] of Object.entries(flatData)) {
    const keys = key.split('.');
    let current = nested;
    
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!current[k]) {
        current[k] = {};
      }
      current = current[k];
    }
    
    current[keys[keys.length - 1]] = value;
  }
  
  return nested;
}

/**
 * Migrate keys based on mapping rules
 * Note: JSON file uses flat keys (e.g., "company.division.title")
 */
function migrateKeys(data, mapping, prefix) {
  const migrated = [];
  const newData = JSON.parse(JSON.stringify(data)); // Deep clone
  
  // Find all keys that match the prefix
  const keysToMigrate = Object.keys(data).filter(key => key.startsWith(prefix));
  
  for (const oldKey of keysToMigrate) {
    // Find matching mapping rule
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
        // Set new key (will be converted to nested structure later)
        newData[newKey] = value;
        // Delete old key
        delete newData[oldKey];
        migrated.push({ old: oldKey, new: newKey });
      }
    }
  }
  
  return { data: newData, migrated };
}

/**
 * Main migration function
 */
function migrateFeatureKeys() {
  console.log('🚀 Starting Phase 3: Feature Keys Migration\n');
  
  // Read JSON files
  let thData = JSON.parse(fs.readFileSync(TH_FILE, 'utf8'));
  let enData = JSON.parse(fs.readFileSync(EN_FILE, 'utf8'));
  
  let thMigrated = [];
  let enMigrated = [];
  
  // 1. Migrate Company keys
  console.log('📦 Migrating Company keys...');
  const companyTh = migrateKeys(thData, COMPANY_ENTITY_MAPPING, 'company.');
  const companyEn = migrateKeys(enData, COMPANY_ENTITY_MAPPING, 'company.');
  thData = companyTh.data;
  enData = companyEn.data;
  thMigrated = thMigrated.concat(companyTh.migrated);
  enMigrated = enMigrated.concat(companyEn.migrated);
  console.log(`   ✅ Migrated ${companyTh.migrated.length} company keys (TH)`);
  console.log(`   ✅ Migrated ${companyEn.migrated.length} company keys (EN)\n`);
  
  // 2. Migrate Menu keys
  console.log('📋 Migrating Menu keys...');
  const menuTh = migrateKeys(thData, MENU_MAPPING, 'menu.');
  const menuEn = migrateKeys(enData, MENU_MAPPING, 'menu.');
  thData = menuTh.data;
  enData = menuEn.data;
  thMigrated = thMigrated.concat(menuTh.migrated);
  enMigrated = enMigrated.concat(menuEn.migrated);
  console.log(`   ✅ Migrated ${menuTh.migrated.length} menu keys (TH)`);
  console.log(`   ✅ Migrated ${menuEn.migrated.length} menu keys (EN)\n`);
  
  // 3. Migrate Auth keys
  console.log('🔐 Migrating Auth keys...');
  const authTh = migrateKeys(thData, AUTH_MAPPING, 'auth.');
  const authEn = migrateKeys(enData, AUTH_MAPPING, 'auth.');
  thData = authTh.data;
  enData = authEn.data;
  thMigrated = thMigrated.concat(authTh.migrated);
  enMigrated = enMigrated.concat(authEn.migrated);
  console.log(`   ✅ Migrated ${authTh.migrated.length} auth keys (TH)`);
  console.log(`   ✅ Migrated ${authEn.migrated.length} auth keys (EN)\n`);
  
  // Write updated files
  console.log('💾 Writing updated files...');
  fs.writeFileSync(TH_FILE, JSON.stringify(thData, null, 2), 'utf8');
  fs.writeFileSync(EN_FILE, JSON.stringify(enData, null, 2), 'utf8');
  console.log('   ✅ Files updated\n');
  
  // Generate summary
  console.log('📊 Migration Summary:');
  console.log(`   Total migrated (TH): ${thMigrated.length} keys`);
  console.log(`   Total migrated (EN): ${enMigrated.length} keys`);
  
  // Save migration log
  const logFile = path.join(__dirname, '../PHASE_3_MIGRATION_LOG.json');
  fs.writeFileSync(logFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    th: {
      total: thMigrated.length,
      company: companyTh.migrated.length,
      menu: menuTh.migrated.length,
      auth: authTh.migrated.length,
      migrated: thMigrated
    },
    en: {
      total: enMigrated.length,
      company: companyEn.migrated.length,
      menu: menuEn.migrated.length,
      auth: authEn.migrated.length,
      migrated: enMigrated
    }
  }, null, 2), 'utf8');
  
  console.log(`\n✅ Migration complete! Log saved to: ${logFile}`);
}

// Run migration
try {
  migrateFeatureKeys();
} catch (error) {
  console.error('❌ Error during migration:', error);
  process.exit(1);
}

