import { Injectable, signal } from '@angular/core';
import { BaseApiService } from '@core/services';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends BaseApiService<Team> {
  protected baseUrl = 'hr/company/teams';

  // State
  loading = signal<boolean>(false);
}

