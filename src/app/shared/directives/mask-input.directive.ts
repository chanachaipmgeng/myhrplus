import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  forwardRef,
  AfterViewInit,
  OnInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FieldMaskingService } from '@core/services';

/**
 * Directive for masking input fields (PDPA/GDPR compliance)
 * 
 * Usage:
 * <input [appMaskInput]="'fieldName'" [(ngModel)]="value" />
 * 
 * Features:
 * - Auto-mask sensitive data
 * - Toggle show/hide button
 * - Works with reactive forms and template-driven forms
 */
@Directive({
  selector: '[appMaskInput]',
  standalone: true,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaskInputDirective),
    multi: true
  }]
})
export class MaskInputDirective implements ControlValueAccessor, AfterViewInit, OnInit {
  @Input('appMaskInput') fieldName = '';

  /** ControlValueAccessor callbacks */
  private onChange = (_: any) => { };
  private onTouched = () => { };

  /** State */
  private rawValue = '';
  show = false;
  private btn!: HTMLElement;
  private wrapper!: HTMLElement;

  constructor(
    private el: ElementRef<HTMLInputElement>,
    private renderer: Renderer2,
    private maskService: FieldMaskingService
  ) { }

  ngOnInit(): void {
    if (!this.rawValue) {
      this.rawValue = this.el.nativeElement.value || '';
      this.updateView();
    }
  }

  writeValue(val: any): void {
    this.rawValue = val ?? '';
    this.updateView();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.el.nativeElement.disabled = disabled;
    if (this.btn) {
      this.renderer.setProperty(this.btn, 'disabled', disabled);
    }
  }

  /** When user types */
  @HostListener('input', ['$event.target.value'])
  onInput(val: string): void {
    this.rawValue = val;
    this.onChange(val);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  /** Create toggle button after view init */
  ngAfterViewInit(): void {
    if (!this.fieldName) {
      return; // No field name, skip masking
    }

    const input = this.el.nativeElement;
    const parent = this.renderer.parentNode(input);

    if (!parent) {
      return;
    }

    /* Create wrapper */
    this.wrapper = this.renderer.createElement('div');
    this.renderer.addClass(this.wrapper, 'mask-wrapper');
    this.renderer.addClass(this.wrapper, 'd-flex');
    this.renderer.addClass(this.wrapper, 'align-items-center');
    this.renderer.setStyle(this.wrapper, 'position', 'relative');

    /* Move input into wrapper */
    this.renderer.insertBefore(parent, this.wrapper, input);
    this.renderer.removeChild(parent, input);
    this.renderer.appendChild(this.wrapper, input);

    /* Style input */
    this.renderer.setStyle(input, 'padding-right', '2.2rem');
    this.renderer.setStyle(input, 'flex', '1');

    /* Create toggle button */
    this.btn = this.renderer.createElement('button');
    this.renderer.setAttribute(this.btn, 'type', 'button');
    this.renderer.addClass(this.btn, 'mask-toggle-btn');
    this.renderer.setStyle(this.btn, 'background', 'none');
    this.renderer.setStyle(this.btn, 'border', 'none');
    this.renderer.setStyle(this.btn, 'padding', '0.25rem 0.5rem');
    this.renderer.setStyle(this.btn, 'margin-left', '-2.2rem');
    this.renderer.setStyle(this.btn, 'cursor', 'pointer');
    this.renderer.setStyle(this.btn, 'z-index', '10');
    this.renderer.setStyle(this.btn, 'color', 'inherit');

    const icon = this.renderer.createElement('i');
    this.renderer.addClass(icon, 'fa');
    this.renderer.addClass(icon, 'fa-eye');
    this.renderer.appendChild(this.btn, icon);

    this.renderer.listen(this.btn, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.show = !this.show;
      this.updateView();
    });

    this.renderer.appendChild(this.wrapper, this.btn);
    this.updateView();
  }

  /** Update display and icon */
  private updateView(): void {
    if (!this.fieldName || !this.el?.nativeElement) {
      return;
    }

    const input = this.el.nativeElement;
    const icon = this.btn?.querySelector('i');

    if (this.show) {
      // Show raw value
      this.renderer.setProperty(input, 'value', this.rawValue);
      if (icon) {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
    } else {
      // Show masked value
      const masked = this.maskService.mask(this.fieldName, this.rawValue) ?? '';
      this.renderer.setProperty(input, 'value', masked);
      if (icon) {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    }
  }
}

