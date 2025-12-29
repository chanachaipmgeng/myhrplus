import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextSwitcherComponent } from '../../../../shared/components/context-switcher/context-switcher.component';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '../../shared/props-table/props-table.component';

@Component({
  selector: 'app-context-switcher-demo',
  standalone: true,
  imports: [CommonModule, ContextSwitcherComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './context-switcher-demo.component.html',
  styleUrls: ['./context-switcher-demo.component.scss']
})
export class ContextSwitcherDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'currentContext',
      type: 'MenuContext',
      default: "'personal'",
      description: 'Current menu context (personal, admin, etc.)',
      required: false
    }
  ];

  basicExample = `<app-context-switcher>
</app-context-switcher>`;

  usageExample = `// Component automatically switches menu context
// Available contexts:
// - 'personal': Employee Self Service
// - 'admin': Admin Panel
// - 'hr': HR Management
// - 'finance': Finance Management`;
}

