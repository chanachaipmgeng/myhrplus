import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

export interface Appraisal {
  appraisalId?: string;
  employeeId: string;
  appraisalYear: number;
  appraisalPeriod: string;
  status: string;
  startDate: string;
  endDate: string;
  appraiserId?: string;
  appraiserName?: string;
  overallScore?: number;
  overallRating?: string;
  comments?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AppraisalGoal {
  goalId?: string;
  appraisalId: string;
  goalTitle: string;
  goalDescription: string;
  targetValue?: number;
  actualValue?: number;
  weight: number;
  score?: number;
  status: string;
  category?: string;
  dueDate?: string;
}

export interface AppraisalReview {
  reviewId?: string;
  appraisalId: string;
  reviewerId: string;
  reviewerName?: string;
  reviewType: string; // self, manager, peer, 360
  reviewDate: string;
  comments?: string;
  scores?: { [key: string]: number };
  status: string;
}

export interface AppraisalHistory {
  appraisalId: string;
  employeeId: string;
  employeeName?: string;
  appraisalYear: number;
  appraisalPeriod: string;
  status: string;
  overallScore?: number;
  overallRating?: string;
  completedDate?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppraisalService {

  constructor(private apiService: ApiService) { }

  // Performance Appraisal
  getAppraisals(params?: any): Observable<any> {
    return this.apiService.get<Appraisal[]>(
      `${environment.apiEndpoints.appraisal}/appraisals`,
      params,
      true,
      'appraisals'
    );
  }

  getAppraisal(appraisalId: string): Observable<any> {
    return this.apiService.get<Appraisal>(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}`
    );
  }

  createAppraisal(appraisal: Appraisal): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.appraisal}/appraisals`,
      appraisal
    );
  }

  updateAppraisal(appraisalId: string, appraisal: Partial<Appraisal>): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}`,
      appraisal
    );
  }

  submitAppraisal(appraisalId: string): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}/submit`,
      {}
    );
  }

  // Goal Setting
  getGoals(appraisalId: string): Observable<any> {
    return this.apiService.get<AppraisalGoal[]>(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}/goals`,
      null,
      true,
      `goals_${appraisalId}`
    );
  }

  createGoal(appraisalId: string, goal: AppraisalGoal): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}/goals`,
      goal
    );
  }

  updateGoal(appraisalId: string, goalId: string, goal: Partial<AppraisalGoal>): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}/goals/${goalId}`,
      goal
    );
  }

  deleteGoal(appraisalId: string, goalId: string): Observable<any> {
    return this.apiService.delete(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}/goals/${goalId}`
    );
  }

  // Review Management
  getReviews(appraisalId: string): Observable<any> {
    return this.apiService.get<AppraisalReview[]>(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}/reviews`,
      null,
      true,
      `reviews_${appraisalId}`
    );
  }

  createReview(appraisalId: string, review: AppraisalReview): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}/reviews`,
      review
    );
  }

  updateReview(appraisalId: string, reviewId: string, review: Partial<AppraisalReview>): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}/reviews/${reviewId}`,
      review
    );
  }

  submitReview(appraisalId: string, reviewId: string): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.appraisal}/appraisals/${appraisalId}/reviews/${reviewId}/submit`,
      {}
    );
  }

  // Appraisal History
  getAppraisalHistory(params?: any): Observable<any> {
    return this.apiService.get<AppraisalHistory[]>(
      `${environment.apiEndpoints.appraisal}/appraisals/history`,
      params,
      true,
      'appraisal_history'
    );
  }

  // Appraisal Reports
  getAppraisalReport(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.appraisal}/reports/appraisal`,
      params
    );
  }

  getAppraisalStatistics(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.appraisal}/reports/statistics`,
      params
    );
  }

  exportAppraisalReport(params: any): Observable<Blob> {
    return this.apiService.downloadFile(
      `${environment.apiEndpoints.appraisal}/reports/export`,
      params
    );
  }
}

