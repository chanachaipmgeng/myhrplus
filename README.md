# HR System Angular Migration

## Overview
This is the Angular frontend application for the HR System migration from JSP/Servlet to Angular.

## 🎨 Glass Morphism Template & Components

โปรเจคนี้ใช้ **Glass Morphism Design System** ที่ดึงมาจาก Intelligent-Video-Analytics-Platform

### Quick Links
- **[TEMPLATE_AND_COMPONENTS_GUIDE.md](./TEMPLATE_AND_COMPONENTS_GUIDE.md)** - เอกสารหลักที่ครอบคลุมทุกอย่าง
- **[COMPONENTS_INDEX.md](./COMPONENTS_INDEX.md)** - เอกสารอ้างอิง Components
- **[Demo Page](./src/app/features/demo/)** - `/demo` - หน้าแสดง components ทั้งหมด

### Components ที่มี (12 components)
- **Glass Components**: GlassCard, GlassButton, GlassInput
- **UI Components**: EmptyState, Loading, StatisticsCard, Tabs, ProgressBar, Rating, Tooltip, Modal, PageLayout

ดูรายละเอียดเพิ่มเติม: [TEMPLATE_AND_COMPONENTS_GUIDE.md](./TEMPLATE_AND_COMPONENTS_GUIDE.md)

## Project Structure

```
angular-hr-migration/
├── src/
│   ├── app/
│   │   ├── core/           # Core services, guards, interceptors
│   │   ├── shared/          # Shared components, directives, pipes
│   │   ├── features/        # Feature modules
│   │   │   ├── auth/        # Authentication module
│   │   │   ├── empview/     # Employee view module
│   │   │   ├── ta/          # Time attendance module
│   │   │   ├── personal/    # Personal information module
│   │   │   ├── payroll/     # Payroll module
│   │   │   └── ...
│   │   └── layout/          # Layout components
│   ├── assets/              # Static assets
│   ├── environments/        # Environment configurations
│   └── styles.scss          # Global styles
├── angular.json
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Development

### Development Server
The app will be available at `http://localhost:4200`

### Proxy Configuration
API calls are proxied to the backend server. See `proxy.conf.json` for configuration.

## Project Phases

- **Phase 0**: Foundation (Current)
- **Phase 1**: Core Infrastructure & Authentication
- **Phase 2**: Employee View Module
- **Phase 3**: Time Attendance Module
- **Phase 4**: Personal Information Module
- **Phase 5**: Payroll Module
- And more...

See the plan document for detailed phase information.

## Technology Stack

- **Angular**: 17+
- **Angular Material**: UI Component Library
- **Syncfusion**: Enterprise UI Components
- **Tailwind CSS**: Utility-first CSS framework
- **RxJS**: Reactive programming
- **TypeScript**: Type-safe JavaScript
- **Glass Morphism**: Modern UI design system

## Documentation

### Glass Morphism Template & Components
- **[TEMPLATE_AND_COMPONENTS_GUIDE.md](./TEMPLATE_AND_COMPONENTS_GUIDE.md)** - เอกสารหลักที่ครอบคลุมทุกอย่าง
- **[COMPONENTS_INDEX.md](./COMPONENTS_INDEX.md)** - เอกสารอ้างอิง Components
- **[GLASS_MORPHISM_COMPONENTS_ANALYSIS.md](./GLASS_MORPHISM_COMPONENTS_ANALYSIS.md)** - การวิเคราะห์ Glass Morphism Components
- **[SHARED_COMPONENTS_SUMMARY.md](./SHARED_COMPONENTS_SUMMARY.md)** - สรุป Shared Components
- **[CONFIG_UPDATE_SUMMARY.md](./CONFIG_UPDATE_SUMMARY.md)** - สรุปการอัปเดต Configuration

### Other Documentation
- [API Documentation](./API_DOCUMENTATION.md)
- [JSP Inventory](./JSP_INVENTORY.md)
- [Dependencies Analysis](./DEPENDENCIES_ANALYSIS.md)

# myhrplus
