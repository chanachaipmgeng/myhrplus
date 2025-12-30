const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src/app');

/**
 * Phase 5 (Part 2): Migrate HTML Templates to use TRANSLATION_KEYS constants
 * 
 * Migrations:
 * 1. 'common.*' → TRANSLATION_KEYS.COMMON.*
 * 2. 'company.*' → 'features.company.entities.*' (for entity keys)
 * 3. 'auth.*' → 'features.auth.*'
 * 4. 'menu.*' → 'menu.*' (already migrated in Phase 3)
 */

// Mapping rules for common keys in templates
const COMMON_KEY_MAPPINGS = {
  // Actions
  "'common.addNew'": "TRANSLATION_KEYS.COMMON.ACTIONS.ADD_NEW",
  '"common.addNew"': 'TRANSLATION_KEYS.COMMON.ACTIONS.ADD_NEW',
  "'common.save'": "TRANSLATION_KEYS.COMMON.ACTIONS.SAVE",
  '"common.save"': 'TRANSLATION_KEYS.COMMON.ACTIONS.SAVE',
  "'common.delete'": "TRANSLATION_KEYS.COMMON.ACTIONS.DELETE",
  '"common.delete"': 'TRANSLATION_KEYS.COMMON.ACTIONS.DELETE',
  "'common.edit'": "TRANSLATION_KEYS.COMMON.ACTIONS.EDIT",
  '"common.edit"': 'TRANSLATION_KEYS.COMMON.ACTIONS.EDIT',
  "'common.cancel'": "TRANSLATION_KEYS.COMMON.ACTIONS.CANCEL",
  '"common.cancel"': 'TRANSLATION_KEYS.COMMON.ACTIONS.CANCEL',
  "'common.close'": "TRANSLATION_KEYS.COMMON.ACTIONS.CLOSE",
  '"common.close"': 'TRANSLATION_KEYS.COMMON.ACTIONS.CLOSE',
  "'common.search'": "TRANSLATION_KEYS.COMMON.ACTIONS.SEARCH",
  '"common.search"': 'TRANSLATION_KEYS.COMMON.ACTIONS.SEARCH',
  "'common.reset'": "TRANSLATION_KEYS.COMMON.ACTIONS.RESET",
  '"common.reset"': 'TRANSLATION_KEYS.COMMON.ACTIONS.RESET',
  "'common.select'": "TRANSLATION_KEYS.COMMON.ACTIONS.SELECT",
  '"common.select"': 'TRANSLATION_KEYS.COMMON.ACTIONS.SELECT',
  "'common.previous'": "TRANSLATION_KEYS.COMMON.ACTIONS.PREVIOUS",
  '"common.previous"': 'TRANSLATION_KEYS.COMMON.ACTIONS.PREVIOUS',
  "'common.next'": "TRANSLATION_KEYS.COMMON.ACTIONS.NEXT",
  '"common.next"': 'TRANSLATION_KEYS.COMMON.ACTIONS.NEXT',
  "'common.complete'": "TRANSLATION_KEYS.COMMON.ACTIONS.COMPLETE",
  '"common.complete"': 'TRANSLATION_KEYS.COMMON.ACTIONS.COMPLETE',
  "'common.optional'": "TRANSLATION_KEYS.COMMON.ACTIONS.OPTIONAL",
  '"common.optional"': 'TRANSLATION_KEYS.COMMON.ACTIONS.OPTIONAL',
  "'common.yes'": "TRANSLATION_KEYS.COMMON.ACTIONS.YES",
  '"common.yes"': 'TRANSLATION_KEYS.COMMON.ACTIONS.YES',
  "'common.no'": "TRANSLATION_KEYS.COMMON.ACTIONS.NO",
  '"common.no"': 'TRANSLATION_KEYS.COMMON.ACTIONS.NO',
  "'common.moreDetails'": "TRANSLATION_KEYS.COMMON.ACTIONS.MORE_DETAILS",
  '"common.moreDetails"': 'TRANSLATION_KEYS.COMMON.ACTIONS.MORE_DETAILS',
  
  // Status
  "'common.active'": "TRANSLATION_KEYS.COMMON.STATUS.ACTIVE",
  '"common.active"': 'TRANSLATION_KEYS.COMMON.STATUS.ACTIVE',
  "'common.inactive'": "TRANSLATION_KEYS.COMMON.STATUS.INACTIVE",
  '"common.inactive"': 'TRANSLATION_KEYS.COMMON.STATUS.INACTIVE',
  
  // Labels
  "'common.errorCode'": "TRANSLATION_KEYS.COMMON.LABELS.ERROR_CODE",
  '"common.errorCode"': 'TRANSLATION_KEYS.COMMON.LABELS.ERROR_CODE',
  "'common.noData'": "TRANSLATION_KEYS.COMMON.LABELS.NO_DATA",
  '"common.noData"': 'TRANSLATION_KEYS.COMMON.LABELS.NO_DATA',
  
  // Image Upload (nested)
  "'common.imageUpload.supportedFormats'": "TRANSLATION_KEYS.COMMON.IMAGE_UPLOAD.SUPPORTED_FORMATS",
  '"common.imageUpload.supportedFormats"': 'TRANSLATION_KEYS.COMMON.IMAGE_UPLOAD.SUPPORTED_FORMATS',
  "'common.imageUpload.maxSize'": "TRANSLATION_KEYS.COMMON.IMAGE_UPLOAD.MAX_SIZE",
  '"common.imageUpload.maxSize"': 'TRANSLATION_KEYS.COMMON.IMAGE_UPLOAD.MAX_SIZE',
};

