import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmniSearchComponent } from '@shared/components/omni-search/omni-search.component';
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';
import { PropsTableComponent, PropDefinition } from '@features/demo/shared/props-table/props-table.component';

@Component({
  selector: 'app-omni-search-demo',
  standalone: true,
  imports: [CommonModule, OmniSearchComponent, GlassCardComponent, CodeViewerComponent, PropsTableComponent],
  templateUrl: './omni-search-demo.component.html',
  styleUrls: ['./omni-search-demo.component.scss']
})
export class OmniSearchDemoComponent {
  props: PropDefinition[] = [
    {
      name: 'resultSelected',
      type: 'EventEmitter<SearchResult>',
      default: 'new EventEmitter()',
      description: 'Event emitted when a search result is selected',
      required: false
    }
  ];

  basicExample = `<app-omni-search
  (resultSelected)="onResultSelected($event)">
</app-omni-search>`;

  usageExample = `// In component.ts
onResultSelected(result: SearchResult): void {
  if (result.type === 'route') {
    this.router.navigate([result.route]);
  } else if (result.type === 'action') {
    // Handle action
  }
}`;

  onResultSelected(result: any): void {
    console.log('Result selected:', result);
    // Handle result selection
  }
}

