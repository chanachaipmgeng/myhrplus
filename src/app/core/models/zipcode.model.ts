import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';
import { District } from './district.model';

/**
 * Zipcode model
 * Note: Uses zipcodeId instead of codeId, so extends BaseModel directly
 */
export interface Zipcode {
  zipcodeId?: string;
  tdesc?: string;
  edesc?: string;
  province?: any;
  district?: District;
}

export class Zipcode extends BaseModel implements Zipcode {
  zipcodeId?: string;
  tdesc?: string;
  edesc?: string;
  province?: any;
  district?: District;

  constructor(data?: Partial<Zipcode>, translateService?: TranslateService) {
    super(data, translateService);
    this.zipcodeId = checkData(data?.zipcodeId) ?? undefined;
    this.tdesc = checkData(data?.tdesc) ?? undefined;
    this.edesc = checkData(data?.edesc) ?? undefined;
    this.province = data?.province;
    this.district = data?.district;
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

