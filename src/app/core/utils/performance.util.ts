/**
 * Performance Utilities
 * Utilities for monitoring and optimizing performance
 */

/**
 * Measure performance of a function execution
 */
export function measurePerformance<T>(
  fn: () => T,
  label?: string
): { result: T; duration: number } {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  const duration = end - start;

  if (label && duration > 16) {
    // Log if takes longer than 1 frame (16ms at 60fps)
    console.warn(`[Performance] ${label} took ${duration.toFixed(2)}ms`);
  }

  return { result, duration };
}

/**
 * Measure async performance
 */
export async function measureAsyncPerformance<T>(
  fn: () => Promise<T>,
  label?: string
): Promise<{ result: T; duration: number }> {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  const duration = end - start;

  if (label && duration > 100) {
    // Log if takes longer than 100ms
    console.warn(`[Performance] ${label} took ${duration.toFixed(2)}ms`);
  }

  return { result, duration };
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get animation duration based on user preference
 */
export function getAnimationDuration(defaultDuration: number): number {
  return prefersReducedMotion() ? 0 : defaultDuration;
}

/**
 * Check if device is low-end
 */
export function isLowEndDevice(): boolean {
  if (typeof navigator === 'undefined') {
    return false;
  }

  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 2;
  
  // Check device memory (if available)
  const memory = (navigator as any).deviceMemory || 4;

  return cores <= 2 || memory <= 2;
}

/**
 * Optimize animation based on device capabilities
 */
export function getOptimizedAnimationDuration(
  defaultDuration: number,
  reducedMotion: boolean = prefersReducedMotion(),
  lowEndDevice: boolean = isLowEndDevice()
): number {
  if (reducedMotion) {
    return 0;
  }
  if (lowEndDevice) {
    return defaultDuration * 0.7; // Reduce duration by 30%
  }
  return defaultDuration;
}

/**
 * Monitor CSS bundle size
 */
export function getCSSBundleSize(): number {
  if (typeof document === 'undefined') {
    return 0;
  }

  let totalSize = 0;
  const styleSheets = Array.from(document.styleSheets);

  styleSheets.forEach((sheet) => {
    try {
      const rules = Array.from(sheet.cssRules || sheet.cssRules);
      rules.forEach((rule) => {
        if (rule.cssText) {
          totalSize += rule.cssText.length;
        }
      });
    } catch (e) {
      // Cross-origin stylesheets may throw errors
    }
  });

  return totalSize;
}

/**
 * Check for unused CSS (basic check)
 */
export function checkUnusedCSS(): {
  totalRules: number;
  potentiallyUnused: number;
} {
  if (typeof document === 'undefined') {
    return { totalRules: 0, potentiallyUnused: 0 };
  }

  let totalRules = 0;
  let potentiallyUnused = 0;

  const styleSheets = Array.from(document.styleSheets);

  styleSheets.forEach((sheet) => {
    try {
      const rules = Array.from(sheet.cssRules || sheet.cssRules);
      totalRules += rules.length;

      rules.forEach((rule) => {
        if (rule instanceof CSSStyleRule) {
          const selector = rule.selectorText;
          // Basic check: if selector contains classes that might not be used
          if (selector.includes('.unused-') || selector.includes('.deprecated-')) {
            potentiallyUnused++;
          }
        }
      });
    } catch (e) {
      // Cross-origin stylesheets may throw errors
    }
  });

  return { totalRules, potentiallyUnused };
}

/**
 * Performance monitoring service
 */
export class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();

  /**
   * Record a performance metric
   */
  record(metricName: string, value: number): void {
    if (!this.metrics.has(metricName)) {
      this.metrics.set(metricName, []);
    }
    this.metrics.get(metricName)!.push(value);
  }

  /**
   * Get average for a metric
   */
  getAverage(metricName: string): number {
    const values = this.metrics.get(metricName);
    if (!values || values.length === 0) {
      return 0;
    }
    return values.reduce((a, b) => a + b, 0) / values.length;
  }

  /**
   * Get all metrics summary
   */
  getSummary(): Record<string, { average: number; count: number; min: number; max: number }> {
    const summary: Record<string, { average: number; count: number; min: number; max: number }> = {};

    this.metrics.forEach((values, name) => {
      summary[name] = {
        average: this.getAverage(name),
        count: values.length,
        min: Math.min(...values),
        max: Math.max(...values)
      };
    });

    return summary;
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics.clear();
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

