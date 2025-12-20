export interface WorkareaLocation {
  workareaid: string; // FK to mworkarea
  companyid: string;
  line_no: number; // PK part
  tdesc: string;
  edesc: string;
  latitude?: string;
  longitude?: string;
  radius?: number;
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface WorkareaLocationPayload {
  workareaid: string;
  companyid: string;
  line_no: number;
  tdesc: string;
  edesc: string;
  latitude?: string;
  longitude?: string;
  radius?: number;
}

