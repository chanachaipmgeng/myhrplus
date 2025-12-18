import { Injectable } from '@angular/core';
import { Observable, throwError, timer, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { StorageService } from './storage.service';
import { ApiService, ApiResponse } from './api.service';
import { environment } from '../../../environments/environment';

export interface TokenValidationResult {
  isValid: boolean;
  isExpired: boolean;
  expiresAt: number | null;
  decodedToken: any | null;
  error?: string;
}

export interface TokenRefreshResponse {
  success: boolean;
  accessToken?: string;
  expiresIn?: number;
}

/**
 * TokenManagerService - Centralized token management
 *
 * This service provides a single source of truth for all token operations:
 * - Token validation and expiration checking
 * - Token storage management
 * - Token refresh mechanism
 * - Cached validation results for performance
 */
@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly TOKEN_EXPIRY_KEY = 'token_expiry';
  private readonly SESSION_TOKEN_KEY = 'userToken'; // For backward compatibility

  // Cache validation results to avoid redundant checks
  // Using LRU-like approach: keep only recent validations
  private tokenValidationCache = new Map<string, {
    result: TokenValidationResult;
    cachedAt: number;
    expiresAt: number;
  }>();
  private readonly CACHE_TTL = 60000; // Cache for 1 minute
  private readonly MAX_CACHE_SIZE = 10; // Maximum cached validations


  constructor(
    private storage: StorageService,
    private apiService: ApiService
  ) {}

  /**
   * Get token from storage
   * Checks both localStorage (via StorageService) and sessionStorage (for backward compatibility)
   */
  getToken(): string | null {
    // Check localStorage first
    let token = this.storage.getItem<string>(this.TOKEN_KEY);

    // If not found, check sessionStorage (for backward compatibility)
    if (!token && typeof window !== 'undefined' && window.sessionStorage) {
      const sessionToken = sessionStorage.getItem(this.SESSION_TOKEN_KEY);
      if (sessionToken) {
        // Migrate to localStorage
        this.storage.setItem(this.TOKEN_KEY, sessionToken);
        token = sessionToken;
      }
    }

    return token;
  }

  /**
   * Set token in storage
   * Stores in both localStorage (via StorageService) and sessionStorage (for backward compatibility)
   */
  setToken(token: string, expiresIn?: number): void {
    // Store in localStorage (primary)
    this.storage.setItem(this.TOKEN_KEY, token);

    // Store in sessionStorage (for backward compatibility)
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem(this.SESSION_TOKEN_KEY, token);
    }

    // Store expiry time if provided
    if (expiresIn) {
      const expiryTime = Date.now() + (expiresIn * 1000);
      this.storage.setItem(this.TOKEN_EXPIRY_KEY, expiryTime.toString());
    }
  }

  /**
   * Clear token from storage
   */
  clearToken(): void {
    this.storage.removeItem(this.TOKEN_KEY);
    this.storage.removeItem(this.TOKEN_EXPIRY_KEY);
    this.tokenValidationCache.clear();

    // Also clear sessionStorage
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem(this.SESSION_TOKEN_KEY);
    }
  }

  /**
   * Validate token structure and expiration
   * Uses caching to avoid redundant validation checks
   * Implements LRU-like cache with TTL for optimal performance
   */
  validateToken(token: string): TokenValidationResult {
    // Check cache first
    const cached = this.tokenValidationCache.get(token);
    if (cached && Date.now() < cached.expiresAt) {
      // Update access order (move to end for LRU)
      this.tokenValidationCache.delete(token);
      this.tokenValidationCache.set(token, cached);
      return cached.result;
    }

    const result: TokenValidationResult = {
      isValid: false,
      isExpired: false,
      expiresAt: null,
      decodedToken: null
    };

    try {
      // Decode token
      const decodedToken = jwt_decode<any>(token);

      // Validate token structure
      if (!decodedToken || !decodedToken.sub) {
        result.error = 'Invalid token structure: missing sub claim';
        this.cacheValidationResult(token, result);
        return result;
      }

      // Check expiration
      const isExpired = this.isTokenExpired(token, decodedToken);
      const expiresAt = decodedToken.exp ? decodedToken.exp * 1000 : null;

      result.isValid = true;
      result.isExpired = isExpired;
      result.expiresAt = expiresAt;
      result.decodedToken = decodedToken;

      // Cache result with expiration
      this.cacheValidationResult(token, result);

      return result;
    } catch (error: any) {
      result.error = error.message || 'Failed to decode token';
      this.cacheValidationResult(token, result);
      return result;
    }
  }

  /**
   * Check if token is expired
   */
  isTokenExpired(token: string, decodedToken?: any): boolean {
    try {
      // Use provided decodedToken or decode it
      const payload = decodedToken || jwt_decode<any>(token);

      // Check exp claim
      if (payload.exp) {
        const exp = payload.exp * 1000; // Convert to milliseconds
        return Date.now() >= exp;
      }

      // If no exp claim, check stored expiry time
      const expiryTime = this.storage.getItem<string>(this.TOKEN_EXPIRY_KEY);
      if (expiryTime) {
        return Date.now() >= parseInt(expiryTime, 10);
      }

      // If no expiration info, consider it expired (security first)
      return true;
    } catch (error) {
      // If we can't decode, consider it expired
      return true;
    }
  }


  /**
   * Decode token without validation
   * Useful for extracting user information from token
   */
  decodeToken(token: string): any | null {
    try {
      return jwt_decode<any>(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  /**
   * Get token expiration time
   */
  getTokenExpiration(token: string): number | null {
    const validation = this.validateToken(token);
    return validation.expiresAt;
  }

  /**
   * Get time until token expiration (in milliseconds)
   */
  getTimeUntilExpiration(token: string): number | null {
    const expiresAt = this.getTokenExpiration(token);
    if (!expiresAt) {
      return null;
    }
    const timeUntilExpiry = expiresAt - Date.now();
    return timeUntilExpiry > 0 ? timeUntilExpiry : 0;
  }

  /**
   * Check if token needs refresh (within 5 minutes of expiration)
   */
  needsRefresh(token: string): boolean {
    const timeUntilExpiry = this.getTimeUntilExpiration(token);
    if (timeUntilExpiry === null) {
      return true; // If we can't determine, assume it needs refresh
    }
    const fiveMinutes = 5 * 60 * 1000;
    return timeUntilExpiry <= fiveMinutes;
  }

  /**
   * Cache validation result with LRU strategy
   * Removes oldest entries when cache is full
   */
  private cacheValidationResult(token: string, result: TokenValidationResult): void {
    const now = Date.now();
    const expiresAt = now + this.CACHE_TTL;

    // Remove expired entries first
    this.cleanExpiredCacheEntries();

    // If cache is full, remove oldest entry (first in Map)
    if (this.tokenValidationCache.size >= this.MAX_CACHE_SIZE) {
      const firstKey = this.tokenValidationCache.keys().next().value;
      if (firstKey) {
        this.tokenValidationCache.delete(firstKey);
      }
    }

    // Add new entry (will be at the end for LRU)
    this.tokenValidationCache.set(token, {
      result,
      cachedAt: now,
      expiresAt
    });
  }

  /**
   * Clean expired cache entries
   */
  private cleanExpiredCacheEntries(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    for (const [key, value] of this.tokenValidationCache.entries()) {
      if (now >= value.expiresAt) {
        keysToDelete.push(key);
      }
    }

    keysToDelete.forEach(key => this.tokenValidationCache.delete(key));
  }

  /**
   * Clear validation cache
   * Useful when token is updated
   */
  clearValidationCache(): void {
    this.tokenValidationCache.clear();
  }
}

