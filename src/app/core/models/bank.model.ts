import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';

/**
 * Bank model
 * Note: Uses bankId instead of codeId, so extends BaseModel directly
 */
export interface Bank {
  bankId?: string;
  tdesc?: string;
  edesc?: string;
  bankCode?: string;
}

export class Bank extends BaseModel implements Bank {
  bankId?: string;
  tdesc?: string;
  edesc?: string;
  bankCode?: string;

  constructor(data?: Partial<Bank>, translateService?: TranslateService) {
    super(data, translateService);
    this.bankId = checkData(data?.bankId) ?? undefined;
    this.bankCode = checkData(data?.bankCode) ?? undefined;
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

