import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { WorkareaBeacon } from '../models/workarea-beacon.model';

@Injectable({
  providedIn: 'root'
})
export class WorkareaBeaconService extends BaseApiService<WorkareaBeacon> {
  protected baseUrl = 'hr/company/workarea-beacons';

  // State
  loading = signal<boolean>(false);
}

