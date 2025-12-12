import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  name = input.required<string>();
  size = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  color = input<string | undefined>(undefined);
  ariaLabel = input<string | undefined>(undefined);

  sizeClass = computed(() => {
    const sizeMap = {
      xs: 'text-xs w-3 h-3',
      sm: 'text-base w-4 h-4',
      md: 'text-xl w-5 h-5',
      lg: 'text-2xl w-6 h-6',
      xl: 'text-4xl w-10 h-10'
    };
    return sizeMap[this.size()];
  });
}

