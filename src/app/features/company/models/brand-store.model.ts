export interface BrandStore {
  brandstoreid: string; // PK
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

export interface BrandStorePayload {
  brandstoreid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
}
