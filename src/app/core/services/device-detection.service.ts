import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {

  constructor() {}

  /**
   * Check if device is mobile (phone)
   */
  isMobileDevice(): boolean {
    if (typeof window === 'undefined' || !window.navigator) {
      return false;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  }

  /**
   * Check if device is tablet
   */
  isTablet(): boolean {
    if (typeof window === 'undefined' || !window.navigator) {
      return false;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    return /ipad|android(?!.*mobile)|tablet/i.test(userAgent);
  }

  /**
   * Check if device is desktop
   */
  isDesktop(): boolean {
    return !this.isMobileDevice() && !this.isTablet();
  }

  /**
   * Get device type
   */
  getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    if (this.isMobileDevice()) {
      return 'mobile';
    } else if (this.isTablet()) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  /**
   * Check if device is iOS
   */
  isIOS(): boolean {
    if (typeof window === 'undefined' || !window.navigator) {
      return false;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/i.test(userAgent);
  }

  /**
   * Check if device is Android
   */
  isAndroid(): boolean {
    if (typeof window === 'undefined' || !window.navigator) {
      return false;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    return /android/i.test(userAgent);
  }

  /**
   * Get user agent string
   */
  getUserAgent(): string {
    if (typeof window === 'undefined' || !window.navigator) {
      return '';
    }
    return navigator.userAgent;
  }
}

