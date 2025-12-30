import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

export type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ChipSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() label: string = '';
  @Input() variant: ChipVariant = 'default';
  @Input() size: ChipSize = 'md';
  @Input() removable: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() avatar: string = ''; // Image URL for avatar chip

  @Output() removed = new EventEmitter<void>();
  @Output() clicked = new EventEmitter<MouseEvent>();

  onRemove(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.removed.emit();
    }
  }

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}

