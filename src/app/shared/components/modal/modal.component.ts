import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, HostListener, ChangeDetectionStrategy, input, output, viewChild, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassButtonComponent } from '../glass-button/glass-button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, GlassButtonComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, OnDestroy, AfterViewInit {
  show = input<boolean>(false);
  title = input<string>('');
  size = input<'sm' | 'md' | 'lg' | 'xl'>('md');
  closable = input<boolean>(true);
  showFooter = input<boolean>(true);
  showCancel = input<boolean>(true);
  showConfirm = input<boolean>(true);
  cancelText = input<string>('ยกเลิก');
  confirmText = input<string>('ยืนยัน');
  confirmVariant = input<'primary' | 'danger'>('primary');
  closeOnBackdrop = input<boolean>(true);
  ariaLabelledBy = input<string | undefined>(undefined);
  ariaDescribedBy = input<string | undefined>(undefined);

  modalPanel = viewChild<ElementRef<HTMLElement>>('modalPanel');
  closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  closeEvent = output<void>();
  confirmEvent = output<void>();
  cancelEvent = output<void>();

  private previousActiveElement: HTMLElement | null = null;
  private modalId: string = `modal-${Math.random().toString(36).substr(2, 9)}`;
  private titleId: string = `${this.modalId}-title`;
  private descriptionId: string = `${this.modalId}-description`;

  sizeClass = computed(() => {
    const sizes = {
      sm: 'sm:max-w-md',
      md: 'sm:max-w-lg',
      lg: 'sm:max-w-2xl',
      xl: 'sm:max-w-4xl'
    };
    return sizes[this.size()] || sizes.md;
  });

  modalTitleId = computed(() => this.ariaLabelledBy() || this.titleId);
  modalDescriptionId = computed(() => this.ariaDescribedBy() || this.descriptionId);

  constructor() {
    effect(() => {
      if (this.show()) {
        this.saveActiveElement();
        // Use setTimeout to allow view to update
        setTimeout(() => {
          this.trapFocus();
        }, 0);
      } else {
        this.restoreFocus();
      }
    });
  }

  close(): void {
    // Note: show is an input, we emit event and parent should handle visibility
    this.closeEvent.emit();
  }

  onBackdropClick(): void {
    if (this.closeOnBackdrop()) {
      this.close();
    }
  }

  onConfirm(): void {
    this.confirmEvent.emit();
  }

  onCancel(): void {
    this.cancelEvent.emit();
    this.close();
  }

  ngOnInit(): void {
    // Initialization handled by signals/effects mostly
  }

  ngOnDestroy(): void {
    this.restoreFocus();
  }

  ngAfterViewInit(): void {
    if (this.show()) {
      this.trapFocus();
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.show()) return;

    // Close on Escape
    if (event.key === 'Escape' && this.closable()) {
      event.preventDefault();
      this.close();
      return;
    }

    // Tab trap
    if (event.key === 'Tab') {
      this.handleTabKey(event);
    }
  }

  private handleTabKey(event: KeyboardEvent): void {
    const panel = this.modalPanel();
    if (!panel) return;

    const focusableElements = panel.nativeElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement || document.activeElement === panel.nativeElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  }

  private saveActiveElement(): void {
    this.previousActiveElement = document.activeElement as HTMLElement;
  }

  private restoreFocus(): void {
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
      this.previousActiveElement = null;
    }
  }

  private trapFocus(): void {
    const closeBtn = this.closeButton();
    const panel = this.modalPanel();

    if (closeBtn) {
      closeBtn.nativeElement.focus();
    } else if (panel) {
      const focusableElements = panel.nativeElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      focusableElements[0]?.focus();
    }
  }
}



