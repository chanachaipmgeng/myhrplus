import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

export interface WelfareBenefit {
  benefitId?: string;
  benefitCode: string;
  benefitName: string;
  benefitNameEn?: string;
  description?: string;
  category?: string;
  type?: string;
  cost?: number;
  quantity?: number;
  status: string;
  eligibility?: string;
  startDate?: string;
  endDate?: string;
  enrollmentStartDate?: string;
  enrollmentEndDate?: string;
}

export interface BenefitEnrollment {
  enrollmentId?: string;
  benefitId: string;
  employeeId: string;
  enrollmentDate: string;
  status: string;
  effectiveDate?: string;
  expiryDate?: string;
  remarks?: string;
  approvedBy?: string;
  approvedDate?: string;
}

export interface BenefitHistory {
  historyId?: string;
  benefitId: string;
  benefitName: string;
  employeeId: string;
  enrollmentDate: string;
  usageDate?: string;
  amount?: number;
  quantity?: number;
  status: string;
  remarks?: string;
}

export interface WelfareStatistics {
  totalBenefits: number;
  activeBenefits: number;
  totalEnrollments: number;
  activeEnrollments: number;
  totalCost: number;
  averageCostPerEmployee: number;
}

@Injectable({
  providedIn: 'root'
})
export class WelfareService {

  constructor(private apiService: ApiService) { }

  // Welfare Benefits
  getBenefits(params?: any): Observable<any> {
    return this.apiService.get<WelfareBenefit[]>(
      `${environment.apiEndpoints.welfare}/benefits`,
      params,
      true,
      'welfare_benefits'
    );
  }

  getBenefit(benefitId: string): Observable<any> {
    return this.apiService.get<WelfareBenefit>(
      `${environment.apiEndpoints.welfare}/benefits/${benefitId}`
    );
  }

  searchBenefits(searchTerm: string, filters?: any): Observable<any> {
    const params = {
      search: searchTerm,
      ...filters
    };
    return this.apiService.get<WelfareBenefit[]>(
      `${environment.apiEndpoints.welfare}/benefits/search`,
      params
    );
  }

  // Benefit Enrollment
  enrollInBenefit(benefitId: string, enrollmentData?: any): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.welfare}/benefits/${benefitId}/enroll`,
      enrollmentData || {}
    );
  }

  cancelEnrollment(enrollmentId: string, reason?: string): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.welfare}/enrollments/${enrollmentId}/cancel`,
      { reason }
    );
  }

  getMyEnrollments(params?: any): Observable<any> {
    return this.apiService.get<BenefitEnrollment[]>(
      `${environment.apiEndpoints.welfare}/enrollments/my`,
      params,
      true,
      'my_enrollments'
    );
  }

  getEnrollment(enrollmentId: string): Observable<any> {
    return this.apiService.get<BenefitEnrollment>(
      `${environment.apiEndpoints.welfare}/enrollments/${enrollmentId}`
    );
  }

  // Benefit History
  getBenefitHistory(params?: any): Observable<any> {
    return this.apiService.get<BenefitHistory[]>(
      `${environment.apiEndpoints.welfare}/benefits/history`,
      params,
      true,
      'benefit_history'
    );
  }

  // Welfare Reports
  getWelfareStatistics(params?: any): Observable<any> {
    return this.apiService.get<WelfareStatistics>(
      `${environment.apiEndpoints.welfare}/reports/statistics`,
      params
    );
  }

  getWelfareReport(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.welfare}/reports/welfare`,
      params
    );
  }

  exportWelfareReport(params: any): Observable<Blob> {
    return this.apiService.downloadFile(
      `${environment.apiEndpoints.welfare}/reports/export`,
      params
    );
  }
}

