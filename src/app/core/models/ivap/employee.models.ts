/**
 * IVAP Employee Models
 * Employee-related interfaces
 */

import { CompanyRoleType, EmpType } from './common.models';

export interface MemberInput {
  member_id?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  picture?: string;
}

export interface PositionInput {
  position_id: string;
  th_name: string;
  eng_name: string;
}

export interface DepartmentInput {
  department_id: string;
  th_name: string;
  eng_name: string;
}

export interface MemberResponse {
  member_id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  picture?: string;
}

export interface PositionResponse {
  position_id: string;
  th_name: string;
  eng_name: string;
}

export interface DepartmentResponse {
  department_id: string;
  th_name: string;
  eng_name: string;
}

export interface CompanyEmployee {
  company_employee_id: string;
  company_id: string;
  employee_id: string;
  member: MemberResponse;
  position?: PositionResponse;
  department?: DepartmentResponse;
  salary: number;
  boss_id: string;
  company_role_type: CompanyRoleType;
  emp_type: EmpType;
  start_date: string;
}

export interface CompanyEmployeePost {
  member: MemberInput;
  position?: PositionInput;
  department?: DepartmentInput;
  employee_id?: string;
  salary?: number;
  boss_id?: string;
  company_role_type: CompanyRoleType;
  emp_type: EmpType;
  start_date: string;
}

export interface CompanyEmployeeUpdate {
  company_employee_id: string;
  member: MemberInput;
  position?: PositionInput;
  department?: DepartmentInput;
  employee_id?: string;
  salary?: number;
  boss_id?: string;
  company_role_type: CompanyRoleType;
  emp_type: EmpType;
  start_date: string;
}

