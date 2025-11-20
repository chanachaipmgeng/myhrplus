# AI Assist View Component Guide

## Overview

The `AIAssistViewComponent` is a wrapper around Syncfusion's AI Assist View component, providing an AI-powered assistant interface with suggestions, prompt handling, and interactive chat features. It supports customizable suggestions, prompt handlers, and Glass Morphism styling.

## Installation

The AI Assist View component is part of the Syncfusion interactive chat package and is already included in the `SyncfusionModule`. No additional installation is required.

## Basic Usage

```typescript
import { AIAssistViewComponent } from '@shared/components/ai-assist-view/ai-assist-view.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [AIAssistViewComponent],
  template: `
    <app-ai-assist-view
      [placeholder]="'Ask me anything...'"
      [enableSuggestions]="true"
      [suggestions]="suggestions"
      (prompt)="onPrompt($event)">
    </app-ai-assist-view>
  `
})
export class ExampleComponent {
  suggestions: string[] = [
    'What is the weather today?',
    'Help me write an email',
    'Explain quantum computing'
  ];

  onPrompt(event: any): void {
    console.log('Prompt sent:', event);
  }
}
```

## Inputs

### Basic Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `placeholder` | `string` | `'Ask me anything...'` | Placeholder text for the input |
| `enableSuggestions` | `boolean` | `true` | Enable/disable suggestions feature |
| `showSuggestions` | `boolean` | `true` | Show/hide suggestions |
| `suggestions` | `string[]` | `[]` | Array of suggestion strings |
| `width` | `string \| number` | `'100%'` | Width of the component |
| `height` | `string \| number` | `'600px'` | Height of the component |
| `customClass` | `string` | `undefined` | Custom CSS class for the container |
| `config` | `AIAssistViewConfig` | `undefined` | Configuration object to set multiple properties at once |

### AI Handler

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `promptHandler` | `(options: any) => void` | `undefined` | Handler function for processing prompts |

## Outputs

| Event | Type | Description |
|-------|------|-------------|
| `prompt` | `EventEmitter<any>` | Emitted when a prompt is sent |
| `suggestionClick` | `EventEmitter<any>` | Emitted when a suggestion is clicked |
| `created` | `EventEmitter<any>` | Emitted when the component is created |

## Methods

### Utility Methods

```typescript
// Send a prompt programmatically
sendPrompt(prompt: string): void

// Refresh the component
refresh(): void

// Get AI Assist View instance
getAIAssistViewInstance(): SyncfusionAIAssistViewComponent | null
```

## Examples

### Basic AI Assist View

```html
<app-ai-assist-view
  [placeholder]="'Ask me anything...'"
  [enableSuggestions]="true"
  [showSuggestions]="true"
  [suggestions]="suggestions"
  [height]="'600px'"
  (prompt)="onPrompt($event)">
</app-ai-assist-view>
```

### With AI Prompt Handler

```html
<app-ai-assist-view
  [placeholder]="'Ask me anything...'"
  [promptHandler]="promptHandler"
  [suggestions]="suggestions"
  [height]="'600px'"
  (prompt)="onPrompt($event)">
</app-ai-assist-view>
```

```typescript
export class ExampleComponent {
  suggestions: string[] = [
    'What is the weather today?',
    'Help me write an email',
    'Explain quantum computing'
  ];

  promptHandler = (options: any): void => {
    // Call your AI service
    console.log('Processing prompt:', options.prompt);
    // In a real implementation, this would call an AI service
    // and return a response
  };

  onPrompt(event: any): void {
    console.log('Prompt sent:', event);
  }
}
```

### With Configuration Object

```typescript
export class ExampleComponent {
  aiAssistConfig: AIAssistViewConfig = {
    placeholder: 'Ask me anything...',
    enableSuggestions: true,
    showSuggestions: true,
    suggestions: [
      'What is the weather today?',
      'Help me write an email',
      'Explain quantum computing'
    ],
    height: '600px',
    promptHandler: this.handlePrompt.bind(this)
  };

  handlePrompt(options: any): void {
    // Handle AI prompt
    console.log('AI Prompt:', options);
  }
}
```

```html
<app-ai-assist-view
  [config]="aiAssistConfig"
  (prompt)="onPrompt($event)">
</app-ai-assist-view>
```

### Dynamic Suggestions

```typescript
export class ExampleComponent {
  suggestions: string[] = [];

  loadSuggestions(): void {
    // Load suggestions from API or service
    this.suggestions = [
      'What is the weather today?',
      'Help me write an email',
      'Explain quantum computing'
    ];
  }

  addSuggestion(suggestion: string): void {
    this.suggestions = [...this.suggestions, suggestion];
  }

  removeSuggestion(index: number): void {
    this.suggestions = this.suggestions.filter((_, i) => i !== index);
  }
}
```

## AI Integration

The AI Assist View component supports AI-powered responses through the `promptHandler` property. This handler receives options containing the prompt and context, allowing you to integrate with AI services.

### AI Prompt Handler Example

```typescript
export class ExampleComponent {
  promptHandler = async (options: any): Promise<void> => {
    try {
      // Call your AI service
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: options.prompt,
          context: options.context,
          timestamp: options.timestamp
        })
      });

      const aiResponse = await response.json();
      // Process AI response
      console.log('AI Response:', aiResponse);
      
      // You can update the component with the response
      // or handle it in your application logic
    } catch (error) {
      console.error('AI Service error:', error);
    }
  };
}
```

### Using with AI Service

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AIService {
  constructor(private http: HttpClient) {}

  getResponse(prompt: string): Observable<any> {
    return this.http.post('/api/ai/chat', { prompt });
  }
}

// In your component
export class ExampleComponent {
  constructor(private aiService: AIService) {}

  promptHandler = (options: any): void => {
    this.aiService.getResponse(options.prompt).subscribe(response => {
      console.log('AI Response:', response);
      // Handle the response
    });
  };
}
```

## Styling

The component uses Glass Morphism styling by default and supports dark mode. You can customize the appearance using the `customClass` input or by overriding the SCSS styles.

### Custom Styling

```html
<app-ai-assist-view
  [customClass]="'my-custom-ai-assist'"
  [placeholder]="'Ask me anything...'">
</app-ai-assist-view>
```

```scss
.my-custom-ai-assist {
  ::ng-deep {
    .e-aiassistview {
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
```

## Best Practices

1. **Suggestions**: Provide relevant, contextual suggestions for better UX
2. **AI Integration**: Implement proper error handling in `promptHandler`
3. **Performance**: Use async/await or observables for AI service calls
4. **User Feedback**: Show loading states while processing AI responses
5. **Error Handling**: Handle AI service errors gracefully

## Notes

- The `promptHandler` is optional but recommended for AI functionality
- The component requires a server-side AI service for actual AI responses
- Suggestions can be dynamically updated
- The component supports all standard AI Assist View features from Syncfusion

## Related Components

- `SmartTextAreaComponent` - Intelligent textarea with AI suggestions
- `SpeechToTextComponent` - Speech to text conversion component
- `RichTextEditorComponent` - Rich text editor component

