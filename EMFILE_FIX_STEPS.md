# EMFILE Error Fix - Immediate Steps

## 🚨 ปัญหา
**Error**: `EMFILE: too many open files, open 'tailwind.config.js'`

ปัญหานี้เกิดจากระบบเปิดไฟล์มากเกินไป โดยเฉพาะใน Windows

---

## ✅ วิธีแก้ไขทันที (ทำตามลำดับ)

### Step 1: หยุด Node Processes ทั้งหมด

**PowerShell:**
```powershell
# หยุด node processes ทั้งหมด
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# ตรวจสอบว่าหยุดหมดแล้ว
Get-Process -Name node -ErrorAction SilentlyContinue
```

**Command Prompt:**
```cmd
taskkill /F /IM node.exe
```

### Step 2: ลบ Cache ทั้งหมด

```powershell
# ลบ Angular cache
Remove-Item -Recurse -Force .angular -ErrorAction SilentlyContinue

# ลบ node_modules/.cache
Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue

# ลบ dist folder
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
```

### Step 3: Restart Terminal

- ปิด terminal/command prompt ทั้งหมด
- เปิด terminal ใหม่
- `cd` ไปที่ project directory

### Step 4: เริ่ม Dev Server ใหม่

```powershell
npm start
```

---

## ⚙️ การตั้งค่าที่อัพเดทแล้ว

### 1. Polling Configuration

**angular.json:**
- `build.options.poll`: `3000` (เพิ่มจาก 2000)
- `build.configurations.development.poll`: `3000`
- `serve.options.poll`: `3000`
- `serve.configurations.development.poll`: `3000`

**package.json:**
- `start`: `--poll=3000`
- `build`: `--poll=3000`
- `build:dev`: `--poll=3000`
- `watch`: `--poll=3000`

### 2. Polling Interval

- **Before**: `2000ms` (2 วินาที)
- **After**: `3000ms` (3 วินาที)

**เหตุผล**: เพิ่ม interval เพื่อลดการเปิดไฟล์บ่อยขึ้น

---

## 🔍 ถ้ายังมีปัญหา

### Option A: เพิ่ม Polling Interval มากขึ้น

แก้ไข `angular.json` และ `package.json`:
- เปลี่ยน `poll: 3000` → `poll: 5000`
- เปลี่ยน `--poll=3000` → `--poll=5000`

### Option B: ใช้ Environment Variable

เพิ่มใน `package.json` scripts:

```json
{
  "scripts": {
    "start": "set UV_THREADPOOL_SIZE=128 && ng serve --poll=3000",
    "build": "set UV_THREADPOOL_SIZE=128 && ng build --poll=3000"
  }
}
```

### Option C: ปิดโปรแกรมอื่นๆ

- ปิด IDE/Editor ที่เปิดไฟล์มาก
- ปิด file watchers อื่นๆ
- Restart computer (ถ้าจำเป็น)

---

## 📝 Notes

- **Polling Interval**: `3000ms` (3 วินาที) - สามารถปรับได้ตามต้องการ
- **Performance Impact**: Polling อาจช้ากว่า file watching ~1-2 วินาที
- **Compatibility**: ทำงานได้ดีในทุก OS (Windows, Mac, Linux)

---

**Last Updated**: 2025-01-02  
**Status**: ✅ Fixed - Increased polling interval to 3000ms



