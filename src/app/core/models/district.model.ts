import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';
import { Province } from './province.model';

/**
 * District model
 * Note: Uses districtId instead of codeId, so extends BaseModel directly
 */
export interface District {
  districtId?: string;
  tdesc?: string;
  edesc?: string;
  province?: Province;
  zipcode?: any;
}

export class District extends BaseModel implements District {
  districtId?: string;
  tdesc?: string;
  edesc?: string;
  province?: Province;
  zipcode?: any;

  constructor(data?: Partial<District>, translateService?: TranslateService) {
    super(data, translateService);
    this.districtId = checkData(data?.districtId) ?? undefined;
    this.tdesc = checkData(data?.tdesc) ?? undefined;
    this.edesc = checkData(data?.edesc) ?? undefined;
    this.province = data?.province;
    this.zipcode = data?.zipcode;
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
  getDistrictDesc(): string {
    return this.getName() ?? '';
  }
}

