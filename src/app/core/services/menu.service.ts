import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';

/**
 * Menu Service
 * 
 * Manages menu data and caching
 */
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly CACHE_KEY = 'menu_cache';

  constructor(private cacheService: CacheService) {}

  /**
   * Clear menu cache
   */
  clearCache(): void {
    this.cacheService.remove(this.CACHE_KEY);
  }

  /**
   * Get menu from cache
   */
  getCachedMenu(): any {
    return this.cacheService.get(this.CACHE_KEY);
  }

  /**
   * Set menu to cache
   */
  setCachedMenu(menu: any): void {
    this.cacheService.set(this.CACHE_KEY, menu, 5 * 60 * 1000); // 5 minutes
  }
}

