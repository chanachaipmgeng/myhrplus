/**
 * IVAP Routing Module
 * Routes สำหรับ IVAP feature module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/ivap-dashboard.component').then(m => m.IvapDashboardComponent)
  },
  // Organization Management
  {
    path: 'organization',
    loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule)
  },
  // Time & Attendance
  {
    path: 'time-attendance',
    loadChildren: () => import('./time-attendance/time-attendance.module').then(m => m.TimeAttendanceModule)
  },
  // Visitor & Guest Management
  {
    path: 'visitors',
    loadChildren: () => import('./visitors/visitors.module').then(m => m.VisitorsModule)
  },
  {
    path: 'guests',
    loadChildren: () => import('./guests/guests.module').then(m => m.GuestsModule)
  },
  // Event Management
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  // Access Control & Security
  {
    path: 'access-control',
    loadChildren: () => import('./access-control/access-control.module').then(m => m.AccessControlModule)
  },
  {
    path: 'devices',
    loadChildren: () => import('./devices/devices.module').then(m => m.DevicesModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then(m => m.VerificationModule)
  },
  // Biometric & Face Recognition
  {
    path: 'biometric',
    loadChildren: () => import('./biometric/biometric.module').then(m => m.BiometricModule)
  },
  // Vehicle & Parking
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)
  },
  {
    path: 'parking',
    loadChildren: () => import('./parking/parking.module').then(m => m.ParkingModule)
  },
  // QR Code & RFID
  {
    path: 'qr-rfid',
    loadChildren: () => import('./qr-rfid/qr-rfid.module').then(m => m.QrRfidModule)
  },
  // Notifications & Alerts
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
  },
  // Analytics & Reporting
  {
    path: 'analytics',
    loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
  },
  // Video Analytics & AI
  {
    path: 'video-ai',
    loadChildren: () => import('./video-ai/video-ai.module').then(m => m.VideoAiModule)
  },
  // System Administration
  {
    path: 'system',
    loadChildren: () => import('./system/system.module').then(m => m.SystemModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IvapRoutingModule { }

