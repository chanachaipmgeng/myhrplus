# Dependencies Analysis & Recommended Packages

## 📋 Overview
เอกสารนี้วิเคราะห์ dependencies ระหว่างโมดูลต่างๆ และแนะนำ packages มาตรฐานที่ควรติดตั้งสำหรับโปรเจค Angular HR Migration

---

## 🔗 Module Dependencies Graph

```
┌─────────────────────────────────────────────────────────────┐
│                    CORE MODULE                              │
│  (Auth, API, Error, Loading, Notification, Storage)        │
└─────────────────────────────────────────────────────────────┘
                            ↑
                            │ (All modules depend on Core)
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
┌───────▼────────┐  ┌───────▼────────┐  ┌───────▼────────┐
│  SHARED MODULE │  │  LAYOUT MODULE │  │ WORKFLOW MODULE│
│  (Components,  │  │  (Header,     │  │  (Core Engine)│
│   Directives,  │  │   Sidebar,     │  │               │
│   Pipes)       │  │   Footer)      │  │               │
└────────────────┘  └────────────────┘  └───────┬───────┘
        ↑                   ↑                      │
        │                   │                      │
        └───────────────────┴──────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
┌───────▼────────┐  ┌───────▼────────┐  ┌───────▼────────┐
│  COMPANY       │  │  PERSONAL      │  │  WORKFLOW     │
│  (Master Data) │  │  (Employee)    │  │  (Approval)   │
└───────┬────────┘  └───────┬────────┘  └───────┬───────┘
        │                   │                   │
        │                   │                   │
        └───────────────────┴───────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
┌───────▼────────┐  ┌───────▼────────┐  ┌───────▼────────┐
│  PAYROLL       │  │  TA            │  │  APPRAISAL    │
│  (Depends on:  │  │  (Depends on:  │  │  (Depends on: │
│   PERSONAL,    │  │   PERSONAL,    │  │   PERSONAL)   │
│   TA)          │  │   WORKFLOW)    │  │               │
└────────────────┘  └────────────────┘  └───────────────┘
        │                   │
        │                   │
┌───────▼────────┐  ┌───────▼────────┐
│  TRAINING      │  │  WELFARE       │
│  (Depends on:  │  │  (Depends on:  │
│   PERSONAL,    │  │   PERSONAL,    │
│   WORKFLOW)    │  │   WORKFLOW)    │
└────────────────┘  └────────────────┘
        │                   │
        │                   │
┌───────▼────────┐  ┌───────▼────────┐
│  RECRUIT       │  │  EMPVIEW       │
│  (Depends on:  │  │  (Read-only,   │
│   PERSONAL,    │  │   All modules) │
│   WORKFLOW)    │  │               │
└────────────────┘  └────────────────┘
```

---

## 📦 Current Dependencies Analysis

### ✅ Already Installed

#### Core Angular Packages
- `@angular/core`: ^17.0.0
- `@angular/common`: ^17.0.0
- `@angular/forms`: ^17.0.0
- `@angular/router`: ^17.0.0
- `@angular/platform-browser`: ^17.0.0
- `@angular/platform-browser-dynamic`: ^17.0.0
- `@angular/animations`: ^17.0.0
- `@angular/compiler`: ^17.0.0

#### Angular Material & CDK
- `@angular/material`: ^17.0.0
- `@angular/cdk`: ^17.0.0

#### RxJS
- `rxjs`: ~7.8.0

#### Utilities
- `tslib`: ^2.3.0
- `zone.js`: ~0.14.2

---

## 🎯 Recommended Additional Packages

### 1. HTTP & API Communication

#### ✅ Already Available (via Angular)
- `@angular/common/http` - Already included in `@angular/common`

#### 📦 Recommended Additions
```json
{
  "dependencies": {
    "@angular/common": "^17.0.0"  // Already installed
  }
}
```

**Usage**: Already implemented in `ApiService`

---

### 2. Form Validation & Management

#### ✅ Already Available
- `@angular/forms` - ReactiveFormsModule, FormsModule

#### 📦 Recommended Additions
```json
{
  "dependencies": {
    "ngx-mask": "^15.0.0",           // Input masking (phone, date, etc.)
    "ngx-strongly-typed-forms": "^1.0.0"  // Type-safe forms (optional)
  }
}
```

**Use Cases**:
- Phone number formatting
- Date input masking
- Currency formatting
- Employee ID formatting

---

### 3. Date & Time Management

