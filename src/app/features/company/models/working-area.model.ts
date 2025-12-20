export interface WorkingArea {
  workareaid: string; // PK
  companyid: string;
  tdesc: string;
  edesc: string;
  WEB?: string; // Website
  MAIL?: string; // Email
  DATEST?: string; // Start date
  DATEEN?: string; // End date
  OBJECTIVE?: string; // Objective
  REMARKS?: string; // Remark
  CONSOLIDATE?: string; // Consolidate
  BRAND_SUPPORT?: string; // Brand Support
  ZONETYPEID?: string; // Zone Type ID
  GROUPID?: string; // Group ID
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface WorkingAreaPayload {
  workareaid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
  WEB?: string;
  MAIL?: string;
  DATEST?: string;
  DATEEN?: string;
  OBJECTIVE?: string;
  REMARKS?: string;
  CONSOLIDATE?: string;
  BRAND_SUPPORT?: string;
  ZONETYPEID?: string;
  GROUPID?: string;
}

