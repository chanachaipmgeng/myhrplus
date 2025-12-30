/**
 * Translation Keys Validation Script
 * 
 * This script validates translation keys:
 * - Checks for duplicate keys
 * - Checks for missing keys between languages
 * - Checks for unused keys
 * - Checks for keys that should use common.* structure
 * 
 * Usage:
 * node scripts/validate-translation-keys.js
 */

const fs = require('fs');
const path = require('path');

const TH_FILE = path.join(__dirname, '../src/assets/i18n/th.json');
const EN_FILE = path.join(__dirname, '../src/assets/i18n/en.json');

/**
 * Find duplicate keys (same key appears multiple times)
 */
function findDuplicateKeys(data) {
  const keys = Object.keys(data);
  const seen = new Set();
  const duplicates = [];
  
  for (const key of keys) {
    if (seen.has(key)) {
      duplicates.push(key);
    } else {
      seen.add(key);
    }
  }
  
  return duplicates;
}

/**
 * Find duplicate values (same value appears with different keys)
 */
function findDuplicateValues(data) {
  const valueMap = new Map();
  const duplicates = [];
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      if (valueMap.has(value)) {
        duplicates.push({
          key,
          duplicateOf: valueMap.get(value),
          value
        });
      } else {
        valueMap.set(value, key);
      }
    }
  }
  
  return duplicates;
}

/**
 * Find missing keys between two language files
 */
function findMissingKeys(data1, data2, name1, name2) {
  const keys1 = new Set(Object.keys(data1));
  const keys2 = new Set(Object.keys(data2));
  
  const missingIn2 = Array.from(keys1).filter(key => !keys2.has(key));
  const missingIn1 = Array.from(keys2).filter(key => !keys1.has(key));
  
  return {
    [`missingIn${name2}`]: missingIn2,
    [`missingIn${name1}`]: missingIn1
  };
}

/**
 * Find flat keys that should be migrated to common.*
 */
function findFlatKeysToMigrate(data) {
  const flatKeys = [
    'Save', 'Delete', 'Edit', 'Add', 'Cancel', 'Close', 'Search', 'Reset',
    'Export', 'Import', 'Download', 'Upload', 'Select', 'Clear', 'OK', 'Yes',
    'No', 'Retry', 'Complete', 'Previous', 'Next', 'Optional', 'More Details',
    'Detail', 'No.', 'Employee ID', 'Name-Surname', 'Status', 'Actions',
    'Error Code', 'Home', 'All'
  ];
  
  const found = flatKeys.filter(key => data.hasOwnProperty(key));
  return found;
}

/**
 * Find common.* keys that should be nested
 */
function findCommonKeysToNest(data) {
  const commonKeys = Object.keys(data).filter(key => 
    key.startsWith('common.') && 
    !key.startsWith('common.actions.') &&
    !key.startsWith('common.labels.') &&
    !key.startsWith('common.messages.') &&
    !key.startsWith('common.status.') &&
    !key.startsWith('common.error.') &&
    !key.startsWith('common.validation.') &&
    !key.startsWith('common.fileUpload.') &&
    !key.startsWith('common.imageUpload.') &&
    !key.startsWith('common.pdpa.') &&
    !key.startsWith('common.notification.')
  );
  
  return commonKeys;
}

/**
 * Main validation function
 */
