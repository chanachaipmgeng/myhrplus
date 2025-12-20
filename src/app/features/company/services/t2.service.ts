import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { T2 } from '../models/t2.model';

@Injectable({
  providedIn: 'root'
})
export class T2Service extends BaseApiService<T2> {
  protected baseUrl = 'hr/company/t2';

  // State
  loading = signal<boolean>(false);
}

