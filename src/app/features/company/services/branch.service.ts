import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { Branch } from '../models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService extends BaseApiService<Branch> {
  protected baseUrl = 'hr/company/branches';

  // State
  loading = signal<boolean>(false);

  // Override getAll to filter by isbranch='1'
  override getAll(params?: any) {
    const mergedParams = {
      ...params,
      isbranch: '1'
    };
    return super.getAll(mergedParams);
  }
}

