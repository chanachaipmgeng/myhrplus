import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';

/**
 * Country model
 * Note: Uses countryId instead of codeId, so extends BaseModel directly
 */
export interface Country {
  countryId?: string;
  tdesc?: string;
  edesc?: string;
}

export class Country extends BaseModel implements Country {
  countryId?: string;
  tdesc?: string;
  edesc?: string;

  constructor(data?: Partial<Country>, translateService?: TranslateService) {
    super(data, translateService);
    this.countryId = checkData(data?.countryId) ?? undefined;
    this.tdesc = checkData(data?.tdesc) ?? '';
    this.edesc = checkData(data?.edesc) ?? '';
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
  getCountryDesc(): string {
    return this.getName() ?? '';
  }
}

