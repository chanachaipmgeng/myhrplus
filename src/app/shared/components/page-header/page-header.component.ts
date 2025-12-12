import { Component, ChangeDetectionStrategy, input } from '@angular/core';
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
  title = input<string>('');
  subtitle = input<string | undefined>(undefined);
  description = input<string | undefined>(undefined);
  showBreadcrumbs = input<boolean>(true);
  actions = input<any[] | undefined>(undefined);
}








