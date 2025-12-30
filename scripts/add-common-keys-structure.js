/**
 * Add Common Keys Structure Script
 * 
 * This script adds missing common keys structure to translation files
 * and organizes existing common keys into nested structure.
 * 
 * Usage:
 * node scripts/add-common-keys-structure.js
 */

const fs = require('fs');
const path = require('path');

const TH_FILE = path.join(__dirname, '../src/assets/i18n/th.json');
const EN_FILE = path.join(__dirname, '../src/assets/i18n/en.json');

// Common keys structure to add
const COMMON_KEYS_STRUCTURE = {
  th: {
    'common.actions.add': 'เพิ่ม',
    'common.actions.addNew': 'เพิ่มใหม่',
    'common.actions.edit': 'แก้ไข',
    'common.actions.delete': 'ลบ',
    'common.actions.save': 'บันทึก',
    'common.actions.cancel': 'ยกเลิก',
    'common.actions.close': 'ปิด',
    'common.actions.confirm': 'ยืนยัน',
    'common.actions.search': 'ค้นหา',
    'common.actions.reset': 'รีเซ็ต',
    'common.actions.export': 'ส่งออก',
    'common.actions.import': 'นำเข้า',
    'common.actions.download': 'ดาวน์โหลด',
    'common.actions.upload': 'อัพโหลด',
    'common.actions.select': 'เลือก',
    'common.actions.selectAll': 'เลือกทั้งหมด',
    'common.actions.clear': 'ล้าง',
    'common.actions.ok': 'ตกลง',
    'common.actions.yes': 'ใช่',
    'common.actions.no': 'ไม่',
    'common.actions.retry': 'ลองอีกครั้ง',
    'common.actions.complete': 'เสร็จสิ้น',
    'common.actions.previous': 'ย้อนกลับ',
    'common.actions.next': 'ถัดไป',
    'common.actions.optional': 'ไม่บังคับ',
    'common.actions.moreDetails': 'รายละเอียดเพิ่มเติม',
    'common.actions.transfer': 'โอน',
    'common.labels.no': 'ลำดับที่',
    'common.labels.employeeId': 'รหัสพนักงาน',
    'common.labels.name': 'ชื่อ',
    'common.labels.surname': 'นามสกุล',
    'common.labels.nameSurname': 'ชื่อ-นามสกุล',
    'common.labels.detail': 'รายละเอียด',
    'common.labels.status': 'สถานะ',
    'common.labels.actions': 'การดำเนินการ',
    'common.labels.createdDate': 'วันที่สร้าง',
    'common.labels.updatedDate': 'วันที่อัพเดท',
    'common.labels.errorCode': 'รหัสข้อผิดพลาด',
    'common.messages.success.save': 'บันทึกข้อมูลสำเร็จ',
    'common.messages.success.delete': 'ลบข้อมูลสำเร็จ',
    'common.messages.success.update': 'อัพเดทข้อมูลสำเร็จ',
    'common.messages.success.create': 'สร้างข้อมูลสำเร็จ',
    'common.messages.error.save': 'บันทึกข้อมูลไม่สำเร็จ',
    'common.messages.error.delete': 'ลบข้อมูลไม่สำเร็จ',
    'common.messages.error.load': 'โหลดข้อมูลไม่สำเร็จ',
    'common.messages.error.network': 'เกิดข้อผิดพลาดจากเครือข่าย',
    'common.messages.confirm.delete': 'คุณต้องการลบข้อมูลนี้หรือไม่?',
    'common.messages.confirm.cancel': 'คุณต้องการยกเลิกการทำงานนี้หรือไม่?',
    'common.messages.confirm.unsaved': 'คุณมีข้อมูลที่ยังไม่ได้บันทึก ต้องการออกจากหน้านี้หรือไม่?'
  },
  en: {
    'common.actions.add': 'Add',
    'common.actions.addNew': 'Add New',
    'common.actions.edit': 'Edit',
    'common.actions.delete': 'Delete',
    'common.actions.save': 'Save',
    'common.actions.cancel': 'Cancel',
    'common.actions.close': 'Close',
    'common.actions.confirm': 'Confirm',
    'common.actions.search': 'Search',
    'common.actions.reset': 'Reset',
    'common.actions.export': 'Export',
    'common.actions.import': 'Import',
    'common.actions.download': 'Download',
    'common.actions.upload': 'Upload',
    'common.actions.select': 'Select',
    'common.actions.selectAll': 'Select All',
    'common.actions.clear': 'Clear',
    'common.actions.ok': 'OK',
    'common.actions.yes': 'Yes',
    'common.actions.no': 'No',
    'common.actions.retry': 'Retry',
    'common.actions.complete': 'Complete',
    'common.actions.previous': 'Previous',
    'common.actions.next': 'Next',
    'common.actions.optional': 'Optional',
    'common.actions.moreDetails': 'More Details',
    'common.actions.transfer': 'Transfer',
    'common.labels.no': 'No.',
    'common.labels.employeeId': 'Employee ID',
    'common.labels.name': 'Name',
    'common.labels.surname': 'Surname',
    'common.labels.nameSurname': 'Name-Surname',
    'common.labels.detail': 'Detail',
    'common.labels.status': 'Status',
    'common.labels.actions': 'Actions',
    'common.labels.createdDate': 'Created Date',
    'common.labels.updatedDate': 'Updated Date',
    'common.labels.errorCode': 'Error Code',
    'common.messages.success.save': 'Data saved successfully',
    'common.messages.success.delete': 'Data deleted successfully',
    'common.messages.success.update': 'Data updated successfully',
    'common.messages.success.create': 'Data created successfully',
    'common.messages.error.save': 'Failed to save data',
    'common.messages.error.delete': 'Failed to delete data',
    'common.messages.error.load': 'Failed to load data',
    'common.messages.error.network': 'Network error occurred',
    'common.messages.confirm.delete': 'Are you sure you want to delete this item?',
    'common.messages.confirm.cancel': 'Are you sure you want to cancel this operation?',
    'common.messages.confirm.unsaved': 'You have unsaved changes. Do you want to leave this page?'
  }
};

