import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, SharedModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() showBreadcrumbs: boolean = true;
  @Input() actions?: any[]; // Array of action buttons
  @Input() translateTitle: boolean = false; // If true, title will be treated as translation key
  @Input() translateSubtitle: boolean = false; // If true, subtitle will be treated as translation key
  @Input() translateDescription: boolean = false; // If true, description will be treated as translation key
}








