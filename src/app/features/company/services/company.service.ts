import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseApiService<Company> {
  protected baseUrl = 'hr/company/companies';

  // State
  loading = signal<boolean>(false);

  // Override getAll to filter by iscompany='1'
  override getAll(params?: any) {
    const mergedParams = {
      ...params,
      iscompany: '1'
    };
    return super.getAll(mergedParams);
  }
}

