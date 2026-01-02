import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { BankCompany } from '../models/bank-company.model';

@Injectable({
  providedIn: 'root'
})
export class BankCompanyService extends BaseApiService<BankCompany> {
  protected baseUrl = 'hr/company/bank-company';

  loading = signal<boolean>(false);

  // Helper methods to get Dropdown Options
  // Helper methods to get Dropdown Options
  getBankOptions() {
    return this.apiService.getData<any[]>('hr/master/banks'); // Assumption: Master API exists
  }

  getBranchOptions() {
    return this.apiService.getData<any[]>('hr/master/branches'); // Assumption
  }
}


