import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';

/**
 * Bank branch model
 * Note: Uses branchId instead of codeId, so extends BaseModel directly
 */
export interface BankBranch {
  bankId?: string;
  branchId?: string;
  tdesc?: string;
  edesc?: string;
}

export class BankBranch extends BaseModel implements BankBranch {
  bankId?: string;
  branchId?: string;
  tdesc?: string;
  edesc?: string;

  constructor(data?: Partial<BankBranch>, translateService?: TranslateService) {
    super(data, translateService);
    this.bankId = checkData(data?.bankId) ?? undefined;
    this.branchId = checkData(data?.branchId) ?? undefined;
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

