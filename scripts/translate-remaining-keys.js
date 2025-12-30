const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const TARGET_LANGS = ['lo', 'my', 'vi', 'zh'];
const REFERENCE_LANG = 'th';
const SOURCE_LANG = 'en'; // Use English as source for translation

/**
 * Translate remaining untranslated keys
 * 
 * Strategy:
 * 1. Use English as source (if available)
 * 2. For keys that don't exist in English, keep Thai (needs manual translation)
 * 3. Skip systemcode keys that are values (A, B, N/A, -, etc.)
 */

// Manual translation mappings for common keys
const MANUAL_TRANSLATIONS = {
  lo: {
    'New  Req': 'ຕຳແໜ່ງໃໝ່',
    'date-detail': 'ຂໍ້ມູນເມື່ອວັນທີ',
    'Old Bank Name': 'ທະນາຄານເກົ່າ',
    'Applicant': 'ລາຍຊື່ຜູ້ສະໝັກວຽກ',
    'Auto Assign by  Req': 'ມອບຫນ້າທີ່ອັດຕະໂນມັດ (ຕຳແໜ່ງ)',
    'Generating payslip, please wait...': 'ກຳລັງສ້າງ e-Payslip ກະລຸນາລໍຖ້າ...',
    'Loading Data...': 'ກຳລັງໂຫຼດຂໍ້ມູນ...'
  },
  my: {
    'New  Req': 'ရာထူးအသစ်',
    'date-detail': 'ရက်စွဲအချက်အလက်',
    'Old Bank Name': 'ဘဏ်ဟောင်း',
    'Applicant': 'လျှောက်ထားသူများစာရင်း',
    'Auto Assign by  Req': 'အလိုအလျောက်တာဝန်ပေးအပ်ခြင်း (ရာထူး)',
    'Generating payslip, please wait...': 'e-Payslip ထုတ်နေသည် ကျေးဇူးပြု၍ စောင့်ပါ...',
    'Loading Data...': 'ဒေတာဖွင့်နေသည်...'
  },
  vi: {
    'New  Req': 'Vị trí mới',
    'date-detail': 'Thông tin ngày',
    'Old Bank Name': 'Tên ngân hàng cũ',
    'Applicant': 'Danh sách ứng viên',
    'Auto Assign by  Req': 'Giao việc tự động (vị trí)',
    'Generating payslip, please wait...': 'Đang tạo e-Payslip, vui lòng đợi...',
    'Loading Data...': 'Đang tải dữ liệu...'
  },
  zh: {
    'New  Req': '新职位',
    'date-detail': '日期信息',
    'Old Bank Name': '旧银行名称',
    'Applicant': '申请人列表',
    'Auto Assign by  Req': '自动分配（职位）',
    'Generating payslip, please wait...': '正在生成 e-Payslip，请稍候...',
    'Loading Data...': '正在加载数据...'
  }
};

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

function shouldSkipKey(key, value) {
  // Skip systemcode keys that are values (A, B, N/A, -, empty)
  if (key.startsWith('systemcode.')) {
    if (value === 'A' || value === 'B' || value === 'O' || value === 'AB' || 
        value === 'N/A' || value === '-' || value === '') {
      return true;
    }
  }
  
  // Skip empty values
  if (value === '' || value === null || value === undefined) {
    return true;
  }
  
  return false;
}

function translateLanguage(lang) {
  console.log(`\n📝 Translating ${lang}...`);
  
  const targetData = getKeysFromFile(lang);
  const referenceData = getKeysFromFile(REFERENCE_LANG);
  const sourceData = getKeysFromFile(SOURCE_LANG);
  
  if (!targetData || !referenceData || !sourceData) {
    console.log(`   ⚠️  Missing files`);
    return null;
  }
  
  let translated = 0;
  let skipped = 0;
  let kept = 0;
  const changes = [];
  
  // Get manual translations for this language
  const manual = MANUAL_TRANSLATIONS[lang] || {};
  
  // Process all keys
  const allKeys = Object.keys(targetData);
  
  for (const key of allKeys) {
    const targetValue = targetData[key];
    const referenceValue = referenceData[key];
    const sourceValue = sourceData[key];
    
    // Skip if not Thai text
    if (!isThaiText(targetValue)) {
      skipped++;
      continue;
    }
    
    // Skip systemcode values
    if (shouldSkipKey(key, targetValue)) {
      skipped++;
      continue;
    }
    
    // Strategy 1: Use manual translation if available
    if (key in manual) {
      targetData[key] = manual[key];
      translated++;
      if (translated <= 10) {
        changes.push(`${key}: "${targetValue}" → "${manual[key]}"`);
      }
      continue;
    }
    
    // Strategy 2: Use English if available and different from Thai
    if (sourceValue && sourceValue !== referenceValue && !isThaiText(sourceValue)) {
      // For now, keep English (can be translated later)
      targetData[key] = sourceValue;
      translated++;
      if (translated <= 10) {
        changes.push(`${key}: "${targetValue}" → "${sourceValue}" (English)`);
      }
      continue;
    }
    
    // Strategy 3: Keep Thai (needs manual translation)
    kept++;
  }
  
  // Write updated file
  fs.writeFileSync(
    path.join(I18N_DIR, `${lang}.json`),
    JSON.stringify(targetData, null, 2),
    'utf8'
  );
  
  console.log(`   ✅ Translated: ${translated} keys`);
  console.log(`   ⏭️  Kept: ${kept} keys (need manual translation)`);
  console.log(`   ⏭️  Skipped: ${skipped} keys (already translated or no translation needed)`);
  
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

function translateAllLanguages() {
  console.log('🚀 Translating remaining keys\n');
  console.log(`📖 Reference: ${REFERENCE_LANG} (Thai)`);
  console.log(`📖 Source: ${SOURCE_LANG} (English)\n`);
  
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
  const logFile = path.join(__dirname, '../FINAL_TRANSLATION_LOG.json');
  fs.writeFileSync(logFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    reference: REFERENCE_LANG,
    source: SOURCE_LANG,
    results
  }, null, 2), 'utf8');
  
  console.log(`\n✅ Translation complete! Log saved to: ${logFile}`);
  console.log('\n💡 Next steps:');
  console.log('   1. Review kept keys (need manual translation)');
  console.log('   2. Run check-untranslated-keys.js to verify');
  console.log('   3. Test application with all languages');
}

// Run
try {
  translateAllLanguages();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}

