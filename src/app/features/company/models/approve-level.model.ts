export interface ApproveLevel {
  approvelevelid: string; // PK
  companyid: string;
  tdesc: string;
  edesc: string;
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface ApproveLevelPayload {
  approvelevelid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
}
