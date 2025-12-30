const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const REFERENCE_LANG = 'en'; // Use English as reference for translation
const SOURCE_LANG = 'th'; // Thai is the source for untranslated keys
const TARGET_LANGS = ['lo', 'my', 'vi', 'zh'];

/**
 * Translate untranslated keys using English as reference
 * 
 * Strategy:
 * 1. If key exists in en.json, use that value (already translated)
 * 2. If key doesn't exist in en.json, keep Thai value (needs manual translation)
 * 3. For common keys, use English as base translation
 */

// Language names for reference
const LANGUAGE_NAMES = {
  lo: 'Lao',
  my: 'Myanmar',
  vi: 'Vietnamese',
  zh: 'Chinese'
};

function getKeysFromFile(lang) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/**
 * Check if value is in Thai (contains Thai characters)
 */
function isThaiText(value) {
  if (typeof value !== 'string') return false;
  // Thai Unicode range: \u0E00-\u0E7F
  return /[\u0E00-\u0E7F]/.test(value);
}

/**
 * Translate a single language file
 */
function translateLanguage(lang) {
  console.log(`\n📝 Translating ${lang} (${LANGUAGE_NAMES[lang]})...`);
  
  const targetData = getKeysFromFile(lang);
  const referenceData = getKeysFromFile(REFERENCE_LANG);
  const sourceData = getKeysFromFile(SOURCE_LANG);
  
  if (!targetData || !referenceData || !sourceData) {
    console.log(`   ⚠️  Missing files`);
    return null;
  }
  
  let translated = 0;
  let kept = 0;
  let skipped = 0;
  const changes = [];
  
  // Get all keys from target
  const allKeys = Object.keys(targetData);
  
  for (const key of allKeys) {
    const targetValue = targetData[key];
    const referenceValue = referenceData[key];
    const sourceValue = sourceData[key];
    
    // Skip if already translated (not Thai)
    if (!isThaiText(targetValue)) {
      skipped++;
      continue;
    }
    
    // Strategy 1: Use English value if exists and different from Thai
    if (referenceValue && referenceValue !== sourceValue && !isThaiText(referenceValue)) {
      targetData[key] = referenceValue;
      translated++;
      if (translated <= 10) {
        changes.push(`${key}: "${targetValue}" → "${referenceValue}"`);
      }
      continue;
    }
    
    // Strategy 2: Keep Thai value (needs manual translation)
    kept++;
  }
  
  // Write updated file
  fs.writeFileSync(
    path.join(I18N_DIR, `${lang}.json`),
    JSON.stringify(targetData, null, 2),
    'utf8'
  );
  
  console.log(`   ✅ Translated: ${translated} keys (from English)`);
  console.log(`   ⏭️  Kept: ${kept} keys (need manual translation)`);
  console.log(`   ⏭️  Skipped: ${skipped} keys (already translated)`);
  
  if (changes.length > 0) {
    console.log(`\n   🔍 Sample changes:`);
    changes.forEach(change => console.log(`      - ${change}`));
    if (translated > 10) {
      console.log(`      ... and ${translated - 10} more`);
    }
  }
  
  return {
    lang,
    translated,
    kept,
    skipped,
    total: allKeys.length
  };
}

/**
 * Main function
 */
function translateAllLanguages() {
  console.log('🚀 Translating untranslated keys\n');
  console.log(`📖 Reference: ${REFERENCE_LANG} (English)`);
  console.log(`📖 Source: ${SOURCE_LANG} (Thai)\n`);
  
  const results = [];
  
  for (const lang of TARGET_LANGS) {
    try {
      const result = translateLanguage(lang);
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
    const percentage = ((result.translated + result.skipped) / result.total * 100).toFixed(1);
    console.log(`   ${result.lang}: ${result.translated} translated, ${result.kept} kept, ${result.skipped} skipped (${percentage}% done)`);
  });
  
  // Save log
  const logFile = path.join(__dirname, '../TRANSLATION_LOG.json');
  fs.writeFileSync(logFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    reference: REFERENCE_LANG,
    source: SOURCE_LANG,
    results
  }, null, 2), 'utf8');
  
  console.log(`\n✅ Translation complete! Log saved to: ${logFile}`);
  console.log('\n💡 Next steps:');
  console.log('   1. Review kept keys (need manual translation)');
  console.log('   2. Use translation service for remaining keys');
  console.log('   3. Run check-untranslated-keys.js to verify');
}

// Run
try {
  translateAllLanguages();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}

