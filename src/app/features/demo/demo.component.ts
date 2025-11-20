import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoLayoutComponent } from './components/demo-layout/demo-layout.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, RouterModule, DemoLayoutComponent],
  template: `
    <app-demo-layout>
      <router-outlet></router-outlet>
    </app-demo-layout>
  `
})
export class DemoComponent {
}
