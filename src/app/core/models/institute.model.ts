import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';

/**
 * Institute model
 * Note: Uses institueId instead of codeId, so extends BaseModel directly
 * Note: Interface name is "Institue" (typo) but kept for backward compatibility
 */
export interface Institue {
  institueId?: string;
  tdesc?: string;
  edesc?: string;
}

export class Institue extends BaseModel implements Institue {
  institueId?: string;
  tdesc?: string;
  edesc?: string;

  constructor(data?: Partial<Institue>, translateService?: TranslateService) {
    super(data, translateService);
    this.institueId = checkData(data?.institueId) ?? undefined;
    this.tdesc = checkData(data?.tdesc) ?? undefined;
    this.edesc = checkData(data?.edesc) ?? undefined;
  }

  /**
   * Get name/description based on current language
   */
  getName(): string | null {
    return baseGetName(this.tdesc, this.edesc, this.translateService?.currentLang);
  }

  /**
   * @deprecated Use getName() instead for consistency
   */
  getInstitueDesc(): string {
    return this.getName() ?? '';
  }
}

