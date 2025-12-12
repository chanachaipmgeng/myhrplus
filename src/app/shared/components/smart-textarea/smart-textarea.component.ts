import { Component, ChangeDetectionStrategy, input, output, viewChild, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTextAreaModule, SmartTextAreaComponent as SyncfusionSmartTextAreaComponent } from '@syncfusion/ej2-angular-inputs';

export interface SmartTextAreaConfig {
  placeholder?: string;
  floatLabelType?: 'Auto' | 'Always' | 'Never';
  rows?: number;
  cols?: number;
  userRole?: string;
  userPhrases?: string[];
  aiSuggestionHandler?: (options: any) => void;
  value?: string;
  enabled?: boolean;
  readonly?: boolean;
  resizeMode?: 'None' | 'Both' | 'Horizontal' | 'Vertical';
  width?: string | number;
  height?: string | number;
  customClass?: string;
}

@Component({
  selector: 'app-smart-textarea',
  standalone: true,
  imports: [CommonModule, SmartTextAreaModule],
  templateUrl: './smart-textarea.component.html',
  styleUrls: ['./smart-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartTextAreaComponent {
  smartTextarea = viewChild<SyncfusionSmartTextAreaComponent>('smartTextarea');

  // Basic Properties
  placeholder = input<string>('Type your message...');
  floatLabelType = input<'Auto' | 'Always' | 'Never'>('Auto');
  rows = input<number>(5);
  cols = input<number>(50);
  value = input<string>('');
  enabled = input<boolean>(true);
  readonly = input<boolean>(false);
  resizeMode = input<'None' | 'Both' | 'Horizontal' | 'Vertical'>('None');
  width = input<string | number>('100%');
  height = input<string | number>('auto');
  customClass = input<string | undefined>(undefined);

  // AI Features
  userRole = input<string | undefined>(undefined);
  userPhrases = input<string[] | undefined>(undefined);
  aiSuggestionHandler = input<((options: any) => void) | undefined>(undefined);

  // Configuration object input
  config = input<SmartTextAreaConfig | undefined>(undefined);

  // Computed properties merging Config and Inputs
  effectivePlaceholder = computed(() => this.config()?.placeholder ?? this.placeholder());
  effectiveFloatLabelType = computed(() => this.config()?.floatLabelType ?? this.floatLabelType());
  effectiveRows = computed(() => this.config()?.rows ?? this.rows());
  effectiveCols = computed(() => this.config()?.cols ?? this.cols());
  effectiveValue = computed(() => this.config()?.value ?? this.value());
  effectiveEnabled = computed(() => this.config()?.enabled ?? this.enabled());
  effectiveReadonly = computed(() => this.config()?.readonly ?? this.readonly());
  effectiveResizeMode = computed(() => this.config()?.resizeMode ?? this.resizeMode());
  effectiveWidth = computed(() => this.config()?.width ?? this.width());
  effectiveHeight = computed(() => this.config()?.height ?? this.height());
  effectiveCustomClass = computed(() => this.config()?.customClass ?? this.customClass());
  effectiveUserRole = computed(() => this.config()?.userRole ?? this.userRole());
  effectiveUserPhrases = computed(() => this.config()?.userPhrases ?? this.userPhrases());
  effectiveAiSuggestionHandler = computed(() => this.config()?.aiSuggestionHandler ?? this.aiSuggestionHandler());

  // Events
  change = output<any>();
  focus = output<any>();
  blur = output<any>();
  created = output<any>();

  constructor() {
    effect(() => {
      // Optional: Log or react to config changes side-effects if needed
    });
  }

  onCreated(event: any): void {
    const instance = this.smartTextarea();
    if (instance) {
      this.created.emit({ smartTextarea: instance });
    } else {
      this.created.emit(event);
    }
  }

  /**
   * Get Smart TextArea instance
   */
  getSmartTextAreaInstance(): SyncfusionSmartTextAreaComponent | null {
    return this.smartTextarea() ?? null;
  }

  /**
   * Get value
   */
  getValue(): string {
    return this.smartTextarea()?.value ?? this.effectiveValue();
  }

  /**
   * Set value
   */
  setValue(value: string): void {
    const instance = this.smartTextarea();
    if (instance) {
      instance.value = value;
    }
  }

  /**
   * Focus
   */
  focusIn(): void {
    this.smartTextarea()?.focusIn();
  }

  /**
   * Blur
   */
  focusOut(): void {
    this.smartTextarea()?.focusOut();
  }

  /**
   * Clear
   */
  clear(): void {
    const instance = this.smartTextarea();
    if (instance) {
      instance.value = '';
    }
  }

  /**
   * Refresh
   */
  refresh(): void {
    this.smartTextarea()?.dataBind();
  }

  /**
   * Event handlers
   */
  onChange(event: any): void {
    this.change.emit(event);
  }

  onFocus(event: any): void {
    this.focus.emit(event);
  }

  onBlur(event: any): void {
    this.blur.emit(event);
  }
}



