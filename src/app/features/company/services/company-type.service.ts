import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { CompanyType } from '../models/company-type.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyTypeService extends BaseApiService<CompanyType> {
  protected baseUrl = 'hr/company/type'; // Adjust endpoint to match backend

  // State
  loading = signal<boolean>(false);
}


