# Setup Instructions

## Prerequisites

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (v9 or higher) - comes with Node.js
   - Verify installation: `npm --version`

3. **Angular CLI** (v17 or higher)
   - Install globally: `npm install -g @angular/cli`
   - Verify installation: `ng version`

## Installation Steps

1. **Navigate to project directory**
   ```bash
   cd angular-hr-migration
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

## Development

### Running the Application

```bash
# Development server with hot reload
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

### Proxy Configuration

The application uses a proxy configuration to forward API requests to the backend server. The proxy configuration is in `proxy.conf.json`.

To use the proxy, start the dev server with:
```bash
ng serve --proxy-config proxy.conf.json
```

Or update `angular.json` to include the proxy config in the serve options.

### Environment Configuration

Environment files are located in `src/environments/`:
- `environment.ts` - Development environment
- `environment.prod.ts` - Production environment

Update the `apiBaseUrl` in these files to match your backend server URL.

## Project Structure

```
angular-hr-migration/
├── src/
│   ├── app/
│   │   ├── core/              # Core services, guards, interceptors
│   │   ├── shared/            # Shared components, directives, pipes
│   │   ├── features/          # Feature modules
│   │   └── layout/            # Layout components
│   ├── assets/                # Static assets
│   ├── environments/          # Environment configurations
│   └── styles.scss            # Global styles
├── angular.json               # Angular CLI configuration
├── package.json               # Dependencies
└── tsconfig.json             # TypeScript configuration
```

## Next Steps

1. **Configure API endpoints** in `src/environments/environment.ts`
2. **Update proxy configuration** in `proxy.conf.json` if needed
3. **Start implementing Phase 1** features (Authentication & Core Infrastructure)
4. **Review API documentation** in `API_DOCUMENTATION.md`

## Troubleshooting

### Port already in use
If port 4200 is already in use:
```bash
ng serve --port 4201
```

### Module not found errors
```bash
npm install
```

### Build errors
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [RxJS Documentation](https://rxjs.dev/)

