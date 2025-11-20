import { BaseModel, TranslateService, baseGetName, checkData } from './base.model';

/**
 * Faculty model
 * Note: Uses facultyId instead of codeId, so extends BaseModel directly
 */
export interface Faculty {
  facultyId?: string;
  tdesc?: string;
  edesc?: string;
}

export class Faculty extends BaseModel implements Faculty {
  facultyId?: string;
  tdesc?: string;
  edesc?: string;

  constructor(data?: Partial<Faculty>, translateService?: TranslateService) {
    super(data, translateService);
    this.facultyId = checkData(data?.facultyId) ?? undefined;
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
  getFacultyDesc(): string {
    return this.getName() ?? '';
  }
}

