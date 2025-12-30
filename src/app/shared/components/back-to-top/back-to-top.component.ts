import { ViewportScroller, CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent {
  public show = false;

  constructor(
    private viewScroller: ViewportScroller,
    private elementRef: ElementRef
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const number =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 400) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  scrollToTop(): void {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}










