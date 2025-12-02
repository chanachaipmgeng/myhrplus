import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '../../../../../shared/components/glass-button/glass-button.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';

interface Twi50Document {
  id: string;
  year: number;
  period: string;
  requestDate: string;
  status: 'pending' | 'ready' | 'downloaded';
  downloadUrl?: string;
}

@Component({
  selector: 'app-twi50',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    GlassButtonComponent,
    LoadingComponent
  ],
  templateUrl: './twi50.component.html',
  styleUrls: ['./twi50.component.scss']
})
export class Twi50Component implements OnInit {
  isLoading = false;
  documents: Twi50Document[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  private loadDocuments(): void {
    // Mock data
    this.documents = [
      {
        id: '1',
        year: 2024,
        period: 'มกราคม - ธันวาคม',
        requestDate: '2024-12-01',
        status: 'ready',
        downloadUrl: '#'
      },
      {
        id: '2',
        year: 2023,
        period: 'มกราคม - ธันวาคม',
        requestDate: '2023-12-01',
        status: 'ready',
        downloadUrl: '#'
      }
    ];
  }

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      pending: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400',
      ready: 'bg-green-500/20 text-green-700 dark:text-green-400',
      downloaded: 'bg-gray-500/20 text-gray-700 dark:text-gray-400'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      pending: 'รอจัดทำ',
      ready: 'พร้อมดาวน์โหลด',
      downloaded: 'ดาวน์โหลดแล้ว'
    };
    return labels[status] || status;
  }

  downloadDocument(doc: Twi50Document): void {
    if (doc.status === 'ready' && doc.downloadUrl) {
      console.log('Downloading TWI50:', doc);
    }
  }

  requestDocument(): void {
    console.log('Requesting new TWI50 document');
  }

  get pageActions() {
    return [
      {
        label: 'ขอเอกสารใหม่',
        icon: '📄',
        variant: 'primary' as const,
        onClick: () => this.requestDocument()
      }
    ];
  }
}

