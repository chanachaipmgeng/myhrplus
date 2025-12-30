import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@env/environment';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  translate = inject(TranslateService);
  appName = environment.appName;
  version = environment.version;
  currentYear = new Date().getFullYear();
}

