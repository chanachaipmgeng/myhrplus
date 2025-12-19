export interface CostCenter {
  costcenterid: string; // PK
  companyid: string;
  tdesc: string;
  edesc: string;
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
  runno?: number;
}

export interface CostCenterPayload {
  costcenterid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
}