/**
 * Add common keys structure
 */
function addCommonKeysStructure() {
  console.log('🔄 Adding common keys structure...\n');
  
  // Read files
  console.log('📖 Reading translation files...');
  const thContent = fs.readFileSync(TH_FILE, 'utf-8');
  const enContent = fs.readFileSync(EN_FILE, 'utf-8');
  
  const thData = JSON.parse(thContent);
  const enData = JSON.parse(enContent);
  
  console.log(`   th.json: ${Object.keys(thData).length} keys`);
  console.log(`   en.json: ${Object.keys(enData).length} keys\n`);
  
  // Add common keys (only if they don't exist)
  console.log('➕ Adding missing common keys...');
  let thAdded = 0;
  let enAdded = 0;
  
  for (const [key, value] of Object.entries(COMMON_KEYS_STRUCTURE.th)) {
    if (!thData[key]) {
      thData[key] = value;
      thAdded++;
    }
  }
  
  for (const [key, value] of Object.entries(COMMON_KEYS_STRUCTURE.en)) {
    if (!enData[key]) {
      enData[key] = value;
      enAdded++;
    }
  }
  
  console.log(`   th.json: Added ${thAdded} keys`);
  console.log(`   en.json: Added ${enAdded} keys\n`);
  
  // Create backup
  console.log('💾 Creating backup...');
  const backupDir = path.join(__dirname, '../backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  const timestamp = Date.now();
  fs.writeFileSync(
    path.join(backupDir, `th.json.backup.${timestamp}.json`),
    JSON.stringify(thData, null, 2),
    'utf-8'
  );
  fs.writeFileSync(
    path.join(backupDir, `en.json.backup.${timestamp}.json`),
    JSON.stringify(enData, null, 2),
    'utf-8'
  );
  console.log('   ✅ Backup created\n');
  
  // Write updated files
  console.log('💾 Writing updated files...');
  fs.writeFileSync(TH_FILE, JSON.stringify(thData, null, 2), 'utf-8');
  fs.writeFileSync(EN_FILE, JSON.stringify(enData, null, 2), 'utf-8');
  console.log('   ✅ Files updated\n');
  
  // Summary
  console.log('📊 Summary:');
  console.log(`   th.json: ${Object.keys(thData).length} keys (added ${thAdded})`);
  console.log(`   en.json: ${Object.keys(enData).length} keys (added ${enAdded})`);
  console.log('\n✅ Common keys structure added successfully!');
}

// Run
if (require.main === module) {
  try {
    addCommonKeysStructure();
  } catch (error) {
    console.error('❌ Failed:', error);
    process.exit(1);
  }
}

module.exports = { addCommonKeysStructure };

