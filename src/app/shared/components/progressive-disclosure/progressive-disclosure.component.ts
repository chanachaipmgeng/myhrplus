import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-progressive-disclosure',
  standalone: true,
  imports: [CommonModule, IconComponent],
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
  ]
})
export class ProgressiveDisclosureComponent implements OnInit {
  @Input() title: string = '';
  @Input() defaultExpanded: boolean = false;
  @Input() variant: 'default' | 'accordion' | 'card' = 'default';
  @Input() showIcon: boolean = true;
  @Input() icon: string = 'expand_more';
  @Input() iconExpanded: string = 'expand_less';
  
  @Output() expandedChange = new EventEmitter<boolean>();
  
  isExpanded: boolean = false;
  _uniqueId: string = `disclosure-${Math.random().toString(36).substr(2, 9)}`;
  
  ngOnInit(): void {
    this.isExpanded = this.defaultExpanded;
  }
  
  toggle(): void {
    this.isExpanded = !this.isExpanded;
    this.expandedChange.emit(this.isExpanded);
  }
  
  get currentIcon(): string {
    return this.isExpanded ? this.iconExpanded : this.icon;
  }
}

