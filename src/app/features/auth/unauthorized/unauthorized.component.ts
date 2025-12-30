import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IconComponent } from '@shared/components/icon/icon.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '@shared/components/glass-button/glass-button.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    IconComponent,
    GlassCardComponent,
    GlassButtonComponent
  ],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {
  private translate = inject(TranslateService);

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/home']);
  }

  goBack(): void {
    window.history.back();
  }
}

