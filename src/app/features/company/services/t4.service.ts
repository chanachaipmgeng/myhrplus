import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { T4 } from '../models/t4.model';

@Injectable({
  providedIn: 'root'
})
export class T4Service extends BaseApiService<T4> {
  protected baseUrl = 'hr/company/t4';

  // State
  loading = signal<boolean>(false);
}

