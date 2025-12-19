import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
// TODO: Create Company Model later
export interface Company {
  id: string;
  code: string;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseApiService<Company> {
  protected baseUrl = 'hr/company';

  // Global State for Company Module
  loading = signal<boolean>(false);
  activeMenu = signal<string>('dashboard');
}

