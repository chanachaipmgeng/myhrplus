# Best Practices Guide

**เวอร์ชัน**: 1.0.0  
**วันที่อัปเดต**: 2024-12-20  
**สถานะ**: ✅ Active

---

## 📋 สารบัญ

1. [Code Standards](#code-standards)
2. [Component Development](#component-development)
3. [Styling Guidelines](#styling-guidelines)
4. [Accessibility](#accessibility)
5. [Performance](#performance)
6. [Testing](#testing)
7. [Documentation](#documentation)

---

## 💻 Code Standards

### TypeScript
```typescript
// ✅ Good - Explicit types, no any
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Observable<User> {
  return this.apiService.get<User>(`/users/${id}`);
}

// ❌ Bad - Using any, implicit types
function getUser(id: any): any {
  return this.http.get(`/users/${id}`);
}
```

### Naming Conventions
- **Files**: `kebab-case.component.ts`
- **Classes**: `PascalCase`
- **Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Interfaces**: `PascalCase` (no `I` prefix)

### Imports
```typescript
// ✅ Good - Grouped imports
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';

// ❌ Bad - Unorganized imports
import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
```

### Error Handling
```typescript
// ✅ Good - Proper error handling
this.userService.getUser(id).subscribe({
  next: (user) => this.handleSuccess(user),
  error: (error) => {
    const standardized = this.notificationService.showStandardizedError(error);
    if (standardized.retryable) {
      // Show retry option
    }
  }
});

// ❌ Bad - No error handling
this.userService.getUser(id).subscribe(user => {
  this.user = user;
});
```

---

## 🧩 Component Development

### Component Structure
```typescript
// ✅ Good - Proper component structure
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, GlassCardComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  // Public properties
  @Input() userId: string = '';
  @Output() userUpdated = new EventEmitter<User>();
  
  user: User | null = null;
  isLoading = false;
  
  // Private properties
  private destroy$ = new Subject<void>();
  
  constructor(
    private userService: UserService,
    private notificationService: NotificationService
  ) {}
  
  ngOnInit(): void {
    this.loadUser();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  // Public methods
  saveUser(): void {
    // Implementation
  }
  
  // Private methods
  private loadUser(): void {
    // Implementation
  }
}
```

### Input/Output
```typescript
// ✅ Good - Default values, proper types
@Input() title: string = '';
@Input() data: any[] = [];
@Input() isLoading: boolean = false;
@Output() action = new EventEmitter<ActionEvent>();

// ❌ Bad - No defaults, any types
@Input() title: string;
@Input() data: any;
@Output() action = new EventEmitter();
```

### Lifecycle Hooks
```typescript
// ✅ Good - Proper cleanup
ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
  // Cleanup subscriptions, timers, etc.
}

// ❌ Bad - Memory leaks
ngOnDestroy(): void {
  // No cleanup
}
```

---

## 🎨 Styling Guidelines

### Tailwind CSS
```html
<!-- ✅ Good - Use Tailwind classes -->
<div class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
  <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Title</h2>
</div>

<!-- ❌ Bad - Inline styles or complex SCSS -->
<div style="display: flex; align-items: center; gap: 1rem; padding: 1rem;">
  <h2 style="font-size: 1.25rem; font-weight: 600;">Title</h2>
</div>
```

### SCSS Usage
```scss
// ✅ Good - Complex styles in SCSS
.glass-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    // Complex pseudo-element styles
  }
}

// ❌ Bad - Simple utilities in SCSS
.glass-card {
  display: flex;
  padding: 1rem;
  margin: 1rem;
}
```

### Design Tokens
```scss
// ✅ Good - Use design tokens
.button {
  padding: $spacing-4;
  border-radius: $radius-md;
  color: $primary-600;
  transition: all $duration-300 $ease-out;
}

// ❌ Bad - Hardcoded values
.button {
  padding: 1rem;
  border-radius: 0.5rem;
  color: #07399C;
  transition: all 0.3s ease;
}
```

---

## ♿ Accessibility

### ARIA Attributes
```html
<!-- ✅ Good - Proper ARIA attributes -->
<button 
  [attr.aria-label]="'Close dialog'"
  [attr.aria-expanded]="isOpen"
  [attr.aria-controls]="dialogId">
  <app-icon name="close"></app-icon>
</button>

<!-- ❌ Bad - No ARIA attributes -->
<button>
  <app-icon name="close"></app-icon>
</button>
```

### Keyboard Navigation
```typescript
// ✅ Good - Keyboard event handling
@HostListener('keydown', ['$event'])
handleKeyDown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    this.close();
  } else if (event.key === 'Enter' || event.key === ' ') {
    this.activate();
  }
}

// ❌ Bad - No keyboard support
// Only mouse clicks work
```

### Focus Management
```typescript
// ✅ Good - Proper focus management
openModal(): void {
  this.isOpen = true;
  setTimeout(() => {
    this.modalElement?.nativeElement.focus();
  });
}

closeModal(): void {
  this.isOpen = false;
  this.triggerElement?.nativeElement.focus();
}

// ❌ Bad - No focus management
openModal(): void {
  this.isOpen = true;
}
```

### Touch Targets
```html
<!-- ✅ Good - Minimum 44x44px -->
<button class="w-11 h-11 min-w-[44px] min-h-[44px]">
  <app-icon name="menu"></app-icon>
</button>

<!-- ❌ Bad - Too small -->
<button class="w-8 h-8">
  <app-icon name="menu"></app-icon>
</button>
```

---

## ⚡ Performance

### Change Detection
```typescript
// ✅ Good - OnPush strategy
@Component({
  selector: 'app-user-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // ...
})

// ❌ Bad - Default strategy (always checks)
@Component({
  selector: 'app-user-list',
  // ...
})
```

### TrackBy Functions
```html
<!-- ✅ Good - TrackBy function -->
<div *ngFor="let user of users; trackBy: trackByUserId">
  {{ user.name }}
</div>

// In component
trackByUserId(index: number, user: User): string {
  return user.id;
}

<!-- ❌ Bad - No trackBy -->
<div *ngFor="let user of users">
  {{ user.name }}
</div>
```

### Lazy Loading
```typescript
// ✅ Good - Lazy loaded routes
{
  path: 'users',
  loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
}

// ❌ Bad - Eager loading
import { UsersModule } from './features/users/users.module';
```

### Observable Management
```typescript
// ✅ Good - Proper subscription management
private destroy$ = new Subject<void>();

ngOnInit(): void {
  this.userService.getUsers()
    .pipe(takeUntil(this.destroy$))
    .subscribe(users => this.users = users);
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}

// ❌ Bad - Memory leaks
ngOnInit(): void {
  this.userService.getUsers().subscribe(users => {
    this.users = users;
  });
  // No unsubscribe!
}
```

---

## 🧪 Testing

### Unit Tests
```typescript
// ✅ Good - Comprehensive unit tests
describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should get user by id', () => {
    const mockUser: User = { id: '1', name: 'Test', email: 'test@example.com' };
    
    service.getUser('1').subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne('/api/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
```

### Component Tests
```typescript
// ✅ Good - Component testing
describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileComponent],
      providers: [
        { provide: UserService, useValue: mockUserService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load user on init', () => {
    component.userId = '1';
    fixture.detectChanges();
    expect(component.user).toBeDefined();
  });
});
```

---

## 📚 Documentation

### Component Documentation
```typescript
/**
 * User Profile Component
 * 
 * Displays user information and allows editing.
 * 
 * @example
 * ```html
 * <app-user-profile 
 *   [userId]="'123'"
 *   (userUpdated)="onUserUpdated($event)">
 * </app-user-profile>
 * ```
 */
@Component({
  selector: 'app-user-profile',
  // ...
})
export class UserProfileComponent {
  /**
   * User ID to display
   */
  @Input() userId: string = '';
  
  /**
   * Emitted when user is updated
   */
  @Output() userUpdated = new EventEmitter<User>();
}
```

### Service Documentation
```typescript
/**
 * User Service
 * 
 * Handles user-related API calls.
 * 
 * @example
 * ```typescript
 * this.userService.getUser('123').subscribe(user => {
 *   console.log(user);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Get user by ID
   * @param id User ID
   * @returns Observable of User
   */
  getUser(id: string): Observable<User> {
    return this.apiService.get<User>(`/users/${id}`);
  }
}
```

### README Files
- Include component purpose
- Include usage examples
- Include props/inputs documentation
- Include events/outputs documentation
- Include styling guidelines

---

## ✅ Checklist

### Before Committing
- [ ] Code follows naming conventions
- [ ] No `any` types (unless necessary)
- [ ] Proper error handling
- [ ] Accessibility attributes added
- [ ] Touch targets are 44x44px
- [ ] Performance optimizations applied
- [ ] Tests written/updated
- [ ] Documentation updated

### Before PR
- [ ] All tests pass
- [ ] Linter passes
- [ ] No console errors
- [ ] Accessibility tested
- [ ] Mobile tested
- [ ] Cross-browser tested
- [ ] Documentation updated

---

**Last Updated**: 2024-12-20  
**Status**: ✅ Active

