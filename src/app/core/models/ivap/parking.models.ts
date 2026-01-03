/**
 * IVAP Parking Models
 * Parking-related interfaces
 */

import { ParkingStatus } from './common.models';

export interface ParkingRecord {
  parking_id: string;
  company_id: string;
  vehicle_id: string;
  parking_slot?: string;
  entry_time: string;
  exit_time?: string;
  duration_minutes?: number;
  fee?: number;
  status: ParkingStatus;
  created_at: string;
  updated_at: string;
}

