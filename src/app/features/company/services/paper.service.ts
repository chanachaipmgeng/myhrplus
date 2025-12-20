import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { Paper } from '../models/paper.model';

@Injectable({
  providedIn: 'root'
})
export class PaperService extends BaseApiService<Paper> {
  protected baseUrl = 'hr/company/papers';

  // State
  loading = signal<boolean>(false);
}


