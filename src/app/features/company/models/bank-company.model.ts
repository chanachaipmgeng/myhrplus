export interface BankCompany {
  companyid: string;
  bankid: string;
  branch: string;
  bank_branch: string;
  line_no: string;
  
  // Account Info
  account: string;
  bank_client: string;
  bank_client_thname: string;
  bank_client_engname: string;
  
  // Contact Info
  contact_person: string;
  tel: string;

  // Options (0/1 or Boolean)
  trans_ats: string;
  trans_media: string;
  trans_other: string;
  trans_other_desc?: string;
  day_disk?: string;
  day_cheque?: string;
  isdefault: string;

  // Read-only fields from relations (for display)
  bank_tdesc?: string;
  bank_edesc?: string;
}


