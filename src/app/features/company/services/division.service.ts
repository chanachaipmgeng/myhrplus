import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { Division } from '../models/division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionService extends BaseApiService<Division> {
  protected baseUrl = 'hr/company/divisions';

  // State
  loading = signal<boolean>(false);
}


