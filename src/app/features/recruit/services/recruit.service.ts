import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

export interface JobPosting {
  jobId?: string;
  jobCode: string;
  jobTitle: string;
  jobTitleEn?: string;
  positionId?: string;
  positionName?: string;
  department?: string;
  description?: string;
  requirements?: string;
  responsibilities?: string;
  salaryFrom?: number;
  salaryTo?: number;
  employmentType?: string;
  location?: string;
  status: string;
  postedDate?: string;
  closingDate?: string;
  numberOfPositions?: number;
  experienceRequired?: string;
  educationRequired?: string;
}

export interface JobApplication {
  applicationId?: string;
  jobId: string;
  jobTitle?: string;
  applicantId?: string;
  applicantName?: string;
  applicationDate: string;
  status: string;
  resumeUrl?: string;
  coverLetter?: string;
  expectedSalary?: number;
  availabilityDate?: string;
  remarks?: string;
}

export interface Interview {
  interviewId?: string;
  applicationId: string;
  candidateId?: string;
  candidateName?: string;
  jobId?: string;
  jobTitle?: string;
  interviewType: string;
  interviewDate: string;
  interviewTime: string;
  location?: string;
  interviewerId?: string;
  interviewerName?: string;
  status: string;
  notes?: string;
  result?: string;
  score?: number;
}

export interface Candidate {
  candidateId?: string;
  applicantId?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  positionApplied?: string;
  applicationDate?: string;
  status: string;
  resumeUrl?: string;
  coverLetter?: string;
  experience?: string;
  education?: string;
}

export interface RecruitmentStatistics {
  totalJobPostings: number;
  activeJobPostings: number;
  totalApplications: number;
  pendingApplications: number;
  scheduledInterviews: number;
  hiredCandidates: number;
}

@Injectable({
  providedIn: 'root'
})
export class RecruitService {

  constructor(private apiService: ApiService) { }

  // Job Postings
  getJobPostings(params?: any): Observable<any> {
    return this.apiService.get<JobPosting[]>(
      `${environment.apiEndpoints.recruit}/jobs`,
      params,
      true,
      'job_postings'
    );
  }

  getJobPosting(jobId: string): Observable<any> {
    return this.apiService.get<JobPosting>(
      `${environment.apiEndpoints.recruit}/jobs/${jobId}`
    );
  }

  searchJobPostings(searchTerm: string, filters?: any): Observable<any> {
    const params = {
      search: searchTerm,
      ...filters
    };
    return this.apiService.get<JobPosting[]>(
      `${environment.apiEndpoints.recruit}/jobs/search`,
      params
    );
  }

  // Job Applications
  applyForJob(jobId: string, applicationData: Partial<JobApplication>): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.recruit}/jobs/${jobId}/apply`,
      applicationData
    );
  }

  getMyApplications(params?: any): Observable<any> {
    return this.apiService.get<JobApplication[]>(
      `${environment.apiEndpoints.recruit}/applications/my`,
      params,
      true,
      'my_applications'
    );
  }

  getApplications(jobId?: string, params?: any): Observable<any> {
    const url = jobId 
      ? `${environment.apiEndpoints.recruit}/jobs/${jobId}/applications`
      : `${environment.apiEndpoints.recruit}/applications`;
    return this.apiService.get<JobApplication[]>(
      url,
      params,
      true,
      'applications'
    );
  }

  getApplication(applicationId: string): Observable<any> {
    return this.apiService.get<JobApplication>(
      `${environment.apiEndpoints.recruit}/applications/${applicationId}`
    );
  }

  updateApplicationStatus(applicationId: string, status: string, remarks?: string): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.recruit}/applications/${applicationId}/status`,
      { status, remarks }
    );
  }

  // Interview Scheduling
  getInterviews(params?: any): Observable<any> {
    return this.apiService.get<Interview[]>(
      `${environment.apiEndpoints.recruit}/interviews`,
      params,
      true,
      'interviews'
    );
  }

  scheduleInterview(interview: Interview): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.recruit}/interviews`,
      interview
    );
  }

  updateInterview(interviewId: string, interview: Partial<Interview>): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.recruit}/interviews/${interviewId}`,
      interview
    );
  }

  cancelInterview(interviewId: string, reason?: string): Observable<any> {
    return this.apiService.post(
      `${environment.apiEndpoints.recruit}/interviews/${interviewId}/cancel`,
      { reason }
    );
  }

  // Candidate Management
  getCandidates(params?: any): Observable<any> {
    return this.apiService.get<Candidate[]>(
      `${environment.apiEndpoints.recruit}/candidates`,
      params,
      true,
      'candidates'
    );
  }

  getCandidate(candidateId: string): Observable<any> {
    return this.apiService.get<Candidate>(
      `${environment.apiEndpoints.recruit}/candidates/${candidateId}`
    );
  }

  updateCandidateStatus(candidateId: string, status: string, remarks?: string): Observable<any> {
    return this.apiService.put(
      `${environment.apiEndpoints.recruit}/candidates/${candidateId}/status`,
      { status, remarks }
    );
  }

  // Recruitment Reports
  getRecruitmentStatistics(params?: any): Observable<any> {
    return this.apiService.get<RecruitmentStatistics>(
      `${environment.apiEndpoints.recruit}/reports/statistics`,
      params
    );
  }

  getRecruitmentReport(params?: any): Observable<any> {
    return this.apiService.get(
      `${environment.apiEndpoints.recruit}/reports/recruitment`,
      params
    );
  }

  exportRecruitmentReport(params: any): Observable<Blob> {
    return this.apiService.downloadFile(
      `${environment.apiEndpoints.recruit}/reports/export`,
      params
    );
  }
}

