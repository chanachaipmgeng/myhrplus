export interface WorkingAreaType {
  worktypeid: string; // PK
  companyid: string;
  tdesc: string;
  edesc: string;
  work_status?: string; // '0' or '1'
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface WorkingAreaTypePayload {
  worktypeid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
  work_status?: string;
}
