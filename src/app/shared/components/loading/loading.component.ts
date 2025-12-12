import { Component, Input, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '../glass-card/glass-card.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, LoadingSpinnerComponent],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  isLoading = input<boolean>(false);
  message = input<string>('Loading...');
  overlay = input<boolean>(true);
  fullScreen = input<boolean>(false);
}
