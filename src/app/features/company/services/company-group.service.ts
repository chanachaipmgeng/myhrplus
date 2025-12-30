import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { CompanyGroup } from '../models/company-group.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyGroupService extends BaseApiService<CompanyGroup> {
  protected baseUrl = 'hr/company/group'; // Adjust endpoint if needed

  // State
  loading = signal<boolean>(false);
}


