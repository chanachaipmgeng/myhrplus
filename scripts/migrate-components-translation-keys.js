const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src/app');

/**
 * Phase 5: Migrate Components to use TRANSLATION_KEYS constants
 * 
 * Migrations:
 * 1. 'common.addNew' → TRANSLATION_KEYS.COMMON.ACTIONS.ADD_NEW
 * 2. 'common.active' → TRANSLATION_KEYS.COMMON.STATUS.ACTIVE
 * 3. 'common.inactive' → TRANSLATION_KEYS.COMMON.STATUS.INACTIVE
 * 4. 'company.*' → 'features.company.entities.*' (already migrated in Phase 3)
 */

// Mapping rules for common keys
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
  "'common.export'": "TRANSLATION_KEYS.COMMON.ACTIONS.EXPORT",
  '"common.export"': 'TRANSLATION_KEYS.COMMON.ACTIONS.EXPORT',
  "'common.import'": "TRANSLATION_KEYS.COMMON.ACTIONS.IMPORT",
  '"common.import"': 'TRANSLATION_KEYS.COMMON.ACTIONS.IMPORT',
  
  // Status
  "'common.active'": "TRANSLATION_KEYS.COMMON.STATUS.ACTIVE",
  '"common.active"': 'TRANSLATION_KEYS.COMMON.STATUS.ACTIVE',
  "'common.inactive'": "TRANSLATION_KEYS.COMMON.STATUS.INACTIVE",
  '"common.inactive"': 'TRANSLATION_KEYS.COMMON.STATUS.INACTIVE',
  "'common.pending'": "TRANSLATION_KEYS.COMMON.STATUS.PENDING",
  '"common.pending"': 'TRANSLATION_KEYS.COMMON.STATUS.PENDING',
  
  // Labels
  "'common.detail'": "TRANSLATION_KEYS.COMMON.LABELS.DETAIL",
  '"common.detail"': 'TRANSLATION_KEYS.COMMON.LABELS.DETAIL',
  "'common.status'": "TRANSLATION_KEYS.COMMON.LABELS.STATUS",
  '"common.status"': 'TRANSLATION_KEYS.COMMON.LABELS.STATUS',
  "'common.noData'": "TRANSLATION_KEYS.COMMON.LABELS.NO_DATA",
  '"common.noData"': 'TRANSLATION_KEYS.COMMON.LABELS.NO_DATA',
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

/**
 * Check if file already imports TRANSLATION_KEYS
 */
function hasTranslationKeysImport(content) {
  return content.includes('TRANSLATION_KEYS') || 
         content.includes('@core/constants/translation-keys.constant');
}

/**
 * Add TRANSLATION_KEYS import if not present
 */
function addTranslationKeysImport(content, filePath) {
  if (hasTranslationKeysImport(content)) {
    return content;
  }
  
  // Find the last import statement
  const importRegex = /^import\s+.*from\s+['"].*['"];?$/gm;
  const imports = content.match(importRegex) || [];
  
  if (imports.length === 0) {
    // No imports found, add at the beginning
    const firstLine = content.split('\n')[0];
    if (firstLine.includes('import')) {
      return content.replace(
        firstLine,
        `${firstLine}\nimport { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';`
      );
    }
    return `import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';\n${content}`;
  }
  
  // Find the last import
  const lastImport = imports[imports.length - 1];
  const lastImportIndex = content.lastIndexOf(lastImport);
  const afterLastImport = content.substring(lastImportIndex + lastImport.length);
  
  // Check if there's a blank line after imports
  const needsNewline = !afterLastImport.trim().startsWith('\n\n');
  
  const newImport = `import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';`;
  
  if (needsNewline) {
    return content.substring(0, lastImportIndex + lastImport.length) + 
           '\n' + newImport + 
           content.substring(lastImportIndex + lastImport.length);
  } else {
    return content.substring(0, lastImportIndex + lastImport.length) + 
           '\n' + newImport + 
           content.substring(lastImportIndex + lastImport.length);
  }
}

/**
 * Migrate a single file
 */
function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let changes = [];
  
  // Add import if needed
  const originalContent = content;
  content = addTranslationKeysImport(content, filePath);
  if (content !== originalContent) {
    modified = true;
    changes.push('Added TRANSLATION_KEYS import');
  }
  
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
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return { file: filePath, changes };
  }
  
  return null;
}

/**
 * Recursively find all .component.ts files
 */
function findComponentFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      findComponentFiles(filePath, fileList);
    } else if (file.endsWith('.component.ts') && !file.endsWith('.spec.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Main migration function
 */
function migrateComponents() {
  console.log('🚀 Starting Phase 5: Component Translation Keys Migration\n');
  
  // Find all TypeScript component files
  const files = findComponentFiles(SRC_DIR);
  
  console.log(`📁 Found ${files.length} component files\n`);
  
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
  const logFile = path.join(__dirname, '../PHASE_5_MIGRATION_LOG.json');
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
  migrateComponents();
} catch (error) {
  console.error('❌ Error during migration:', error);
  process.exit(1);
}

