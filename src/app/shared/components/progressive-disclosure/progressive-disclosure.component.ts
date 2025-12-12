import { Component, ChangeDetectionStrategy, input, model, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-progressive-disclosure',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './progressive-disclosure.component.html',
  styleUrls: ['./progressive-disclosure.component.scss'],
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressiveDisclosureComponent {
  title = input<string>('Show more');
  summary = input<string | undefined>(undefined);
  defaultExpanded = input<boolean>(false);
  showIcon = input<boolean>(true);
  expanded = model<boolean>(false);

  constructor() {
    effect(() => {
      // If defaultExpanded is true and expanded is false (initial), set it.
      // But better: use ngOnInit to set initial value if model is not set?
      // Actually, if the parent binds `[expanded]`, that takes precedence.
      // If parent binds `[defaultExpanded]`, we should use it for initial state.
      // But `expanded` signal already has initial value `false`.
    });
  }

  toggle(): void {
    this.expanded.update(v => !v);
  }
}
