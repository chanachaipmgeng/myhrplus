/**
 * IVAP Guest Models
 * Guest-related interfaces
 */

import { GuestStatus, RegistrationType } from './common.models';

export interface Guest {
  guest_id: string;
  company_id: string;
  event_id?: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone_number?: string;
  registration_type: RegistrationType;
  status: GuestStatus;
  check_in_time?: string;
  check_out_time?: string;
  created_at: string;
  updated_at: string;
}

