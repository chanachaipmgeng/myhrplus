export interface Team {
  bu4id: string;
  companyid: string;
  parent?: string; // Reference to MBU3 (Section)
  tdesc: string;
  edesc: string;
  tshort_name?: string;
  eshort_name?: string;
  short_name?: string;
  active: string; // '0' or '1'
  build_date?: string;
  expire_date?: string;
  objective?: string;
  remark?: string;
  extention?: string;
  consolidate?: string;
  analcode?: string;
  sort_number?: number;
  bu4sup?: string; // Position ID (relation to mposition)
  website?: string;
  email?: string;
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface TeamPayload {
  bu4id: string;
  companyid: string;
  parent?: string;
  tdesc: string;
  edesc: string;
  tshort_name?: string;
  eshort_name?: string;
  short_name?: string;
  active: string;
  build_date?: string;
  expire_date?: string;
  objective?: string;
  remark?: string;
  extention?: string;
  consolidate?: string;
  analcode?: string;
  sort_number?: number;
  bu4sup?: string;
  website?: string;
  email?: string;
}

// Related tables from DBXML
export interface Section {
  bu3id: string;
  tdesc?: string;
  edesc?: string;
  companyid?: string;
}

export interface Position {
  positionid: string;
  tdesc?: string;
  edesc?: string;
  companyid?: string;
}
