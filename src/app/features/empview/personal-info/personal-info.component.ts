import { Component, OnInit } from '@angular/core';
import { EmpviewService, EmployeeProfile } from '../services/empview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  employeeProfile: EmployeeProfile | null = null;
  loading = false;
  activeTab = 0;

  constructor(
    private empviewService: EmpviewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.loading = true;
    this.empviewService.getEmployeeProfile().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.employeeProfile = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        this.loading = false;
      }
    });
  }

  editProfile(): void {
    this.router.navigate(['/personal/profile']);
  }

  navigateToDocuments(): void {
    this.router.navigate(['/personal/documents']);
  }
}

