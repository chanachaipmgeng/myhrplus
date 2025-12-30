# 🎨 Theme Toggle Component Guide
## คู่มือการใช้งาน Theme Toggle Component

**วันที่สร้าง**: 2024-12-30  
**สถานะ**: ✅ **COMPLETE** - Theme Toggle Component พร้อมใช้งาน

---

## 📋 ภาพรวม

Theme Toggle Component (`app-theme-toggle`) เป็น unified interface สำหรับจัดการ theme ทั้งหมดในแอปพลิเคชัน:
- **Theme Mode**: เลือกโหมดธีม (สว่าง/มืด/อัตโนมัติ)
- **Preset Colors**: เลือกสีธีม (8 สี)
- **Custom Color Picker**: เลือกสี Primary แบบ Custom

---

## ✨ คุณสมบัติ

### 1. Unified Interface
- ✅ **Single Button**: ปุ่มเดียว (Palette Icon) สำหรับจัดการ theme ทั้งหมด
- ✅ **Integrated Menu**: Color Menu รวม Theme Mode Selector, Preset Colors, และ Custom Color Picker
- ✅ **Consistent UX**: การทำงานเหมือนกันทั้งใน header และ demo layout

### 2. Theme Mode Selector
- ✅ **Light Mode**: โหมดสว่าง
- ✅ **Dark Mode**: โหมดมืด
- ✅ **Auto Mode**: อัตโนมัติตามระบบ
- ✅ **Available in**: Color Menu และ Custom Color Picker

### 3. Preset Colors
รองรับ 8 สีธีม:
- 🔵 Blue (น้ำเงิน) - Default
- 🟣 Indigo (คราม)
- 🟣 Purple (ม่วง)
- 🟢 Green (เขียว)
- 🟠 Orange (ส้ม)
- 🔴 Red (แดง)
- 🔵 Teal (เทาเขียว)
- 🩷 Pink (ชมพู)

### 4. Custom Color Picker
- ✅ **HTML5 Color Input**: เลือกสีด้วย visual color picker
- ✅ **Hex Text Input**: ใส่ hex color code โดยตรง
- ✅ **Real-time Preview**: แสดงสีที่เลือกทันที
- ✅ **Auto Validation**: ตรวจสอบ format ของ hex color
- ✅ **RGB Conversion**: แปลง hex เป็น RGB format อัตโนมัติ
- ✅ **Theme Mode Selector**: เลือกโหมดธีมใน color picker
- ✅ **Reset Button**: คืนค่า default theme
- ✅ **Close Button**: ปิด color picker

---

## 🚀 การใช้งาน

### ใน Header Component

```html
<!-- Header Component -->
<app-theme-toggle></app-theme-toggle>
```

### ใน Demo Layout Component

```html
<!-- Demo Layout Component -->
<app-theme-toggle></app-theme-toggle>
```

### การทำงาน

1. **คลิกปุ่ม Palette Icon** → เปิด Color Menu
2. **ใน Color Menu**:
   - เลือก **Theme Mode** (สว่าง/มืด/อัตโนมัติ)
   - เลือก **Preset Color** (8 สี)
   - คลิก **"เลือกสีเอง"** → เปิด Custom Color Picker
3. **ใน Custom Color Picker**:
   - เลือก **Theme Mode** (สว่าง/มืด/อัตโนมัติ)
   - เลือกสีด้วย **HTML5 Color Input** หรือใส่ **Hex Code**
   - ดู **Color Preview** เพื่อดูสีที่เลือก
   - คลิก **"รีเซ็ต"** → คืนค่า default theme
   - คลิก **"ปิด"** → ปิด color picker

---

## 🎨 UI Structure

### Color Menu Structure
```
┌─────────────────────────────┐
│ โหมดธีม                      │
│ [สว่าง] [มืด] [อัตโนมัติ]     │
├─────────────────────────────┤
│ สีธีม                        │
│ [🔵] [🟣] [🟣] [🟢] ...    │
├─────────────────────────────┤
│ [🎨 เลือกสีเอง] [Color Box] │
└─────────────────────────────┘
```

### Custom Color Picker Structure
```
┌─────────────────────────────┐
│ [←] เลือกสีเอง               │
├─────────────────────────────┤
│ โหมดธีม                      │
│ [สว่าง] [มืด] [อัตโนมัติ]     │
├─────────────────────────────┤
│ [Color Picker] [Hex Input]  │
│ สีปัจจุบัน: [Color Box] #... │
├─────────────────────────────┤
│ [รีเซ็ต] [ปิด]                │
└─────────────────────────────┘
```

---

## 🔧 Technical Details

### Component Properties

```typescript
export class ThemeToggleComponent {
  currentMode: ThemeMode = 'light';
  currentColor: ThemeColor = 'blue';
  showColorMenu = false;
  showColorPicker = false;
  customPrimaryColor = '#3b82f6';
  hexColorInput = '#3b82f6';
}
```

### Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| `toggleColorMenu()` | Toggle color menu visibility | - |
| `toggleColorPicker(event?)` | Toggle color picker visibility | `Event?` |
| `setMode(mode)` | Set theme mode | `ThemeMode` |
| `setColor(color)` | Set theme color | `ThemeColor` |
| `onColorPickerChange(event)` | Handle color picker change | `Event` |
| `onHexInputChange(event)` | Handle hex input change | `Event` |
| `resetTheme()` | Reset to default theme | - |

### Theme Service Integration

```typescript
// Set theme mode
this.themeService.setMode('dark');

// Set theme color
this.themeService.setColor('purple');

// Set custom primary color
this.themeService.setPrimaryColor('59, 130, 246'); // RGB format

// Reset theme
this.themeService.resetTheme();
```

---

## 🎯 Best Practices

### 1. Component Usage
- ✅ ใช้ `<app-theme-toggle>` ใน header component
- ✅ ไม่ต้อง inject `ThemeService` ใน component ที่ใช้ theme-toggle
- ✅ Theme changes จะ apply อัตโนมัติทั่วทั้งแอป

### 2. Color Selection
- ✅ ใช้สีที่ contrast ดีสำหรับ accessibility
- ✅ หลีกเลี่ยงสีที่สว่างเกินไปใน dark mode
- ✅ ทดสอบสีในทั้ง light และ dark mode

### 3. Hex Format
- ✅ ใช้ format: `#RRGGBB` (6 digits)
- ✅ ตัวอย่าง: `#3b82f6`, `#22c55e`, `#a855f7`
- ✅ ไม่รองรับ shorthand format (`#3bf`)

---

## 💾 Storage

การตั้งค่า theme ถูกบันทึกใน:
- **Location**: `localStorage`
- **Key**: `hr-theme-config`
- **Format**: 
```json
{
  "mode": "dark",
  "color": "gemini",
  "primaryColor": "59, 130, 246"
}
```

---

## 🎨 CSS Variables

Theme Toggle Component จะอัพเดท CSS variables อัตโนมัติ:
- `--primary-rgb`: RGB format (e.g., "59, 130, 246")
- `--primary-color`: Hex format (e.g., "#3b82f6")
- `--theme-color`: Theme color name (e.g., "blue", "gemini")
- `--theme-mode`: Theme mode (e.g., "light", "dark", "auto")

---

## 🔄 Theme Changes Impact

เมื่อเปลี่ยน theme ผ่าน Theme Toggle Component:
- ✅ **Sidebar**: สีเปลี่ยนอัตโนมัติ (ใช้ CSS variables)
- ✅ **Header**: สีเปลี่ยนอัตโนมัติ (ใช้ CSS variables)
- ✅ **Main Layout**: สีเปลี่ยนอัตโนมัติ (ใช้ CSS variables)
- ✅ **All Components**: สีเปลี่ยนอัตโนมัติ (ใช้ utility classes และ CSS variables)

---

## 📱 Responsive Design

- ✅ **Mobile**: Color menu และ color picker responsive
- ✅ **Tablet**: Layout ปรับตามขนาดหน้าจอ
- ✅ **Desktop**: Full functionality

---

## ♿ Accessibility

- ✅ **ARIA Labels**: ทุกปุ่มมี aria-label
- ✅ **Keyboard Navigation**: รองรับ keyboard navigation
- ✅ **Screen Reader**: รองรับ screen reader
- ✅ **Focus Indicators**: มี focus indicators ชัดเจน

---

## 🐛 Troubleshooting

### Color Picker ไม่แสดง
1. ตรวจสอบว่า `FormsModule` ถูก import แล้ว
2. ตรวจสอบว่า `showColorPicker` เป็น `true`
3. ตรวจสอบ z-index ของ color picker (`z-[100]`)

### สีไม่เปลี่ยน
1. ตรวจสอบว่า hex format ถูกต้อง (`#RRGGBB`)
2. ตรวจสอบ console สำหรับ errors
3. ตรวจสอบว่า `ThemeService` ทำงานถูกต้อง
4. ตรวจสอบว่า components ใช้ CSS variables (`var(--primary-rgb)`)

### Theme Mode ไม่เปลี่ยน
1. ตรวจสอบว่า `ThemeService.setMode()` ถูกเรียก
2. ตรวจสอบ localStorage
3. ตรวจสอบว่า `theme$` subscription ทำงาน

---

## 📖 Related Documentation

- `DARK_MODE_THEME_GUIDE.md` - Dark mode และ theme customization guide
- `THEME_COLOR_PICKER_GUIDE.md` - Color picker usage guide
- `PRIMARY_COLOR_DYNAMIC_SUPPORT.md` - Dynamic primary color implementation guide

---

## 🎉 Summary

### ✅ Features Complete
- Unified theme management interface
- Theme mode selector (integrated)
- Preset color selector (8 colors)
- Custom color picker (HTML5 + hex input)
- Reset functionality
- Auto-save to localStorage
- Real-time theme updates

### ✅ Quality
- No linter errors
- Responsive design
- Accessibility support
- Dark mode support
- Gemini theme support
- Consistent UX across layouts

---

**Last Updated**: 2024-12-30  
**Status**: ✅ **COMPLETE** - Theme Toggle Component Ready  
**Version**: 2.0.0

