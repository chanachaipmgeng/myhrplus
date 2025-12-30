import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

export interface AccordionPanel {
  title: string;
  content: string;
  icon?: string;
  disabled?: boolean;
  expanded?: boolean;
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('slideToggle', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: 1
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class AccordionComponent implements OnInit, OnChanges {
  @Input() panels: AccordionPanel[] = [];
  @Input() multiple: boolean = false; // Allow multiple panels open at once
  @Input() showIcons: boolean = true;
  @Input() variant: 'default' | 'bordered' = 'default';

  @Output() panelChange = new EventEmitter<{ index: number; expanded: boolean }>();

  expandedPanels: Set<number> = new Set();

  ngOnInit(): void {
    // Initialize expanded panels from input
    this.panels.forEach((panel, index) => {
      if (panel.expanded) {
        this.expandedPanels.add(index);
      }
    });
  }

  ngOnChanges(): void {
    // Update expanded panels when panels input changes
    this.expandedPanels.clear();
    this.panels.forEach((panel, index) => {
      if (panel.expanded) {
        this.expandedPanels.add(index);
      }
    });
  }

  togglePanel(index: number): void {
    const panel = this.panels[index];
    if (panel?.disabled) {
      return;
    }

    const isExpanded = this.expandedPanels.has(index);

    if (this.multiple) {
      // Multiple panels can be open
      if (isExpanded) {
        this.expandedPanels.delete(index);
      } else {
        this.expandedPanels.add(index);
      }
    } else {
      // Only one panel can be open
      this.expandedPanels.clear();
      if (!isExpanded) {
        this.expandedPanels.add(index);
      }
    }

    this.panelChange.emit({ index, expanded: this.expandedPanels.has(index) });
  }

  isExpanded(index: number): boolean {
    return this.expandedPanels.has(index);
  }

  trackByIndex(index: number): number {
    return index;
  }
}

