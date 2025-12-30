import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { ApiService, ApiResponse } from './api.service';

// TODO: Migrate these models from hrplus-std-rd
// import { CompanyHistoryModel, MyCompanyHistory } from '../models/companyhistory.model';
// import { MyVission, VissionModel } from '../models/vission.model';
// import { MissionModel, MyMission } from '../models/mission.model';
// import { PublicHoliday, MyHoliday } from '../models/publicHoliday.model';
// import { Holiday } from '../models/holiday.model';
// import { MyPolicy, Policy } from '../models/policy.model';

// Temporary interfaces until models are migrated
export interface CompanyHistoryModel {
  mcomId?: string;
  topic?: string;
  etopic?: string;
  tdesc?: string;
  edesc?: string;
}

export interface VissionModel {
  vissionId?: string;
  tdesc?: string;
  edesc?: string;
  years?: string;
}

export interface MissionModel {
  missionId?: string;
  tdesc?: string;
  edesc?: string;
  years?: string;
}

export interface PublicHoliday {
  holidayId?: string;
  tdesc?: string;
  edesc?: string;
  dateId?: string;
}

export interface Holiday {
  listOfDayoff?: unknown[];
  listOfPublicHoliday?: PublicHoliday[];
}

export interface Policy {
  policyId?: string;
  tdesc?: string;
  edesc?: string;
  [key: string]: unknown;
}

/**
 * Service for company-related operations
 * Handles company history, vision, mission, holidays, and policies
 */
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  // ApiService already handles baseUrl (environment.jbossUrl), so only store the endpoint paths
  private readonly baseUrl = environment.apiEndpoints.core;
  private readonly empViewBaseUrl = environment.apiEndpoints.employeeView;
  private readonly taBaseUrl = environment.apiEndpoints.timeAttendance;

  constructor(private apiService: ApiService) {}

  /**
   * Get company history
   */
  getCompanyHistory(): Observable<CompanyHistoryModel[]> {
    return this.apiService.get<CompanyHistoryModel[]>(
      `${this.baseUrl}/company/historys`
    ).pipe(
      map((response: ApiResponse<CompanyHistoryModel[]>) => {
        const data = response.data || (response as unknown as CompanyHistoryModel[]);
        const items = Array.isArray(data) ? data : [];
        return items.map((item: CompanyHistoryModel) => this.convertCompanyHistory(item));
      })
    );
  }

  /**
   * Get company vision
   */
  getVission(): Observable<VissionModel> {
    return this.apiService.get<VissionModel>(
      `${this.baseUrl}/company/vission`
    ).pipe(
      map((response: ApiResponse<VissionModel>) => {
        const data = response.data || (response as unknown as VissionModel);
        return this.convertVission(data);
      })
    );
  }

  /**
   * Get company mission
   */
  getMission(): Observable<MissionModel> {
    return this.apiService.get<MissionModel>(
      `${this.baseUrl}/company/mission`
    ).pipe(
      map((response: ApiResponse<MissionModel>) => {
        const data = response.data || (response as unknown as MissionModel);
        return this.convertMission(data);
      })
    );
  }

  /**
   * Get calendar public holidays
   */
  getCalendarPublicHoliday(): Observable<PublicHoliday[]> {
    return this.apiService.get<PublicHoliday[]>(
      `${this.empViewBaseUrl}/employee/public-holiday`
    ).pipe(
      map((response: ApiResponse<PublicHoliday[]>) => {
        const data = response.data || (response as unknown as PublicHoliday[]);
        const items = Array.isArray(data) ? data : [];
        return items.map((item: PublicHoliday) => this.convertPublicHoliday(item));
      })
    );
  }

  /**
   * Get calendar holidays (dayoff + public holidays) for date range
   */
  getCalendarHoliday(start: string, end: string): Observable<Holiday> {
    return this.apiService.get<Holiday>(
      `${this.taBaseUrl}/working-time/holiday/start/${start}/end/${end}`
    ).pipe(
      map((response: ApiResponse<Holiday>) => {
        const data = response.data || (response as unknown as Holiday);
        return this.convertHoliday(data);
      })
    );
  }

  /**
   * Get company policies
   */
  getPolicy(): Observable<Policy[]> {
    return this.apiService.get<Policy[]>(
      `${this.baseUrl}/company/policy`
    ).pipe(
      map((response: ApiResponse<Policy[]>) => {
        const data = response.data || (response as unknown as Policy[]);
        const items = Array.isArray(data) ? data : [];
        return items.map((item: Policy) => this.convertPolicy(item));
      })
    );
  }

  /**
   * Get employee public holidays
   */
  getEmployeePublicHoliday(): Observable<PublicHoliday[]> {
    // ApiService already handles baseUrl (environment.jbossUrl), so only pass the endpoint path
    // Note: This uses baseUrl (/plus) instead of jbossUrl (/hr), so we need to handle it differently
    // For now, use empViewBaseUrl which uses jbossUrl
    return this.apiService.get<PublicHoliday[]>(
      `${this.empViewBaseUrl}/employee/public-holiday`
    ).pipe(
      map((response: ApiResponse<PublicHoliday[]>) => {
        const data = response.data || (response as unknown as PublicHoliday[]);
        return Array.isArray(data) ? data : [];
      })
    );
  }

  /**
   * Get working time holidays for date range
   */
  getWorkingTimeHoliday(start: string, end: string): Observable<Holiday> {
    return this.apiService.get<Holiday>(
      `${this.taBaseUrl}/working-time/holiday/start/${start}/end/${end}`
    ).pipe(
      map((response: ApiResponse<Holiday>) => {
        const data = response.data || (response as unknown as Holiday);
        return data;
      })
    );
  }

  // Private conversion methods
  private convertCompanyHistory(dataModel: CompanyHistoryModel | unknown): CompanyHistoryModel {
    const model = dataModel as CompanyHistoryModel;
    return {
      mcomId: model.mcomId,
      topic: model.topic,
      etopic: model.etopic,
      tdesc: model.tdesc,
      edesc: model.edesc
    };
  }

  private convertHoliday(dataModel: Holiday | unknown): Holiday {
    const model = dataModel as Holiday;
    return {
      listOfDayoff: model.listOfDayoff,
      listOfPublicHoliday: model.listOfPublicHoliday
    };
  }

  private convertPublicHoliday(dataModel: PublicHoliday | unknown): PublicHoliday {
    const model = dataModel as PublicHoliday;
    return {
      holidayId: model.holidayId,
      tdesc: model.tdesc,
      edesc: model.edesc,
      dateId: model.dateId
    };
  }

  private convertVission(dataModel: VissionModel | unknown): VissionModel {
    const model = dataModel as VissionModel;
    return {
      vissionId: model.vissionId,
      tdesc: model.tdesc,
      edesc: model.edesc,
      years: model.years
    };
  }

  private convertMission(dataModel: MissionModel | unknown): MissionModel {
    const model = dataModel as MissionModel;
    return {
      missionId: model.missionId,
      tdesc: model.tdesc,
      edesc: model.edesc,
      years: model.years
    };
  }

  private convertPolicy(dataModel: Policy | unknown): Policy {
    const model = dataModel as Policy;
    return {
      ...model,
      policyId: model.policyId,
      tdesc: model.tdesc,
      edesc: model.edesc
    };
  }
}

