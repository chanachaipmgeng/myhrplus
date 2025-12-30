import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '@core/services';
import { Observable } from 'rxjs';
import { SpinnerComponent } from '../spinner/spinner.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit(): void {
  }
}

