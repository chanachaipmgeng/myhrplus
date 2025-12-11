import { Component, ChangeDetectionStrategy, input, model, viewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

export interface Tab {
  id: string;
  label: string;
  icon?: string;
  badge?: string | number;
  disabled?: boolean;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(5px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TabsComponent {
  tabs = input.required<Tab[]>();
  activeTab = model<string>('');
  ariaLabel = input<string>('แท็บ');

  tabButtons = viewChildren<ElementRef<HTMLButtonElement>>('tabButton');

  selectTab(tabId: string): void {
    const tab = this.tabs().find(t => t.id === tabId);
    if (tab && !tab.disabled && this.activeTab() !== tabId) {
      this.activeTab.set(tabId);
    }
  }

  handleTabKeyDown(event: KeyboardEvent, tabId: string, index: number): void {
    const tabsArray = this.tabs().filter(t => !t.disabled);
    const currentIndex = tabsArray.findIndex(t => t.id === tabId);

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % tabsArray.length;
        this.selectTab(tabsArray[nextIndex].id);
        this.focusTab(nextIndex);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
        this.selectTab(tabsArray[prevIndex].id);
        this.focusTab(prevIndex);
        break;
      case 'Home':
        event.preventDefault();
        this.selectTab(tabsArray[0].id);
        this.focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        this.selectTab(tabsArray[tabsArray.length - 1].id);
        this.focusTab(tabsArray.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.selectTab(tabId);
        break;
    }
  }

  private focusTab(index: number): void {
    const tabsArray = this.tabs().filter(t => !t.disabled);
    const tabId = tabsArray[index]?.id;

    if (tabId) {
      // Use setTimeout to ensure the DOM has updated if elements were re-rendered
      // although with OnPush and signals it might happen fast, deferring ensures logic runs after render
      setTimeout(() => {
        const buttons = this.tabButtons();
        // We need to match the button to the tabId. 
        // The buttons query list corresponds to the *ngFor="let tab of tabs" order.
        // So we need to find the overall index of the tab in the original list.
        const originalIndex = this.tabs().findIndex(t => t.id === tabId);
        const button = buttons[originalIndex];
        button?.nativeElement.focus();
      }, 0);
    }
  }

  getTabClasses(tabId: string): string {
    const base = 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300';
    const active = 'border-primary-500 text-primary-600 dark:text-primary-400';
    return this.activeTab() === tabId ? active : base;
  }

  getTabId(tabId: string): string {
    return `tab-${tabId}`;
  }

  getTabPanelId(tabId: string): string {
    return `tabpanel-${tabId}`;
  }
}



