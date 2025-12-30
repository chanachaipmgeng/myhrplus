import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';

export interface DashboardSection {
  id: string;
  visible: boolean;
  order?: number;
}

export interface DashboardPreferences {
  dashboardId: string;
  sections: DashboardSection[];
  lastUpdated?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardPreferencesService {
  private readonly STORAGE_KEY_PREFIX = 'dashboard_preferences_';
  private preferencesSubject = new BehaviorSubject<Map<string, DashboardPreferences>>(new Map());
  public preferences$: Observable<Map<string, DashboardPreferences>> = this.preferencesSubject.asObservable();

  constructor(private storage: StorageService) {
    this.loadAllPreferences();
  }

  /**
   * Get preferences for a specific dashboard
   */
  getPreferences(dashboardId: string): DashboardPreferences | null {
    const key = this.getStorageKey(dashboardId);
    return this.storage.getItem<DashboardPreferences>(key);
  }

  /**
   * Save preferences for a dashboard
   */
  savePreferences(preferences: DashboardPreferences): void {
    const key = this.getStorageKey(preferences.dashboardId);
    preferences.lastUpdated = new Date();
    this.storage.setItem(key, preferences);
    this.loadAllPreferences();
  }

  /**
   * Check if a section is visible
   */
  isSectionVisible(dashboardId: string, sectionId: string): boolean {
    const preferences = this.getPreferences(dashboardId);
    if (!preferences) return true; // Default: visible

    const section = preferences.sections.find(s => s.id === sectionId);
    return section ? section.visible : true; // Default: visible
  }

  /**
   * Toggle section visibility
   */
  toggleSection(dashboardId: string, sectionId: string): boolean {
    const preferences = this.getPreferences(dashboardId) || {
      dashboardId,
      sections: []
    };

    let section = preferences.sections.find(s => s.id === sectionId);
    if (!section) {
      section = { id: sectionId, visible: true };
      preferences.sections.push(section);
    }

    section.visible = !section.visible;
    this.savePreferences(preferences);
    return section.visible;
  }

  /**
   * Set section visibility
   */
  setSectionVisible(dashboardId: string, sectionId: string, visible: boolean): void {
    const preferences = this.getPreferences(dashboardId) || {
      dashboardId,
      sections: []
    };

    let section = preferences.sections.find(s => s.id === sectionId);
    if (!section) {
      section = { id: sectionId, visible };
      preferences.sections.push(section);
    } else {
      section.visible = visible;
    }

    this.savePreferences(preferences);
  }

  /**
   * Reset preferences to default (all sections visible)
   */
  resetPreferences(dashboardId: string): void {
    const key = this.getStorageKey(dashboardId);
    this.storage.removeItem(key);
    this.loadAllPreferences();
  }

  /**
   * Get all section IDs for a dashboard
   */
  getSectionIds(dashboardId: string): string[] {
    const preferences = this.getPreferences(dashboardId);
    return preferences ? preferences.sections.map(s => s.id) : [];
  }

  /**
   * Get visible sections only
   */
  getVisibleSections(dashboardId: string): string[] {
    const preferences = this.getPreferences(dashboardId);
    if (!preferences) return [];

    return preferences.sections
      .filter(s => s.visible)
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map(s => s.id);
  }

  /**
   * Update section order
   */
  updateSectionOrder(dashboardId: string, sectionIds: string[]): void {
    const preferences = this.getPreferences(dashboardId) || {
      dashboardId,
      sections: []
    };

    sectionIds.forEach((sectionId, index) => {
      let section = preferences.sections.find(s => s.id === sectionId);
      if (!section) {
        section = { id: sectionId, visible: true, order: index };
        preferences.sections.push(section);
      } else {
        section.order = index;
      }
    });

    this.savePreferences(preferences);
  }

  /**
   * Load all preferences from storage
   */
  private loadAllPreferences(): void {
    // This is a simplified version - in a real app, you might want to scan all keys
    // For now, we'll load preferences on-demand
    const preferencesMap = new Map<string, DashboardPreferences>();
    this.preferencesSubject.next(preferencesMap);
  }

  /**
   * Get storage key for a dashboard
   */
  private getStorageKey(dashboardId: string): string {
    return `${this.STORAGE_KEY_PREFIX}${dashboardId}`;
  }
}

