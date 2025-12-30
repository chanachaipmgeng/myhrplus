/**
 * Translate features.auth keys to all languages
 * แปล features.auth keys ใน lo.json, my.json, vi.json, zh.json
 */

const fs = require('fs');
const path = require('path');

const I18N_DIR = path.join(__dirname, '../src/assets/i18n');
const TH_FILE = path.join(I18N_DIR, 'th.json');
const EN_FILE = path.join(I18N_DIR, 'en.json');

/**
 * Set nested value in object using dot notation
 */
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const target = keys.reduce((current, key) => {
    if (!current[key]) current[key] = {};
    return current[key];
  }, obj);
  target[lastKey] = value;
}

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

/**
 * Load JSON file
 */
function loadJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/**
 * Save JSON file
 */
function saveJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

/**
 * Translations for features.auth keys
 */
const translations = {
  lo: {
    'features.auth.unauthorized.title': 'ບໍ່ມີສິດເຂົ້າເຖິງ',
    'features.auth.unauthorized.message': 'ທ່ານບໍ່ມີສິດເຂົ້າເຖິງຊັບພະຍາກອນນີ້.',
    'features.auth.unauthorized.goToDashboard': 'ໄປທີ່ແດຊບອດ',
    'features.auth.unauthorized.goBack': 'ກັບຄືນ',
    'features.auth.forgotPassword.title': 'ລືມລະຫັດຜ່ານ?',
    'features.auth.forgotPassword.subtitle': 'ບໍ່ຕ້ອງກັງວົນ ພວກເຮົາຈະຊ່ວຍທ່ານກູ້ຄືນລະຫັດຜ່ານ',
    'features.auth.forgotPassword.recoverTitle': 'ກູ້ຄືນລະຫັດຜ່ານ',
    'features.auth.forgotPassword.recoverSubtitle': 'ກະລຸນາປ້ອນຂໍ້ມູນຂອງທ່ານ ພວກເຮົາຈະສົ່ງລະຫັດຜ່ານໃໝ່ໄປຍັງອີເມວຂອງທ່ານ',
    'features.auth.forgotPassword.selectDatabase': 'ເລືອກຖານຂໍ້ມູນ',
    'features.auth.forgotPassword.username': 'ຊື່ຜູ້ໃຊ້',
    'features.auth.forgotPassword.email': 'ອີເມວ',
    'features.auth.forgotPassword.sendPassword': 'ສົ່ງລະຫັດຜ່ານ',
    'features.auth.forgotPassword.sending': 'ກຳລັງສົ່ງອີເມວ...',
    'features.auth.forgotPassword.backToLogin': 'ກັບໄປຫນ້າເຂົ້າສູ່ລະບົບ',
    'features.auth.forgotPassword.successMessage': 'ສົ່ງລະຫັດຜ່ານໄປຍັງອີເມວສຳເລັດແລ້ວ',
    'features.auth.forgotPassword.error.usernameRequired': 'ກະລຸນາປ້ອນຊື່ຜູ້ໃຊ້',
    'features.auth.forgotPassword.error.emailRequired': 'ກະລຸນາປ້ອນອີເມວ',
    'features.auth.forgotPassword.error.emailInvalid': 'ກະລຸນາປ້ອນອີເມວທີ່ຖືກຕ້ອງ',
    'features.auth.forgotPassword.error.invalidCredentials': 'ຊື່ຜູ້ໃຊ້ຫຼືອີເມວບໍ່ຖືກຕ້ອງ',
    'features.auth.forgotPassword.error.sendFailed': 'ບໍ່ສາມາດສົ່ງລະຫັດຜ່ານໄດ້ ກະລຸນາລອງໃໝ່',
    'features.auth.forgotPassword.error.incompleteData': 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ',
    'features.auth.forgotPassword.success': 'ສຳເລັດ',
    'features.auth.forgotPassword.error.title': 'ເກີດຂໍ້ຜິດພາດ',
    'features.auth.login.welcome': 'ຍິນດີຕ້ອນຮັບສູ່ myHR',
    'features.auth.login.subtitle': 'ລະບົບຈັດການຊັບພະຍາກອນມະນຸດທີ່ຄົບວົງຈອນ ເພື່ອເພີ່ມປະສິດທິພາບການເຮັດວຽກຂອງທ່ານ',
    'features.auth.login.title': 'ເຂົ້າສູ່ລະບົບ',
    'features.auth.login.description': 'ກະລຸນາເຂົ້າສູ່ລະບົບເພື່ອໃຊ້ງານລະບົບ HR',
    'features.auth.login.username': 'ຊື່ຜູ້ໃຊ້ຫຼືອີເມວ',
    'features.auth.login.password': 'ລະຫັດຜ່ານ',
    'features.auth.login.selectDatabase': 'ເລືອກຖານຂໍ້ມູນ',
    'features.auth.login.rememberMe': 'ຈື່ຈຳຂ້ອຍ',
    'features.auth.login.forgotPassword': 'ລືມລະຫັດຜ່ານ?',
    'features.auth.login.signIn': 'ເຂົ້າສູ່ລະບົບດ້ວຍລະບົບ HR',
    'features.auth.login.signingIn': 'ກຳລັງເຂົ້າສູ່ລະບົບ...',
    'features.auth.login.error.usernameRequired': 'ກະລຸນາປ້ອນຊື່ຜູ້ໃຊ້',
    'features.auth.login.error.passwordRequired': 'ກະລຸນາປ້ອນລະຫັດຜ່ານ',
    'features.auth.login.error.title': 'ເກີດຂໍ້ຜິດພາດ'
  },
  my: {
    'features.auth.unauthorized.title': 'ဝင်ရောက်ခွင့်ငြင်းဆိုသည်',
    'features.auth.unauthorized.message': 'သင့်တွင် ဤအရင်းအမြစ်ကို ဝင်ရောက်ခွင့်မရှိပါ။',
    'features.auth.unauthorized.goToDashboard': 'Dashboard သို့သွားရန်',
    'features.auth.unauthorized.goBack': 'ပြန်သွားရန်',
    'features.auth.forgotPassword.title': 'စကားဝှက်မေ့နေပါသလား?',
    'features.auth.forgotPassword.subtitle': 'စိတ်မပူပါနဲ့၊ ကျွန်ုပ်တို့က သင့်စကားဝှက်ကို ပြန်လည်ရယူပေးပါမယ်',
    'features.auth.forgotPassword.recoverTitle': 'စကားဝှက်ပြန်လည်ရယူရန်',
    'features.auth.forgotPassword.recoverSubtitle': 'ကျေးဇူးပြု၍ သင့်အချက်အလက်ကို ထည့်သွင်းပါ၊ ကျွန်ုပ်တို့က သင့်အီးမေးလ်သို့ စကားဝှက်အသစ်ကို ပို့ပေးပါမည်',
    'features.auth.forgotPassword.selectDatabase': 'ဒေတာဘေ့စ်ရွေးချယ်ရန်',
    'features.auth.forgotPassword.username': 'အသုံးပြုသူအမည်',
    'features.auth.forgotPassword.email': 'အီးမေးလ်',
    'features.auth.forgotPassword.sendPassword': 'စကားဝှက်ပို့ရန်',
    'features.auth.forgotPassword.sending': 'အီးမေးလ်ပို့နေသည်...',
    'features.auth.forgotPassword.backToLogin': 'အကောင့်ဝင်ရန်သို့ပြန်သွားရန်',
    'features.auth.forgotPassword.successMessage': 'စကားဝှက်ကို သင့်အီးမေးလ်သို့ အောင်မြင်စွာ ပို့ပြီးပါပြီ',
    'features.auth.forgotPassword.error.usernameRequired': 'ကျေးဇူးပြု၍ အသုံးပြုသူအမည်ထည့်သွင်းပါ',
    'features.auth.forgotPassword.error.emailRequired': 'ကျေးဇူးပြု၍ အီးမေးလ်ထည့်သွင်းပါ',
    'features.auth.forgotPassword.error.emailInvalid': 'ကျေးဇူးပြု၍ မှန်ကန်သောအီးမေးလ်ထည့်သွင်းပါ',
    'features.auth.forgotPassword.error.invalidCredentials': 'အသုံးပြုသူအမည် သို့မဟုတ် အီးမေးလ် မမှန်ကန်ပါ',
    'features.auth.forgotPassword.error.sendFailed': 'စကားဝှက်ပို့၍မရပါ။ ကျေးဇူးပြု၍ ထပ်မံကြိုးစားပါ',
    'features.auth.forgotPassword.error.incompleteData': 'ကျေးဇူးပြု၍ လိုအပ်သောအချက်အလက်အားလုံးကို ဖြည့်သွင်းပါ',
    'features.auth.forgotPassword.success': 'အောင်မြင်ပါသည်',
    'features.auth.forgotPassword.error.title': 'အမှားတစ်ခုဖြစ်ပေါ်ခဲ့သည်',
    'features.auth.login.welcome': 'myHR သို့ ကြိုဆိုပါသည်',
    'features.auth.login.subtitle': 'သင့်အလုပ်ထိရောက်မှုကို မြှင့်တင်ရန် လူ့စွမ်းအားအရင်းအမြစ်စီမံခန့်ခွဲမှုစနစ်',
    'features.auth.login.title': 'အကောင့်ဝင်ရန်',
    'features.auth.login.description': 'HR စနစ်ကို အသုံးပြုရန် ကျေးဇူးပြု၍ အကောင့်ဝင်ပါ',
    'features.auth.login.username': 'အသုံးပြုသူအမည် သို့မဟုတ် အီးမေးလ်',
    'features.auth.login.password': 'စကားဝှက်',
    'features.auth.login.selectDatabase': 'ဒေတာဘေ့စ်ရွေးချယ်ရန်',
    'features.auth.login.rememberMe': 'ငါ့ကိုမှတ်ထားပါ',
    'features.auth.login.forgotPassword': 'စကားဝှက်မေ့နေပါသလား?',
    'features.auth.login.signIn': 'HR စနစ်ဖြင့် အကောင့်ဝင်ရန်',
    'features.auth.login.signingIn': 'အကောင့်ဝင်နေသည်...',
    'features.auth.login.error.usernameRequired': 'ကျေးဇူးပြု၍ အသုံးပြုသူအမည်ထည့်သွင်းပါ',
    'features.auth.login.error.passwordRequired': 'ကျေးဇူးပြု၍ စကားဝှက်ထည့်သွင်းပါ',
    'features.auth.login.error.title': 'အမှားတစ်ခုဖြစ်ပေါ်ခဲ့သည်'
  },
  vi: {
    'features.auth.unauthorized.title': 'Truy cập bị từ chối',
    'features.auth.unauthorized.message': 'Bạn không có quyền truy cập tài nguyên này.',
    'features.auth.unauthorized.goToDashboard': 'Đi tới Bảng điều khiển',
    'features.auth.unauthorized.goBack': 'Quay lại',
    'features.auth.forgotPassword.title': 'Quên mật khẩu?',
    'features.auth.forgotPassword.subtitle': 'Đừng lo lắng, chúng tôi sẽ giúp bạn khôi phục mật khẩu',
    'features.auth.forgotPassword.recoverTitle': 'Khôi phục mật khẩu',
    'features.auth.forgotPassword.recoverSubtitle': 'Vui lòng nhập thông tin của bạn, chúng tôi sẽ gửi mật khẩu mới đến email của bạn',
    'features.auth.forgotPassword.selectDatabase': 'Chọn cơ sở dữ liệu',
    'features.auth.forgotPassword.username': 'Tên người dùng',
    'features.auth.forgotPassword.email': 'Email',
    'features.auth.forgotPassword.sendPassword': 'Gửi mật khẩu',
    'features.auth.forgotPassword.sending': 'Đang gửi email...',
    'features.auth.forgotPassword.backToLogin': 'Quay lại trang đăng nhập',
    'features.auth.forgotPassword.successMessage': 'Mật khẩu đã được gửi đến email của bạn thành công',
    'features.auth.forgotPassword.error.usernameRequired': 'Vui lòng nhập tên người dùng',
    'features.auth.forgotPassword.error.emailRequired': 'Vui lòng nhập email',
    'features.auth.forgotPassword.error.emailInvalid': 'Vui lòng nhập email hợp lệ',
    'features.auth.forgotPassword.error.invalidCredentials': 'Tên người dùng hoặc email không hợp lệ',
    'features.auth.forgotPassword.error.sendFailed': 'Không thể gửi mật khẩu. Vui lòng thử lại',
    'features.auth.forgotPassword.error.incompleteData': 'Vui lòng điền đầy đủ tất cả các trường bắt buộc',
    'features.auth.forgotPassword.success': 'Thành công',
    'features.auth.forgotPassword.error.title': 'Đã xảy ra lỗi',
    'features.auth.login.welcome': 'Chào mừng đến với myHR',
    'features.auth.login.subtitle': 'Hệ thống quản lý nguồn nhân lực toàn diện để nâng cao hiệu quả công việc của bạn',
    'features.auth.login.title': 'Đăng nhập',
    'features.auth.login.description': 'Vui lòng đăng nhập để truy cập hệ thống HR',
    'features.auth.login.username': 'Tên người dùng hoặc Email',
    'features.auth.login.password': 'Mật khẩu',
    'features.auth.login.selectDatabase': 'Chọn cơ sở dữ liệu',
    'features.auth.login.rememberMe': 'Ghi nhớ tôi',
    'features.auth.login.forgotPassword': 'Quên mật khẩu?',
    'features.auth.login.signIn': 'Đăng nhập bằng hệ thống HR',
    'features.auth.login.signingIn': 'Đang đăng nhập...',
    'features.auth.login.error.usernameRequired': 'Vui lòng nhập tên người dùng',
    'features.auth.login.error.passwordRequired': 'Vui lòng nhập mật khẩu',
    'features.auth.login.error.title': 'Đã xảy ra lỗi'
  },
  zh: {
    'features.auth.unauthorized.title': '访问被拒绝',
    'features.auth.unauthorized.message': '您无权访问此资源。',
    'features.auth.unauthorized.goToDashboard': '转到仪表板',
    'features.auth.unauthorized.goBack': '返回',
    'features.auth.forgotPassword.title': '忘记密码？',
    'features.auth.forgotPassword.subtitle': '别担心，我们会帮您恢复密码',
    'features.auth.forgotPassword.recoverTitle': '恢复密码',
    'features.auth.forgotPassword.recoverSubtitle': '请输入您的信息，我们将向您的电子邮件发送新密码',
    'features.auth.forgotPassword.selectDatabase': '选择数据库',
    'features.auth.forgotPassword.username': '用户名',
    'features.auth.forgotPassword.email': '电子邮件',
    'features.auth.forgotPassword.sendPassword': '发送密码',
    'features.auth.forgotPassword.sending': '正在发送电子邮件...',
    'features.auth.forgotPassword.backToLogin': '返回登录页面',
    'features.auth.forgotPassword.successMessage': '密码已成功发送到您的电子邮件',
    'features.auth.forgotPassword.error.usernameRequired': '请输入用户名',
    'features.auth.forgotPassword.error.emailRequired': '请输入电子邮件',
    'features.auth.forgotPassword.error.emailInvalid': '请输入有效的电子邮件',
    'features.auth.forgotPassword.error.invalidCredentials': '用户名或电子邮件无效',
    'features.auth.forgotPassword.error.sendFailed': '无法发送密码。请重试',
    'features.auth.forgotPassword.error.incompleteData': '请填写所有必填字段',
    'features.auth.forgotPassword.success': '成功',
    'features.auth.forgotPassword.error.title': '发生错误',
    'features.auth.login.welcome': '欢迎使用 myHR',
    'features.auth.login.subtitle': '全面的人力资源管理系统，以提高您的工作效率',
    'features.auth.login.title': '登录',
    'features.auth.login.description': '请登录以访问 HR 系统',
    'features.auth.login.username': '用户名或电子邮件',
    'features.auth.login.password': '密码',
    'features.auth.login.selectDatabase': '选择数据库',
    'features.auth.login.rememberMe': '记住我',
    'features.auth.login.forgotPassword': '忘记密码？',
    'features.auth.login.signIn': '使用 HR 系统登录',
    'features.auth.login.signingIn': '正在登录...',
    'features.auth.login.error.usernameRequired': '请输入用户名',
    'features.auth.login.error.passwordRequired': '请输入密码',
    'features.auth.login.error.title': '发生错误'
  }
};

