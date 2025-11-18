import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';

export interface Role {
  passwordMin?: number;
  passwordMax?: number;
  passwordStr?: number;
  passwordStrsm?: number;
  passwordNumber?: number;
  passwordSpecial?: number;
}

export interface SetCharacter {
  usernameId: string;
  empId: string;
  userRole: string;
  lang: string;
  role?: Role;
  expireDate?: string;
  passwordStatus?: string;
  defaultpage?: string;
}

// Employee Profile Models
export interface EmployeeProfileModel {
  employeeId?: string;
  prefix?: any;
  fname?: string;
  lname?: string;
  efname?: string;
  elname?: string;
  birthDate?: string;
  idPeople?: string;
  height?: string;
  weight?: string;
  blood?: string;
  national?: any;
  nationality?: any;
  religion?: any;
  sex?: string;
  email?: string;
  picture?: string;
  idexpdate?: string;
  passport_no?: string;
  passport_expire_date?: string;
  position?: any;
  mobile?: string;
  waistSize?: string;
  shirtSize?: string;
  hairColor?: string;
  eyeColor?: string;
  nickname?: string;
  firstHiredate?: string;
  age?: { year: number; month: number; day: number };
  telNo?: string;
  phone?: string;
  department?: string;
  division?: string;
  joinDate?: string;
  status?: {
    edesc: string;
    statusCode: string;
    tdesc: string;
  };
  getFullname?(): string;
  getFullnameEN?(): string;
  getFullnameTH?(): string;
  getPictureUrl?(): string;
  getAge?(): string;
  getStatus?(): string;
}

export interface AddressModel {
  line_no?: number;
  addr_current?: string;
  tvillage?: string;
  evillage?: string;
  taddr?: string;
  eaddr?: string;
  troad?: string;
  eroad?: string;
  troom_no?: string;
  eroom_no?: string;
  tsoi?: string;
  esoi?: string;
  district?: any;
  zipcode?: string;
  tfloor?: string;
  efloor?: string;
  tmoo?: string;
  emoo?: string;
  tsubdistrict?: string;
  esubdistrict?: string;
}

export interface FamilyModel {
  relation?: any;
  prefix?: any;
  fname?: string;
  lname?: string;
  efname?: string;
  elname?: string;
  idcard?: string;
  birthday?: string;
  statMarry?: string;
  yearMarry?: string;
  statOther?: string;
  statStudy?: string;
  occupation?: string;
  otherOccupation?: string;
  isGuarantor?: string;
  isContract?: string;
  taddr?: string;
  tvillage?: string;
  troomNo?: string;
  tfloor?: string;
  tmoo?: string;
  tsoi?: string;
  troad?: string;
  tsubdistrict?: string;
  eaddr?: string;
  evillage?: string;
  eroomNo?: string;
  efloor?: string;
  emoo?: string;
  esoi?: string;
  eroad?: string;
  esubdistrict?: string;
  tel?: string;
  fax?: string;
  guarantydate?: string;
  guarantytitle?: string;
}

export interface EmpBank {
  employeeId?: string;
  bank?: any;
  bankBranch?: string;
  accountId?: string;
}

export interface EmpCard {
  employeeId?: string;
  cardType?: any;
  activeDate?: string;
  expireDate?: string;
  cardNo?: string;
  cardDesc?: string;
  atFile?: string;
  createBy?: string;
}

export interface EducateModel {
  educIndex?: number;
  degree?: any;
  country?: string;
  faculty?: any;
  major?: any;
  gpa?: string;
  institue?: any;
  background?: string;
  honourably?: string;
  otherInstitue?: string;
  otherFaculty?: string;
  otherMajorid?: string;
  yearStart?: string;
  yearEnd?: string;
}

export interface WorkExp {
  expIndex?: number;
  companyName?: string;
  expPosition?: string;
  expFrom?: string;
  expTo?: string;
  salary?: string;
  resignReason?: string;
}

export interface Tax {
  [key: string]: any;
}

export interface WorkingsModel {
  firstHiredate?: string;
  [key: string]: any;
}

export interface MovementsModel {
  eff_date?: string;
  [key: string]: any;
}

