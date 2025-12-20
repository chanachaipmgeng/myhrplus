export interface BranchSocialSecurity {
  branch_no: string;
  companyid: string;
  tdesc: string;
  edesc: string;
  // Thai Address
  tvillage?: string;
  troom_no?: string;
  tfloor?: string;
  taddr?: string;
  tsoi?: string;
  tmoo?: string;
  troad?: string;
  tsubdistrict?: string;
  // English Address
  evillage?: string;
  eroom_no?: string;
  efloor?: string;
  eaddr?: string;
  esoi?: string;
  emoo?: string;
  eroad?: string;
  esubdistrict?: string;
  // Location
  zipcode?: string;
  districtid?: string;
  // Contact
  tel?: string;
  fax?: string;
  // Social Security
  social_code?: string;
  social_sub_code?: string;
  soc_sign_name?: string;
  soc_sign_pos?: string;
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface BranchSocialSecurityPayload {
  branch_no: string;
  companyid: string;
  tdesc: string;
  edesc: string;
  tvillage?: string;
  troom_no?: string;
  tfloor?: string;
  taddr?: string;
  tsoi?: string;
  tmoo?: string;
  troad?: string;
  tsubdistrict?: string;
  evillage?: string;
  eroom_no?: string;
  efloor?: string;
  eaddr?: string;
  esoi?: string;
  emoo?: string;
  eroad?: string;
  esubdistrict?: string;
  zipcode?: string;
  districtid?: string;
  tel?: string;
  fax?: string;
  social_code?: string;
  social_sub_code?: string;
  soc_sign_name?: string;
  soc_sign_pos?: string;
}

// Related tables from DBXML
export interface ZipCode {
  companyid: string;
  zipcode: string;
  tdesc?: string;
  edesc?: string;
  districtid?: string;
  provinceid?: string;
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
  runno?: number;
}


