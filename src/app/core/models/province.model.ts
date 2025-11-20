import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';

/**
 * Province model
 * Note: Uses longTname/longEname instead of tdesc/edesc
 */
export interface Province {
  provinceId?: string;
  longTname: string;
  longEname: string;
}

export class Province extends BaseModel implements Province {
  provinceId?: string;
  longTname: string;
  longEname: string;

  constructor(data?: Partial<Province>, translateService?: TranslateService) {
    super(data, translateService);
    this.provinceId = checkData(data?.provinceId) ?? undefined;
    this.longTname = checkData(data?.longTname) ?? '';
    this.longEname = checkData(data?.longEname) ?? '';
  }

  /**
   * Get name/description based on current language
   */
  getName(): string | null {
    return baseGetName(this.longTname, this.longEname, this.translateService?.currentLang);
  }

  /**
   * @deprecated Use getName() instead for consistency
   */
  getDistrictDesc(): string {
    return this.getName() ?? '';
  }
}