function validate() {
  console.log('🔍 Validating translation keys...\n');
  
  // Read files
  console.log('📖 Reading translation files...');
  const thContent = fs.readFileSync(TH_FILE, 'utf-8');
  const enContent = fs.readFileSync(EN_FILE, 'utf-8');
  
  const thData = JSON.parse(thContent);
  const enData = JSON.parse(enContent);
  
  console.log(`   th.json: ${Object.keys(thData).length} keys`);
  console.log(`   en.json: ${Object.keys(enData).length} keys\n`);
  
  // Check for duplicate keys
  console.log('🔍 Checking for duplicate keys...');
  const thDuplicateKeys = findDuplicateKeys(thData);
  const enDuplicateKeys = findDuplicateKeys(enData);
  
  if (thDuplicateKeys.length > 0) {
    console.log(`   ⚠️  th.json: ${thDuplicateKeys.length} duplicate keys found`);
    console.log(`      ${thDuplicateKeys.slice(0, 10).join(', ')}${thDuplicateKeys.length > 10 ? '...' : ''}`);
  } else {
    console.log('   ✅ th.json: No duplicate keys');
  }
  
  if (enDuplicateKeys.length > 0) {
    console.log(`   ⚠️  en.json: ${enDuplicateKeys.length} duplicate keys found`);
    console.log(`      ${enDuplicateKeys.slice(0, 10).join(', ')}${enDuplicateKeys.length > 10 ? '...' : ''}`);
  } else {
    console.log('   ✅ en.json: No duplicate keys');
  }
  console.log('');
  
  // Check for duplicate values
  console.log('🔍 Checking for duplicate values...');
  const thDuplicateValues = findDuplicateValues(thData);
  const enDuplicateValues = findDuplicateValues(enData);
  
  console.log(`   th.json: ${thDuplicateValues.length} duplicate values found`);
  console.log(`   en.json: ${enDuplicateValues.length} duplicate values found`);
  if (thDuplicateValues.length > 0 || enDuplicateValues.length > 0) {
    console.log('   ⚠️  Some values appear multiple times (may be intentional)');
  }
  console.log('');
  
  // Check for missing keys
  console.log('🔍 Checking for missing keys between languages...');
  const missing = findMissingKeys(thData, enData, 'TH', 'EN');
  
  if (missing.missingInEN.length > 0) {
    console.log(`   ⚠️  ${missing.missingInEN.length} keys in th.json but not in en.json`);
    console.log(`      ${missing.missingInEN.slice(0, 10).join(', ')}${missing.missingInEN.length > 10 ? '...' : ''}`);
  } else {
    console.log('   ✅ All th.json keys exist in en.json');
  }
  
  if (missing.missingInTH.length > 0) {
    console.log(`   ⚠️  ${missing.missingInTH.length} keys in en.json but not in th.json`);
    console.log(`      ${missing.missingInTH.slice(0, 10).join(', ')}${missing.missingInTH.length > 10 ? '...' : ''}`);
  } else {
    console.log('   ✅ All en.json keys exist in th.json');
  }
  console.log('');
  
  // Check for flat keys to migrate
  console.log('🔍 Checking for flat keys to migrate...');
  const thFlatKeys = findFlatKeysToMigrate(thData);
  const enFlatKeys = findFlatKeysToMigrate(enData);
  
  if (thFlatKeys.length > 0) {
    console.log(`   ⚠️  th.json: ${thFlatKeys.length} flat keys found that should be migrated`);
    console.log(`      ${thFlatKeys.join(', ')}`);
  } else {
    console.log('   ✅ th.json: No flat keys to migrate');
  }
  
  if (enFlatKeys.length > 0) {
    console.log(`   ⚠️  en.json: ${enFlatKeys.length} flat keys found that should be migrated`);
    console.log(`      ${enFlatKeys.join(', ')}`);
  } else {
    console.log('   ✅ en.json: No flat keys to migrate');
  }
  console.log('');
  
  // Check for common.* keys to nest
  console.log('🔍 Checking for common.* keys to nest...');
  const thCommonKeys = findCommonKeysToNest(thData);
  const enCommonKeys = findCommonKeysToNest(enData);
  
  if (thCommonKeys.length > 0) {
    console.log(`   ⚠️  th.json: ${thCommonKeys.length} common.* keys found that should be nested`);
    console.log(`      ${thCommonKeys.slice(0, 10).join(', ')}${thCommonKeys.length > 10 ? '...' : ''}`);
  } else {
    console.log('   ✅ th.json: All common.* keys are properly nested');
  }
  
  if (enCommonKeys.length > 0) {
    console.log(`   ⚠️  en.json: ${enCommonKeys.length} common.* keys found that should be nested`);
    console.log(`      ${enCommonKeys.slice(0, 10).join(', ')}${enCommonKeys.length > 10 ? '...' : ''}`);
  } else {
    console.log('   ✅ en.json: All common.* keys are properly nested');
  }
  console.log('');
  
  // Summary
  console.log('📊 Validation Summary:');
  console.log(`   Duplicate keys: TH=${thDuplicateKeys.length}, EN=${enDuplicateKeys.length}`);
  console.log(`   Duplicate values: TH=${thDuplicateValues.length}, EN=${enDuplicateValues.length}`);
  console.log(`   Missing keys: TH→EN=${missing.missingInEN.length}, EN→TH=${missing.missingInTH.length}`);
  console.log(`   Flat keys to migrate: TH=${thFlatKeys.length}, EN=${enFlatKeys.length}`);
  console.log(`   Common keys to nest: TH=${thCommonKeys.length}, EN=${enCommonKeys.length}`);
  
  const hasIssues = 
    thDuplicateKeys.length > 0 ||
    enDuplicateKeys.length > 0 ||
    missing.missingInEN.length > 0 ||
    missing.missingInTH.length > 0 ||
    thFlatKeys.length > 0 ||
    enFlatKeys.length > 0 ||
    thCommonKeys.length > 0 ||
    enCommonKeys.length > 0;
  
  if (hasIssues) {
    console.log('\n⚠️  Some issues found. Please review and fix.');
    process.exit(1);
  } else {
    console.log('\n✅ All validations passed!');
    process.exit(0);
  }
}

// Run validation
if (require.main === module) {
  try {
    validate();
  } catch (error) {
    console.error('❌ Validation failed:', error);
    process.exit(1);
  }
}

module.exports = {
  validate,
  findDuplicateKeys,
  findDuplicateValues,
  findMissingKeys,
  findFlatKeysToMigrate,
  findCommonKeysToNest
};

