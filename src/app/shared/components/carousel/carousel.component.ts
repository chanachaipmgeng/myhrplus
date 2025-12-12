import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, ChangeDetectionStrategy, input, output, viewChild, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';
import {
  CarouselComponent as SyncfusionCarouselComponent
} from '@syncfusion/ej2-angular-navigations';

export interface CarouselItem {
  id?: string;
  template?: string;
  content?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
  [key: string]: any;
}

export interface CarouselConfig {
  items?: CarouselItem[];
  interval?: number;
  showIndicators?: boolean;
  showPlayButton?: boolean;
  showPreviousButton?: boolean;
  showNextButton?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  animationEffect?: 'Slide' | 'Fade' | 'None';
  slideTransition?: 'Slide' | 'Fade';
  partialVisible?: boolean;
  itemsCount?: number;
  cssClass?: string;
  enableTouchSwipe?: boolean;
  enableKeyboardNavigation?: boolean;
  enableRtl?: boolean;
  height?: string | number;
  width?: string | number;
  customClass?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  carousel = viewChild<SyncfusionCarouselComponent>('carousel');

  // Data
  items = input<CarouselItem[]>([]);
  config = input<CarouselConfig | undefined>(undefined);

  // Behavior
  interval = input<number>(3000);
  autoPlay = input<boolean>(true);
  loop = input<boolean>(true);
  animationEffect = input<'Slide' | 'Fade' | 'None'>('Slide');
  slideTransition = input<'Slide' | 'Fade'>('Slide');
  partialVisible = input<boolean>(false);
  itemsCount = input<number>(1);

  // UI Controls
  showIndicators = input<boolean>(true);
  showPlayButton = input<boolean>(true);
  showPreviousButton = input<boolean>(true);
  showNextButton = input<boolean>(true);

  // Interaction
  enableTouchSwipe = input<boolean>(true);
  enableKeyboardNavigation = input<boolean>(true);
  enableRtl = input<boolean>(false);

  // Appearance
  cssClass = input<string | undefined>(undefined);
  height = input<string | number>('400px');
  width = input<string | number>('100%');
  customClass = input<string | undefined>(undefined);

  // Events
  slideChanged = output<any>();
  play = output<any>();
  pause = output<any>();
  created = output<any>();

  // Computed configuration to merge inputs and config object
  effectiveConfig = computed(() => {
    const config = this.config();
    return {
      items: config?.items ?? this.items(),
      interval: config?.interval ?? this.interval(),
      autoPlay: config?.autoPlay ?? this.autoPlay(),
      loop: config?.loop ?? this.loop(),
      animationEffect: config?.animationEffect ?? this.animationEffect(),
      slideTransition: config?.slideTransition ?? this.slideTransition(),
      partialVisible: config?.partialVisible ?? this.partialVisible(),
      itemsCount: config?.itemsCount ?? this.itemsCount(),
      showIndicators: config?.showIndicators ?? this.showIndicators(),
      showPlayButton: config?.showPlayButton ?? this.showPlayButton(),
      showPreviousButton: config?.showPreviousButton ?? this.showPreviousButton(),
      showNextButton: config?.showNextButton ?? this.showNextButton(),
      enableTouchSwipe: config?.enableTouchSwipe ?? this.enableTouchSwipe(),
      enableKeyboardNavigation: config?.enableKeyboardNavigation ?? this.enableKeyboardNavigation(),
      enableRtl: config?.enableRtl ?? this.enableRtl(),
      cssClass: config?.cssClass ?? this.cssClass(),
      height: config?.height ?? this.height(),
      width: config?.width ?? this.width(),
      customClass: config?.customClass ?? this.customClass()
    };
  });

  private _currentIndex: number = 0;
  private _isPlaying: boolean = false;

  ngOnInit(): void {
    // Logic handled by effectiveConfig computed signal
  }

  ngAfterViewInit(): void {
    if (this.carousel()) {
      this._isPlaying = this.effectiveConfig().autoPlay ?? true;
      this.created.emit({ carousel: this.carousel() });
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  /**
   * Get carousel instance
   */
  getCarouselInstance(): SyncfusionCarouselComponent | null {
    return this.carousel() || null;
  }

  /**
   * Navigate to next slide
   */
  next(): void {
    const carousel = this.carousel();
    if (carousel) {
      carousel.next();
    }
  }

  /**
   * Navigate to previous slide
   */
  previous(): void {
    const carousel = this.carousel();
    if (carousel) {
      carousel.prev();
    }
  }

  /**
   * Navigate to specific slide
   */
  goTo(index: number): void {
    const carousel = this.carousel();
    if (carousel && index >= 0 && index < this.effectiveConfig().items!.length) {
      carousel.selectedIndex = index;
      this._currentIndex = index;
    }
  }

  /**
   * Play carousel
   */
  playCarousel(): void {
    const carousel = this.carousel();
    if (carousel) {
      carousel.play();
      this._isPlaying = true;
      this.play.emit({ carousel: carousel });
    }
  }

  /**
   * Pause carousel
   */
  pauseCarousel(): void {
    const carousel = this.carousel();
    if (carousel) {
      carousel.pause();
      this._isPlaying = false;
      this.pause.emit({ carousel: carousel });
    }
  }

  /**
   * Toggle play/pause
   */
  togglePlayPause(): void {
    if (this._isPlaying) {
      this.pauseCarousel();
    } else {
      this.playCarousel();
    }
  }

  /**
   * Get current slide index
   */
  getCurrentIndex(): number {
    const carousel = this.carousel();
    if (carousel) {
      return carousel.selectedIndex || 0;
    }
    return this._currentIndex;
  }

  /**
   * Get total slides count
   */
  getTotalSlides(): number {
    return this.effectiveConfig().items?.length || 0;
  }

  /**
   * Refresh carousel
   */
  refresh(): void {
    const carousel = this.carousel();
    if (carousel) {
      carousel.refresh();
    }
  }

  /**
   * Event handlers
   */
  onSlideChanged(event: any): void {
    if (event && event.selectedIndex !== undefined) {
      this._currentIndex = event.selectedIndex;
    }
    this.slideChanged.emit(event);
  }

  onPlay(event: any): void {
    this._isPlaying = true;
    this.play.emit(event);
  }

  onPause(event: any): void {
    this._isPlaying = false;
    this.pause.emit(event);
  }

  onCreated(event: any): void {
    this.created.emit(event);
  }

  /**
   * Check if carousel is playing
   */
  isPlaying(): boolean {
    return this._isPlaying;
  }
}

