/**
 * Language Type
 * Supported languages in the application
 */
export type Language = 'th' | 'en' | 'lo' | 'my' | 'vi' | 'zh';

/**
 * Supported languages array
 */
export const SUPPORTED_LANGUAGES: Language[] = ['th', 'en', 'lo', 'my', 'vi', 'zh'];

/**
 * Default language
 */
export const DEFAULT_LANGUAGE: Language = 'th';

/**
 * Check if language is supported
 */
export function isSupportedLanguage(language: string): language is Language {
  return SUPPORTED_LANGUAGES.includes(language as Language);
}

/**
 * Get flag SVG path for language
 */
export function getFlagPath(language: Language): string {
  const flagMap: Record<Language, string> = {
    'th': 'assets/images/flags/th.svg',
    'en': 'assets/images/flags/gb.svg',
    'lo': 'assets/images/flags/la.svg',
    'my': 'assets/images/flags/mm.svg',
    'vi': 'assets/images/flags/vn.svg',
    'zh': 'assets/images/flags/cn.svg'
  };
  return flagMap[language] || flagMap[DEFAULT_LANGUAGE];
}


