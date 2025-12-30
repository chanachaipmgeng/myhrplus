import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '../glass-card/glass-card.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, SpinnerComponent],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() show: boolean = true;
  @Input() message: string = '';
  @Input() containerClass: string = 'min-h-[200px]';
}




