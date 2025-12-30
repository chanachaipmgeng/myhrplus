/**
 * Check Translation Completeness
 * ตรวจสอบความครบถ้วนของ translation keys ในทุกภาษา
 */

const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const LANGUAGES = ['th', 'en', 'lo', 'my', 'vi', 'zh'];
const REFERENCE_LANGUAGE = 'th';

/**
 * Flatten nested object to dot notation
 */
function flattenObject(obj, prefix = '') {
  const flattened = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(flattened, flattenObject(obj[key], newKey));
      } else {
        flattened[newKey] = obj[key];
      }
    }
  }
  
  return flattened;
}

/**
 * Check if value is translated (not Thai text)
 */
function isTranslated(value, lang) {
  if (!value || typeof value !== 'string') {
    return false;
  }
  
  // Skip system codes
  if (/^[A-Z0-9_]+$/.test(value)) {
    return true; // System code, consider as translated
  }
  
  // For non-Thai languages, check if value is not Thai
  if (lang !== 'th') {
    // Thai Unicode range: \u0E00-\u0E7F
    const thaiRegex = /[\u0E00-\u0E7F]/;
    return !thaiRegex.test(value);
  }
  
  return true; // Thai is always "translated"
}

/**
 * Check translation completeness
 */
function checkTranslationCompleteness() {
  console.log('🔍 Checking translation completeness...\n');
  
  // Load reference language (Thai)
  const referencePath = path.join(I18N_DIR, `${REFERENCE_LANGUAGE}.json`);
  const referenceData = JSON.parse(fs.readFileSync(referencePath, 'utf8'));
  const referenceKeys = flattenObject(referenceData);
  
  console.log(`📊 Reference language (${REFERENCE_LANGUAGE}): ${Object.keys(referenceKeys).length} keys\n`);
  
  const results = {
    missing: {},
    untranslated: {},
    total: {},
    summary: {}
  };
  
  // Check each language
  for (const lang of LANGUAGES) {
    if (lang === REFERENCE_LANGUAGE) {
      continue; // Skip reference language
    }
    
    const langPath = path.join(I18N_DIR, `${lang}.json`);
    
    if (!fs.existsSync(langPath)) {
      console.error(`❌ File not found: ${langPath}`);
      continue;
    }
    
    const langData = JSON.parse(fs.readFileSync(langPath, 'utf8'));
    const langKeys = flattenObject(langData);
    
    // Find missing keys
    const missing = [];
    for (const key in referenceKeys) {
      if (!langKeys.hasOwnProperty(key)) {
        missing.push(key);
      }
    }
    
    // Find untranslated keys (still in Thai)
    const untranslated = [];
    for (const key in langKeys) {
      if (referenceKeys.hasOwnProperty(key)) {
        const value = langKeys[key];
        if (!isTranslated(value, lang)) {
          untranslated.push(key);
        }
      }
    }
    
    results.missing[lang] = missing;
    results.untranslated[lang] = untranslated;
    results.total[lang] = {
      total: Object.keys(langKeys).length,
      reference: Object.keys(referenceKeys).length,
      missing: missing.length,
      untranslated: untranslated.length,
      translated: Object.keys(langKeys).length - missing.length - untranslated.length
    };
    
    // Summary
    const totalKeys = Object.keys(referenceKeys).length;
    const translatedKeys = totalKeys - missing.length - untranslated.length;
    const completeness = ((translatedKeys / totalKeys) * 100).toFixed(2);
    
    results.summary[lang] = {
      completeness: parseFloat(completeness),
      translated: translatedKeys,
      total: totalKeys
    };
  }
  
  // Print results
  console.log('📈 Translation Completeness Summary:\n');
  console.log('Language | Completeness | Translated | Total | Missing | Untranslated');
  console.log('---------|--------------|------------|-------|--------|-------------');
  
  for (const lang of LANGUAGES) {
    if (lang === REFERENCE_LANGUAGE) {
      console.log(`${lang.padEnd(8)} | ${'100.00%'.padEnd(12)} | ${results.total[REFERENCE_LANGUAGE]?.total || 0} | ${results.total[REFERENCE_LANGUAGE]?.total || 0} | 0 | 0`);
      continue;
    }
    
    const summary = results.summary[lang];
    if (summary) {
      const missingCount = results.missing[lang]?.length || 0;
      const untranslatedCount = results.untranslated[lang]?.length || 0;
      console.log(`${lang.padEnd(8)} | ${summary.completeness.toFixed(2).padEnd(11)}% | ${summary.translated.toString().padEnd(10)} | ${summary.total.toString().padEnd(5)} | ${missingCount.toString().padEnd(6)} | ${untranslatedCount}`);
    }
  }
  
  // Print detailed missing keys
  console.log('\n\n🔴 Missing Keys:\n');
  for (const lang of LANGUAGES) {
    if (lang === REFERENCE_LANGUAGE) continue;
    
    const missing = results.missing[lang] || [];
    if (missing.length > 0) {
      console.log(`\n${lang.toUpperCase()} (${missing.length} missing):`);
      missing.slice(0, 20).forEach(key => {
        console.log(`  - ${key}`);
      });
      if (missing.length > 20) {
        console.log(`  ... and ${missing.length - 20} more`);
      }
    } else {
      console.log(`\n${lang.toUpperCase()}: ✅ No missing keys`);
    }
  }
  
  // Print detailed untranslated keys
  console.log('\n\n🟡 Untranslated Keys (still in Thai):\n');
  for (const lang of LANGUAGES) {
    if (lang === REFERENCE_LANGUAGE) continue;
    
    const untranslated = results.untranslated[lang] || [];
    if (untranslated.length > 0) {
      console.log(`\n${lang.toUpperCase()} (${untranslated.length} untranslated):`);
      untranslated.slice(0, 20).forEach(key => {
        const value = flattenObject(JSON.parse(fs.readFileSync(path.join(I18N_DIR, `${lang}.json`), 'utf8')))[key];
        console.log(`  - ${key}: "${value?.substring(0, 50)}${value?.length > 50 ? '...' : ''}"`);
      });
      if (untranslated.length > 20) {
        console.log(`  ... and ${untranslated.length - 20} more`);
      }
    } else {
      console.log(`\n${lang.toUpperCase()}: ✅ All keys translated`);
    }
  }
  
  // Save results to file
  const reportPath = path.join(__dirname, '../TRANSLATION_COMPLETENESS_REPORT.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n\n📄 Detailed report saved to: ${reportPath}`);
  
  return results;
}

// Run check
if (require.main === module) {
  try {
    checkTranslationCompleteness();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

module.exports = { checkTranslationCompleteness };

