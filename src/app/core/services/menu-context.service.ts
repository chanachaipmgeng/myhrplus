import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuContext } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuContextService {
  private currentContext$ = new BehaviorSubject<MenuContext>('personal');
  private readonly STORAGE_KEY = 'menuContext';

  constructor() {
    // Load saved context from localStorage
    const savedContext = localStorage.getItem(this.STORAGE_KEY) as MenuContext;
    if (savedContext && savedContext === 'personal') {
      this.currentContext$.next(savedContext);
    }
  }

  getCurrentContext(): Observable<MenuContext> {
    return this.currentContext$.asObservable();
  }

  getCurrentContextValue(): MenuContext {
    return this.currentContext$.value;
  }

  setContext(context: MenuContext): void {
    this.currentContext$.next(context);
    localStorage.setItem(this.STORAGE_KEY, context);
  }

  toggleContext(): void {
    // Only personal context is available, no toggle needed
    this.setContext('personal');
  }
}


