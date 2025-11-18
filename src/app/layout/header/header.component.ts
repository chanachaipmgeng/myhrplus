import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  onLogout(): void {
    this.authService.logout();
  }

  onProfile(): void {
    this.router.navigate(['/personal/profile']);
  }
}
