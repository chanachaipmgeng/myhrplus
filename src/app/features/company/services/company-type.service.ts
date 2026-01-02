import { Injectable, signal } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { BaseApiService } from '@core/services';
import { CompanyType } from '../models/company-type.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyTypeService extends BaseApiService<CompanyType> {
  protected baseUrl = 'hr/company/type'; // Adjust endpoint to match backend

  // State
  loading = signal<boolean>(false);

  override getAll(params?: any): Observable<CompanyType[]> {
    const mockData: CompanyType[] = Array.from({ length: 50 }, (_, i) => ({
      codeid: `CT-${(i + 1).toString().padStart(3, '0')}`,
      tdesc: `ประเภทบริษัท ${i + 1} (Thai)`,
      edesc: `Company Type ${i + 1} (Eng)`,
      edit_date: new Date(2024, 0, 1 + i).toISOString(),
      edit_by: 'Admin',
      verified: i % 3 === 0 ? 'Y' : 'N'
    }));

    // Specific realistic examples overwriting the first few
    mockData[0] = { codeid: 'BANK', tdesc: 'ธนาคาร', edesc: 'Banking', edit_date: '2024-01-15T10:00:00Z', edit_by: 'System', verified: 'Y' };
    mockData[1] = { codeid: 'IT', tdesc: 'เทคโนโลยีสารสนเทศ', edesc: 'Information Technology', edit_date: '2024-01-16T11:30:00Z', edit_by: 'John', verified: 'Y' };
    mockData[2] = { codeid: 'MFG', tdesc: 'การผลิต', edesc: 'Manufacturing', edit_date: '2024-02-01T09:15:00Z', edit_by: 'Jane', verified: 'N' };
    mockData[3] = { codeid: 'RET', tdesc: 'ค้าปลีก', edesc: 'Retail', edit_date: '2024-02-10T14:20:00Z', edit_by: 'Admin', verified: 'Y' };
    mockData[4] = { codeid: 'GOV', tdesc: 'หน่วยงานรัฐ', edesc: 'Government', edit_date: '2024-03-05T08:45:00Z', edit_by: 'System', verified: 'Y' };
    mockData[5] = { codeid: 'EDU', tdesc: 'การศึกษา', edesc: 'Education', edit_date: '2024-03-12T16:00:00Z', edit_by: 'Admin', verified: 'Y' };
    mockData[6] = { codeid: 'HLT', tdesc: 'สุขภาพ', edesc: 'Healthcare', edit_date: '2024-04-01T10:30:00Z', edit_by: 'Nurse', verified: 'N' };
    mockData[7] = { codeid: 'AGR', tdesc: 'การเกษตร', edesc: 'Agriculture', edit_date: '2024-04-15T09:00:00Z', edit_by: 'Farmer', verified: 'Y' };
    mockData[8] = { codeid: 'LOG', tdesc: 'โลจิสติกส์', edesc: 'Logistics', edit_date: '2024-05-01T13:45:00Z', edit_by: 'Driver', verified: 'Y' };
    mockData[9] = { codeid: 'EST', tdesc: 'อสังหาริมทรัพย์', edesc: 'Real Estate', edit_date: '2024-05-20T11:15:00Z', edit_by: 'Agent', verified: 'N' };

    return of(mockData).pipe(delay(800)); // Simulate network delay
  }
}


