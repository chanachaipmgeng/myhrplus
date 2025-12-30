import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContextService } from '@core/services';
import { MenuContext } from '@core/models/menu.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-context-switcher',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './context-switcher.component.html',
  styleUrls: ['./context-switcher.component.scss']
})
export class ContextSwitcherComponent implements OnInit, OnDestroy {
  currentContext: MenuContext = 'personal';
  private destroy$ = new Subject<void>();

  contexts: { value: MenuContext; label: string; icon: string; description: string }[] = [
    {
      value: 'personal',
      label: 'Personal',
      icon: 'person',
      description: 'Employee Self Service'
    },
    {
      value: 'admin',
      label: 'Admin',
      icon: 'admin_panel_settings',
      description: 'Admin Management'
    }
  ];

  constructor(private menuContextService: MenuContextService) {}

  ngOnInit(): void {
    this.menuContextService.getCurrentContext()
      .pipe(takeUntil(this.destroy$))
      .subscribe(context => {
        this.currentContext = context;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  switchContext(context: MenuContext): void {
    this.menuContextService.setContext(context);
  }

  getCurrentContextData() {
    return this.contexts.find(c => c.value === this.currentContext);
  }
}

