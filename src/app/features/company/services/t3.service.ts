import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { T3 } from '../models/t3.model';

@Injectable({
  providedIn: 'root'
})
export class T3Service extends BaseApiService<T3> {
  protected baseUrl = 'hr/company/t3';

  // State
  loading = signal<boolean>(false);
}

