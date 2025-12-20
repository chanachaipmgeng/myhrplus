export interface Employee {
  employeeid: string;
  companyid: string;
  fname: string;
  lname: string;
  efname?: string;
  elname?: string;
  emp_prefix?: string;
  
  // Display Helpers
  fullname_th?: string;
  fullname_en?: string;
}


