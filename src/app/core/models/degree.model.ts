import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';

/**
 * Degree model
 * Note: Uses degreeId instead of codeId, so extends BaseModel directly
 */
export interface Degree {
  degreeId?: string;
  tdesc?: string;
  edesc?: string;
}

export class Degree extends BaseModel implements Degree {
  degreeId?: string;
  tdesc?: string;
  edesc?: string;

  constructor(data?: Partial<Degree>, translateService?: TranslateService) {
    super(data, translateService);
    this.degreeId = checkData(data?.degreeId) ?? undefined;
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
  getDegreeDesc(): string {
    return this.getName() ?? '';
  }
}

