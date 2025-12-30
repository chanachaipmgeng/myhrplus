import { Injectable } from '@angular/core';
import { BaseApiService } from '@core/services';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseApiService<Employee> {
  protected baseUrl = 'hr/master/employee';

  // Helper to get dropdown options specifically
  getOptions() {
    return this.http.get<Partial<Employee>[]>(`${this.apiUrl}/options`);
  }
}


