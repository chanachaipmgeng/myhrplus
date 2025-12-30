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

// Read all files
const translations = {};
for (const lang of LANGUAGES) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  translations[lang] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const referenceKeys = new Set(getAllKeys(translations[REFERENCE_LANGUAGE]));

for (const lang of LANGUAGES) {
  if (lang === REFERENCE_LANGUAGE) continue;
  
  const langKeys = getAllKeys(translations[lang]);
  const extra = langKeys.filter(k => !referenceKeys.has(k));
  
  if (extra.length > 0) {
    console.log(`\n${lang.toUpperCase()} - Extra keys (${extra.length}):`);
    for (const key of extra.slice(0, 20)) { // Show first 20
      console.log(`  - ${key}`);
    }
    if (extra.length > 20) {
      console.log(`  ... and ${extra.length - 20} more`);
    }
  }
}

