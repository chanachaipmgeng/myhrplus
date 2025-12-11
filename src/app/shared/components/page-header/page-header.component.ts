import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() showBreadcrumbs: boolean = true;
  @Input() actions?: any[]; // Array of action buttons
}








