# ESBuild EMFILE Error Fix

## 📋 ปัญหา

**Error**: `EMFILE: too many open files`

ปัญหานี้เกิดจากระบบเปิดไฟล์มากเกินไป โดยเฉพาะใน Windows ที่มี file descriptor limit ต่ำ

---

## ✅ วิธีแก้ไข

### 1. เพิ่ม Polling Configuration ใน angular.json

เพิ่ม `"poll": 2000` ใน build และ serve configurations เพื่อใช้ polling แทน file watching

**Files Modified**:
- `angular.json` - เพิ่ม polling configuration

**Benefits**:
- ลดจำนวน file descriptors ที่ใช้
- หลีกเลี่ยงปัญหา EMFILE error
- ทำงานได้ดีใน Windows

---

### 2. วิธีแก้ไขเพิ่มเติม (ถ้ายังมีปัญหา)

#### Option A: เพิ่ม File Descriptor Limit (Windows)

```powershell
# ตรวจสอบ current limit
wmic process where name="node.exe" get ProcessId,HandleCount

# เพิ่ม limit โดยใช้ ulimit (ถ้าใช้ Git Bash หรือ WSL)
ulimit -n 4096
```

#### Option B: ใช้ Environment Variable

เพิ่มใน `package.json` scripts:

```json
{
  "scripts": {
    "start": "set UV_THREADPOOL_SIZE=128 && ng serve",
    "build": "set UV_THREADPOOL_SIZE=128 && ng build"
  }
}
```

หรือใน Linux/Mac:

```json
{
  "scripts": {
    "start": "UV_THREADPOOL_SIZE=128 ng serve",
    "build": "UV_THREADPOOL_SIZE=128 ng build"
  }
}
```

#### Option C: ปิดโปรแกรมอื่นๆ

- ปิด IDE/Editor ที่เปิดไฟล์มาก
- ปิด file watchers อื่นๆ
- Restart terminal/command prompt

#### Option D: ใช้ WSL2 (Windows)

ถ้าใช้ Windows แนะนำให้ใช้ WSL2 ซึ่งมี file descriptor limit สูงกว่า

---

## 🔍 การตรวจสอบ

หลังจากแก้ไขแล้ว:

1. **Restart dev server**: `npm start` หรือ `ng serve`
2. **ตรวจสอบ error**: ควรไม่มี EMFILE error
3. **ตรวจสอบ performance**: Polling อาจช้ากว่า file watching เล็กน้อย

---

## 📝 Notes

- **Polling Interval**: `2000ms` (2 วินาที) - สามารถปรับได้ตามต้องการ
- **Performance Impact**: Polling อาจช้ากว่า file watching ~1-2 วินาที
- **Compatibility**: ทำงานได้ดีในทุก OS (Windows, Mac, Linux)

---

**Last Updated**: 2025-01-02  
**Status**: ✅ Fixed - Added polling in build.options (top level)

