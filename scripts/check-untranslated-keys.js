const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const REFERENCE_LANG = 'th';
const TARGET_LANGS = ['lo', 'my', 'vi', 'zh'];

/**
 * Check for untranslated keys (keys that match reference language)
 */

function getKeysFromFile(lang) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function findUntranslatedKeys(targetData, referenceData, lang) {
  const untranslated = [];
  const referenceKeys = Object.keys(referenceData);
  
  for (const key of referenceKeys) {
    if (key in targetData) {
      const targetValue = targetData[key];
      const referenceValue = referenceData[key];
      
      // Check if value matches reference (likely untranslated)
      if (targetValue === referenceValue) {
        untranslated.push({
          key,
          value: targetValue
        });
      }
    }
  }
  
  return untranslated;
}

function checkLanguage(lang) {
  console.log(`\n📝 Checking ${lang}...`);
  
  const targetData = getKeysFromFile(lang);
  const referenceData = getKeysFromFile(REFERENCE_LANG);
  
  if (!targetData || !referenceData) {
    console.log(`   ⚠️  Missing files`);
    return null;
  }
  
  const untranslated = findUntranslatedKeys(targetData, referenceData, lang);
  
  console.log(`   📊 Total keys: ${Object.keys(targetData).length}`);
  console.log(`   ⚠️  Untranslated: ${untranslated.length} keys`);
  
  if (untranslated.length > 0) {
    // Group by prefix
    const grouped = {};
    untranslated.forEach(item => {
      const prefix = item.key.split('.')[0];
      if (!grouped[prefix]) {
        grouped[prefix] = [];
      }
      grouped[prefix].push(item);
    });
    
    console.log(`\n   📋 Untranslated keys by category:`);
    Object.keys(grouped).sort().forEach(prefix => {
      console.log(`      ${prefix}: ${grouped[prefix].length} keys`);
    });
    
    // Show sample (first 10)
    if (untranslated.length <= 10) {
      console.log(`\n   🔍 Sample untranslated keys:`);
      untranslated.slice(0, 10).forEach(item => {
        console.log(`      - ${item.key}: "${item.value}"`);
      });
    } else {
      console.log(`\n   🔍 First 10 untranslated keys:`);
      untranslated.slice(0, 10).forEach(item => {
        console.log(`      - ${item.key}: "${item.value}"`);
      });
      console.log(`      ... and ${untranslated.length - 10} more`);
    }
  }
  
  return {
    lang,
    total: Object.keys(targetData).length,
    untranslated: untranslated.length,
    keys: untranslated
  };
}

function checkAllLanguages() {
  console.log('🔍 Checking for untranslated keys\n');
  console.log(`📖 Reference: ${REFERENCE_LANG}\n`);
  
  const results = [];
  
  for (const lang of TARGET_LANGS) {
    const result = checkLanguage(lang);
    if (result) {
      results.push(result);
    }
  }
  
  // Summary
  console.log('\n\n📊 Summary:');
  console.log('─'.repeat(50));
  results.forEach(result => {
    const percentage = ((result.total - result.untranslated) / result.total * 100).toFixed(1);
    console.log(`   ${result.lang}: ${result.untranslated}/${result.total} untranslated (${percentage}% translated)`);
  });
  
  // Save report
  const reportFile = path.join(__dirname, '../UNTRANSLATED_KEYS_REPORT.json');
  fs.writeFileSync(reportFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    reference: REFERENCE_LANG,
    results
  }, null, 2), 'utf8');
  
  console.log(`\n✅ Report saved to: ${reportFile}`);
  console.log('\n💡 Next steps:');
  console.log('   1. Review untranslated keys in the report');
  console.log('   2. Translate keys manually or use translation service');
  console.log('   3. Update translation files');
}

// Run
try {
  checkAllLanguages();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}

