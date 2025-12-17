import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: Date;
  tags?: Record<string, string>;
}

export interface SystemHealth {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: Date;
  metrics: {
    errorRate: number;
    averageResponseTime: number;
    activeUsers: number;
    cacheHitRate: number;
  };
  issues: string[];
}

/**
 * MonitoringService - System monitoring and performance tracking
 * 
 * Provides:
 * - Performance metrics collection
 * - System health monitoring
 * - API response time tracking
 * - Error rate monitoring
 * - Cache performance tracking
 */
@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  private performanceMetrics: PerformanceMetric[] = [];
  private apiResponseTimes: Map<string, number[]> = new Map();
  private errorCounts: Map<string, number> = new Map();
  private healthSubject = new BehaviorSubject<SystemHealth>(this.getInitialHealth());
  public health$ = this.healthSubject.asObservable();

  private readonly MAX_METRICS = 1000;
  private readonly HEALTH_CHECK_INTERVAL = 60000; // 1 minute

  constructor() {
    // Start health monitoring
    this.startHealthMonitoring();
  }

  /**
   * Track API response time
   */
  trackApiResponseTime(endpoint: string, responseTime: number): void {
    if (!this.apiResponseTimes.has(endpoint)) {
      this.apiResponseTimes.set(endpoint, []);
    }

    const times = this.apiResponseTimes.get(endpoint)!;
    times.push(responseTime);

    // Keep only last 100 measurements per endpoint
    if (times.length > 100) {
      times.shift();
    }
  }

  /**
   * Track error occurrence
   */
  trackError(endpoint: string, errorCode: string): void {
    const key = `${endpoint}:${errorCode}`;
    const count = this.errorCounts.get(key) || 0;
    this.errorCounts.set(key, count + 1);
  }

  /**
   * Record performance metric
   */
  recordMetric(name: string, value: number, unit: string, tags?: Record<string, string>): void {
    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: new Date(),
      tags
    };

    this.performanceMetrics.push(metric);

    // Enforce max metrics
    if (this.performanceMetrics.length > this.MAX_METRICS) {
      this.performanceMetrics.shift();
    }
  }

  /**
   * Get average response time for endpoint
   */
  getAverageResponseTime(endpoint: string): number {
    const times = this.apiResponseTimes.get(endpoint);
    if (!times || times.length === 0) {
      return 0;
    }

    const sum = times.reduce((acc, time) => acc + time, 0);
    return sum / times.length;
  }

  /**
   * Get overall average response time
   */
  getOverallAverageResponseTime(): number {
    const allTimes: number[] = [];
    this.apiResponseTimes.forEach(times => {
      allTimes.push(...times);
    });

    if (allTimes.length === 0) {
      return 0;
    }

    const sum = allTimes.reduce((acc, time) => acc + time, 0);
    return sum / allTimes.length;
  }

  /**
   * Get error rate (errors per minute)
   */
  getErrorRate(): number {
    // Count errors from errorCounts map
    let errorCount = 0;
    this.errorCounts.forEach(count => {
      errorCount += count;
    });
    return errorCount;
  }

  /**
   * Get system health
   */
  getSystemHealth(): SystemHealth {
    const errorRate = this.getErrorRate();
    const avgResponseTime = this.getOverallAverageResponseTime();
    const issues: string[] = [];

    // Determine status
    let status: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';

    if (errorRate > 10) {
      status = 'unhealthy';
      issues.push(`High error rate: ${errorRate} errors/minute`);
    } else if (errorRate > 5) {
      status = 'degraded';
      issues.push(`Elevated error rate: ${errorRate} errors/minute`);
    }

    if (avgResponseTime > 5000) {
      status = status === 'healthy' ? 'degraded' : 'unhealthy';
      issues.push(`Slow response time: ${avgResponseTime.toFixed(0)}ms average`);
    } else if (avgResponseTime > 2000) {
      if (status === 'healthy') {
        status = 'degraded';
      }
      issues.push(`Elevated response time: ${avgResponseTime.toFixed(0)}ms average`);
    }

    const health: SystemHealth = {
      status,
      timestamp: new Date(),
      metrics: {
        errorRate,
        averageResponseTime: avgResponseTime,
        activeUsers: this.getActiveUsers(),
        cacheHitRate: this.getCacheHitRate()
      },
      issues
    };

    return health;
  }

  /**
   * Get active users count
   */
  private getActiveUsers(): number {
    // Placeholder - would need user tracking service
    return 0;
  }

  /**
   * Get cache hit rate (placeholder - would need cache service integration)
   */
  private getCacheHitRate(): number {
    // This would need integration with CacheService
    // For now, return a placeholder
    return 0;
  }

  /**
   * Start health monitoring
   */
  private startHealthMonitoring(): void {
    interval(this.HEALTH_CHECK_INTERVAL)
      .pipe(
        startWith(0),
        map(() => this.getSystemHealth())
      )
      .subscribe(health => {
        this.healthSubject.next(health);
      });
  }

  /**
   * Get initial health status
   */
  private getInitialHealth(): SystemHealth {
    return {
      status: 'healthy',
      timestamp: new Date(),
      metrics: {
        errorRate: 0,
        averageResponseTime: 0,
        activeUsers: 0,
        cacheHitRate: 0
      },
      issues: []
    };
  }

  /**
   * Get performance metrics
   */
  getMetrics(filter?: { name?: string; startDate?: Date; endDate?: Date }): PerformanceMetric[] {
    let metrics = [...this.performanceMetrics];

    if (filter?.name) {
      metrics = metrics.filter(m => m.name === filter.name);
    }

    if (filter?.startDate) {
      metrics = metrics.filter(m => m.timestamp >= filter.startDate!);
    }

    if (filter?.endDate) {
      metrics = metrics.filter(m => m.timestamp <= filter.endDate!);
    }

    return metrics;
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.performanceMetrics = [];
    this.apiResponseTimes.clear();
    this.errorCounts.clear();
  }

  /**
   * Get monitoring statistics
   */
  getStats(): {
    totalMetrics: number;
    trackedEndpoints: number;
    totalErrors: number;
    averageResponseTime: number;
  } {
    let totalErrors = 0;
    this.errorCounts.forEach(count => {
      totalErrors += count;
    });

    return {
      totalMetrics: this.performanceMetrics.length,
      trackedEndpoints: this.apiResponseTimes.size,
      totalErrors,
      averageResponseTime: this.getOverallAverageResponseTime()
    };
  }
}

