import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../../../../shared/components/page-layout/page-layout.component';
import { GlassCardComponent } from '../../../../../shared/components/glass-card/glass-card.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';

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
    PageLayoutComponent,
    GlassCardComponent,
    LoadingComponent
  ],
  templateUrl: './subordinates-list.component.html',
  styleUrls: ['./subordinates-list.component.scss']
})
export class SubordinatesListComponent implements OnInit {
  isLoading = false;
  subordinates: Subordinate[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadSubordinates();
  }

  private loadSubordinates(): void {
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
  }
}

