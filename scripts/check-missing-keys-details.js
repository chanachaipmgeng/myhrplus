const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const LANGUAGES = ['th', 'en', 'lo', 'my', 'vi', 'zh'];
const REFERENCE_LANGUAGE = 'th';

function getAllKeys(obj, prefix = '') {
  const keys = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        keys.push(...getAllKeys(obj[key], fullKey));
      } else {
        keys.push(fullKey);
      }
    }
  }
  return keys;
}

function getNestedValue(obj, key) {
  const parts = key.split('.');
  let value = obj;
  for (const part of parts) {
    if (value && typeof value === 'object' && value.hasOwnProperty(part)) {
      value = value[part];
    } else {
      return undefined;
    }
  }
  return value;
}

// Read all files
const translations = {};
for (const lang of LANGUAGES) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  translations[lang] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const referenceKeys = getAllKeys(translations[REFERENCE_LANGUAGE]);

for (const lang of LANGUAGES) {
  if (lang === REFERENCE_LANGUAGE) continue;
  
  const langKeys = getAllKeys(translations[lang]);
  const missing = referenceKeys.filter(k => !langKeys.includes(k));
  
  if (missing.length > 0) {
    console.log(`\n${lang.toUpperCase()} - Missing keys (${missing.length}):`);
    for (const key of missing) {
      const value = getNestedValue(translations[REFERENCE_LANGUAGE], key);
      console.log(`  - ${key}: ${value !== undefined ? JSON.stringify(value).substring(0, 50) : 'NOT FOUND'}`);
    }
  }
}

