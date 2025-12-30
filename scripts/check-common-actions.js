const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const LANGUAGES = ['th', 'en', 'lo', 'my', 'vi', 'zh'];

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

for (const lang of LANGUAGES) {
  const keys = getAllKeys(translations[lang]);
  const hasCommonActions = keys.includes('common.actions');
  const flatHasCommonActions = translations[lang].hasOwnProperty('common.actions');
  console.log(`${lang}: has common.actions in keys: ${hasCommonActions}, in flat: ${flatHasCommonActions}`);
  if (flatHasCommonActions) {
    console.log(`  Value: ${JSON.stringify(translations[lang]['common.actions']).substring(0, 50)}`);
  }
}

