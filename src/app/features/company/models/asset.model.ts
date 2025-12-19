export interface Asset {
  companyid: string;
  assetid: string;
  tdesc: string;
  edesc: string;
  astype: string; // Asset Type ID
  fine: string; // Double stored as string
  remarks?: string;
  owner?: string;
  status?: string; // ASSET_STATUS
  reservation?: string; // 0/1
  
  // Display fields
  astype_tdesc?: string;
  owner_fname?: string;
  owner_lname?: string;
}

