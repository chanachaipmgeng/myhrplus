import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { ApproveLevel } from '../models/approve-level.model';

@Injectable({
  providedIn: 'root'
})
export class ApproveLevelService extends BaseApiService<ApproveLevel> {
  protected baseUrl = 'hr/company/approve-levels';

  // State
  loading = signal<boolean>(false);
}
