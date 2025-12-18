import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // LocalStorage methods
  setItem(key: string, value: any): void {
    try {
      const serialized = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  getItem<T = any>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return null;
      
      // Try to parse as JSON, if fails return as string
      try {
        return JSON.parse(item) as T;
      } catch {
        return item as T;
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }

  // SessionStorage methods
  setSessionItem(key: string, value: any): void {
    try {
      const serialized = typeof value === 'string' ? value : JSON.stringify(value);
      sessionStorage.setItem(key, serialized);
    } catch (error) {
      console.error('Error saving to sessionStorage:', error);
    }
  }

  getSessionItem<T = any>(key: string): T | null {
    try {
      const item = sessionStorage.getItem(key);
      if (item === null) return null;
      
      // Try to parse as JSON, if fails return as string
      try {
        return JSON.parse(item) as T;
      } catch {
        return item as T;
      }
    } catch (error) {
      console.error('Error reading from sessionStorage:', error);
      return null;
    }
  }

  removeSessionItem(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from sessionStorage:', error);
    }
  }

  clearSession(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
    }
  }
}

