import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIAssistViewComponent } from '../../../../shared/components/ai-assist-view/ai-assist-view.component';
import { GlassCardComponent } from '../../../../shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '../../shared/code-viewer/code-viewer.component';

@Component({
  selector: 'app-ai-assist-view-demo',
  standalone: true,
  imports: [CommonModule, AIAssistViewComponent, GlassCardComponent, CodeViewerComponent],
  templateUrl: './ai-assist-view-demo.component.html',
  styleUrls: ['./ai-assist-view-demo.component.scss']
})
export class AIAssistViewDemoComponent {
  @ViewChild('aiAssistView') aiAssistView!: AIAssistViewComponent;

  // Settings
  placeholder: string = 'Ask me anything...';
  enableSuggestions: boolean = true;
  showSuggestions: boolean = true;
  suggestions: string[] = [
    'What is the weather today?',
    'Help me write an email',
    'Explain quantum computing',
    'What are the best practices for Angular?',
    'How do I implement authentication?'
  ];
  height: string = '600px';

  // Methods
  refresh(): void {
    this.aiAssistView?.refresh();
  }

  onPrompt(event: any): void {
    console.log('Prompt sent:', event);
    // In a real application, this would call an AI service
    // For demo purposes, we'll just log it
    if (event && event.prompt) {
      console.log('Processing prompt:', event.prompt);
    }
  }

  onSuggestionClick(event: any): void {
    console.log('Suggestion clicked:', event);
  }

  onCreated(event: any): void {
    console.log('AI Assist View created:', event);
  }

  // AI Prompt Handler
  promptHandler = (options: any): void => {
    console.log('AI Prompt Handler called:', options);
    // In a real application, this would call an AI service
    // For demo purposes, we'll simulate a response
    if (options && options.prompt) {
      // Simulate AI response
      setTimeout(() => {
        console.log('AI Response:', {
          prompt: options.prompt,
          response: 'This is a simulated AI response. In a real application, this would come from an AI service.',
          timestamp: new Date()
        });
      }, 1000);
    }
  };

  toggleSuggestions(): void {
    this.showSuggestions = !this.showSuggestions;
  }

  addSuggestion(): void {
    const newSuggestion = prompt('Enter a new suggestion:');
    if (newSuggestion) {
      this.suggestions = [...this.suggestions, newSuggestion];
    }
  }

  clearSuggestions(): void {
    this.suggestions = [];
  }

  // Code examples
  basicExample = `<app-ai-assist-view
  [placeholder]="'Ask me anything...'"
  [enableSuggestions]="true"
  [showSuggestions]="true"
  [suggestions]="suggestions"
  [height]="'600px'"
  (prompt)="onPrompt($event)"
  (suggestionClick)="onSuggestionClick($event)">
</app-ai-assist-view>`;

  withAIHandlerExample = `<app-ai-assist-view
  [placeholder]="'Ask me anything...'"
  [promptHandler]="promptHandler"
  [suggestions]="suggestions"
  [height]="'600px'"
  (prompt)="onPrompt($event)">
</app-ai-assist-view>`;

  promptHandlerExample = `// In your component
promptHandler = (options: any): void => {
  // Call your AI service
  this.aiService.getResponse(options.prompt).subscribe(response => {
    console.log('AI Response:', response);
    // Handle the response
  });
};`;
}



