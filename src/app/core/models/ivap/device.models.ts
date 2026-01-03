/**
 * IVAP Device Models
 * Device-related interfaces
 */

import { DeviceType, DeviceStatus } from './common.models';

export interface Device {
  device_id: string;
  company_id: string;
  device_name: string;
  device_type: DeviceType;
  device_model?: string;
  serial_number?: string;
  ip_address?: string;
  mac_address?: string;
  location?: string;
  status: DeviceStatus;
  is_online: boolean;
  last_seen?: string;
  created_at: string;
  updated_at: string;
}

