import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';

export type StatusType = 
  | 'pending' | 'approved' | 'rejected' | 'cancelled'
  | 'draft' | 'submitted' | 'reviewed' | 'completed'
  | 'active' | 'inactive' | 'suspended'
  | 'registered' | 'ongoing' | 'finished'
  | 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule, TranslateModule, IconComponent],
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {
  private translate = inject(TranslateService);
  
  @Input() status: StatusType = 'pending';
  @Input() label: string = '';
  @Input() showIcon: boolean = true;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'filled' | 'outlined' | 'soft' = 'filled';

  get displayLabel(): string {
    if (this.label) return this.label;
    
    const keyMap: Record<StatusType, string> = {
      pending: 'common.status.pending',
      approved: 'common.status.approved',
      rejected: 'common.status.rejected',
      cancelled: 'common.status.cancelled',
      draft: 'common.status.draft',
      submitted: 'common.status.submitted',
      reviewed: 'common.status.reviewed',
      completed: 'common.status.completed',
      active: 'common.active',
      inactive: 'common.inactive',
      suspended: 'common.status.suspended',
      registered: 'common.status.registered',
      ongoing: 'common.status.ongoing',
      finished: 'common.status.finished',
      success: 'common.status.success',
      error: 'common.status.error',
      warning: 'common.status.warning',
      info: 'common.status.info'
    };
    return this.translate.instant(keyMap[this.status] || this.status);
  }

  get statusIcon(): string {
    const iconMap: Record<StatusType, string> = {
      pending: 'schedule',
      approved: 'check_circle',
      rejected: 'cancel',
      cancelled: 'block',
      draft: 'edit',
      submitted: 'send',
      reviewed: 'visibility',
      completed: 'done_all',
      active: 'check_circle',
      inactive: 'remove_circle',
      suspended: 'pause_circle',
      registered: 'how_to_reg',
      ongoing: 'sync',
      finished: 'flag',
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    return iconMap[this.status] || 'circle';
  }

  get statusColor(): string {
    const colorMap: Record<StatusType, string> = {
      pending: 'amber',
      approved: 'green',
      rejected: 'red',
      cancelled: 'gray',
      draft: 'blue',
      submitted: 'indigo',
      reviewed: 'purple',
      completed: 'green',
      active: 'green',
      inactive: 'gray',
      suspended: 'orange',
      registered: 'blue',
      ongoing: 'blue',
      finished: 'green',
      success: 'green',
      error: 'red',
      warning: 'amber',
      info: 'blue'
    };
    return colorMap[this.status] || 'gray';
  }
}


