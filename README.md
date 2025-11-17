# HR System Angular Migration

## Overview
This is the Angular frontend application for the HR System migration from JSP/Servlet to Angular.

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
- **RxJS**: Reactive programming
- **TypeScript**: Type-safe JavaScript

## Documentation

- [API Documentation](./API_DOCUMENTATION.md)
- [JSP Inventory](./JSP_INVENTORY.md)
- [Dependencies Analysis](./DEPENDENCIES_ANALYSIS.md)

# myhrplus
