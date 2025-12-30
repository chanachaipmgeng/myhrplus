import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

export interface ValidationMessage {
  key: string;
  message: string;
  icon?: string;
}

@Component({
  selector: 'app-form-validation-messages',
  standalone: true,
  imports: [CommonModule, TranslateModule, IconComponent],
  templateUrl: './form-validation-messages.component.html',
  styleUrls: ['./form-validation-messages.component.scss']
})
export class FormValidationMessagesComponent implements OnInit {
  private translate = inject(TranslateService);
  
  @Input() control!: AbstractControl | null;
  @Input() customMessages: { [key: string]: string } = {};
  @Input() showIcon = true;
  @Input() showOnlyFirst = true;
  @Input() position: 'below' | 'inline' = 'below';

  errors: ValidationMessage[] = [];

  private getDefaultMessages(): { [key: string]: string } {
    return {
      required: this.translate.instant('common.validation.required'),
      email: this.translate.instant('common.validation.email'),
      minlength: this.translate.instant('common.validation.minlength'),
      maxlength: this.translate.instant('common.validation.maxlength'),
      min: this.translate.instant('common.validation.min'),
      max: this.translate.instant('common.validation.max'),
      pattern: this.translate.instant('common.validation.pattern'),
      url: this.translate.instant('common.validation.url'),
      date: this.translate.instant('common.validation.date'),
      time: this.translate.instant('common.validation.time'),
      phone: this.translate.instant('common.validation.phone'),
      password: this.translate.instant('common.validation.password'),
      passwordMismatch: this.translate.instant('common.validation.passwordMismatch'),
      number: this.translate.instant('common.validation.number'),
      integer: this.translate.instant('common.validation.integer'),
      positive: this.translate.instant('common.validation.positive'),
      negative: this.translate.instant('common.validation.negative'),
      decimal: this.translate.instant('common.validation.decimal'),
      alphanumeric: this.translate.instant('common.validation.alphanumeric'),
      alphabetic: this.translate.instant('common.validation.alphabetic'),
      creditCard: this.translate.instant('common.validation.creditCard'),
      ip: this.translate.instant('common.validation.ip'),
      uuid: this.translate.instant('common.validation.uuid')
    };
  }

  private defaultIcons: { [key: string]: string } = {
    required: 'error',
    email: 'email',
    minlength: 'text_fields',
    maxlength: 'text_fields',
    min: 'arrow_downward',
    max: 'arrow_upward',
    pattern: 'pattern',
    url: 'link',
    date: 'calendar_today',
    time: 'access_time',
    phone: 'phone',
    password: 'lock',
    passwordMismatch: 'lock_reset',
    number: 'numbers',
    integer: '123',
    positive: 'trending_up',
    negative: 'trending_down',
    decimal: 'decimal',
    alphanumeric: 'abc',
    alphabetic: 'text_format',
    creditCard: 'credit_card',
    ip: 'dns',
    uuid: 'fingerprint'
  };

  ngOnInit(): void {
    if (this.control) {
      this.control.statusChanges.subscribe(() => {
        this.updateErrors();
      });
      this.updateErrors();
    }
  }

  private updateErrors(): void {
    this.errors = [];

    if (!this.control || !this.control.errors || !this.control.touched) {
      return;
    }

    const errors = this.control.errors;
    const errorKeys = Object.keys(errors);

    for (const key of errorKeys) {
      const message = this.getMessage(key, errors[key]);
      const icon = this.getIcon(key);

      this.errors.push({
        key,
        message,
        icon
      });

      if (this.showOnlyFirst) {
        break;
      }
    }
  }

  private getMessage(key: string, errorValue: any): string {
    // Check custom messages first
    if (this.customMessages[key]) {
      return this.formatMessage(this.customMessages[key], errorValue);
    }

    // Check default messages
    const defaultMessages = this.getDefaultMessages();
    if (defaultMessages[key]) {
      return this.formatMessage(defaultMessages[key], errorValue);
    }

    // Fallback
    return this.translate.instant('common.validation.generic', { key });
  }

  private formatMessage(message: string, errorValue: any): string {
    if (errorValue && typeof errorValue === 'object') {
      // Replace placeholders like {min}, {max}, {requiredLength}, {actualLength}
      let formattedMessage = message;
      if (errorValue.min !== undefined) {
        formattedMessage = formattedMessage.replace('{min}', errorValue.min.toString());
      }
      if (errorValue.max !== undefined) {
        formattedMessage = formattedMessage.replace('{max}', errorValue.max.toString());
      }
      if (errorValue.requiredLength !== undefined) {
        formattedMessage = formattedMessage.replace('{requiredLength}', errorValue.requiredLength.toString());
      }
      if (errorValue.actualLength !== undefined) {
        formattedMessage = formattedMessage.replace('{actualLength}', errorValue.actualLength.toString());
      }
      return formattedMessage;
    }
    return message;
  }

  private getIcon(key: string): string {
    return this.defaultIcons[key] || 'error_outline';
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }
}

