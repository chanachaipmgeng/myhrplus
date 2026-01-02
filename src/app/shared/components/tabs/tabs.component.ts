import { Component, Input, Output, EventEmitter, HostListener, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

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
  imports: [CommonModule, TranslateModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs!: Tab[];
  @Input() activeTab: string = '';
  @Input() ariaLabel?: string;
  @Output() activeTabChange = new EventEmitter<string>();

  @ViewChildren('tabButton') tabButtons!: QueryList<ElementRef<HTMLButtonElement>>;

  selectTab(tabId: string): void {
    const tab = this.tabs.find(t => t.id === tabId);
    if (tab && !tab.disabled && this.activeTab !== tabId) {
      this.activeTab = tabId;
      this.activeTabChange.emit(tabId);
    }
  }

  handleTabKeyDown(event: KeyboardEvent, tabId: string, index: number): void {
    const tabsArray = this.tabs.filter(t => !t.disabled);
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
    const tabsArray = this.tabs.filter(t => !t.disabled);
    const tabId = tabsArray[index]?.id;
    if (tabId) {
      setTimeout(() => {
        const tabButton = this.tabButtons.find((_, i) => {
          const originalIndex = this.tabs.findIndex(t => t.id === tabId);
          return i === originalIndex;
        });
        tabButton?.nativeElement.focus();
      }, 0);
    }
  }

  getTabClasses(tabId: string): string {
    const base = 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 hover-lift-sm transition-smooth theme-myhr:text-white/70';
    const active = 'border-primary text-primary relative';
    return this.activeTab === tabId ? active : base;
  }

  getTabId(tabId: string): string {
    return `tab-${tabId}`;
  }

  getTabPanelId(tabId: string): string {
    return `tabpanel-${tabId}`;
  }
}



