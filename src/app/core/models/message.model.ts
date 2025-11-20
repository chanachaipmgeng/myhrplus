export interface MessageModel {
  messageId?: string;
  senderId?: any;
  receiverId?: any;
  topic?: string;
  message?: string;
  receiveDate?: string;
  sendDate?: string;
  flag?: string;
  read?: boolean;
  [key: string]: any;
}

export interface PageModel<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}
