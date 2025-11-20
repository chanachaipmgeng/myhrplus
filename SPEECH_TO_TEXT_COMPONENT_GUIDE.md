# 🎤 Speech to Text Component Guide

**วันที่สร้าง**: 2024-12-20  
**Component**: `app-speech-to-text`  
**Library**: Syncfusion SpeechToText + Web Speech API

---

## 📋 สารบัญ

1. [Overview](#overview)
2. [Installation](#installation)
3. [Basic Usage](#basic-usage)
4. [Configuration](#configuration)
5. [API Reference](#api-reference)
6. [Examples](#examples)
7. [Styling](#styling)

---

## 🎯 Overview

`SpeechToTextComponent` เป็น wrapper component สำหรับ Syncfusion SpeechToText ที่ให้ความสามารถในการแปลงเสียงเป็นข้อความแบบ real-time พร้อม Glass Morphism styling และ Gemini theme support

### Features
- ✅ Real-time Speech Recognition
- ✅ Multiple Language Support
- ✅ Continuous Recognition
- ✅ Interim Results
- ✅ Error Handling
- ✅ Browser Compatibility Check
- ✅ Glass Morphism styling
- ✅ Dark Mode support
- ✅ Gemini Theme support
- ✅ Responsive design

---

## 📦 Installation

### Dependencies
Component นี้ใช้ Syncfusion SpeechToText ซึ่งติดตั้งแล้วในโปรเจค:
```json
"@syncfusion/ej2-angular-inputs": "^29.2.5"
```

### Browser Support
- Chrome/Edge: ✅ Full support
- Firefox: ⚠️ Limited support
- Safari: ⚠️ Limited support
- Mobile browsers: ✅ Supported

### Import
Component เป็น standalone component สามารถ import ได้โดยตรง:

```typescript
import { SpeechToTextComponent } from '../../shared/components/speech-to-text/speech-to-text.component';

@Component({
  imports: [SpeechToTextComponent]
})
```

---

## 🚀 Basic Usage

### Simple Example

```html
<app-speech-to-text
  [locale]="'en-US'"
  [showUI]="true"
  [placeholder]="'Text from speech will appear here...'">
</app-speech-to-text>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `...`
})
export class ExampleComponent {
  // Component ready to use
}
```

---

## 📋 Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `locale` | `string` | `'en-US'` | Language locale (e.g., 'en-US', 'th-TH') |
| `continuous` | `boolean` | `false` | Continuous recognition |
| `interimResults` | `boolean` | `true` | Show interim results |
| `maxAlternatives` | `number` | `1` | Maximum alternatives |
| `serviceURI` | `string` | `undefined` | Custom service URI |
| `grammars` | `string` | `undefined` | Grammar rules |
| `showUI` | `boolean` | `true` | Show UI controls |
| `value` | `string` | `''` | Initial value |
| `placeholder` | `string` | `'Text from speech...'` | Placeholder text |
| `rows` | `number` | `5` | TextArea rows |
| `cols` | `number` | `50` | TextArea columns |
| `resizeMode` | `'None' \| 'Both' \| 'Horizontal' \| 'Vertical'` | `'None'` | Resize mode |
| `readonly` | `boolean` | `false` | Read-only mode |
| `enabled` | `boolean` | `true` | Enable/disable |
| `customClass` | `string` | `''` | Custom CSS class |

---

## 🔧 Methods

### `start(): void`
Start listening

### `stop(): void`
Stop listening

### `abort(): void`
Abort recognition

### `clear(): void`
Clear text

### `isListeningNow(): boolean`
Check if currently listening

### `isSupported(): boolean`
Check if speech recognition is supported

### `getValue(): string`
Get current value

### `setValue(value: string): void`
Set value

---

## 📝 Events

| Event | Type | Description |
|-------|------|-------------|
| `transcriptChanged` | `EventEmitter<any>` | Fired when transcript changes |
| `started` | `EventEmitter<any>` | Fired when recognition starts |
| `stopped` | `EventEmitter<any>` | Fired when recognition stops |
| `error` | `EventEmitter<any>` | Fired on error |
| `valueChange` | `EventEmitter<string>` | Fired when value changes |

---

## 🎨 Examples

### Basic Example

```html
<app-speech-to-text
  [locale]="'en-US'"
  [showUI]="true">
</app-speech-to-text>
```

### With Event Handlers

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <app-speech-to-text
      [locale]="'en-US'"
      [continuous]="false"
      [interimResults]="true"
      (transcriptChanged)="onTranscriptChanged($event)"
      (started)="onStarted($event)"
      (stopped)="onStopped($event)"
      (error)="onError($event)">
    </app-speech-to-text>
  `
})
export class ExampleComponent {
  onTranscriptChanged(event: any): void {
    console.log('Transcript:', event.transcript);
  }

  onStarted(event: any): void {
    console.log('Started listening');
  }

  onStopped(event: any): void {
    console.log('Stopped listening');
  }

  onError(event: any): void {
    console.error('Error:', event.message);
  }
}
```

### Thai Language

```html
<app-speech-to-text
  [locale]="'th-TH'"
  [continuous]="true"
  [placeholder]="'พูดเพื่อแปลงเป็นข้อความ...'">
</app-speech-to-text>
```

### Programmatic Control

```typescript
import { Component, ViewChild } from '@angular/core';
import { SpeechToTextComponent } from '../../shared/components/speech-to-text/speech-to-text.component';

@Component({
  selector: 'app-example',
  template: `
    <app-speech-to-text #speechToText></app-speech-to-text>
    <button (click)="startListening()">Start</button>
    <button (click)="stopListening()">Stop</button>
  `
})
export class ExampleComponent {
  @ViewChild('speechToText') speechToText!: SpeechToTextComponent;

  startListening(): void {
    this.speechToText.start();
  }

  stopListening(): void {
    this.speechToText.stop();
  }
}
```

---

## 🎨 Styling

### Glass Morphism
Component ใช้ Glass Morphism styling โดยอัตโนมัติ:
- Light mode: `@include glass-morphism('weak', 'light')`
- Dark mode: `@include glass-morphism('weak', 'dark')`
- Gemini theme: `@include glass-gemini('weak')`

### Custom Styling
```html
<app-speech-to-text
  [locale]="'en-US'"
  customClass="my-custom-speech">
</app-speech-to-text>
```

---

## 📱 Responsive

Component รองรับ responsive design:
- Mobile: ปรับขนาด buttons และ spacing
- Tablet: ปรับ layout
- Desktop: Full features

---

## ⚠️ Important Notes

### Browser Compatibility
- **Chrome/Edge**: Full support ✅
- **Firefox**: Limited support ⚠️
- **Safari**: Limited support ⚠️
- **Mobile**: Supported ✅

### Permissions
- Component ต้องการ microphone permission
- User ต้องอนุญาตการเข้าถึง microphone

### Network
- Speech recognition ต้องการ internet connection
- ใช้ Google Speech Recognition API (Chrome/Edge)

---

## 🔗 Related Documentation

- [SPEECH_TO_TEXT_COMPONENT_SUMMARY.md](./SPEECH_TO_TEXT_COMPONENT_SUMMARY.md) - สรุปการสร้าง
- [Syncfusion SpeechToText Documentation](https://ej2.syncfusion.com/angular/documentation/speech-to-text/getting-started/)
- [Web Speech API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

---

**Maintainer**: Development Team  
**Last Updated**: 2024-12-20  
**Version**: 1.0.0

