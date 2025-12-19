import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { ZoneType } from '../models/zone-type.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneTypeService extends BaseApiService<ZoneType> {
  protected baseUrl = 'hr/company/zone-types';

  // State
  loading = signal<boolean>(false);
}
