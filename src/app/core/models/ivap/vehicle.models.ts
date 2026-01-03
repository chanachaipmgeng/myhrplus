/**
 * IVAP Vehicle Models
 * Vehicle-related interfaces
 */

import { VehicleType, VehicleStatus } from './common.models';

export interface Vehicle {
  vehicle_id: string;
  company_id: string;
  member_id?: string;
  license_plate: string;
  vehicle_type: VehicleType;
  brand?: string;
  model?: string;
  color?: string;
  status: VehicleStatus;
  registered_at?: string;
  created_at: string;
  updated_at: string;
}

