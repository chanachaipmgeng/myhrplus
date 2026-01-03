/**
 * IVAP Door Models
 * Door/Access Control-related interfaces
 */

import { AccessLevel } from './common.models';

export interface Door {
  door_id: string;
  company_id: string;
  door_name: string;
  door_code: string;
  location?: string;
  device_id?: string;
  access_level: AccessLevel;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

