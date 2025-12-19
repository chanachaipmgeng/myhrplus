import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { PL } from '../models/pl.model';

@Injectable({
  providedIn: 'root'
})
export class PLService extends BaseApiService<PL> {
  protected baseUrl = 'hr/company/pls';

  // State
  loading = signal<boolean>(false);
}
