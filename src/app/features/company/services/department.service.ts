import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseApiService<Department> {
  protected baseUrl = 'hr/company/departments';

  // State
  loading = signal<boolean>(false);
}