/**
 * Translate features.auth keys
 */
function translateFeaturesAuthKeys() {
  console.log('🔍 Loading translation files...\n');

  const thData = loadJSON(TH_FILE);
  const enData = loadJSON(EN_FILE);

  // Get all features.auth keys from th.json
  const authKeys = [];
  for (const key in thData) {
    if (key.startsWith('features.auth.')) {
      authKeys.push(key);
    }
  }

  console.log(`📊 Found ${authKeys.length} features.auth keys\n`);

  const languages = ['lo', 'my', 'vi', 'zh'];

  for (const lang of languages) {
    console.log(`\n🌐 Translating ${lang.toUpperCase()}...\n`);

    const langFile = path.join(I18N_DIR, `${lang}.json`);
    const langData = loadJSON(langFile);

    const langTranslations = translations[lang];
    let updated = 0;

    for (const key of authKeys) {
      const currentValue = langData[key]; // Use flat key access
      const translation = langTranslations[key];

      if (translation) {
        // Check if current value is English (not translated)
        const enValue = enData[key];
        const isEnglish = typeof currentValue === 'string' &&
          (currentValue === enValue ||
           !/[\u0E00-\u0E7F\u1000-\u109F\u0E80-\u0EFF\u4E00-\u9FFF]/.test(currentValue));

        if (isEnglish || !currentValue) {
          langData[key] = translation; // Use flat key assignment
          updated++;
          console.log(`✅ ${key}: "${currentValue || 'undefined'}" → "${translation}"`);
        } else {
          console.log(`⏭️  ${key}: Already translated (${currentValue})`);
        }
      } else {
        console.warn(`⚠️  No translation found for: ${key}`);
      }
    }

    console.log(`\n📊 Updated ${updated} keys in ${lang.toUpperCase()}\n`);

    // Save file
    saveJSON(langFile, langData);
  }

  console.log('✅ Translation complete!\n');
}

// Run translation
if (require.main === module) {
  try {
    translateFeaturesAuthKeys();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

module.exports = { translateFeaturesAuthKeys };

