/**
 * Company Models
 * Models for company/organization management
 */

import { PublicType } from './common.models';

export interface Company {
  company_id: string;
  company_name: string;
  company_code: string;
  company_info: string;
  address: string;
  latitude: number;
  longitude: number;
  picture?: string;
  status: PublicType;
  owner_name: string;
  contact: string;
  created_at: string;
  updated_at: string;
}

export interface CompanyBase {
  company_name: string;
  company_code: string;
  company_info: string;
  address: string;
  latitude: number;
  longitude: number;
  picture?: string;
  status: PublicType;
  owner_name: string;
  contact: string;
}

export interface CompanyUpdate {
  company_name?: string;
  company_code?: string;
  company_info?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  picture?: string;
  status?: PublicType;
  owner_name?: string;
  contact?: string;
}

export interface CompanySettings {
  company_id: string;
  max_users: number;
  max_devices: number;
  max_storage_gb: number;
  subscription_type: string;
  features: string[];
  additional_settings: Record<string, any>;
  updated_at?: string;
  created_at?: string;
}

export interface CompanySettingsUpdate {
  max_users?: number;
  max_devices?: number;
  max_storage_gb?: number;
  subscription_type?: string;
  features?: string[];
  additional_settings?: Record<string, any>;
}

export interface CompanyStatistics {
  total_companies: number;
  public_companies: number;
  pending_companies: number;
  suspended_companies: number;
}

export interface CompanyLocation {
  location_id: string;
  company_id: string;
  location_name: string;
  address: string;
  latitude: number;
  longitude: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

