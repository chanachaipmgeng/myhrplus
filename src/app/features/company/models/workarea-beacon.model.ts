export interface WorkareaBeacon {
  workareaid: string; // FK to mworkarea
  companyid: string;
  line_no: number; // PK part
  beacon_uuid: string;
  beacon_address: string;
  beacon_name: string;
  latitude?: string;
  longitude?: string;
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface WorkareaBeaconPayload {
  workareaid: string;
  companyid: string;
  line_no: number;
  beacon_uuid: string;
  beacon_address: string;
  beacon_name: string;
  latitude?: string;
  longitude?: string;
}
