import { Component, Output, EventEmitter, OnInit, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@core/services';
import { StorageService } from '@core/services';
import { NotificationService, Notification } from '@core/services';
import { OmniSearchComponent } from '@shared/components/omni-search/omni-search.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';
import { STORAGE_KEYS } from '@core/constants/storage-keys.constant';
import { Language, isSupportedLanguage, getFlagPath } from '@core/types/language.type';

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

  languages: { value: Language; label: string; flagPath: string }[] = [];

  notifications: Notification[] = [];
  unreadCount = 0;

  constructor(
    public authService: AuthService,
    private router: Router,
    private storageService: StorageService,
    private notificationService: NotificationService
  ) {
    // Initialize current language
    this.currentLanguage = (this.translate.currentLang as Language) || 'th';

    // Subscribe to language changes
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(event => {
      const lang = event.lang as Language;
      if (isSupportedLanguage(lang)) {
        this.currentLanguage = lang;
      }
    });
  }

  ngOnInit(): void {
    // Initialize languages
    this.updateLanguages();

    // Update languages when language changes
    this.translate.onLangChange.subscribe(() => {
      this.updateLanguages();
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

  /**
   * Update languages list with translations
   */
  private updateLanguages(): void {
    this.languages = [
      { value: 'th', label: this.translate.instant('common.languages.thai'), flagPath: getFlagPath('th') },
      { value: 'en', label: this.translate.instant('common.languages.english'), flagPath: getFlagPath('en') },
      { value: 'lo', label: this.translate.instant('common.languages.lao'), flagPath: getFlagPath('lo') },
      { value: 'my', label: this.translate.instant('common.languages.myanmar'), flagPath: getFlagPath('my') },
      { value: 'vi', label: this.translate.instant('common.languages.vietnamese'), flagPath: getFlagPath('vi') },
      { value: 'zh', label: this.translate.instant('common.languages.chinese'), flagPath: getFlagPath('zh') }
    ];
  }

  changeLanguage(language: Language): void {
    // Validate language
    if (!isSupportedLanguage(language)) {
      console.warn(`Language ${language} is not supported.`);
      return;
    }

    // Change language
    this.translate.use(language);

    // Save to storage
    this.storageService.setItem(STORAGE_KEYS.LANGUAGE, language);

    // Update document language attribute
    document.documentElement.setAttribute('lang', language);

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
