/**
 * Company Screen Definition Models
 * Models สำหรับเก็บข้อมูลหน้าจอ JSP จากระบบเก่าเพื่อใช้ในการ migrate
 */

/**
 * JSP File Type
 * ประเภทของไฟล์ JSP
 */
export enum JspFileType {
  MAIN = 'main',
  RELATED = 'related',
  CHILD = 'child',
  HELP = 'help',
  EXPORT = 'export',
  VIEW = 'view',
  PRE_EXPORT = 'pre-export',
  CHECK = 'check',
  DUPLICATE = 'duplicate',
  ADD_CHILD = 'add-child',
  OTHER = 'other'
}

/**
 * JSP File Definition
 * ข้อมูลไฟล์ JSP
 */
export interface JspFile {
  /** ชื่อไฟล์ JSP (เช่น CS008.jsp) */
  filename: string;
  /** ประเภทไฟล์ */
  type: JspFileType;
  /** คำอธิบาย (เช่น "Main screen", "Related screen") */
  description?: string;
}

/**
 * Screen Permissions
 * สิทธิ์การใช้งานหน้าจอ
 */
export interface ScreenPermissions {
  /** สิทธิ์ Active (activepermis="1") */
  active: boolean | string;
  /** สิทธิ์ Edit */
  edit: boolean;
  /** สิทธิ์ Save */
  save: boolean;
  /** สิทธิ์ Delete */
  delete: boolean;
}

/**
 * Screen Type
 * ประเภทหน้าจอ
 */
export enum ScreenType {
  SCREEN = 'screen',
  REPORT = 'report',
  SETUP = 'setup',
  MASTER = 'master',
  ANALYST = 'analyst',
  OTHER = 'other'
}

/**
 * Company Screen Definition
 * ข้อมูลหน้าจอ Company Module จากระบบเก่า
 */
export interface CompanyScreenDefinition {
  /** Menu Code (เช่น CO01A0102) */
  menuCode: string;
  /** Menu Name (Thai) */
  menuNameThai: string;
  /** Menu Name (English) */
  menuNameEnglish: string;
  /** JSP Files - ไฟล์ JSP ทั้งหมดที่เกี่ยวข้อง */
  jspFiles: JspFile[];
  /** Permissions - สิทธิ์การใช้งาน */
  permissions: ScreenPermissions;
  /** Related Files - ไฟล์ที่เกี่ยวข้อง (อาจเป็น JSP หรือไฟล์อื่นๆ) */
  relatedFiles?: string[];
  /** Language Code (เช่น BU01, ROI1008) */
  languageCode?: string;
  /** Report Code (เช่น CS081-CS0081, M49-CS001) */
  reportCode?: string;
  /** Screen Type */
  screenType?: ScreenType;
  /** Note - หมายเหตุเพิ่มเติม */
  note?: string;
  /** Base Path - path หลักของหน้าจอ */
  basePath?: string;
  /** Route Path - route path สำหรับ Angular (เช่น /portal/admin/company/hr/company-info/company-type) */
  routePath?: string;
}

/**
 * Company Screen Category
 * หมวดหมู่ของหน้าจอ Company Module
 */
export interface CompanyScreenCategory {
  /** Category Code (เช่น CO01A, CO01A01) */
  categoryCode: string;
  /** Category Name (Thai) */
  categoryNameThai: string;
  /** Category Name (English) */
  categoryNameEnglish: string;
  /** Screens - รายการหน้าจอในหมวดหมู่นี้ */
  screens: CompanyScreenDefinition[];
  /** Sub Categories - หมวดหมู่ย่อย */
  subCategories?: CompanyScreenCategory[];
}

/**
 * Company Module Inventory
 * ข้อมูลทั้งหมดของ Company Module
 */
export interface CompanyModuleInventory {
  /** Module Code (CO) */
  moduleCode: string;
  /** Module Name */
  moduleName: string;
  /** Base Path */
  basePath: string;
  /** Total Screens */
  totalScreens: number;
  /** Main Categories */
  mainCategories: CompanyScreenCategory[];
  /** Summary Statistics */
  summaryStatistics?: {
    [key: string]: number;
  };
}

/**
 * Helper function: Parse JSP file description to type
 * แปลงคำอธิบาย JSP file เป็น JspFileType
 */
export function parseJspFileType(description?: string): JspFileType {
  if (!description) {
    return JspFileType.MAIN;
  }

  const desc = description.toLowerCase();
  if (desc.includes('main')) {
    return JspFileType.MAIN;
  } else if (desc.includes('related')) {
    return JspFileType.RELATED;
  } else if (desc.includes('child')) {
    return JspFileType.CHILD;
  } else if (desc.includes('help')) {
    return JspFileType.HELP;
  } else if (desc.includes('export')) {
    return JspFileType.EXPORT;
  } else if (desc.includes('view')) {
    return JspFileType.VIEW;
  } else if (desc.includes('pre-export') || desc.includes('pre_export')) {
    return JspFileType.PRE_EXPORT;
  } else if (desc.includes('check')) {
    return JspFileType.CHECK;
  } else if (desc.includes('duplicate')) {
    return JspFileType.DUPLICATE;
  } else if (desc.includes('add child') || desc.includes('addchild')) {
    return JspFileType.ADD_CHILD;
  }

  return JspFileType.OTHER;
}

/**
 * Helper function: Parse permission value
 * แปลงค่า permission (Yes/No หรือ boolean) เป็น boolean
 */
export function parsePermission(value: boolean | string): boolean {
  if (typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'string') {
    const lower = value.toLowerCase();
    return lower === 'yes' || lower === 'true' || lower === '1';
  }
  return false;
}

/**
 * Helper function: Create CompanyScreenDefinition from inventory data
 * สร้าง CompanyScreenDefinition จากข้อมูล inventory
 */
export function createScreenDefinition(data: {
  menuCode: string;
  menuNameThai: string;
  menuNameEnglish: string;
  jspFiles?: Array<{ filename: string; description?: string }>;
  permissions: {
    active?: boolean | string;
    edit?: boolean;
    save?: boolean;
    delete?: boolean;
  };
  relatedFiles?: string[];
  languageCode?: string;
  reportCode?: string;
  screenType?: ScreenType | string;
  note?: string;
  basePath?: string;
  routePath?: string;
}): CompanyScreenDefinition {
  const jspFiles: JspFile[] = (data.jspFiles || []).map(file => ({
    filename: file.filename,
    type: parseJspFileType(file.description),
    description: file.description
  }));

  // ถ้าไม่มี JSP files แต่มี related files ให้ใช้ related files เป็น JSP files
  if (jspFiles.length === 0 && data.relatedFiles && data.relatedFiles.length > 0) {
    data.relatedFiles.forEach(file => {
      jspFiles.push({
        filename: file,
        type: JspFileType.RELATED,
        description: 'Related file'
      });
    });
  }

  return {
    menuCode: data.menuCode,
    menuNameThai: data.menuNameThai,
    menuNameEnglish: data.menuNameEnglish,
    jspFiles,
    permissions: {
      active: data.permissions.active ?? true,
      edit: parsePermission(data.permissions.edit ?? true),
      save: parsePermission(data.permissions.save ?? true),
      delete: parsePermission(data.permissions.delete ?? true)
    },
    relatedFiles: data.relatedFiles,
    languageCode: data.languageCode,
    reportCode: data.reportCode,
    screenType: typeof data.screenType === 'string'
      ? (data.screenType as ScreenType)
      : data.screenType ?? ScreenType.SCREEN,
    note: data.note,
    basePath: data.basePath,
    routePath: data.routePath
  };
}

