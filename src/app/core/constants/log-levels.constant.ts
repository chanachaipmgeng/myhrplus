/**
 * Log Levels and Logging Constants
 * Defines log levels and structured logging format
 */

/**
 * Log level enum
 * Represents different severity levels for logging
 */
export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL'
}

/**
 * Log entry interface
 * Structured format for all log entries
 */
export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: Record<string, any>;
  userId?: string;
  sessionId?: string;
  moduleName?: string;
  url?: string;
  error?: {
    code?: string;
    message: string;
    stack?: string;
  };
}

/**
 * Log filter options
 */
export interface LogFilter {
  level?: LogLevel;
  moduleName?: string;
  userId?: string;
  startDate?: Date;
  endDate?: Date;
  searchText?: string;
}

/**
 * Log retention policy
 */
export interface LogRetentionPolicy {
  maxEntries: number;
  maxAge: number; // in milliseconds
  levelsToKeep: LogLevel[]; // Always keep these levels regardless of age
}

/**
 * Default log retention policy
 */
export const DEFAULT_RETENTION_POLICY: LogRetentionPolicy = {
  maxEntries: 1000,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  levelsToKeep: [LogLevel.ERROR, LogLevel.FATAL]
};

/**
 * Log level priority (for filtering)
 */
export const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
  [LogLevel.DEBUG]: 0,
  [LogLevel.INFO]: 1,
  [LogLevel.WARN]: 2,
  [LogLevel.ERROR]: 3,
  [LogLevel.FATAL]: 4
};

/**
 * Check if log level should be logged based on minimum level
 */
export function shouldLog(entryLevel: LogLevel, minimumLevel: LogLevel): boolean {
  return LOG_LEVEL_PRIORITY[entryLevel] >= LOG_LEVEL_PRIORITY[minimumLevel];
}

