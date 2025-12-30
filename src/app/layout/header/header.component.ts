import { Component, Output, EventEmitter, OnInit, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@core/services';
import { I18nService, Language } from '@core/services';
import { NotificationService, Notification } from '@core/services';
import { OmniSearchComponent } from '@shared/components/omni-search/omni-search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidenav = new EventEmitter<void>();
  @ViewChild('omniSearch', { static: false }) omniSearch!: OmniSearchComponent;

  private translate = inject(TranslateService);
  currentLanguage: Language = 'th';
  showLanguageMenu = false;
  showUserMenu = false;
  showNotificationMenu = false;
  private destroy$ = new Subject<void>();

  languages: { value: Language; label: string; flag: string }[] = [];

  notifications: Notification[] = [];
  unreadCount = 0;

  constructor(
    public authService: AuthService,
    private router: Router,
    public i18nService: I18nService,
    private notificationService: NotificationService
  ) {
    // Subscribe to language changes
    this.i18nService.currentLanguage$.pipe(takeUntil(this.destroy$)).subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnInit(): void {
    // Initialize languages
    this.languages = [
      { value: 'th', label: this.translate.instant('common.languages.thai'), flag: '🇹🇭' },
      { value: 'en', label: this.translate.instant('common.languages.english'), flag: '🇬🇧' }
    ];
    
    // Update languages when language changes
    this.translate.onLangChange.subscribe(() => {
      this.languages = [
        { value: 'th', label: this.translate.instant('common.languages.thai'), flag: '🇹🇭' },
        { value: 'en', label: this.translate.instant('common.languages.english'), flag: '🇬🇧' }
      ];
    });
    
    // Subscribe to notifications
    this.notificationService.notifications$.pipe(takeUntil(this.destroy$)).subscribe(notifications => {
      this.notifications = notifications;
      this.unreadCount = notifications.filter(n => !n.read).length;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleNotificationMenu(): void {
    this.showNotificationMenu = !this.showNotificationMenu;
    if (this.showNotificationMenu) {
      this.showLanguageMenu = false;
      this.showUserMenu = false;
      // Optional: Mark as read when opening? Or keep until clicked?
      // Keeping unread for now until user interacts
    }
  }

  closeNotificationMenu(): void {
    this.showNotificationMenu = false;
  }

  markAllAsRead(): void {
    this.notificationService.markAllAsRead();
  }

  handleNotificationClick(notification: Notification): void {
    this.notificationService.markAsRead(notification.id);
    if (notification.route) {
      this.router.navigate([notification.route]);
      this.showNotificationMenu = false;
    }
  }

  onLogout(): void {
    this.authService.logout();
  }

  onProfile(): void {
    this.router.navigate(['/home']);
    this.showUserMenu = false;
  }

  onPreferences(): void {
    this.router.navigate(['/home']);
    this.showUserMenu = false;
  }

  changeLanguage(language: Language): void {
    this.i18nService.setLanguage(language);
    this.showLanguageMenu = false;
  }

  toggleLanguageMenu(): void {
    this.showLanguageMenu = !this.showLanguageMenu;
    if (this.showLanguageMenu) {
      this.showUserMenu = false;
      this.showNotificationMenu = false;
    }
  }

  closeLanguageMenu(): void {
    this.showLanguageMenu = false;
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
    if (this.showUserMenu) {
      this.showLanguageMenu = false;
      this.showNotificationMenu = false;
    }
  }

  closeUserMenu(): void {
    this.showUserMenu = false;
  }

  getNotificationIconName(type: string): string {
    const iconMap: { [key: string]: string } = {
      'info': 'info',
      'success': 'check_circle',
      'warning': 'warning',
      'error': 'error'
    };
    return iconMap[type] || 'info';
  }

  getNotificationIconColor(type: string): string {
    const colorMap: { [key: string]: string } = {
      'info': 'text-blue-500',
      'success': 'text-green-500',
      'warning': 'text-yellow-500',
      'error': 'text-red-500'
    };
    return colorMap[type] || 'text-blue-500';
  }

  getTimeAgo(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return this.translate.instant('common.timeAgo.justNow');
    if (minutes < 60) return this.translate.instant('common.timeAgo.minutesAgo', { minutes });
    if (hours < 24) return this.translate.instant('common.timeAgo.hoursAgo', { hours });
    if (days < 7) return this.translate.instant('common.timeAgo.daysAgo', { days });
    return new Date(date).toLocaleDateString(this.currentLanguage === 'th' ? 'th-TH' : 'en-US');
  }

  openOmniSearch(): void {
    if (this.omniSearch) {
      this.omniSearch.open();
    }
  }
}
