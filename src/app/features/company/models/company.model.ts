export interface Company {
  branchid: string; // PK - same as companyid when iscompany='1'
  companyid: string;
  soc_branchid?: string;
  tax_branchid?: string;
  tdesc: string;
  edesc: string;
  taddr?: string;
  tvillage?: string;
  troom_no?: string;
  tfloor?: string;
  tsoi?: string;
  tmoo?: string;
  troad?: string;
  tsubdistrict?: string;
  eaddr?: string;
  evillage?: string;
  eroom_no?: string;
  efloor?: string;
  esoi?: string;
  emoo?: string;
  eroad?: string;
  esubdistrict?: string;
  zipcode?: string;
  districtid?: string;
  tel?: string;
  fax?: string;
  website?: string;
  social_code?: string;
  soc_sign_name?: string;
  soc_sign_pos?: string;
  soc_sign_img?: string;
  tax_sign_name?: string;
  tax_sign_pos?: string;
  tax_sign_img?: string;
  branch_no?: string;
  taxid?: string;
  taxid2?: string;
  consolidate?: string;
  brand_tdesc?: string;
  brand_edesc?: string;
  logo?: string;
  com_type?: string;
  iscompany: string; // '1' for company
  isbranch?: string; // '0' or empty for company
  headcompany?: string;
  branch_tax?: string;
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface CompanyPayload {
  branchid: string;
  companyid: string;
  soc_branchid?: string;
  tax_branchid?: string;
  tdesc: string;
  edesc: string;
  taddr?: string;
  tvillage?: string;
  troom_no?: string;
  tfloor?: string;
  tsoi?: string;
  tmoo?: string;
  troad?: string;
  tsubdistrict?: string;
  eaddr?: string;
  evillage?: string;
  eroom_no?: string;
  efloor?: string;
  esoi?: string;
  emoo?: string;
  eroad?: string;
  esubdistrict?: string;
  zipcode?: string;
  districtid?: string;
  tel?: string;
  fax?: string;
  website?: string;
  social_code?: string;
  soc_sign_name?: string;
  soc_sign_pos?: string;
  soc_sign_img?: string;
  tax_sign_name?: string;
  tax_sign_pos?: string;
  tax_sign_img?: string;
  branch_no?: string;
  taxid?: string;
  taxid2?: string;
  consolidate?: string;
  brand_tdesc?: string;
  brand_edesc?: string;
  logo?: string;
  com_type?: string;
  iscompany: string;
  isbranch?: string;
  headcompany?: string;
  branch_tax?: string;
}

// Related tables from DBXML
export interface ZipCode {
  zipcode: string;
  tdesc?: string;
  edesc?: string;
  districtid?: string;
  provinceid?: string;
  companyid?: string;
}

export interface District {
  districtid: string;
  tdesc?: string;
  edesc?: string;
  provinceid?: string;
  companyid?: string;
}

export interface Province {
  provinceid: string;
  short_ename?: string;
  short_tname?: string;
  long_tname?: string;
  long_ename?: string;
  companyid?: string;
}

export interface CompanyGroup {
  companyid: string;
  tname?: string;
  ename?: string;
}

export interface CompanyType {
  codeid: string;
  tdesc?: string;
  edesc?: string;
}
