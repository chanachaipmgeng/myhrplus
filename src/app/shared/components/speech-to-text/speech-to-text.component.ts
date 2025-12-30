import { Component, Input, OnInit, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechToTextModule, TextAreaModule, TextAreaComponent } from '@syncfusion/ej2-angular-inputs';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

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
  styleUrls: ['./speech-to-text.component.scss']
})
export class SpeechToTextComponent implements OnInit, OnDestroy {
  @ViewChild('outputTextarea', { static: false }) outputTextarea!: TextAreaComponent;

  // Configuration
  @Input() locale: string = 'en-US';
  @Input() continuous: boolean = false;
  @Input() interimResults: boolean = true;
  @Input() maxAlternatives: number = 1;
  @Input() serviceURI?: string;
  @Input() grammars?: string;
  @Input() showUI: boolean = true;
  
  // Value
  @Input() value: string = '';
  
  // TextArea Settings
  @Input() placeholder: string = 'Text from speech will appear here...';
  @Input() rows: number = 5;
  @Input() cols: number = 50;
  @Input() resizeMode: 'None' | 'Both' | 'Horizontal' | 'Vertical' = 'None';
  @Input() readonly: boolean = false;
  @Input() enabled: boolean = true;
  
  // Styling
  @Input() customClass: string = '';
  
  // Events
  @Output() transcriptChanged = new EventEmitter<any>();
  @Output() started = new EventEmitter<any>();
  @Output() stopped = new EventEmitter<any>();
  @Output() error = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<string>();

  private recognition: any = null;
  private isListening: boolean = false;

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
      this.recognition.continuous = this.continuous;
      this.recognition.interimResults = this.interimResults;
      this.recognition.lang = this.locale;
      this.recognition.maxAlternatives = this.maxAlternatives;

      if (this.serviceURI) {
        this.recognition.serviceURI = this.serviceURI;
      }

      if (this.grammars) {
        this.recognition.grammars = this.grammars;
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
        this.value = newValue;
        this.valueChange.emit(this.value);

        if (this.outputTextarea) {
          this.outputTextarea.value = this.value;
        }

        this.transcriptChanged.emit({
          transcript: this.value,
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
    this.value = '';
    this.valueChange.emit(this.value);
    if (this.outputTextarea) {
      this.outputTextarea.value = '';
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
    return this.value;
  }

  /**
   * Set value
   */
  setValue(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
    if (this.outputTextarea) {
      this.outputTextarea.value = value;
    }
  }

  /**
   * TextArea change handler
   */
  onTextAreaChange(event: any): void {
    if (event && event.value !== undefined) {
      this.value = event.value || '';
      this.valueChange.emit(this.value);
    } else if (event && typeof event === 'string') {
      this.value = event;
      this.valueChange.emit(this.value);
    }
  }
}

