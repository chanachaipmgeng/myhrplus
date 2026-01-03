/**
 * IVAP Leave Models
 * Leave request-related interfaces
 */

import { LeaveType, LeaveStatus } from './common.models';

export interface LeaveRequest {
  leave_id: string;
  company_employee_id: string;
  leave_type: LeaveType;
  start_date: string; // ISO 8601 date
  end_date: string; // ISO 8601 date
  days: number;
  reason?: string;
  status: LeaveStatus;
  approved_by?: string;
  approved_at?: string;
  created_at: string;
  updated_at: string;
}

