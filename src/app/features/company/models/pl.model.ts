export interface PL {
  plid: string; // PK
  companyid: string;
  tdesc: string;
  edesc: string;
  jobgradeid?: string; // Reference to mjobgrade0
  band?: string;
  order_no?: number;
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface PLPayload {
  plid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
  jobgradeid?: string;
  band?: string;
  order_no?: number;
}

// Related tables from DBXML
export interface JobGrade {
  jobgradeid: string;
  tdesc?: string;
  edesc?: string;
  companyid?: string;
}
