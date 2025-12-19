import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { CostCenter } from '../models/cost-center.model';

@Injectable({
  providedIn: 'root'
})
export class CostCenterService extends BaseApiService<CostCenter> {
  protected baseUrl = 'hr/company/cost-centers';

  // State
  loading = signal<boolean>(false);
}
