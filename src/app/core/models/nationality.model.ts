import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';

/**
 * Nationality model
 * Note: Uses nationalityId instead of codeId, so extends BaseModel directly
 */
export interface Nationality {
  nationalityId?: string;
  tdesc?: string;
  edesc?: string;
}

export class Nationality extends BaseModel implements Nationality {
  nationalityId?: string;
  tdesc?: string;
  edesc?: string;

  constructor(data?: Partial<Nationality>, translateService?: TranslateService) {
    super(data, translateService);
    this.nationalityId = checkData(data?.nationalityId) ?? undefined;
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
  getDesc(): string {
    return this.getName() ?? '';
  }
}

