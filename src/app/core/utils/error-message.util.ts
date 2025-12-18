/**
 * Error Message Utility
 * 
 * Standardizes error messages across the application
 * Provides consistent error message formatting and user-friendly messages
 */

export interface ErrorMessageOptions {
  title?: string;
  message: string;
  action?: string;
  retryable?: boolean;
  code?: string | number;
}

export interface StandardizedError {
  title: string;
  message: string;
  action?: string;
  retryable: boolean;
  code?: string | number;
}

/**
 * Standardize error message based on error type
 */
export function standardizeErrorMessage(error: any, options?: Partial<ErrorMessageOptions>): StandardizedError {
  const defaultOptions: ErrorMessageOptions = {
    message: 'เกิดข้อผิดพลาด',
    retryable: false,
    ...options
  };

  // Handle HTTP errors
  if (error?.status || error?.statusCode) {
    return standardizeHttpError(error, defaultOptions);
  }

  // Handle network errors
  if (error?.message?.includes('Network') || error?.name === 'NetworkError') {
    return {
      title: 'เชื่อมต่อไม่สำเร็จ',
      message: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต',
      action: 'ลองอีกครั้ง',
      retryable: true,
      code: 'NETWORK_ERROR'
    };
  }

  // Handle timeout errors
  if (error?.message?.includes('timeout') || error?.name === 'TimeoutError') {
    return {
      title: 'หมดเวลารอ',
      message: 'การร้องขอใช้เวลานานเกินไป กรุณาลองอีกครั้ง',
      action: 'ลองอีกครั้ง',
      retryable: true,
      code: 'TIMEOUT_ERROR'
    };
  }

  // Handle validation errors
  if (error?.errors || error?.validationErrors) {
    const validationErrors = error.errors || error.validationErrors;
    const firstError = Array.isArray(validationErrors) ? validationErrors[0] : validationErrors;
    return {
      title: 'ข้อมูลไม่ถูกต้อง',
      message: firstError?.message || firstError || 'กรุณาตรวจสอบข้อมูลที่กรอก',
      retryable: false,
      code: 'VALIDATION_ERROR'
    };
  }

  // Handle generic errors
  return {
    title: defaultOptions.title || 'เกิดข้อผิดพลาด',
    message: error?.message || error?.error?.message || defaultOptions.message,
    action: defaultOptions.action,
    retryable: defaultOptions.retryable || false,
    code: error?.code || defaultOptions.code
  };
}

/**
 * Standardize HTTP error messages
 */
function standardizeHttpError(error: any, options: ErrorMessageOptions): StandardizedError {
  const status = error.status || error.statusCode;
  const statusText = error.statusText || '';

  switch (status) {
    case 400:
      return {
        title: 'คำร้องขอไม่ถูกต้อง',
        message: error?.error?.message || 'ข้อมูลที่ส่งไม่ถูกต้อง กรุณาตรวจสอบและลองอีกครั้ง',
        retryable: false,
        code: status
      };

    case 401:
      return {
        title: 'ไม่ได้รับอนุญาต',
        message: 'กรุณาเข้าสู่ระบบใหม่',
        action: 'เข้าสู่ระบบ',
        retryable: false,
        code: status
      };

    case 403:
      return {
        title: 'ไม่มีสิทธิ์เข้าถึง',
        message: 'คุณไม่มีสิทธิ์เข้าถึงข้อมูลนี้',
        retryable: false,
        code: status
      };

    case 404:
      return {
        title: 'ไม่พบข้อมูล',
        message: error?.error?.message || 'ไม่พบข้อมูลที่ต้องการ',
        retryable: false,
        code: status
      };

    case 409:
      return {
        title: 'ข้อมูลซ้ำ',
        message: error?.error?.message || 'ข้อมูลนี้มีอยู่แล้วในระบบ',
        retryable: false,
        code: status
      };

    case 422:
      return {
        title: 'ข้อมูลไม่ถูกต้อง',
        message: error?.error?.message || 'ข้อมูลที่ส่งไม่ถูกต้องตามเงื่อนไข',
        retryable: false,
        code: status
      };

    case 429:
      return {
        title: 'คำร้องขอมากเกินไป',
        message: 'คุณส่งคำร้องขอมากเกินไป กรุณารอสักครู่แล้วลองอีกครั้ง',
        action: 'ลองอีกครั้ง',
        retryable: true,
        code: status
      };

    case 500:
    case 502:
    case 503:
    case 504:
      return {
        title: 'เซิร์ฟเวอร์เกิดข้อผิดพลาด',
        message: 'เซิร์ฟเวอร์ไม่สามารถประมวลผลคำร้องขอได้ กรุณาลองอีกครั้งในภายหลัง',
        action: 'ลองอีกครั้ง',
        retryable: true,
        code: status
      };

    default:
      return {
        title: 'เกิดข้อผิดพลาด',
        message: error?.error?.message || `เกิดข้อผิดพลาด (${status} ${statusText})`,
        action: status >= 500 ? 'ลองอีกครั้ง' : undefined,
        retryable: status >= 500,
        code: status
      };
  }
}

/**
 * Format error message for display
 */
export function formatErrorMessage(error: StandardizedError): string {
  if (error.title && error.message) {
    return `${error.title}: ${error.message}`;
  }
  return error.message || error.title || 'เกิดข้อผิดพลาด';
}

/**
 * Check if error is retryable
 */
export function isRetryableError(error: any): boolean {
  const standardized = standardizeErrorMessage(error);
  return standardized.retryable;
}

