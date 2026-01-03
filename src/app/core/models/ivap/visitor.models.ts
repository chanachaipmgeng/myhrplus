/**
 * IVAP Visitor Models
 * Visitor-related interfaces
 */

import { VisitorStatus } from './common.models';

export interface Visitor {
  visitor_id: string;
  company_id: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone_number?: string;
  company_name?: string;
  purpose: string;
  host_employee_id?: string;
  check_in_time?: string;
  check_out_time?: string;
  status: VisitorStatus;
  badge_id?: string;
  created_at: string;
  updated_at: string;
}

