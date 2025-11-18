import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HR System';

  constructor(
    private router: Router,
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Initialize theme service
    this.themeService.watchSystemPreference();
    
    // Apply theme class to body
    this.themeService.theme$.subscribe(theme => {
      const body = document.body;
      // Remove all theme classes
      body.classList.remove('theme-blue', 'theme-indigo', 'theme-purple', 'theme-green', 'theme-orange', 'theme-red', 'theme-teal', 'theme-pink');
      // Add current theme class
      body.classList.add(`theme-${theme.color}`);
    });

    // Check if user is already logged in
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }
}
