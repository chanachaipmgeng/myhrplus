export const environment = {
  production: false,
  // IVAP API Base URLs
  baseUrl: 'http://localhost:8000',              // IVAP API base URL (development)
  apiVersion: '/api/v1',                          // API version path
  rootUrl: 'http://localhost:8000',               // Root URL without path

  // Legacy support - keep for backward compatibility (if needed)
  apiBaseUrl: 'http://localhost:8000/api/v1',    // Full API base URL

  // IVAP API Endpoints
  apiEndpoints: {
    auth: '/auth',
    companies: '/companies',
    employees: '/employees',
    visitors: '/visitors',
    guests: '/guests',
    events: '/events',
    vehicles: '/vehicles',
    parking: '/parking',
    devices: '/devices',
    doors: '/doors',
    timestamps: '/timestamps',
    shifts: '/shifts',
    leaves: '/leaves',
    accessControl: '/access-control',
    verification: '/verification',
    analytics: '/analytics',
    monitoring: '/monitoring',
    alerts: '/alerts',
    system: '/system'
  },
  appName: 'IVAP Frontend',
  version: '1.0.0'
};

