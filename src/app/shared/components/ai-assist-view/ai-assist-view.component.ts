import { Component, Input, OnInit, ViewChild, OnDestroy, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
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
  styleUrls: ['./ai-assist-view.component.scss']
})
export class AIAssistViewComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('container', { static: false }) container!: ElementRef<HTMLDivElement>;
  private aiAssistViewInstance: any = null;

  // Basic Properties
  @Input() placeholder: string = 'Ask me anything...';
  @Input() enableSuggestions: boolean = true;
  @Input() showSuggestions: boolean = true;
  @Input() suggestions: string[] = [];
  @Input() width: string | number = '100%';
  @Input() height: string | number = '600px';
  @Input() customClass?: string;

  // AI Handler
  @Input() promptHandler?: (options: any) => void;

  // Events
  @Output() prompt = new EventEmitter<any>();
  @Output() suggestionClick = new EventEmitter<any>();
  @Output() created = new EventEmitter<any>();

  @Input() config?: AIAssistViewConfig;

  ngOnInit(): void {
    // Apply config if provided
    if (this.config) {
      this.placeholder = this.config.placeholder ?? this.placeholder;
      this.enableSuggestions = this.config.enableSuggestions ?? this.enableSuggestions;
      this.showSuggestions = this.config.showSuggestions ?? this.showSuggestions;
      this.suggestions = this.config.suggestions ?? this.suggestions;
      this.width = this.config.width ?? this.width;
      this.height = this.config.height ?? this.height;
      this.customClass = this.config.customClass || this.customClass;
      this.promptHandler = this.config.promptHandler ?? this.promptHandler;
    }
  }

  ngAfterViewInit(): void {
    // Initialize AI Assist View using JavaScript API if available
    // For now, we'll use a simple div-based approach
    // Note: AIAssistView may require server-side setup or specific initialization
    if (this.container) {
      this.created.emit({ container: this.container.nativeElement });
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
    if (this.aiAssistViewInstance) {
      this.aiAssistViewInstance = null;
    }
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
  sendPrompt(prompt: string): void {
    if (this.promptHandler) {
      this.promptHandler({ prompt, timestamp: new Date() });
      this.prompt.emit({ prompt, timestamp: new Date() });
    }
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
    if (this.promptHandler) {
      this.promptHandler(event);
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
    const input = event.target as HTMLInputElement;
    if (input && input.value.trim()) {
      this.sendPrompt(input.value.trim());
      input.value = '';
    }
  }

  onSendClick(): void {
    if (this.container) {
      const input = this.container.nativeElement.querySelector('.ai-input') as HTMLInputElement;
      if (input && input.value.trim()) {
        this.sendPrompt(input.value.trim());
        input.value = '';
      }
    }
  }
}

