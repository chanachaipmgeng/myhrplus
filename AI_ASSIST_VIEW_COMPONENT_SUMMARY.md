# AI Assist View Component Summary

## Component Information

- **Component Name**: `AIAssistViewComponent`
- **Selector**: `app-ai-assist-view`
- **Location**: `src/app/shared/components/ai-assist-view/`
- **Module**: Standalone Component
- **Dependencies**: `@syncfusion/ej2-angular-interactive-chat` (AIAssistViewModule)

## Quick Start

```html
<app-ai-assist-view
  [placeholder]="'Ask me anything...'"
  [enableSuggestions]="true"
  [suggestions]="suggestions"
  [height]="'600px'"
  (prompt)="onPrompt($event)">
</app-ai-assist-view>
```

## Key Features

- ✅ AI-powered assistant interface
- ✅ Customizable suggestions
- ✅ Prompt handling
- ✅ Interactive chat features
- ✅ Glass Morphism styling
- ✅ Dark mode support
- ✅ Event handling (prompt, suggestionClick, created)

## Input Properties

### Basic Properties
- `placeholder`: Placeholder text for input
- `enableSuggestions`: Enable/disable suggestions
- `showSuggestions`: Show/hide suggestions
- `suggestions`: Array of suggestion strings
- `width`: Component width
- `height`: Component height
- `customClass`: Custom CSS class

### AI Properties
- `promptHandler`: Handler function for processing prompts

## Output Events

- `prompt`: Emitted when a prompt is sent
- `suggestionClick`: Emitted when a suggestion is clicked
- `created`: Emitted when component is created

## Methods

- `sendPrompt(prompt: string)`: Send a prompt programmatically
- `refresh()`: Refresh the component
- `getAIAssistViewInstance()`: Get Syncfusion instance

## Usage Examples

### Basic Usage
```html
<app-ai-assist-view
  [placeholder]="'Ask me anything...'"
  [suggestions]="suggestions">
</app-ai-assist-view>
```

### With AI Handler
```html
<app-ai-assist-view
  [placeholder]="'Ask me anything...'"
  [promptHandler]="promptHandler"
  [suggestions]="suggestions">
</app-ai-assist-view>
```

### With Configuration
```html
<app-ai-assist-view
  [config]="aiAssistConfig">
</app-ai-assist-view>
```

## Demo

See the demo at `/demo/ai-assist-view` for interactive examples and usage patterns.

## Documentation

For detailed documentation, see `AI_ASSIST_VIEW_COMPONENT_GUIDE.md`.




