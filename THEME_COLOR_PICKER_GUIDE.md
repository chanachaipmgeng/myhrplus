# 🎨 Theme Color Picker Guide
## คู่มือการใช้งาน Color Picker สำหรับเปลี่ยนสี Primary

**วันที่สร้าง**: 2024-12-29  
**อัพเดทล่าสุด**: 2024-12-30  
**สถานะ**: ✅ **COMPLETE** - Color Picker พร้อมใช้งานใน Theme Toggle Component

---

## 📋 ภาพรวม

Theme Toggle Component (`app-theme-toggle`) มี Color Picker แบบครบวงจรสำหรับจัดการ theme ทั้งหมด:
- **Theme Mode**: เลือกโหมดธีม (สว่าง/มืด/อัตโนมัติ)
- **Preset Colors**: เลือกสีธีม (8 สี)
- **Custom Color Picker**: เลือกสี Primary แบบ Custom โดยใช้ HTML5 color input และ text input สำหรับ hex color

---

## ✨ คุณสมบัติ

### 1. Color Picker
- ✅ HTML5 Color Input - เลือกสีด้วย visual color picker
- ✅ Hex Text Input - ใส่ hex color code โดยตรง
- ✅ Real-time Preview - แสดงสีที่เลือกทันที
- ✅ Auto Validation - ตรวจสอบ format ของ hex color
- ✅ RGB Conversion - แปลง hex เป็น RGB format อัตโนมัติ

### 2. Theme Integration
- ✅ เชื่อมต่อกับ `ThemeService.setPrimaryColor()`
- ✅ อัพเดท CSS variable `--primary-rgb` อัตโนมัติ
- ✅ บันทึกการตั้งค่าใน localStorage
- ✅ Sync กับ theme color selector

---

## 🚀 การใช้งาน

### ใน Header Component

Theme Toggle Component อยู่ใน header ของ main layout:

```html
<!-- Theme Toggle Component -->
<app-theme-toggle></app-theme-toggle>
```

### การทำงาน

1. **คลิกปุ่ม Palette Icon** - เปิด Color Menu
2. **ใน Color Menu**:
   - เลือก **Theme Mode** (สว่าง/มืด/อัตโนมัติ)
   - เลือก **Preset Color** (8 สี)
   - คลิก **"เลือกสีเอง"** - เปิด Custom Color Picker
3. **ใน Custom Color Picker**:
   - เลือก **Theme Mode** (สว่าง/มืด/อัตโนมัติ)
   - เลือกสีด้วย **HTML5 Color Input** หรือใส่ **Hex Code**
   - ดู **Color Preview** เพื่อดูสีที่เลือก
   - คลิก **"รีเซ็ต"** - คืนค่า default theme
   - คลิก **"ปิด"** - ปิด color picker
4. **สีเปลี่ยนทันที** - Theme จะอัพเดทอัตโนมัติใน sidebar, header, mainlayout
5. **บันทึกอัตโนมัติ** - การตั้งค่าถูกบันทึกใน localStorage

---

## 🔧 Technical Details

### Color Conversion

#### Hex to RGB
```typescript
private hexToRgb(hex: string): string | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `${r}, ${g}, ${b}`;
  }
  return null;
}
```

#### RGB to Hex
```typescript
private rgbToHex(rgb: string): string {
  const parts = rgb.split(',').map(p => parseInt(p.trim(), 10));
  if (parts.length === 3) {
    const r = parts[0].toString(16).padStart(2, '0');
    const g = parts[1].toString(16).padStart(2, '0');
    const b = parts[2].toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }
  return '#3b82f6'; // Default blue
}
```

### Theme Service Integration

```typescript
onCustomColorChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  let hexColor = input.value.trim();
  
  // Ensure hex color starts with #
  if (!hexColor.startsWith('#')) {
    hexColor = '#' + hexColor;
  }
  
  // Validate and apply
  if (/^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
    this.customPrimaryColor = hexColor;
    const rgb = this.hexToRgb(hexColor);
    if (rgb) {
      this.themeService.setPrimaryColor(rgb);
    }
  }
}
```

---

## 🎨 UI/UX Features

### Visual Design
- ✅ Glass morphism styling
- ✅ Dark mode support
- ✅ Gemini theme support
- ✅ Smooth animations
- ✅ Hover effects
- ✅ Focus states

### Accessibility
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus indicators

### Responsive Design
- ✅ Mobile-friendly
- ✅ Touch-optimized
- ✅ Adaptive layout

---

## 📝 Example Usage

### เปลี่ยน Theme Mode และสี Primary

