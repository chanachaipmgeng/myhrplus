import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { GlassButtonComponent } from '../../../../../shared/components/glass-button/glass-button.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-timestamp',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageLayoutComponent,
    GlassCardComponent,
    GlassButtonComponent,
    LoadingComponent
  ],
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {
  isLoading = false;
  currentTime = new Date();
  todayStatus = {
    checkIn: null as string | null,
    checkOut: null as string | null,
    workingHours: 0
  };

  constructor() { }

  ngOnInit(): void {
    this.updateCurrentTime();
    setInterval(() => this.updateCurrentTime(), 1000);
    this.loadTodayStatus();
  }

  private updateCurrentTime(): void {
    this.currentTime = new Date();
  }

  private loadTodayStatus(): void {
    // Mock data
    this.todayStatus = {
      checkIn: '08:30',
      checkOut: null,
      workingHours: 0
    };
  }

  checkIn(): void {
    const now = new Date();
    this.todayStatus.checkIn = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    this.todayStatus.checkOut = null;
  }

  checkOut(): void {
    const now = new Date();
    this.todayStatus.checkOut = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    if (this.todayStatus.checkIn) {
      const checkInTime = this.parseTime(this.todayStatus.checkIn);
      const checkOutTime = now;
      const diffMs = checkOutTime.getTime() - checkInTime.getTime();
      this.todayStatus.workingHours = Math.round((diffMs / (1000 * 60 * 60)) * 10) / 10;
    }
  }

  private parseTime(timeStr: string): Date {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }
}