export interface WorkPlan {
  dateId?: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) {}

  getSetPass(): Promise<SetCharacter> {
    return new Promise((resolve, reject) => {
      const url = `${environment.baseUrl}/user/manage`;
      this.http.get<SetCharacter>(url)
        .subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          }
        });
    });
  }

  // Get Employee Profile
  getEmployeeProfile(empId?: string): Observable<EmployeeProfileModel> {
    const endpoint = `${environment.apiEndpoints.employeeView}/employee/profile`;
    const params = empId ? { employeeid: empId } : undefined;
    return this.apiService.get<EmployeeProfileModel>(endpoint, params, true).pipe(
      map(response => response.data || response as any)
    );
  }

  // Get Employee Address
  getAddress(empId?: string): Observable<AddressModel[]> {
    const endpoint = `${environment.apiEndpoints.employeeView}/employee/address`;
    const params = empId ? { employeeid: empId } : undefined;
    return this.apiService.get<AddressModel[]>(endpoint, params, true).pipe(
      map(response => response.data || (Array.isArray(response) ? response : []))
    );
  }

  // Get Employee Family
  getFamily(empId?: string): Observable<FamilyModel[]> {
    const endpoint = `${environment.apiEndpoints.employeeView}/employee/family`;
    const params = empId ? { employeeid: empId } : undefined;
    return this.apiService.get<FamilyModel[]>(endpoint, params, true).pipe(
      map(response => response.data || (Array.isArray(response) ? response : []))
    );
  }

  // Get Employee Bank
  getBank(empId?: string): Observable<EmpBank[]> {
    const endpoint = empId
      ? `${environment.apiEndpoints.employeeView}/employee/bank?employeeid=${empId}`
      : `${environment.baseUrl}/employee/bank`;
    return this.http.get<EmpBank[]>(endpoint);
  }

  // Get Employee Card
  getCard(empId?: string): Observable<EmpCard[]> {
    const endpoint = `${environment.apiEndpoints.employeeView}/employee/cards`;
    const params = empId ? { employeeid: empId } : undefined;
    return this.apiService.get<EmpCard[]>(endpoint, params, true).pipe(
      map(response => response.data || (Array.isArray(response) ? response : []))
    );
  }

  // Get Employee Education
  getEducation(empId?: string): Observable<EducateModel[]> {
    const endpoint = `${environment.apiEndpoints.employeeView}/employee/educate`;
    const params = empId ? { employeeid: empId } : undefined;
    return this.apiService.get<EducateModel[]>(endpoint, params, true).pipe(
      map(response => response.data || (Array.isArray(response) ? response : []))
    );
  }

  // Get Employee Work Experience
  getWorkExp(empId?: string): Observable<WorkExp[]> {
    const endpoint = `${environment.apiEndpoints.employeeView}/employee/experience`;
    const params = empId ? { employeeid: empId } : undefined;
    return this.apiService.get<WorkExp[]>(endpoint, params, true).pipe(
      map(response => response.data || (Array.isArray(response) ? response : []))
    );
  }

  // Get Employee Tax
  getTax(empId?: string): Promise<Tax> {
    return new Promise((resolve, reject) => {
      const endpoint = empId
        ? `${environment.baseUrl}/employee/tax?employeeid=${empId}`
        : `${environment.baseUrl}/employee/tax`;
      this.http.get<Tax>(endpoint)
        .subscribe({
          next: (data) => resolve(data),
          error: (error) => reject(error)
        });
    });
  }

  // Get Work Information
  getWorkInformation(empId?: string): Observable<WorkingsModel> {
    const endpoint = `${environment.apiEndpoints.employeeView}/employee/working`;
    const params = empId ? { employeeid: empId } : undefined;
    return this.apiService.get<WorkingsModel>(endpoint, params, true).pipe(
      map(response => response.data || response as any)
    );
  }

  // Get Movements
  getMovements(empId?: string): Observable<MovementsModel[]> {
    const endpoint = `${environment.apiEndpoints.employeeView}/employee/movement`;
    const params = empId ? { employeeid: empId } : undefined;
    return this.apiService.get<MovementsModel[]>(endpoint, params, true).pipe(
      map(response => response.data || (Array.isArray(response) ? response : []))
    );
  }

  // Get Work Data (Attendance)
  getWorkData(startDate: string, endDate: string): Observable<WorkPlan[]> {
    const endpoint = `${environment.apiEndpoints.timeAttendance}/work-data`;
    const params = { startDate, endDate };
    return this.apiService.get<WorkPlan[]>(endpoint, params, true).pipe(
      map(response => response.data || (Array.isArray(response) ? response : []))
    );
  }

  // Get Hadj Position
  getHadjposition(employeeId: string, date: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const endpoint = `${environment.apiEndpoints.employeeView}/hadjposition/employee/${date}?employeeid=${employeeId}`;
      this.http.get<any>(endpoint)
        .subscribe({
          next: (data) => resolve(data),
          error: (error) => reject(error)
        });
    });
  }

  // Get Forget Card (for Edit Time Statistic)
  getForgetcard(startdate?: string, enddate?: string, page?: number, size?: number): Observable<any> {
    const endpoint = `${environment.apiEndpoints.timeAttendance}/forgetcard/start/${startdate}/end/${enddate}?page=${page || 0}&size=${size || 10}`;
    return this.http.get<any>(endpoint);
  }

  // Get OT Statistic
  getTOtMdate(startdate: string, enddate: string, page: number, size: number): Observable<any> {
    const endpoint = `${environment.apiEndpoints.timeAttendance}/ot-statistic?startDate=${startdate}&endDate=${enddate}&page=${page}&size=${size}`;
    return this.http.get<any>(endpoint);
  }

  // Get Warning By Period (for Time Warning)
  getWarningByPeriod(startdate: string, enddate: string): Observable<any> {
    const endpoint = `${environment.apiEndpoints.timeAttendance}/warning/period`;
    const params = { startDate: startdate, endDate: enddate };
    return this.apiService.get<any>(endpoint, params, true).pipe(
      map(response => response.data || (Array.isArray(response) ? response : []))
    );
  }
}

