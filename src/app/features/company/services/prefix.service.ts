import { Injectable } from '@angular/core';
import { BaseApiService } from '@core/services/base-api.service';
import { Prefix } from '../models/prefix.model';

@Injectable({
  providedIn: 'root'
})
export class PrefixService extends BaseApiService<Prefix> {
  protected baseUrl = 'hr/master/prefix';
}
