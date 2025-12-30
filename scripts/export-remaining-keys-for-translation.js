const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const TARGET_LANGS = ['lo', 'my', 'vi', 'zh'];
const REFERENCE_LANG = 'th';

/**
 * Export remaining untranslated keys for manual translation
 * Creates CSV files for each language that can be used with translation services
 */

function getKeysFromFile(lang) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function isThaiText(value) {
  if (typeof value !== 'string') return false;
  return /[\u0E00-\u0E7F]/.test(value);
}

function findUntranslatedKeys(targetData, referenceData) {
  const untranslated = [];
  const referenceKeys = Object.keys(referenceData);
  
  for (const key of referenceKeys) {
    if (key in targetData) {
      const targetValue = targetData[key];
      const referenceValue = referenceData[key];
      
      // Check if value is still in Thai
      if (isThaiText(targetValue) && targetValue === referenceValue) {
        untranslated.push({
          key,
          thai: referenceValue,
          current: targetValue
        });
      }
    }
  }
  
  return untranslated;
}

function exportToCSV(lang, keys) {
  const csvPath = path.join(__dirname, `../translation-${lang}.csv`);
  
  // CSV Header
  let csv = 'Key,Thai,English,Translation\n';
  
  // Get English translations for reference
  const enData = getKeysFromFile('en');
  
  keys.forEach(item => {
    const enValue = enData && enData[item.key] ? enData[item.key] : '';
    // Escape CSV values
    const escapeCSV = (str) => {
      if (!str) return '';
      return `"${String(str).replace(/"/g, '""')}"`;
    };
    
    csv += `${escapeCSV(item.key)},${escapeCSV(item.thai)},${escapeCSV(enValue)},\n`;
  });
  
  fs.writeFileSync(csvPath, csv, 'utf8');
  return csvPath;
}

function exportToJSON(lang, keys) {
  const jsonPath = path.join(__dirname, `../translation-${lang}.json`);
  
  const data = {
    language: lang,
    total: keys.length,
    keys: keys.map(item => ({
      key: item.key,
      thai: item.thai,
      english: null, // Will be filled manually
      translation: null // Will be filled manually
    }))
  };
  
  // Add English reference if available
  const enData = getKeysFromFile('en');
  if (enData) {
    data.keys.forEach(item => {
      if (enData[item.key]) {
        item.english = enData[item.key];
      }
    });
  }
  
  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  return jsonPath;
}

function exportLanguage(lang) {
  console.log(`\n📝 Exporting ${lang}...`);
  
  const targetData = getKeysFromFile(lang);
  const referenceData = getKeysFromFile(REFERENCE_LANG);
  
  if (!targetData || !referenceData) {
    console.log(`   ⚠️  Missing files`);
    return null;
  }
  
  const untranslated = findUntranslatedKeys(targetData, referenceData);
  
  if (untranslated.length === 0) {
    console.log(`   ✅ No untranslated keys found`);
    return null;
  }
  
  console.log(`   📊 Found ${untranslated.keys.length} untranslated keys`);
  
  // Export to CSV
  const csvPath = exportToCSV(lang, untranslated);
  console.log(`   ✅ CSV exported: ${csvPath}`);
  
  // Export to JSON
  const jsonPath = exportToJSON(lang, untranslated);
  console.log(`   ✅ JSON exported: ${jsonPath}`);
  
  return {
    lang,
    count: untranslated.length,
    csv: csvPath,
    json: jsonPath
  };
}

function exportAllLanguages() {
  console.log('🚀 Exporting remaining keys for translation\n');
  console.log(`📖 Reference: ${REFERENCE_LANG}\n`);
  
  const results = [];
  
  for (const lang of TARGET_LANGS) {
    try {
      const result = exportLanguage(lang);
      if (result) {
        results.push(result);
      }
    } catch (error) {
      console.error(`   ❌ Error: ${error.message}`);
    }
  }
  
  // Summary
  console.log('\n\n📊 Summary:');
  console.log('─'.repeat(60));
  results.forEach(result => {
    console.log(`   ${result.lang}: ${result.count} keys exported`);
    console.log(`      CSV: ${path.basename(result.csv)}`);
    console.log(`      JSON: ${path.basename(result.json)}`);
  });
  
  console.log('\n💡 Next steps:');
  console.log('   1. Open CSV files in Excel/Google Sheets');
  console.log('   2. Use translation service or manual translation');
  console.log('   3. Fill in the Translation column');
  console.log('   4. Use import script to update JSON files');
  
  // Save log
  const logFile = path.join(__dirname, '../EXPORT_TRANSLATION_LOG.json');
  fs.writeFileSync(logFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    results
  }, null, 2), 'utf8');
  
  console.log(`\n✅ Export complete! Log saved to: ${logFile}`);
}

// Run
try {
  exportAllLanguages();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}

