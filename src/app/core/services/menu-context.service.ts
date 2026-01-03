import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuContext, MenuContextId } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuContextService {
  private currentContext$ = new BehaviorSubject<MenuContextId>('personal');
  private readonly STORAGE_KEY = 'menuContext';

  constructor() {
    // Load saved context from localStorage
    const savedContext = localStorage.getItem(this.STORAGE_KEY);
    if (savedContext && savedContext === 'personal') {
      this.currentContext$.next(savedContext);
    }
  }

  getCurrentContext(): Observable<MenuContextId> {
    return this.currentContext$.asObservable();
  }

  getCurrentContextValue(): MenuContextId {
    return this.currentContext$.value;
  }

  setContext(context: MenuContextId): void {
    this.currentContext$.next(context);
    localStorage.setItem(this.STORAGE_KEY, context);
  }

  toggleContext(): void {
    // Only personal context is available, no toggle needed
    this.setContext('personal');
  }
}


