import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-angular-navigations';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: EjsSidebar;

  // Observables from LayoutService
  isHandset$: Observable<boolean>;
  sidebarOpen$: Observable<boolean>;
  hiddenHeader$: Observable<string | null>;

  // UI State
  sidebarWidth: string = '368px'; // 88px icon bar + 280px menu
  sidebarType: 'Over' | 'Push' | 'Slide' = 'Over';

  constructor(private layoutService: LayoutService) {
    this.isHandset$ = this.layoutService.isHandset$;
    this.sidebarOpen$ = this.layoutService.sidebarOpen$;
    this.hiddenHeader$ = this.layoutService.hiddenHeader$;
  }

  ngOnInit(): void {
    // Subscribe to handset changes to adjust sidebar type
    this.isHandset$.subscribe(isHandset => {
      this.sidebarType = isHandset ? 'Over' : 'Push';
    });

    // Refresh config (in case of navigation updates)
    this.layoutService.refreshConfig();
  }

  onSidebarClose(): void {
    this.layoutService.setSidebarState(false);
  }

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

  // Swipe Handlers
  onSwipeRight(): void {
    this.isHandset$.pipe(take(1)).subscribe(isHandset => {
      if (isHandset) {
        this.layoutService.setSidebarState(true);
      }
    });
  }

  onSwipeLeft(): void {
    this.isHandset$.pipe(take(1)).subscribe(isHandset => {
      if (isHandset) {
        this.layoutService.setSidebarState(false);
      }
    });
  }
}
