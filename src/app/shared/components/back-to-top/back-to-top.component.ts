import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackToTopComponent {
  show = signal<boolean>(false);

  constructor(
    private viewScroller: ViewportScroller,
    private elementRef: ElementRef
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const number =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 400) {
      this.show.set(true);
    } else {
      this.show.set(false);
    }
  }

  scrollToTop(): void {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}









