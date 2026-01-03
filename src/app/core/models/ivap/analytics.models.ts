/**
 * IVAP Analytics & Monitoring Models
 * Analytics, monitoring, and dashboard-related interfaces
 */

export interface DashboardStatistics {
  total_employees: number;
  total_visitors: number;
  total_devices: number;
  active_verifications: number;
}

export interface Activity {
  activity_id: string;
  activity_type: string;
  description: string;
  user_id?: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface Alert {
  alert_id: string;
  alert_type: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  message: string;
  is_resolved: boolean;
  created_at: string;
  resolved_at?: string;
}

