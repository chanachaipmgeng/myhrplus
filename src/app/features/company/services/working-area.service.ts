import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { WorkingArea } from '../models/working-area.model';

@Injectable({
  providedIn: 'root'
})
export class WorkingAreaService extends BaseApiService<WorkingArea> {
  protected baseUrl = 'hr/company/working-areas';

  // State
  loading = signal<boolean>(false);
}

