import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';

interface Subordinate {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  email: string;
}

@Component({
  selector: 'app-subordinates-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PageLayoutComponent,
    GlassCardComponent
  ],
  templateUrl: './subordinates-list.component.html',
  styleUrls: ['./subordinates-list.component.scss']
})
export class SubordinatesListComponent implements OnInit {
  isLoading = signal(false);
  subordinates: Subordinate[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadSubordinates();
  }

  private loadSubordinates(): void {
    this.isLoading.set(true);
    // Simulate API call
    setTimeout(() => {
      // Mock data
      this.subordinates = [
      {
        id: '1',
        employeeId: 'EMP002',
        firstName: 'สมหญิง',
        lastName: 'รักงาน',
        position: 'Developer',
        department: 'แผนก IT',
        email: 'somying@company.com'
      },
      {
        id: '2',
        employeeId: 'EMP003',
        firstName: 'วิชัย',
        lastName: 'เก่งมาก',
        position: 'Junior Developer',
        department: 'แผนก IT',
        email: 'wichai@company.com'
      },
      {
        id: '3',
        employeeId: 'EMP004',
        firstName: 'มาลี',
        lastName: 'ขยัน',
        position: 'Designer',
        department: 'แผนก IT',
        email: 'malee@company.com'
      }
      ];
      this.isLoading.set(false);
    }, 1000);
  }
}

