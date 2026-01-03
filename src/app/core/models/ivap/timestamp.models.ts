/**
 * IVAP Timestamp Models
 * Time & Attendance timestamp-related interfaces
 */

import { TimestampType } from './common.models';

export interface EmployeeTimestamp {
  timestamp_id: string;
  company_employee_id: string;
  timestamp: string;
  timestamp_type: TimestampType;
  device_id?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
  created_at: string;
}

