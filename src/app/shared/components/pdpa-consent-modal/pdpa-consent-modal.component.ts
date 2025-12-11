import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth.service';
import { Pdpa, EmployeeConsent } from '../../../core/models/pdpa.model';
import { SharedModule } from '../../shared.module';

/**
 * PDPA Consent Modal Component
 *
 * Displays PDPA consent form and handles user consent
 *
 * Usage:
 * const modalRef = this.modalService.open(PdpaConsentModalComponent, {
 *   centered: true,
 *   backdrop: 'static',
 *   keyboard: false
 * });
 * modalRef.componentInstance.pdpa = pdpaData;
 * modalRef.componentInstance.employeeConsent = consentData;
 */
@Component({
  selector: 'app-pdpa-consent-modal',
  templateUrl: './pdpa-consent-modal.component.html',
  styleUrls: ['./pdpa-consent-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdpaConsentModalComponent implements OnInit {
  @Input() pdpa: Pdpa | null = null;
  @Input() employeeConsent: EmployeeConsent | null = null;
  @Input() employeeId: string = '';
  @Output() close = new EventEmitter<string>();

  loading = false;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    // Set default language if not set
    if (!this.translate.currentLang) {
      this.translate.use('th');
    }

    // Load data from sessionStorage if not provided via inputs
    if (!this.pdpa || !this.employeeConsent || !this.employeeId) {
      this.loadFromSessionStorage();
    }
  }

  /**
   * Load PDPA data from sessionStorage
   */
  private loadFromSessionStorage(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const pdpaDataStr = sessionStorage.getItem('pdpaData');
      if (pdpaDataStr) {
        try {
          const pdpaData = JSON.parse(pdpaDataStr);
          this.pdpa = pdpaData.pdpa;
          this.employeeConsent = pdpaData.employeeConsent;
          this.employeeId = pdpaData.employeeId;
        } catch (error) {
          console.error('Error parsing PDPA data from sessionStorage:', error);
        }
      }
    }
  }

  /**
   * Handle consent submission
   */
  onSubmitConsent(): void {
    if (!this.pdpa || !this.employeeId) {
      this.errorMessage = 'ข้อมูลไม่ครบถ้วน';
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    const body = {
      model: {
        version: this.pdpa.version,
        employeeId: this.employeeId
      }
    };

    this.authService.savePdpa(body)
      .then((response) => {
        this.loading = false;
        if (response && response.success !== false) {
          this.close.emit('consented');
        } else {
          this.errorMessage = response?.message || 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
        }
      })
      .catch((error) => {
        this.loading = false;
        this.errorMessage = error?.message || 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
        console.error('Error saving PDPA consent:', error);
      });
  }

  /**
   * Handle exit/logout
   */
  onExit(): void {
    this.close.emit('exit');
    // Logout will be handled by the caller
  }

  /**
   * Get consent content based on current language
   */
  getConsentContent(): string {
    if (!this.pdpa) {
      return '';
    }
    const currentLang = this.translate.currentLang || 'th';
    return currentLang === 'th'
      ? this.pdpa.requestConsent
      : this.pdpa.requestConsentEng;
  }
}

