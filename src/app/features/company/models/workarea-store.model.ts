export interface WorkareaStore {
  workareaid: string; // PK
  companyid: string;
  tdesc: string;
  edesc: string;
  groupid?: string; // Employee Group
  address?: string;
  provinceid?: string; // Province Code
  telphone?: string; // Telephone
  resporsible1?: string; // Supervisor 3
  resporsible2?: string; // Supervisor 2
  resporsible3?: string; // Supervisor 1
  resporsible4?: string; // RGM2
  simplified_branch?: string; // Simplified Branch
  brand_support?: string; // Brand Support (Reference to mbrandstore)
  zonetypeid?: string; // Zone Type ID (Reference to mzonetype)
  work_email?: string; // Work location E-Mail
  work_status?: string; // Work Status (Y/N)
  worktypeid?: string; // Working Area Type Code
  work_parent?: string; // Main Work Location
  store?: string; // Store ID
  consolidate?: string;
  updatergm_status?: string; // Update RGM Status
  updateboss_status?: string; // Update Boss Status
  extention?: string; // Extension Phone
  datest?: string; // Start date
  dateen?: string; // End date
  remarks?: string; // Remark
  objective?: string; // Objective
  // System fields
  edit_by?: string;
  edit_date?: string;
  edit_time?: string;
  approve?: string;
  verified?: string;
}

export interface WorkareaStorePayload {
  workareaid: string;
  companyid: string;
  tdesc: string;
  edesc: string;
  groupid?: string;
  address?: string;
  provinceid?: string;
  telphone?: string;
  resporsible1?: string;
  resporsible2?: string;
  resporsible3?: string;
  resporsible4?: string;
  simplified_branch?: string;
  brand_support?: string;
  zonetypeid?: string;
  work_email?: string;
  work_status?: string;
  worktypeid?: string;
  work_parent?: string;
  store?: string;
  consolidate?: string;
  updatergm_status?: string;
  updateboss_status?: string;
  extention?: string;
  datest?: string;
  dateen?: string;
  remarks?: string;
  objective?: string;
}

