import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, NgZone } from '@angular/core';

/**
 * Lazy Image Directive
 * 
 * Implements lazy loading for images using Intersection Observer API
 * Falls back to native loading="lazy" for browsers that support it
 * 
 * Usage:
 * <img appLazyImage [src]="imageUrl" [alt]="altText" />
 */
@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective implements OnInit, OnDestroy {
  @Input() src: string | undefined = '';
  @Input() alt: string = '';
  @Input() placeholder: string = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
  @Input() errorImage: string = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
  @Input() rootMargin: string = '50px'; // Load images 50px before they enter viewport
  @Input() threshold: number = 0.01; // Trigger when 1% of image is visible

  private observer?: IntersectionObserver;
  private imgElement?: HTMLImageElement;
  private isLoaded: boolean = false;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {
    this.imgElement = this.el.nativeElement;
  }

  ngOnInit(): void {
    // Check if browser supports native lazy loading
    if ('loading' in HTMLImageElement.prototype) {
      // Use native lazy loading
      this.setupNativeLazyLoading();
    } else {
      // Use Intersection Observer
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  /**
   * Setup native lazy loading (for modern browsers)
   */
  private setupNativeLazyLoading(): void {
    if (!this.imgElement) return;

    // Set placeholder
    this.renderer.setAttribute(this.imgElement, 'src', this.placeholder);
    this.renderer.setAttribute(this.imgElement, 'alt', this.alt || '');
    this.renderer.setAttribute(this.imgElement, 'loading', 'lazy');

    // Add loading class
    this.renderer.addClass(this.imgElement, 'lazy-image-loading');

    // Load image
    this.loadImage();
  }

  /**
   * Setup Intersection Observer (for older browsers)
   */
  private setupIntersectionObserver(): void {
    if (!this.imgElement) return;

    // Set placeholder
    this.renderer.setAttribute(this.imgElement, 'src', this.placeholder);
    this.renderer.setAttribute(this.imgElement, 'alt', this.alt || '');
    this.renderer.addClass(this.imgElement, 'lazy-image-loading');

    // Create Intersection Observer
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !this.isLoaded) {
              this.loadImage();
              if (this.observer) {
                this.observer.unobserve(this.imgElement!);
              }
            }
          });
        },
        {
          rootMargin: this.rootMargin,
          threshold: this.threshold
        }
      );

      // Start observing
      if (this.imgElement) {
        this.observer.observe(this.imgElement);
      }
    });
  }

  /**
   * Load the actual image
   */
  private loadImage(): void {
    if (!this.imgElement || !this.src || this.src === '' || this.isLoaded) return;

    this.isLoaded = true;

    // Create new image to preload
    const img = new Image();
    
    img.onload = () => {
      this.ngZone.run(() => {
        if (this.imgElement && this.src) {
          this.renderer.setAttribute(this.imgElement, 'src', this.src);
          this.renderer.removeClass(this.imgElement, 'lazy-image-loading');
          this.renderer.addClass(this.imgElement, 'lazy-image-loaded');
        }
      });
    };

    img.onerror = () => {
      this.ngZone.run(() => {
        if (this.imgElement) {
          this.renderer.setAttribute(this.imgElement, 'src', this.errorImage);
          this.renderer.removeClass(this.imgElement, 'lazy-image-loading');
          this.renderer.addClass(this.imgElement, 'lazy-image-error');
        }
      });
    };

    // Start loading
    img.src = this.src;
  }
}

