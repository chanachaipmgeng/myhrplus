/**
 * Error Codes and Messages
 * Centralized error code definitions and user-friendly messages
 */

/**
 * Error codes enum
 * Represents all possible error types in the application
 */
export enum ErrorCode {
  // Network errors
  NETWORK_ERROR = 'NETWORK_ERROR',
  CONNECTION_TIMEOUT = 'CONNECTION_TIMEOUT',
  NO_INTERNET = 'NO_INTERNET',

  // Authentication errors
  UNAUTHORIZED = 'UNAUTHORIZED',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TOKEN_INVALID = 'TOKEN_INVALID',
  SESSION_EXPIRED = 'SESSION_EXPIRED',
  LOGIN_REQUIRED = 'LOGIN_REQUIRED',

  // Authorization errors
  FORBIDDEN = 'FORBIDDEN',
  ACCESS_DENIED = 'ACCESS_DENIED',
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',

  // Client errors (4xx)
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  CONFLICT = 'CONFLICT',
  PAYLOAD_TOO_LARGE = 'PAYLOAD_TOO_LARGE',
  UNSUPPORTED_MEDIA_TYPE = 'UNSUPPORTED_MEDIA_TYPE',

  // Server errors (5xx)
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
  GATEWAY_TIMEOUT = 'GATEWAY_TIMEOUT',
  BAD_GATEWAY = 'BAD_GATEWAY',

  // Application errors
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  OPERATION_FAILED = 'OPERATION_FAILED',
  DATA_NOT_FOUND = 'DATA_NOT_FOUND',
  INVALID_INPUT = 'INVALID_INPUT'
}

/**
 * Error messages mapping
 * Maps error codes to user-friendly messages in Thai and English
 */
export const ERROR_MESSAGES: Record<ErrorCode, { th: string; en: string }> = {
  // Network errors
  [ErrorCode.NETWORK_ERROR]: {
    th: 'เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง',
    en: 'Network error occurred. Please try again'
  },
  [ErrorCode.CONNECTION_TIMEOUT]: {
    th: 'การเชื่อมต่อหมดเวลา กรุณาลองใหม่อีกครั้ง',
    en: 'Connection timeout. Please try again'
  },
  [ErrorCode.NO_INTERNET]: {
    th: 'ไม่สามารถเชื่อมต่ออินเทอร์เน็ตได้ กรุณาตรวจสอบการเชื่อมต่อ',
    en: 'No internet connection. Please check your connection'
  },

  // Authentication errors
  [ErrorCode.UNAUTHORIZED]: {
    th: 'กรุณาเข้าสู่ระบบอีกครั้ง',
    en: 'Please login again'
  },
  [ErrorCode.TOKEN_EXPIRED]: {
    th: 'เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง',
    en: 'Session expired. Please login again'
  },
  [ErrorCode.TOKEN_INVALID]: {
    th: 'โทเค็นไม่ถูกต้อง กรุณาเข้าสู่ระบบอีกครั้ง',
    en: 'Invalid token. Please login again'
  },
  [ErrorCode.SESSION_EXPIRED]: {
    th: 'เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง',
    en: 'Session expired. Please login again'
  },
  [ErrorCode.LOGIN_REQUIRED]: {
    th: 'กรุณาเข้าสู่ระบบเพื่อใช้งาน',
    en: 'Please login to continue'
  },

  // Authorization errors
  [ErrorCode.FORBIDDEN]: {
    th: 'คุณไม่มีสิทธิ์เข้าถึงทรัพยากรนี้',
    en: 'You do not have permission to access this resource'
  },
  [ErrorCode.ACCESS_DENIED]: {
    th: 'การเข้าถึงถูกปฏิเสธ',
    en: 'Access denied'
  },
  [ErrorCode.INSUFFICIENT_PERMISSIONS]: {
    th: 'คุณไม่มีสิทธิ์เพียงพอในการดำเนินการนี้',
    en: 'You do not have sufficient permissions for this operation'
  },

  // Client errors (4xx)
  [ErrorCode.BAD_REQUEST]: {
    th: 'คำขอไม่ถูกต้อง กรุณาตรวจสอบข้อมูลที่ส่ง',
    en: 'Bad request. Please check your input'
  },
  [ErrorCode.NOT_FOUND]: {
    th: 'ไม่พบข้อมูลที่ต้องการ',
    en: 'Resource not found'
  },
  [ErrorCode.VALIDATION_ERROR]: {
    th: 'ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบและลองใหม่อีกครั้ง',
    en: 'Validation error. Please check your input and try again'
  },
  [ErrorCode.CONFLICT]: {
    th: 'ข้อมูลขัดแย้งกับข้อมูลที่มีอยู่',
    en: 'Data conflict with existing data'
  },
  [ErrorCode.PAYLOAD_TOO_LARGE]: {
    th: 'ขนาดข้อมูลใหญ่เกินไป',
    en: 'Payload too large'
  },
  [ErrorCode.UNSUPPORTED_MEDIA_TYPE]: {
    th: 'รูปแบบไฟล์ไม่รองรับ',
    en: 'Unsupported media type'
  },

  // Server errors (5xx)
  [ErrorCode.INTERNAL_SERVER_ERROR]: {
    th: 'เกิดข้อผิดพลาดในระบบ กรุณาลองใหม่อีกครั้งในภายหลัง',
    en: 'Internal server error. Please try again later'
  },
  [ErrorCode.SERVICE_UNAVAILABLE]: {
    th: 'บริการไม่พร้อมใช้งานในขณะนี้ กรุณาลองใหม่อีกครั้งในภายหลัง',
    en: 'Service unavailable. Please try again later'
  },
  [ErrorCode.GATEWAY_TIMEOUT]: {
    th: 'การเชื่อมต่อหมดเวลา กรุณาลองใหม่อีกครั้ง',
    en: 'Gateway timeout. Please try again'
  },
  [ErrorCode.BAD_GATEWAY]: {
    th: 'เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง',
    en: 'Bad gateway. Please try again'
  },

  // Application errors
  [ErrorCode.UNKNOWN_ERROR]: {
    th: 'เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ',
    en: 'An unknown error occurred'
  },
  [ErrorCode.OPERATION_FAILED]: {
    th: 'การดำเนินการล้มเหลว กรุณาลองใหม่อีกครั้ง',
    en: 'Operation failed. Please try again'
  },
  [ErrorCode.DATA_NOT_FOUND]: {
    th: 'ไม่พบข้อมูล',
    en: 'Data not found'
  },
  [ErrorCode.INVALID_INPUT]: {
    th: 'ข้อมูลที่ป้อนไม่ถูกต้อง',
    en: 'Invalid input'
  }
};

