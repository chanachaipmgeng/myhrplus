import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  demoForm: FormGroup;
  selectedCard: 'default' | 'strong' | 'weak' = 'default';
  buttonLoading: boolean = false;
  inputValue: string = '';

  // Tabs
  activeTab: string = 'tab1';
  tabs = [
    { id: 'tab1', label: 'Tab 1', icon: '📄' },
    { id: 'tab2', label: 'Tab 2', icon: '📊', badge: '3' },
    { id: 'tab3', label: 'Tab 3', icon: '⚙️', disabled: false }
  ];

  // Rating
  rating: number = 0;
  heartRating: number = 0;

  // Progress
  progressValue: number = 65;

  // Modal
  showModal: boolean = false;

  // Loading
  showLoading: boolean = false;

  // Statistics
  statistics = [
    { icon: '👥', label: 'Total Users', value: '1,234', suffix: '', change: 12 },
    { icon: '📊', label: 'Revenue', value: '฿', suffix: '125,000', change: -5 },
    { icon: '✅', label: 'Completed', value: '89', suffix: '%', change: 8 },
    { icon: '📈', label: 'Growth', value: '24', suffix: '%', change: 15 }
  ];

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      description: ['']
    });
  }

  ngOnInit(): void {
  }

  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  onRatingChange(rating: number): void {
    this.rating = rating;
  }

  onHeartRatingChange(rating: number): void {
    this.heartRating = rating;
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  showLoadingDemo(): void {
    this.showLoading = true;
    setTimeout(() => {
      this.showLoading = false;
    }, 3000);
  }

  // Empty State Actions
  emptyStateAction1 = {
    label: 'เพิ่มข้อมูล',
    variant: 'primary' as const,
    onClick: () => {
      alert('Add clicked');
    }
  };

  emptyStateAction2 = {
    label: 'ค้นหาใหม่',
    variant: 'secondary' as const,
    onClick: () => {
      alert('Search clicked');
    }
  };

  onButtonClick(variant: string): void {
    console.log(`${variant} button clicked`);
    if (variant === 'primary') {
      this.buttonLoading = true;
      setTimeout(() => {
        this.buttonLoading = false;
      }, 2000);
    }
  }

  onSubmit(): void {
    if (this.demoForm.valid) {
      console.log('Form submitted:', this.demoForm.value);
      alert('Form submitted successfully!');
    } else {
      console.log('Form is invalid');
    }
  }

  get usernameError(): string {
    const control = this.demoForm.get('username');
    if (control?.hasError('required') && control?.touched) {
      return 'Username is required';
    }
    return '';
  }

  get emailError(): string {
    const control = this.demoForm.get('email');
    if (control?.hasError('required') && control?.touched) {
      return 'Email is required';
    }
    if (control?.hasError('email') && control?.touched) {
      return 'Invalid email format';
    }
    return '';
  }

  get passwordError(): string {
    const control = this.demoForm.get('password');
    if (control?.hasError('required') && control?.touched) {
      return 'Password is required';
    }
    if (control?.hasError('minlength') && control?.touched) {
      return 'Password must be at least 6 characters';
    }
    return '';
  }
}

