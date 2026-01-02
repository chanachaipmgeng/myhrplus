export interface AuthUser {
    // Core identification
    id?: string;
    username: string;
    user?: string;
    uid?: string;
    employeeid?: string;
    actorid?: string;
    memberid?: string;

    // Personal information
    name?: string;
    fullname?: string;
    email?: string;

    // Authentication & Authorization
    roles?: string[];
    user_role?: string;
    role_level?: string;
    user_level?: string;
    permissions?: string[];

    // Company & Organization
    companyId?: string;
    companyid?: string;
    companyName?: string;
    comid?: string;
    branch?: string;
    dbName?: string;
    schema?: string;

    // Work & Position
    workarea?: string;
    emp_position?: string;
    job?: string;

    // Account status
    accountactive?: string;
    firstlogin?: string;
    ad?: string;

    // Language & Localization
    lang?: string;

    // Application & System
    app_name?: string;
    url_myhr?: string;
    encode?: string;
    sub?: string;
    iss?: string;

    // Zeeme integration
    zmlogin?: string;
    token_zeeme?: string;
    zm_user?: string;

    // Token
    token?: string;

    // Allow additional properties from JWT token
    [key: string]: any;
}
