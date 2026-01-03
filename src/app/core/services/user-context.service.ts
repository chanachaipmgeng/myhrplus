import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { Member } from '@core/models';

@Injectable({
    providedIn: 'root'
})
export class UserContextService {
    private readonly USER_KEY = 'user_data';
    private currentUserSubject = new BehaviorSubject<Member | null>(null);
    public currentUser$ = this.currentUserSubject.asObservable();

    constructor(private storage: StorageService) {
        // Note: We don't auto-load here to allow AuthService to control the sequence
        // (e.g. check token validity first)
    }

    /**
     * Load user from storage and emit to subject
     * specific migration logic for sessionStorage is handled here
     */
    public loadUser(): Member | null {
        // Check localStorage first
        let userData = this.storage.getItem(this.USER_KEY);

        // If not found in localStorage, check sessionStorage (for backward compatibility)
        if (!userData && typeof window !== 'undefined' && window.sessionStorage) {
            const sessionUser = sessionStorage.getItem('currentUser');
            if (sessionUser) {
                try {
                    userData = JSON.parse(sessionUser);
                    // Migrate to localStorage
                    this.storage.setItem(this.USER_KEY, sessionUser);
                } catch (error) {
                    console.error('Error parsing sessionStorage user data:', error);
                }
            }
        }

        if (userData) {
            try {
                const user: Member = typeof userData === 'string' ? JSON.parse(userData) : userData;
                this.currentUserSubject.next(user);
                return user;
            } catch (error) {
                console.error('Error parsing user data:', error);
                this.clearUser();
                return null;
            }
        }

        return null;
    }

    public setUser(user: Member): void {
        this.storage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSubject.next(user);

        // Backward compatibility
        if (typeof window !== 'undefined' && window.sessionStorage) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
    }

    public clearUser(): void {
        this.storage.removeItem(this.USER_KEY);
        this.currentUserSubject.next(null);

        // Backward compatibility
        if (typeof window !== 'undefined' && window.sessionStorage) {
            sessionStorage.removeItem('currentUser');
            sessionStorage.removeItem('dbName');
        }
    }

    public getCurrentUser(): Member | null {
        return this.currentUserSubject.value;
    }

    public hasRole(role: string): boolean {
        const user = this.getCurrentUser();
        return user && user.roles ? user.roles.includes(role) : false;
    }

    public hasAnyRole(roles: string[]): boolean {
        return roles.some(role => this.hasRole(role));
    }

    public hasPermission(permission: string): boolean {
        const user = this.getCurrentUser();
        return user && user.permissions ? user.permissions.includes(permission) : false;
    }

    public hasAnyPermission(permissions: string[]): boolean {
        return permissions.some(permission => this.hasPermission(permission));
    }
}