// Company keys that need to be updated (already migrated in Phase 3)
const COMPANY_KEY_MAPPINGS = {
  "'company.division.": "'features.company.entities.division.",
  '"company.division.': '"features.company.entities.division.',
  "'company.department.": "'features.company.entities.department.",
  '"company.department.': '"features.company.entities.department.',
  "'company.section.": "'features.company.entities.section.",
  '"company.section.': '"features.company.entities.section.',
  "'company.branch.": "'features.company.entities.branch.",
  '"company.branch.': '"features.company.entities.branch.',
  "'company.branchSocialSecurity.": "'features.company.entities.branchSocialSecurity.",
  '"company.branchSocialSecurity.': '"features.company.entities.branchSocialSecurity.',
};

// Auth keys that need to be updated (already migrated in Phase 3)
const AUTH_KEY_MAPPINGS = {
  "'auth.unauthorized.": "'features.auth.unauthorized.",
  '"auth.unauthorized.': '"features.auth.unauthorized.',
  "'auth.forgotPassword.": "'features.auth.forgotPassword.",
  '"auth.forgotPassword.': '"features.auth.forgotPassword.',
  "'auth.login.": "'features.auth.login.",
  '"auth.login.': '"features.auth.login.',
};

/**
 * Recursively find all .component.html files
 */
function findTemplateFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      findTemplateFiles(filePath, fileList);
    } else if (file.endsWith('.component.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Migrate a single template file
 */
function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let changes = [];
  
  // Migrate common keys
  for (const [oldKey, newKey] of Object.entries(COMMON_KEY_MAPPINGS)) {
    if (content.includes(oldKey)) {
      content = content.replace(new RegExp(oldKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newKey);
      modified = true;
      changes.push(`Migrated ${oldKey} → ${newKey}`);
    }
  }
  
  // Migrate company keys (update to new structure)
  for (const [oldPrefix, newPrefix] of Object.entries(COMPANY_KEY_MAPPINGS)) {
    const regex = new RegExp(oldPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.match(regex)) {
      content = content.replace(regex, newPrefix);
      modified = true;
      changes.push(`Migrated ${oldPrefix}* → ${newPrefix}*`);
    }
  }
  
  // Migrate auth keys (update to new structure)
  for (const [oldPrefix, newPrefix] of Object.entries(AUTH_KEY_MAPPINGS)) {
    const regex = new RegExp(oldPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.match(regex)) {
      content = content.replace(regex, newPrefix);
      modified = true;
      changes.push(`Migrated ${oldPrefix}* → ${newPrefix}*`);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return { file: filePath, changes };
  }
  
  return null;
}

/**
 * Main migration function
 */
function migrateTemplates() {
  console.log('🚀 Starting Phase 5 (Part 2): Template Translation Keys Migration\n');
  
  // Find all HTML template files
  const files = findTemplateFiles(SRC_DIR);
  
  console.log(`📁 Found ${files.length} template files\n`);
  
  const migrated = [];
  const skipped = [];
  
  for (const file of files) {
    try {
      const result = migrateFile(file);
      if (result) {
        migrated.push(result);
        console.log(`✅ ${path.relative(SRC_DIR, file)}`);
        result.changes.forEach(change => console.log(`   - ${change}`));
      } else {
        skipped.push(file);
      }
    } catch (error) {
      console.error(`❌ Error migrating ${file}:`, error.message);
    }
  }
  
  console.log(`\n📊 Migration Summary:`);
  console.log(`   ✅ Migrated: ${migrated.length} files`);
  console.log(`   ⏭️  Skipped: ${skipped.length} files`);
  
  // Save migration log
  const logFile = path.join(__dirname, '../PHASE_5_TEMPLATES_MIGRATION_LOG.json');
  fs.writeFileSync(logFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    total: files.length,
    migrated: migrated.length,
    skipped: skipped.length,
    files: migrated
  }, null, 2), 'utf8');
  
  console.log(`\n✅ Migration complete! Log saved to: ${logFile}`);
}

// Run migration
try {
  migrateTemplates();
} catch (error) {
  console.error('❌ Error during migration:', error);
  process.exit(1);
}

