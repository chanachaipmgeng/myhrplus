import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { BranchSocialSecurity } from '../models/branch-social-security.model';

@Injectable({
  providedIn: 'root'
})
export class BranchSocialSecurityService extends BaseApiService<BranchSocialSecurity> {
  protected baseUrl = 'hr/company/branch-social-security';

  // State
  loading = signal<boolean>(false);
}


