import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassButtonComponent } from '../glass-button/glass-button.component';
import { fadeIn, slideInDown } from '../../../core/animations/animations';

export interface BreadcrumbItem {
  label: string;
  link?: string;
  icon?: string;
}

export interface PageAction {
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, GlassButtonComponent],
  animations: [fadeIn, slideInDown],
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLayoutComponent {
  title = input<string>('');
  description = input<string | undefined>(undefined);
  icon = input<string | undefined>(undefined);
  breadcrumb = input<BreadcrumbItem[] | undefined>(undefined);
  actions = input<PageAction[] | undefined>(undefined);
  showFooter = input<boolean>(false);
}
