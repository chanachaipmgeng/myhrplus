import { Component, ChangeDetectionStrategy, input, output, viewChild, ElementRef, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export interface AIAssistViewConfig {
  promptHandler?: (options: any) => void;
  suggestions?: string[];
  placeholder?: string;
  enableSuggestions?: boolean;
  showSuggestions?: boolean;
  width?: string | number;
  height?: string | number;
  customClass?: string;
}

@Component({
  selector: 'app-ai-assist-view',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ai-assist-view.component.html',
  styleUrls: ['./ai-assist-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AIAssistViewComponent {
  container = viewChild<ElementRef<HTMLDivElement>>('container');
  private aiAssistViewInstance: any = null;

  // Basic Properties
  placeholder = input<string>('Ask me anything...');
  enableSuggestions = input<boolean>(true);
  showSuggestions = input<boolean>(true);
  suggestions = input<string[]>([]);
  width = input<string | number>('100%');
  height = input<string | number>('600px');
  customClass = input<string | undefined>(undefined);

  // AI Handler
  promptHandlerInput = input<((options: any) => void) | undefined>(undefined, { alias: 'promptHandler' });

  // Config
  config = input<AIAssistViewConfig | undefined>(undefined);

  // Computed configuration to merge individual inputs with config object
  effectiveConfig = computed(() => {
    const cfg = this.config() || {};
    return {
      placeholder: cfg.placeholder ?? this.placeholder(),
      enableSuggestions: cfg.enableSuggestions ?? this.enableSuggestions(),
      showSuggestions: cfg.showSuggestions ?? this.showSuggestions(),
      suggestions: cfg.suggestions ?? this.suggestions(),
      width: cfg.width ?? this.width(),
      height: cfg.height ?? this.height(),
      customClass: cfg.customClass ?? this.customClass(),
      promptHandler: cfg.promptHandler ?? this.promptHandlerInput()
    };
  });

  // Events
  prompt = output<any>();
  suggestionClick = output<any>();
  created = output<any>();

  // Effect to initialize (simulating ngAfterViewInit logic if needed, 
  // though viewChild is available in effects)
  constructor() {
    effect(() => {
      const el = this.container();
      if (el) {
        this.created.emit({ container: el.nativeElement });
      }
    });
  }

  /**
   * Get AI Assist View instance
   */
  getAIAssistViewInstance(): any {
    return this.aiAssistViewInstance || null;
  }

  /**
   * Send prompt
   */
  sendPrompt(promptText: string): void {
    const handler = this.effectiveConfig().promptHandler;
    if (handler) {
      handler({ prompt: promptText, timestamp: new Date() });
    }
    this.prompt.emit({ prompt: promptText, timestamp: new Date() });
  }

  /**
   * Refresh
   */
  refresh(): void {
    // Refresh implementation
    if (this.aiAssistViewInstance && typeof this.aiAssistViewInstance.dataBind === 'function') {
      this.aiAssistViewInstance.dataBind();
    }
  }

  /**
   * Event handlers
   */
  onPrompt(event: any): void {
    const handler = this.effectiveConfig().promptHandler;
    if (handler) {
      handler(event);
    }
    this.prompt.emit(event);
  }

  onSuggestionClick(event: any): void {
    this.suggestionClick.emit(event);
    // Auto-fill input with suggestion
    if (event.suggestion) {
      this.sendPrompt(event.suggestion);
    }
  }

  onCreated(event: any): void {
    this.created.emit(event);
  }

  onInputEnter(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    if (inputEl && inputEl.value.trim()) {
      this.sendPrompt(inputEl.value.trim());
      inputEl.value = '';
    }
  }

  onSendClick(): void {
    const el = this.container();
    if (el) {
      const inputEl = el.nativeElement.querySelector('.ai-input') as HTMLInputElement;
      if (inputEl && inputEl.value.trim()) {
        this.sendPrompt(inputEl.value.trim());
        inputEl.value = '';
      }
    }
  }
}

