import { Directive, HostBinding, Input, OnInit } from '@angular/core';

/**
 * Stagger Directive
 * 
 * Automatically applies staggered animation delays to list items
 * 
 * Usage:
 * ```html
 * @for (item of items; track item.id; let i = $index) {
 *   <div [appStagger]="i" [staggerDelay]="0.1">
 *     <!-- content -->
 *   </div>
 * }
 * 
 * <!-- Or with ngFor -->
 * <div *ngFor="let item of items; let i = index" [appStagger]="i" [staggerDelay]="0.1">
 *   <!-- content -->
 * </div>
 * ```
 */
@Directive({
  selector: '[appStagger]',
  standalone: true
})
export class StaggerDirective implements OnInit {
  /**
   * Index of the item in the list (required)
   * Pass the index from *ngFor or @for loop
   */
  @Input() appStagger: number = 0;

  /**
   * Delay interval between items in seconds (default: 0.1s)
   */
  @Input() staggerDelay: number = 0.1;

  /**
   * Animation class to apply (default: 'animate-fade-in-up')
   */
  @Input() staggerClass: string = 'animate-fade-in-up';

  @HostBinding('class')
  get hostClasses(): string {
    return this.staggerClass;
  }

  @HostBinding('style.animation-delay')
  get animationDelay(): string {
    return `${this.appStagger * this.staggerDelay}s`;
  }

  ngOnInit(): void {
    // Ensure staggerClass is applied
    if (this.staggerClass && !this.staggerClass.includes('animate-fade-in-up')) {
      // If custom class is provided, it will be used via HostBinding
    }
  }
}

