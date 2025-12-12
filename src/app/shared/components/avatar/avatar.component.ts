import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  src = input<string>('');
  name = input<string>('');
  size = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  status = input<'online' | 'offline' | 'away' | 'busy' | ''>('');
  badge = input<number | string>('');
  showStatus = input<boolean>(true);
  showBadge = input<boolean>(true);
  shape = input<'circle' | 'square' | 'rounded'>('circle');

  hasError = false;

  initials = computed(() => {
    const name = this.name();
    if (!name) return '';

    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  });

  statusColor = computed(() => {
    const colorMap: Record<string, string> = {
      online: '#22c55e',
      offline: '#94a3b8',
      away: '#f59e0b',
      busy: '#ef4444'
    };
    return colorMap[this.status()] || '';
  });

  isBadgeNumber = computed(() => typeof this.badge() === 'number');

  isBadgeDot = computed(() => this.badge() === 'dot');

  isBadgeGreaterThanZero = computed(() => {
    const badge = this.badge();
    return typeof badge === 'number' && badge > 0;
  });

  badgeValue = computed(() => {
    if (this.isBadgeGreaterThanZero()) {
      return (this.badge() as number) > 99 ? '99+' : String(this.badge());
    }
    return '';
  });

  onImageError(): void {
    this.hasError = true;
  }
}

