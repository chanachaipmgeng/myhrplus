import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechToTextComponent } from '../../../../shared/components/speech-to-text/speech-to-text.component';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';

@Component({
  selector: 'app-speech-to-text-demo',
  standalone: true,
  imports: [CommonModule, SpeechToTextComponent, GlassCardComponent, CodeViewerComponent],
  templateUrl: './speech-to-text-demo.component.html',
  styleUrls: ['./speech-to-text-demo.component.scss']
})
export class SpeechToTextDemoComponent {
  transcriptValue: string = '';

  // Event handlers
  onTranscriptChanged(event: any): void {
    console.log('Transcript changed:', event);
    this.transcriptValue = event.transcript || '';
  }

  onStarted(event: any): void {
    console.log('Speech recognition started:', event);
  }

  onStopped(event: any): void {
    console.log('Speech recognition stopped:', event);
  }

  onError(event: any): void {
    console.error('Speech recognition error:', event);
    alert(`Error: ${event.message}`);
  }

  onValueChange(value: string): void {
    console.log('Value changed:', value);
    this.transcriptValue = value;
  }

  // Code examples
  basicExample = `<app-speech-to-text
  [locale]="'en-US'"
  [continuous]="false"
  [interimResults]="true"
  [showUI]="true"
  [placeholder]="'Text from speech will appear here...'"
  [rows]="8"
  [cols]="50"
  [resizeMode]="'Vertical'"
  (transcriptChanged)="onTranscriptChanged($event)"
  (started)="onStarted($event)"
  (stopped)="onStopped($event)"
  (error)="onError($event)"
  (valueChange)="onValueChange($event)">
</app-speech-to-text>`;
}

