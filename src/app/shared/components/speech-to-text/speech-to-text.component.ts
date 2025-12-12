import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, input, output, viewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechToTextModule, TextAreaModule, TextAreaComponent } from '@syncfusion/ej2-angular-inputs';

export interface SpeechToTextConfig {
  locale?: string;
  continuous?: boolean;
  interimResults?: boolean;
  maxAlternatives?: number;
  serviceURI?: string;
  grammars?: string;
  showUI?: boolean;
  customClass?: string;
}

@Component({
  selector: 'app-speech-to-text',
  standalone: true,
  imports: [CommonModule, SpeechToTextModule, TextAreaModule],
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeechToTextComponent implements OnInit, OnDestroy {
  outputTextarea = viewChild<TextAreaComponent>('outputTextarea');

  // Configuration
  locale = input<string>('en-US');
  continuous = input<boolean>(false);
  interimResults = input<boolean>(true);
  maxAlternatives = input<number>(1);
  serviceURI = input<string | undefined>(undefined);
  grammars = input<string | undefined>(undefined);
  showUI = input<boolean>(true);

  // Value - using model if two-way binding is desired, but keeping as input/output pair for now
  // to match existing @Input() value and @Output() valueChange
  // If we want to strictly follow signal migration, we can use model, 
  // but let's stick to input/output to minimize breaking changes for now, 
  // or use model and sync. 
  // Actually, let's use standard signal inputs and outputs as requested.
  valueInput = input<string>('', { alias: 'value' });

  // TextArea Settings
  placeholder = input<string>('Text from speech will appear here...');
  rows = input<number>(5);
  cols = input<number>(50);
  resizeMode = input<'None' | 'Both' | 'Horizontal' | 'Vertical'>('None');
  readonly = input<boolean>(false);
  enabled = input<boolean>(true);

  // Styling
  customClass = input<string>('');

  // Events
  transcriptChanged = output<any>();
  started = output<any>();
  stopped = output<any>();
  error = output<any>();
  valueChange = output<string>();

  private recognition: any = null;
  private isListening: boolean = false;

  // Internal value tracking to handle assignments
  private currentValue = '';

  constructor() {
    // Sync input value to internal value
    effect(() => {
      this.currentValue = this.valueInput();
      if (this.outputTextarea()) {
        this.outputTextarea()!.value = this.currentValue;
      }
    });

    // Re-initialize recognition if critical configs change?
    // For now, allow init on ngOnInit as before.
  }

  ngOnInit(): void {
    this.initializeSpeechRecognition();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  /**
   * Initialize Speech Recognition
   */
  private initializeSpeechRecognition(): void {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      this.recognition = new (window as any).webkitSpeechRecognition();
    } else if (typeof window !== 'undefined' && 'SpeechRecognition' in window) {
      this.recognition = new (window as any).SpeechRecognition();
    } else {
      console.warn('Speech Recognition API is not supported in this browser');
      return;
    }

    if (this.recognition) {
      this.recognition.continuous = this.continuous();
      this.recognition.interimResults = this.interimResults();
      this.recognition.lang = this.locale();
      this.recognition.maxAlternatives = this.maxAlternatives();

      if (this.serviceURI()) {
        this.recognition.serviceURI = this.serviceURI();
      }

      if (this.grammars()) {
        this.recognition.grammars = this.grammars();
      }

      this.recognition.onstart = () => {
        this.isListening = true;
        this.started.emit({});
      };

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        const newValue = finalTranscript || interimTranscript;
        this.currentValue = newValue;
        this.valueChange.emit(this.currentValue);

        if (this.outputTextarea()) {
          this.outputTextarea()!.value = this.currentValue;
        }

        this.transcriptChanged.emit({
          transcript: this.currentValue,
          interimTranscript,
          finalTranscript
        });
      };

      this.recognition.onerror = (event: any) => {
        this.isListening = false;
        this.error.emit({
          error: event.error,
          message: this.getErrorMessage(event.error)
        });
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.stopped.emit({});
      };
    }
  }

  /**
   * Get error message
   */
  private getErrorMessage(error: string): string {
    const errorMessages: { [key: string]: string } = {
      'no-speech': 'No speech was detected. Please try again.',
      'aborted': 'Speech recognition was aborted.',
      'audio-capture': 'No microphone was found. Please ensure a microphone is connected.',
      'network': 'Network error occurred. Please check your connection.',
      'not-allowed': 'Microphone permission was denied. Please allow microphone access.',
      'service-not-allowed': 'Speech recognition service is not allowed.'
    };
    return errorMessages[error] || 'An unknown error occurred.';
  }

  /**
   * Start listening
   */
  start(): void {
    if (this.recognition && !this.isListening) {
      try {
        this.recognition.start();
      } catch (error) {
        console.warn('Failed to start speech recognition:', error);
      }
    }
  }

  /**
   * Stop listening
   */
  stop(): void {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (error) {
        console.warn('Failed to stop speech recognition:', error);
      }
    }
  }

  /**
   * Abort recognition
   */
  abort(): void {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.abort();
      } catch (error) {
        console.warn('Failed to abort speech recognition:', error);
      }
    }
  }

  /**
   * Clear text
   */
  clear(): void {
    this.currentValue = '';
    this.valueChange.emit(this.currentValue);
    if (this.outputTextarea()) {
      this.outputTextarea()!.value = '';
    }
  }

  /**
   * Check if listening
   */
  isListeningNow(): boolean {
    return this.isListening;
  }

  /**
   * Check if speech recognition is supported
   */
  isSupported(): boolean {
    return !!(typeof window !== 'undefined' &&
      (('webkitSpeechRecognition' in window) || ('SpeechRecognition' in window)));
  }

  /**
   * Get value
   */
  getValue(): string {
    return this.currentValue;
  }

  /**
   * Set value
   */
  setValue(value: string): void {
    this.currentValue = value;
    this.valueChange.emit(this.currentValue);
    if (this.outputTextarea()) {
      this.outputTextarea()!.value = value;
    }
  }

  /**
   * TextArea change handler
   */
  onTextAreaChange(event: any): void {
    if (event && event.value !== undefined) {
      this.currentValue = event.value || '';
      this.valueChange.emit(this.currentValue);
    } else if (event && typeof event === 'string') {
      this.currentValue = event;
      this.valueChange.emit(this.currentValue);
    }
  }
}