1. คลิกปุ่ม **Palette Icon** ใน header
2. ใน Color Menu:
   - เลือก **Theme Mode** (เช่น "มืด")
   - เลือก **Preset Color** (เช่น "เขียว") หรือ
   - คลิก **"เลือกสีเอง"** เพื่อเปิด Custom Color Picker
3. ใน Custom Color Picker:
   - เลือก **Theme Mode** (สว่าง/มืด/อัตโนมัติ)
   - เลือกสีเขียวใน color picker หรือใส่ `#22c55e`
4. สีจะเปลี่ยนทันทีทั่วทั้งแอป (sidebar, header, mainlayout)

### เปลี่ยนสี Primary เป็นสีม่วง

1. คลิกปุ่ม **Palette Icon**
2. คลิก **"เลือกสีเอง"**
3. ใส่ hex code: `#a855f7` หรือเลือกสีใน color picker
4. สีจะอัพเดทอัตโนมัติ

### Reset Theme

1. เปิด Custom Color Picker
2. คลิกปุ่ม **"รีเซ็ต"**
3. Theme จะกลับไปเป็น default (dark mode, gemini color, primary: `#3b82f6`)

---

## 🔄 Theme Color Sync

### Theme Mode และ Color Sync

- **Theme Mode** (สว่าง/มืด/อัตโนมัติ) สามารถเลือกได้ทั้งใน Color Menu และ Custom Color Picker
- **Preset Colors** (8 สี) จะอัพเดท primary color อัตโนมัติ
- **Custom Color** จะ override preset color เมื่อเลือก
- การตั้งค่าทั้งหมด sync กันและบันทึกใน localStorage

### Color Menu และ Color Picker

- เมื่อเลือกสีจาก **Preset Colors**:
  - Custom color picker จะอัพเดทให้ตรงกับสีที่เลือก
  - สามารถ override ด้วย custom color ได้
- เมื่อเลือก **Custom Color**:
  - Preset color selector จะยังคงแสดงสีเดิม
  - Custom color จะถูกใช้แทน

---

## 💾 Storage

การตั้งค่า custom color ถูกบันทึกใน:
- **Location**: `localStorage`
- **Key**: `hr-theme-config`
- **Format**: `{ mode: 'light', color: 'blue', primaryColor: '59, 130, 246' }`

---

## 🎯 Best Practices

### 1. Color Selection
- ใช้สีที่ contrast ดีสำหรับ accessibility
- หลีกเลี่ยงสีที่สว่างเกินไปใน dark mode
- ทดสอบสีในทั้ง light และ dark mode

### 2. Hex Format
- ใช้ format: `#RRGGBB` (6 digits)
- ตัวอย่าง: `#3b82f6`, `#22c55e`, `#a855f7`
- ไม่รองรับ shorthand format (`#3bf`)

### 3. Color Validation
- Color picker จะ validate อัตโนมัติ
- Text input จะ validate format ก่อน apply
- Invalid format จะไม่ถูก apply

---

## 🐛 Troubleshooting

### สีไม่เปลี่ยน
1. ตรวจสอบว่า hex format ถูกต้อง (`#RRGGBB`)
2. ตรวจสอบ console สำหรับ errors
3. ตรวจสอบว่า `ThemeService` ทำงานถูกต้อง

### Color Picker ไม่แสดง
1. ตรวจสอบว่า `showColorPicker` เป็น `true`
2. ตรวจสอบ z-index ของ color picker
3. ตรวจสอบ CSS classes

### สีไม่ sync
1. ตรวจสอบ `theme$` subscription
2. ตรวจสอบ `rgbToHex()` conversion
3. ตรวจสอบ localStorage

---

## 📖 API Reference

### Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| `toggleColorPicker()` | Toggle color picker visibility | - |
| `onCustomColorChange(event)` | Handle color change | `Event` |
| `hexToRgb(hex)` | Convert hex to RGB | `string` |
| `rgbToHex(rgb)` | Convert RGB to hex | `string` |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `showColorPicker` | `boolean` | Color picker visibility |
| `customPrimaryColor` | `string` | Current custom color (hex) |
| `currentTheme.primaryColor` | `string` | Current primary color (hex) |

---

## 🎉 Summary

### ✅ Features Complete
- Color picker component
- Hex text input
- Real-time preview
- Theme integration
- Auto-save
- Validation

### ✅ Quality
- No linter errors
- Responsive design
- Accessibility support
- Dark mode support
- Gemini theme support

---

**Last Updated**: 2024-12-29  
**Status**: ✅ **COMPLETE** - Color Picker Ready  
**Version**: 1.0.0


