import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { Section } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService extends BaseApiService<Section> {
  protected baseUrl = 'hr/company/sections';

  // State
  loading = signal<boolean>(false);
}

