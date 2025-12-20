export interface Division {
  bu1id: string;
  companyid: string;
  branchid?: string;
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
  bu1sup?: string; // Position ID (relation to mposition)
  website?: string;
  email?: string;
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface DivisionPayload {
  bu1id: string;
  companyid: string;
  branchid?: string;
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
  bu1sup?: string;
  website?: string;
  email?: string;
}

// Related tables from DBXML
export interface Branch {
  branchid: string;
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


