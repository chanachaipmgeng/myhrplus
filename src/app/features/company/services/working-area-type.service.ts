import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { WorkingAreaType } from '../models/working-area-type.model';

@Injectable({
  providedIn: 'root'
})
export class WorkingAreaTypeService extends BaseApiService<WorkingAreaType> {
  protected baseUrl = 'hr/company/working-area-types';

  // State
  loading = signal<boolean>(false);
}

