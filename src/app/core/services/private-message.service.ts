import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MessageModel } from '../models/message.model';
import { PageModel } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class PrivateMessageService {
  private apiUrl = environment.baseUrl || environment.jbossUrl;

  constructor(private http: HttpClient) {}

  /**
   * Get private messages inbox with pagination
   */
  privateMessageBySize(size: number = 10, page: number = 0): Observable<PageModel<MessageModel>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.http.get<PageModel<MessageModel>>(
      `${this.apiUrl}/private-message/inbox`,
      { params }
    );
  }

  /**
   * Get all private messages inbox
   */
  privateMessageInbox(): Observable<MessageModel[]> {
    return this.http.get<MessageModel[]>(
      `${this.apiUrl}/private-message/inbox/lists`
    );
  }

  /**
   * Get private messages sendbox
   */
  privateMessageSendbox(): Observable<MessageModel[]> {
    return this.http.get<MessageModel[]>(
      `${this.apiUrl}/private-message/sendbox/lists`
    );
  }

  /**
   * Send private message
   */
  privateMessageSend(body: any): Observable<MessageModel> {
    return this.http.post<MessageModel>(
      `${environment.jbossUrl}/emvapi/private-message/send`,
      body
    );
  }

  /**
   * Update message flag (read/unread)
   */
  flagUpdate(body: any): Observable<any> {
    return this.http.post<any>(
      `${environment.jbossUrl}/emvapi/private-message/flag-update`,
      body
    );
  }

  /**
   * Delete private message
   */
  privateMessageDelete(body: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: body
    };
    
    return this.http.delete<any>(
      `${environment.jbossUrl}/emvapi/private-message`,
      options
    );
  }

  /**
   * Get count of new/unread private messages
   */
  countNewPrivateMessage(): Observable<number> {
    return this.http.get<number>(
      `${this.apiUrl}/private-message/inbox/counter-new`
    );
  }

  /**
   * Get unread message count (alias for countNewPrivateMessage)
   */
  getUnreadCount(): Observable<number> {
    return this.countNewPrivateMessage();
  }
}

