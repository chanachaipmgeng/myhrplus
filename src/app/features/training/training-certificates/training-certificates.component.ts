import { Component, OnInit } from '@angular/core';
import { TrainingService, TrainingCertificate } from '../services/training.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-training-certificates',
  templateUrl: './training-certificates.component.html',
  styleUrls: ['./training-certificates.component.scss']
})
export class TrainingCertificatesComponent implements OnInit {
  certificates: TrainingCertificate[] = [];
  loading = false;
  selectedYear = new Date().getFullYear();

  constructor(
    private trainingService: TrainingService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadCertificates();
  }

  loadCertificates(): void {
    this.loading = true;
    const params = {
      year: this.selectedYear
    };

    this.trainingService.getCertificates(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.certificates = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading certificates:', error);
        this.loading = false;
      }
    });
  }

  onYearChange(year: number): void {
    this.selectedYear = year;
    this.loadCertificates();
  }

  downloadCertificate(certificate: TrainingCertificate): void {
    if (!certificate.certificateId) {
      return;
    }

    this.loading = true;
    this.trainingService.downloadCertificate(certificate.certificateId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `certificate_${certificate.certificateId}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.notificationService.showSuccess('Certificate downloaded successfully');
        this.loading = false;
      },
      error: (error) => {
        console.error('Error downloading certificate:', error);
        this.notificationService.showError('Failed to download certificate');
        this.loading = false;
      }
    });
  }

  isExpired(certificate: TrainingCertificate): boolean {
    if (!certificate.expiryDate) return false;
    return new Date(certificate.expiryDate) < new Date();
  }

  getYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear; i >= currentYear - 5; i--) {
      years.push(i);
    }
    return years;
  }
}

