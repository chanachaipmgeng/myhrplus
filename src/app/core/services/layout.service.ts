import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // State
  private _sidebarOpen = new BehaviorSubject<boolean>(true);
  private _hiddenHeader = new BehaviorSubject<string | null>(null);

  // Observables
  readonly sidebarOpen$ = this._sidebarOpen.asObservable();
  readonly hiddenHeader$ = this._hiddenHeader.asObservable();
  
  // Breakpoint Observable
  readonly isHandset$: Observable<boolean>;

  constructor(
    private storage: StorageService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
      shareReplay(1)
    );
    
    this.initializeState();
  }

  private initializeState(): void {
    // Initialize hiddenHeader from storage
    const storedHidden = this.storage.getSessionItem<string>('hiddenHeader');
    if (storedHidden) {
      this._hiddenHeader.next(storedHidden);
    }

    // Initialize sidebar state based on device type
    this.isHandset$.subscribe(isHandset => {
      // Auto-close on mobile, auto-open on desktop
      this.setSidebarState(!isHandset);
    });
  }

  /**
   * Set sidebar open state
   */
  setSidebarState(isOpen: boolean): void {
    this._sidebarOpen.next(isOpen);
  }

  /**
   * Toggle sidebar open state
   */
  toggleSidebar(): void {
    this._sidebarOpen.next(!this._sidebarOpen.value);
  }

  /**
   * Set hidden header state and persist to storage
   * @param value 'hidden' or null
   */
  setHiddenHeader(value: string | null): void {
    this._hiddenHeader.next(value);
    if (value) {
      this.storage.setSessionItem('hiddenHeader', value);
    } else {
      this.storage.removeSessionItem('hiddenHeader');
    }
  }

  /**
   * Refresh configuration from storage
   * Call this if external changes happen (e.g. guards)
   */
  refreshConfig(): void {
    const storedHidden = this.storage.getSessionItem<string>('hiddenHeader');
    if (storedHidden !== this._hiddenHeader.value) {
      this._hiddenHeader.next(storedHidden);
    }
  }
}