/**
 * Map HTTP status codes to ErrorCode
 */
export const HTTP_STATUS_TO_ERROR_CODE: Record<number, ErrorCode> = {
  // Client errors (4xx)
  400: ErrorCode.BAD_REQUEST,
  401: ErrorCode.UNAUTHORIZED,
  403: ErrorCode.FORBIDDEN,
  404: ErrorCode.NOT_FOUND,
  408: ErrorCode.CONNECTION_TIMEOUT,
  409: ErrorCode.CONFLICT,
  413: ErrorCode.PAYLOAD_TOO_LARGE,
  415: ErrorCode.UNSUPPORTED_MEDIA_TYPE,
  422: ErrorCode.VALIDATION_ERROR,
  429: ErrorCode.CONNECTION_TIMEOUT, // Too many requests

  // Server errors (5xx)
  500: ErrorCode.INTERNAL_SERVER_ERROR,
  502: ErrorCode.BAD_GATEWAY,
  503: ErrorCode.SERVICE_UNAVAILABLE,
  504: ErrorCode.GATEWAY_TIMEOUT
};

/**
 * Get error code from HTTP status
 */
export function getErrorCodeFromStatus(status: number): ErrorCode {
  return HTTP_STATUS_TO_ERROR_CODE[status] || ErrorCode.UNKNOWN_ERROR;
}

/**
 * Get error message by code and language
 * @param code - Error code
 * @param lang - Language code ('th' | 'en'), defaults to 'th'
 */
export function getErrorMessage(code: ErrorCode, lang: 'th' | 'en' = 'th'): string {
  const message = ERROR_MESSAGES[code];
  if (!message) {
    return ERROR_MESSAGES[ErrorCode.UNKNOWN_ERROR][lang];
  }
  return message[lang];
}