#### 📦 Recommended Packages
```json
{
  "dependencies": {
    "date-fns": "^3.0.0",           // Date manipulation library
    "moment": "^2.30.0",            // Alternative: Legacy support (if needed)
    "@angular/material-moment-adapter": "^17.0.0"  // Material date adapter
  }
}
```

**Use Cases**:
- Date formatting in pipes
- Date calculations (leave balance, payroll periods)
- Time zone handling
- Date range selections

**Note**: Consider using `date-fns` over `moment` (smaller bundle size)

---

### 4. File Upload & Download

#### ✅ Already Available (via Angular)
- File upload via `FormData` in `ApiService`

#### 📦 Recommended Additions
```json
{
  "dependencies": {
    "ng2-file-upload": "^1.5.0",    // Advanced file upload
    "file-saver": "^2.0.5",          // File download helper
    "xlsx": "^0.18.5"                 // Excel file handling
  }
}
```

**Use Cases**:
- Document upload (Personal, Training, Welfare)
- Payslip download
- Report export (Excel, PDF)
- Bulk data import

---

### 5. Data Table & Grid

#### ✅ Already Available
- `@angular/material/table` - Basic table functionality

#### 📦 Recommended Additions
```json
{
  "dependencies": {
    "ag-grid-angular": "^31.0.0",    // Advanced data grid (optional)
    "ngx-datatable": "^20.0.0"       // Alternative lightweight table
  }
}
```

**Use Cases**:
- Complex data tables with sorting, filtering, grouping
- Large datasets (employee lists, payroll data)
- Export functionality

**Note**: Material Table is sufficient for most cases, but consider ag-grid for complex requirements

---

### 6. Charts & Visualization

#### 📦 Recommended Packages
```json
{
  "dependencies": {
    "ng2-charts": "^5.0.0",          // Chart.js wrapper for Angular
    "chart.js": "^4.4.0",            // Chart library
    "ngx-echarts": "^16.0.0"         // Alternative: ECharts (more features)
  }
}
```

**Use Cases**:
- Dashboard charts (leave balance, attendance statistics)
- Payroll reports visualization
- Training completion charts
- Appraisal score visualization

---

### 7. PDF Generation & Viewing

#### 📦 Recommended Packages
```json
{
  "dependencies": {
    "jspdf": "^2.5.1",               // PDF generation
    "jspdf-autotable": "^3.8.0",     // PDF tables
    "ng2-pdf-viewer": "^7.0.0"       // PDF viewer component
  }
}
```

**Use Cases**:
- Payslip generation
- Report PDF export
- Document preview
- Certificate generation

---

### 8. State Management (Optional but Recommended)

#### 📦 Recommended Packages
```json
{
  "dependencies": {
    "@ngrx/store": "^17.0.0",        // State management
    "@ngrx/effects": "^17.0.0",      // Side effects
    "@ngrx/store-devtools": "^17.0.0", // DevTools
    "@ngrx/entity": "^17.0.0"         // Entity management
  }
}
```

**Use Cases**:
- Global state management (user, permissions, menu)
- Caching API responses
- Complex state synchronization
- Undo/redo functionality

**Note**: For smaller apps, services with RxJS might be sufficient

---

### 9. Internationalization (i18n)

#### ✅ Already Available (via Angular)
- `@angular/common` includes i18n support

#### 📦 Recommended Additions
```json
{
  "dependencies": {
    "@ngx-translate/core": "^15.0.0",     // Translation service
    "@ngx-translate/http-loader": "^8.0.0" // Translation loader
  }
}
```

**Use Cases**:
- Thai/English language switching
- Dynamic content translation
- Date/number formatting by locale

---

### 10. Validation & Error Handling

#### ✅ Already Available
- Angular built-in validators

#### 📦 Recommended Additions
```json
{
  "dependencies": {
    "class-validator": "^0.14.0",        // Class-based validation
    "class-transformer": "^0.5.1"        // Object transformation
  }
}
```

**Use Cases**:
- Form validation
- API response validation
- Data transformation

---

### 11. Utilities & Helpers

#### 📦 Recommended Packages
```json
{
  "dependencies": {
    "lodash-es": "^4.17.21",         // Utility functions
    "uuid": "^9.0.1",                 // UUID generation
    "crypto-js": "^4.2.0"             // Encryption (if needed)
  }
}
```

**Use Cases**:
- Data manipulation
- ID generation
- Data encryption/decryption

---

