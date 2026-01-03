/**
 * IVAP Shift Models
 * Shift-related interfaces
 */

export interface Shift {
  shift_id: string;
  company_id: string;
  shift_name: string;
  start_time: string; // HH:mm format
  end_time: string; // HH:mm format
  break_duration?: number; // minutes
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

