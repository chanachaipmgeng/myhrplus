export interface Paper {
  paperid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
  jb_active?: string; // '0' or '1' for Active in Jobboard
  attachfile_active?: string; // '0' or '1' for Display Attach File on Condensed History
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  verified?: string;
}

export interface PaperPayload {
  paperid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
  jb_active?: string;
  attachfile_active?: string;
}