### 12. Testing (Dev Dependencies)

#### ✅ Already Available
- `@angular/cli` includes testing setup
- `karma`, `jasmine-core`

#### 📦 Recommended Additions
```json
{
  "devDependencies": {
    "@testing-library/angular": "^16.0.0",
    "@testing-library/jest-dom": "^6.1.0",
    "jasmine-marbles": "^0.9.2",     // RxJS testing
    "ng-mocks": "^14.0.0"             // Mocking utilities
  }
}
```

---

### 13. Code Quality & Linting

#### 📦 Recommended Packages
```json
{
  "devDependencies": {
    "eslint": "^8.55.0",
    "@angular-eslint/eslint-plugin": "^17.0.0",
    "@angular-eslint/template-parser": "^17.0.0",
    "prettier": "^3.1.0",
    "husky": "^8.0.3",                // Git hooks
    "lint-staged": "^15.2.0"          // Lint on commit
  }
}
```

---

### 14. Build & Bundle Optimization

#### 📦 Recommended Packages
```json
{
  "devDependencies": {
    "webpack-bundle-analyzer": "^4.9.0",  // Bundle analysis
    "source-map-explorer": "^2.5.3"      // Source map analysis
  }
}
```

---

## 📋 Complete Recommended package.json

```json
{
  "name": "hr-angular-app",
  "version": "1.0.0",
  "description": "HR System Angular Migration",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "analyze": "ng build --stats-json && webpack-bundle-analyzer dist/hr-angular-app/stats.json"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^17.0.0",
    "@angular/common": "^17.0.0",
    "@angular/compiler": "^17.0.0",
    "@angular/core": "^17.0.0",
    "@angular/forms": "^17.0.0",
    "@angular/platform-browser": "^17.0.0",
    "@angular/platform-browser-dynamic": "^17.0.0",
    "@angular/router": "^17.0.0",
    "@angular/material": "^17.0.0",
    "@angular/cdk": "^17.0.0",
    "@angular/material-moment-adapter": "^17.0.0",
    
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.2",
    
    "date-fns": "^3.0.0",
    "ngx-mask": "^15.0.0",
    "file-saver": "^2.0.5",
    "xlsx": "^0.18.5",
    "jspdf": "^2.5.1",
    "jspdf-autotable": "^3.8.0",
    "ng2-pdf-viewer": "^7.0.0",
    "ng2-charts": "^5.0.0",
    "chart.js": "^4.4.0",
    "@ngx-translate/core": "^15.0.0",
    "@ngx-translate/http-loader": "^8.0.0",
    "lodash-es": "^4.17.21",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^17.0.0",
    "@angular/cli": "^17.0.0",
    "@angular/compiler-cli": "^17.0.0",
    "@angular-eslint/eslint-plugin": "^17.0.0",
    "@angular-eslint/template-parser": "^17.0.0",
    "@testing-library/angular": "^16.0.0",
    "@types/jasmine": "~5.1.0",
    "@types/node": "^20.10.0",
    "@types/lodash-es": "^4.17.12",
    "@types/uuid": "^9.0.7",
    "eslint": "^8.55.0",
    "jasmine-core": "~5.1.0",
    "jasmine-marbles": "^0.9.2",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "prettier": "^3.1.0",
    "typescript": "~5.2.2",
    "webpack-bundle-analyzer": "^4.9.0"
  }
}
```

---

## 🔄 Module Dependencies Details

### Core Module Dependencies
**Used by**: All modules
- `AuthService` - Authentication & authorization
- `ApiService` - HTTP communication
- `ErrorService` - Error handling
- `LoadingService` - Loading state
- `NotificationService` - User notifications
- `StorageService` - Local storage
- `MenuService` - Menu management
- `CacheService` - API caching

### Shared Module Dependencies
**Used by**: All feature modules
- Angular Material components
- Reusable components (DataTable, LoadingSpinner, etc.)
- Directives (HasRole, HasPermission, ClickOutside)
- Pipes (SafeHtml, DateFormat)

### Feature Module Dependencies

#### 1. Auth Module
**Dependencies**: Core, Shared
**Independent**: Yes

#### 2. Empview Module
**Dependencies**: Core, Shared, Layout
**Data Dependencies**: Personal, Payroll, TA (read-only)
**Independent**: Mostly (can work with mock data)

#### 3. Personal Module
**Dependencies**: Core, Shared, Layout
**Data Dependencies**: Company (master data)
**Used by**: Payroll, TA, Appraisal, Training, Welfare, Recruit

