import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLATION_KEYS } from '@core/constants/translation-keys.constant';

@Component({
  selector: 'app-code-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass dark:glass-dark theme-gemini:glass-gemini rounded-lg overflow-hidden my-4 shadow-glass">
      <div class="flex justify-between items-center px-4 py-3 bg-white/5 dark:bg-gray-800/50 theme-gemini:bg-blue-500/10 border-b border-white/10 dark:border-gray-700/50 theme-gemini:border-blue-500/30">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300 theme-gemini:bg-gradient-to-r theme-gemini:from-blue-400 theme-gemini:via-cyan-400 theme-gemini:to-blue-500 theme-gemini:bg-clip-text theme-gemini:text-transparent">{{ title }}</span>
        <button 
          class="px-3 py-1 text-xs bg-primary-500/10 dark:bg-primary-500/20 theme-gemini:bg-blue-500/20 text-primary-600 dark:text-primary-400 theme-gemini:text-blue-400 border border-primary-500/20 dark:border-primary-500/40 theme-gemini:border-blue-500/30 rounded-md cursor-pointer transition-smooth
                 hover:bg-primary-500/20 dark:hover:bg-primary-500/30 theme-gemini:hover:bg-blue-500/30 theme-gemini:hover:shadow-gemini-sm
                 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          (click)="copyCode()"
          [attr.aria-label]="'Copy code'">
          {{ copied ? '✓ Copied' : 'Copy' }}
        </button>
      </div>
      <pre class="m-0 p-4 bg-gray-900 dark:bg-gray-950 text-gray-100 font-mono text-sm leading-relaxed overflow-x-auto"><code [innerHTML]="formattedCode" class="text-inherit font-inherit"></code></pre>
    </div>
  `,
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent {
  @Input() code: string = '';
  @Input() language: 'html' | 'typescript' | 'scss' = 'html';
  @Input() title: string = 'Code Example';
  
  copied: boolean = false;

  get formattedCode(): string {
    return this.escapeHtml(this.code);
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  copyCode(): void {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    });
  }
}


