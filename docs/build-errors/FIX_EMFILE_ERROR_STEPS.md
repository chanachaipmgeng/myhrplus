# วิธีแก้ไข EMFILE Error - Step by Step

## 🔴 ปัญหา

```
[ERROR] EMFILE: too many open files, open 'D:\Project\...\tailwind.config.js' [plugin angular-sass]
```

---

## ✅ วิธีแก้ไข (ทำตามลำดับ)

### Step 1: ปิด Dev Server ที่กำลังรันอยู่

1. กด `Ctrl + C` ใน terminal ที่รัน `ng serve`
2. รอให้ process หยุดทำงานทั้งหมด

### Step 2: ลบ Cache และ Rebuild

```bash
# ลบ node_modules และ package-lock.json (ถ้าจำเป็น)
rm -rf node_modules
rm package-lock.json

# หรือใน Windows PowerShell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall dependencies
npm install
```

### Step 3: ลบ Angular Cache

```bash
# ลบ .angular cache
rm -rf .angular

# หรือใน Windows PowerShell
Remove-Item -Recurse -Force .angular
```

### Step 4: Restart Dev Server ด้วย Polling

```bash
# ใช้ script ที่แก้ไขแล้ว
npm start

# หรือใช้ command โดยตรง
ng serve --poll=2000
```

---

## 🔧 Configuration ที่แก้ไขแล้ว

### 1. angular.json
- ✅ เพิ่ม `watchOptions` ใน build options
- ✅ เพิ่ม `poll: 2000` ใน development configuration
- ✅ เพิ่ม `poll: 2000` ใน serve options

### 2. package.json
- ✅ เพิ่ม `--poll=2000` ใน start script
- ✅ เพิ่ม `--poll=2000` ใน watch script

---

## 🚨 ถ้ายังมีปัญหา

### Option A: เพิ่ม File Descriptor Limit (Windows)

#### วิธีที่ 1: ใช้ PowerShell (Run as Administrator)

```powershell
# ตรวจสอบ current limit
wmic process where name="node.exe" get ProcessId,HandleCount

# เพิ่ม limit (ต้อง restart terminal)
[System.Environment]::SetEnvironmentVariable("UV_THREADPOOL_SIZE", "128", "User")
```

#### วิธีที่ 2: ใช้ Git Bash หรือ WSL

```bash
# เพิ่ม limit
ulimit -n 4096

# ตรวจสอบ
ulimit -n
```

### Option B: ใช้ Environment Variable

สร้างไฟล์ `.env` ใน root directory:

```env
UV_THREADPOOL_SIZE=128
NODE_OPTIONS=--max-old-space-size=4096
```

หรือเพิ่มใน `package.json` scripts:

```json
{
  "scripts": {
    "start": "set UV_THREADPOOL_SIZE=128 && ng serve --poll=2000"
  }
}
```

### Option C: ปิดโปรแกรมอื่นๆ

1. **ปิด IDE/Editor** ที่เปิดไฟล์มาก (VS Code, WebStorm, etc.)
2. **ปิด File Watchers** อื่นๆ
3. **ปิด Browser DevTools** ที่เปิดหลาย tabs
4. **Restart Terminal/Command Prompt**

### Option D: ใช้ WSL2 (Windows)

ถ้าใช้ Windows แนะนำให้ใช้ WSL2 ซึ่งมี file descriptor limit สูงกว่า:

```bash
# Install WSL2
wsl --install

# ใช้ WSL2 terminal แทน PowerShell/CMD
```

---

## 📊 ตรวจสอบว่าแก้ไขสำเร็จ

หลังจาก restart dev server แล้ว:

1. ✅ **ไม่มี EMFILE error** ใน terminal
2. ✅ **Build สำเร็จ** โดยไม่มี error
3. ✅ **Hot reload ทำงาน** (อาจช้ากว่าเดิมเล็กน้อย ~1-2 วินาที)

---

## 💡 Tips

1. **Polling Interval**: `2000ms` (2 วินาที) - สามารถปรับได้:
   - ช้ากว่า: `3000` หรือ `5000` (ลด load)
   - เร็วกว่า: `1000` (เพิ่ม load)

2. **Performance**: Polling อาจช้ากว่า file watching ~1-2 วินาที แต่เสถียรกว่า

3. **Development vs Production**: 
   - Development: ใช้ polling
   - Production: ไม่ต้องใช้ polling (build ครั้งเดียว)

---

## 🔍 Troubleshooting

### ถ้ายังมี error หลังจากทำทุกขั้นตอน:

1. **ตรวจสอบว่า restart dev server แล้ว**
   ```bash
   # Kill all node processes
   taskkill /F /IM node.exe
   
   # Restart
   npm start
   ```

2. **ตรวจสอบ disk space**
   ```bash
   # Windows
   dir
   
   # ลบไฟล์ที่ไม่จำเป็น
   ```

3. **ตรวจสอบ antivirus**
   - เพิ่ม exclusion สำหรับ project folder
   - ปิด real-time scanning ชั่วคราว

4. **ใช้ alternative build tool**
   ```bash
   # ใช้ esbuild แทน webpack (ถ้าเป็นไปได้)
   ng serve --poll=2000 --configuration development
   ```

---

**Last Updated**: 2025-01-01  
**Status**: ✅ Configuration Updated