#### 4. Payroll Module
**Dependencies**: Core, Shared, Layout, Personal
**Data Dependencies**: Personal, TA
**Used by**: Empview

#### 5. TA (Time Attendance) Module
**Dependencies**: Core, Shared, Layout, Personal, Workflow
**Data Dependencies**: Personal, Company
**Used by**: Payroll, Empview

#### 6. Training Module
**Dependencies**: Core, Shared, Layout, Personal, Workflow
**Data Dependencies**: Personal
**Used by**: Empview

#### 7. Appraisal Module
**Dependencies**: Core, Shared, Layout, Personal
**Data Dependencies**: Personal
**Used by**: Empview

#### 8. Welfare Module
**Dependencies**: Core, Shared, Layout, Personal, Workflow
**Data Dependencies**: Personal
**Used by**: Empview

#### 9. Recruit Module
**Dependencies**: Core, Shared, Layout, Personal, Workflow
**Data Dependencies**: Personal
**Used by**: Empview

#### 10. Workflow Module
**Dependencies**: Core, Shared, Layout
**Used by**: TA, Personal, Training, Welfare, Recruit

#### 11. Company Module
**Dependencies**: Core, Shared, Layout
**Used by**: All modules (master data)

---

## 🎯 Installation Priority

### Phase 1: Essential (Install Now)
```bash
npm install date-fns ngx-mask file-saver xlsx
```

### Phase 2: Important (Install Before Phase 5)
```bash
npm install jspdf jspdf-autotable ng2-pdf-viewer
npm install ng2-charts chart.js
```

### Phase 3: Optional but Recommended
```bash
npm install @ngx-translate/core @ngx-translate/http-loader
npm install lodash-es uuid
```

### Phase 4: Development Tools
```bash
npm install --save-dev eslint @angular-eslint/eslint-plugin prettier
npm install --save-dev webpack-bundle-analyzer
```

---

## 📊 Bundle Size Considerations

### Large Packages (Use with Caution)
- `moment` (~70KB) - Use `date-fns` instead (~15KB)
- `lodash` (~70KB) - Use `lodash-es` with tree-shaking
- `ag-grid-angular` (~500KB) - Only if needed for complex grids

### Recommended Alternatives
- `date-fns` instead of `moment` (smaller, tree-shakeable)
- `lodash-es` instead of `lodash` (ES modules, tree-shakeable)
- Material Table instead of ag-grid (if possible)

---

## 🔒 Security Considerations

### Packages to Review
- `crypto-js` - For encryption (if needed)
- `xlsx` - For Excel file handling (review for vulnerabilities)
- `jspdf` - For PDF generation (review for vulnerabilities)

### Best Practices
1. Regularly update packages: `npm audit`
2. Use `npm audit fix` for security patches
3. Review package licenses
4. Use exact versions for critical packages

---

## 📝 Notes

1. **State Management**: Consider NgRx only if state becomes complex. Services with RxJS might be sufficient.

2. **Internationalization**: If only Thai/English is needed, Angular's built-in i18n might be sufficient. Use `@ngx-translate` for dynamic translations.

3. **Charts**: Start with `ng2-charts` (Chart.js). Consider `ngx-echarts` if more advanced features are needed.

4. **File Handling**: Basic file upload is already implemented. Add `ng2-file-upload` only if advanced features (drag-drop, progress, etc.) are needed.

5. **Testing**: Current setup is sufficient. Add testing libraries as needed.

6. **Code Quality**: ESLint and Prettier are highly recommended for team development.

---

## 🚀 Quick Start Installation

```bash
# Install all recommended packages
npm install date-fns ngx-mask file-saver xlsx jspdf jspdf-autotable ng2-pdf-viewer ng2-charts chart.js @ngx-translate/core @ngx-translate/http-loader lodash-es uuid

# Install dev dependencies
npm install --save-dev eslint @angular-eslint/eslint-plugin @angular-eslint/template-parser prettier webpack-bundle-analyzer

# Install type definitions
npm install --save-dev @types/lodash-es @types/uuid
```

---

## 📚 Additional Resources

- [Angular Material Components](https://material.angular.io/components)
- [RxJS Documentation](https://rxjs.dev/)
- [date-fns Documentation](https://date-fns.org/)
- [Chart.js Documentation](https://www.chartjs.org/)
- [NgRx Documentation](https://ngrx.io/) (if using state management)

