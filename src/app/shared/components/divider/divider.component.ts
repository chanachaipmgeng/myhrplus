import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() text: string = ''; // Optional text label
  @Input() variant: 'default' | 'strong' | 'weak' = 'default';
}

