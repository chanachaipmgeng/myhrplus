import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { WorkingArea } from '../models/working-area.model';

@Injectable({
  providedIn: 'root'
})
export class WorkingAreaService extends BaseApiService<WorkingArea> {
  protected baseUrl = 'hr/company/working-areas';

  // State
  loading = signal<boolean>(false);
}

