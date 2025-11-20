import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';

/**
 * Currency model
 * Note: Has additional properties (exchange, moneySign, effDate), so extends BaseModel directly
 */
export interface CurrencyModel {
  currencyId: string;
  tdesc: string;
  edesc: string;
  exchange: string;
  moneySign: string;
  effDate: string;
}

export class CurrencyModel extends BaseModel implements CurrencyModel {
  currencyId: string;
  tdesc: string;
  edesc: string;
  exchange: string;
  moneySign: string;
  effDate: string;

  constructor(data?: Partial<CurrencyModel>, translateService?: TranslateService) {
    super(data, translateService);
    this.currencyId = checkData(data?.currencyId) ?? '';
    this.tdesc = checkData(data?.tdesc) ?? '';
    this.edesc = checkData(data?.edesc) ?? '';
    this.exchange = checkData(data?.exchange) ?? '';
    this.moneySign = checkData(data?.moneySign) ?? '';
    this.effDate = checkData(data?.effDate) ?? '';
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

