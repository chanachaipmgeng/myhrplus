import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

export interface Payslip {
  payslipId?: string;
  periodMonth: number;
  periodYear: number;
  paymentDate: string;
  grossSalary: number;
  netSalary: number;
  deductions: number;
  allowances: number;
  earnings: PayslipItem[];
  deductionsList: PayslipItem[];
  tax: number;
  socialSecurity?: number;
  providentFund?: number;
  pdfUrl?: string;
}

export interface PayslipItem {
  code: string;
  description: string;
  amount: number;
  type: 'earning' | 'deduction';
}

export interface TaxInformation {
  taxId?: string;
  taxYear: number;
  taxIdNumber?: string;
  taxStatus?: string;
  totalIncome: number;
  totalDeductions: number;
  taxableIncome: number;
  taxPaid: number;
  taxRefund?: number;
  withholdingTax?: number;
}

export interface Deduction {
  deductionId?: string;
  deductionType: string;
  description: string;
  amount: number;
  startDate: string;
  endDate?: string;
  status: string;
  frequency: string; // monthly, one-time
}

export interface PayrollSummary {
  periodMonth: number;
  periodYear: number;
  totalEmployees: number;
  totalGrossSalary: number;
  totalNetSalary: number;
  totalDeductions: number;
  totalTax: number;
}

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  constructor(private apiService: ApiService) { }

  // Payslip Management
  getPayslips(params?: any): Observable<any> {
    return this.apiService.get<Payslip[]>(
      `${environment.apiEndpoints.payroll}/payslip`,
      params
    );
  }

  getPayslip(periodMonth: number, periodYear: number): Observable<any> {
    return this.apiService.get<Payslip>(
      `${environment.apiEndpoints.payroll}/payslip/${periodYear}/${periodMonth}`
    );
  }

  downloadPayslip(periodMonth: number, periodYear: number): Observable<Blob> {
    return this.apiService.downloadFile(
      `${environment.apiEndpoints.payroll}/payslip/${periodYear}/${periodMonth}/download`
    );
  }

  // Tax Information
  getTaxInformation(year?: number): Observable<any> {
    const params = year ? { year } : null;
    return this.apiService.get<TaxInformation>(
      `${environment.apiEndpoints.payroll}/tax`,
      params,
      true,
      `tax_info_${year || 'current'}`
    );
  }

  getTaxHistory(): Observable<any> {
    return this.apiService.get<TaxInformation[]>(
      `${environment.apiEndpoints.payroll}/tax/history`,
      null,
      true,
      'tax_history'
    );
  }

  downloadTaxDocument(year: number, documentType: string): Observable<Blob> {
    return this.apiService.downloadFile(
      `${environment.apiEndpoints.payroll}/tax/${year}/document/${documentType}`
    );
  }

  // Deduction Management
  getDeductions(params?: any): Observable<any> {
    return this.apiService.get<Deduction[]>(
      `${environment.apiEndpoints.payroll}/deductions`,
      params,
      true,
      'deductions'
    );
  }

  getDeductionTypes(): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.payroll}/deductions/types`,
      null,
      true,
      'deduction_types'
    );
  }

  // Payroll Reports
  getPayrollSummary(params?: any): Observable<any> {
    return this.apiService.get<PayrollSummary>(
      `${environment.apiEndpoints.payroll}/reports/summary`,
      params
    );
  }

  getPayrollReport(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.payroll}/reports/payroll`,
      params
    );
  }

  exportPayrollReport(params: any): Observable<Blob> {
    return this.apiService.downloadFile(
      `${environment.apiEndpoints.payroll}/reports/payroll/export`,
      params
    );
  }
}

