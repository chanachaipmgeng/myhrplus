export interface ZoneType {
  zonetypeid: string; // PK
  companyid: string;
  tdesc: string;
  edesc: string;
  brand_support?: string; // Reference to mbrandstore
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface ZoneTypePayload {
  zonetypeid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
  brand_support?: string;
}

