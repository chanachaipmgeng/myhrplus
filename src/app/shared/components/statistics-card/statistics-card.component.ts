import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassCardComponent } from '../glass-card/glass-card.component';
import { IconComponent } from '../icon/icon.component';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, IconComponent],
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.scss']
})
export class StatisticsCardComponent {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() value!: string | number;
  @Input() suffix?: string;
  @Input() change?: number;
  @Input() iconBgClass: string = 'bg-primary/10 dark:bg-primary/20';
  @Input() iconColor?: string;
  @Input() variant: 'default' | 'gradient' = 'gradient'; // Default to gradient for beautiful look

  get iconColorClass(): string {
    if (this.iconColor) return this.iconColor;

    // For gradient variant, use white text
    if (this.variant === 'gradient') {
      return 'text-white';
    }

    // Extract color from iconBgClass if available
    if (this.iconBgClass.includes('indigo')) {
      return 'text-indigo-600 dark:text-indigo-400';
    } else if (this.iconBgClass.includes('pink')) {
      return 'text-pink-600 dark:text-pink-400';
    } else if (this.iconBgClass.includes('blue') || this.iconBgClass.includes('primary')) {
      return 'text-primary dark:text-primary';
    } else if (this.iconBgClass.includes('green')) {
      return 'text-green-600 dark:text-green-400';
    } else if (this.iconBgClass.includes('yellow')) {
      return 'text-yellow-600 dark:text-yellow-400';
    } else if (this.iconBgClass.includes('purple')) {
      return 'text-purple-600 dark:text-purple-400';
    } else if (this.iconBgClass.includes('orange')) {
      return 'text-orange-600 dark:text-orange-400';
    } else if (this.iconBgClass.includes('red')) {
      return 'text-red-600 dark:text-red-400';
    } else if (this.iconBgClass.includes('teal')) {
      return 'text-teal-600 dark:text-teal-400';
    }

    // Default color
    return 'text-primary dark:text-primary';
  }

  get gradientClass(): string {
    if (this.variant !== 'gradient') return '';

    // Extract color from iconBgClass and create gradient
    if (this.iconBgClass.includes('indigo')) {
      return 'bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700';
    } else if (this.iconBgClass.includes('pink')) {
      return 'bg-gradient-to-br from-pink-500 to-red-500 dark:from-pink-600 dark:to-red-600';
    } else if (this.iconBgClass.includes('blue') || this.iconBgClass.includes('primary')) {
      return 'bg-gradient-to-br from-primary to-primary dark:from-primary dark:to-primary';
    } else if (this.iconBgClass.includes('green')) {
      return 'bg-gradient-to-br from-green-400 to-teal-400 dark:from-green-500 dark:to-teal-500';
    } else if (this.iconBgClass.includes('yellow')) {
      return 'bg-gradient-to-br from-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-orange-500';
    } else if (this.iconBgClass.includes('purple')) {
      return 'bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700';
    } else if (this.iconBgClass.includes('orange')) {
      return 'bg-gradient-to-br from-orange-400 to-red-500 dark:from-orange-500 dark:to-red-600';
    } else if (this.iconBgClass.includes('red')) {
      return 'bg-gradient-to-br from-red-500 to-pink-500 dark:from-red-600 dark:to-pink-600';
    } else if (this.iconBgClass.includes('teal')) {
      return 'bg-gradient-to-br from-teal-400 to-cyan-400 dark:from-teal-500 dark:to-cyan-500';
    }

    // Default gradient
    return 'bg-gradient-to-br from-primary to-primary dark:from-primary dark:to-primary';
  }

  get cardCustomClass(): string {
    const baseClasses = this.variant === 'gradient'
      ? `${this.gradientClass} text-white card-micro hover:scale-105 transition-transform duration-300 cursor-pointer`
      : 'card-micro hover-lift transition-smooth';
    return baseClasses;
  }

  get labelClass(): string {
    if (this.variant === 'gradient') {
      return 'text-sm font-medium text-white/90';
    }
    return 'text-sm font-medium text-slate-600 dark:text-slate-400 theme-myhr:text-white/70';
  }

  get valueClass(): string {
    if (this.variant === 'gradient') {
      return 'text-2xl font-bold text-white';
    }
    return 'text-2xl font-bold text-slate-900 dark:text-slate-100 theme-myhr:bg-gradient-myhr-text theme-myhr:bg-clip-text theme-myhr:text-transparent';
  }

  get iconContainerClass(): string {
    if (this.variant === 'gradient') {
      return 'p-3 rounded-full bg-white/20 backdrop-blur-sm';
    }
    return `p-3 rounded-full theme-myhr:glass-myhr-weak theme-myhr:bg-primary/20 theme-myhr:shadow-myhr-sm ${this.iconBgClass}`;
  }

  get changeClass(): string {
    if (!this.change) return '';
    if (this.variant === 'gradient') {
      return this.change > 0
        ? 'text-white/90'
        : 'text-white/80';
    }
    return this.change > 0
      ? 'text-green-600 dark:text-green-400'
      : 'text-red-600 dark:text-red-400';
  }
}




