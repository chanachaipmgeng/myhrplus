# Payroll Module - JSP Screen Inventory

## Overview
- **Total Screens**: ~200+ screens (excluding reports)
- **Main Categories**: 5 categories
- **Active Menus**: 80+ menu items
- **Module Code**: PR (Payroll)
- **Base Path**: `hrAppWeb.war/PAYROLL/`

## Summary Statistics
- **Transaction (Before Processing)**: 9 screens
- **Transaction (Run Processing)**: 5 screens
- **Transaction (After Processing)**: 5 screens
- **E-PaySlip**: 4 screens
- **Text File Transfer**: 50+ screens
- **Options/Configuration**: 15+ screens
- **Setup (Master Data)**: 30+ screens
- **Terms Of Use**: 1 screen

---

## 1. Transaction (PR03A)

### 1.1 Before Payroll Processing (PR03A01)

#### 1.1.1 Employee Working Hour (PRU134_DETAIL)
- **Menu Name (Thai)**: ข้อมูลการทำงานของพนักงาน
- **Menu Name (English)**: Employee Working Hour
- **JSP Files**: 
  - `PRU134_DETAIL.jsp` - Main screen
  - `TAU122.jsp` - Related screen
  - `TAU123.jsp` - Related screen
- **Permissions**: 
  - Active: Yes (activepermis="1")
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.2 Irregular Income and Deduction (PRU072)
- **Menu Name (Thai)**: เงินได้และเงินหักไม่ประจำ
- **Menu Name (English)**: Irregular Income and Deduction
- **JSP Files**: 
  - `PRU072.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.3 Other Incomes and Deductions (PRU140)
- **Menu Name (Thai)**: รายได้หรือรายหักอื่นๆ
- **Menu Name (English)**: Other Incomes and Deductions
- **JSP Files**: 
  - `PRU140.jsp` - Main screen
  - `PRU071.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.1.4 Generate Salary Retroact Transaction (PRU132_NSTDA)
- **Menu Name (Thai)**: สร้างรายการเงินตกเบิก
- **Menu Name (English)**: Generate Salary Retroact Transaction
- **JSP Files**: 
  - `PRU132_NSTDA.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.1.5 Fixed Income and Deduction (PRU047PSN)
- **Menu Name (Thai)**: รายได้และรายหักที่จ่ายทุกเดือน
- **Menu Name (English)**: Fixed Income and Deduction
- **JSP Files**: 
  - `PRU047PSN.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No

#### 1.1.6 Irregular Income and Deduction for Employee (PRU169)
- **Menu Name (Thai)**: ทะเบียนรายได้-รายหักไม่ประจำสำหรับพนักงาน
- **Menu Name (English)**: Irregular Income and Deduction for Employee
- **JSP Files**: 
  - `PRU169.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: No
  - Delete: No

#### 1.1.7 Transfer Employee Information to DB Payroll (In source) (PRU100)
- **Menu Name (Thai)**: โอนข้อมูลพนักงานไปยังฐานข้อมูลเงินเดือน (In source)
- **Menu Name (English)**: Transfer Employee Information to DB Payroll (In source)
- **JSP Files**: 
  - `PRU100.jsp` - Main screen
  - `FILTER_EXPORT.jsp` - Export filter screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

#### 1.1.8 Pull Employee Information from DB Payroll (In source) (PRU101)
- **Menu Name (Thai)**: ดึงข้อมูลพนักงานจากฐานข้อมูลเงินเดือน (In source)
- **Menu Name (English)**: Pull Employee Information from DB Payroll (In source)
- **JSP Files**: 
  - `PRU101.jsp` - Main screen
  - `FILTER_EXPORT.jsp` - Export filter screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: No

---

### 1.2 Run Payroll Processing (PR03A03)

#### 1.2.1 Test Payroll Calculation (PRU125)
- **Menu Name (Thai)**: ทดสอบการคำนวณรายได้
- **Menu Name (English)**: Test Payroll Calculation
- **JSP Files**: 
  - `PRU125.jsp` - Main screen
  - `PRU125HELP.jsp` - Help screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.2.2 Payroll Computation Confirmation (PRU126_OEI)
- **Menu Name (Thai)**: ยืนยันผลการคำนวณรายได้
- **Menu Name (English)**: Payroll Computation Confirmation
- **JSP Files**: 
  - `PRU126_OEI.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.2.3 Period End Process (PRU127_TN)
- **Menu Name (Thai)**: ผ่านรายการระบบเงินเดือน
- **Menu Name (English)**: Period End Process
- **JSP Files**: 
  - `PRU127_TN.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.2.4 Month End Process (PRU124)
- **Menu Name (Thai)**: ปิดบัญชีสิ้นเดือน
- **Menu Name (English)**: Month End Process
- **JSP Files**: 
  - `PRU124.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.2.5 Year End Process (PRU129_STD)
- **Menu Name (Thai)**: ปิดบัญชีสิ้นปี
- **Menu Name (English)**: Year End Process
- **JSP Files**: 
  - `PRU129_STD.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 1.3 After Payroll Processing (PR03A02)

#### 1.3.1 Data after Payroll Calculation (PRU029_NSTDA)
- **Menu Name (Thai)**: ข้อมูลหลังการคำนวณเงินเดือน
- **Menu Name (English)**: Data after Payroll Calculation
- **JSP Files**: 
  - `PRU029_NSTDA.jsp` - Main screen
  - `PRU030.jsp` - Related screen
  - `TAU134P.jsp` - Related screen
  - `EMPTAXINFO.jsp` - Tax information screen
  - `PRU029HELP.jsp` - Help screen
  - `PRU029_TAX_1.jsp` - Tax related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 1.3.2 Payroll Reconciliation (PRU031_2)
- **Menu Name (Thai)**: ข้อมูลการเปรียบเทียบเงินเดือน
- **Menu Name (English)**: Payroll Reconciliation
- **JSP Files**: 
  - `PRU031_2.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: Yes
  - Delete: Yes

#### 1.3.3 Current Payment Record (PRU173)
- **Menu Name (Thai)**: ข้อมูลหลังการคำนวณเงินเดือนพนักงานทั้งหมด
- **Menu Name (English)**: Current Payment Record
- **JSP Files**: 
  - `PRU173.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.3.4 Data after Payroll Calculation (Cost Center) (PRU180)
- **Menu Name (Thai)**: ข้อมูลหลังการคำนวณเงินเดือน (Cost Center)
- **Menu Name (English)**: Data after Payroll Calculation (Cost Center)
- **JSP Files**: 
  - `PRU180.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 1.4 E-PaySlip (PR03A04)

#### 1.4.1 E-PaySlip Process (PRU174)
- **Menu Name (Thai)**: E-PaySlip Process
- **Menu Name (English)**: E-PaySlip Process
- **JSP Files**: 
  - `PRU174.jsp` - Main screen
  - `PRU174_HELP.jsp` - Help screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 1.4.2 E-PaySlip Management (PRU175)
- **Menu Name (Thai)**: E-PaySlip Management
- **Menu Name (English)**: E-PaySlip Management
- **JSP Files**: 
  - `PRU175.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: No

#### 1.4.3 E-PaySlip Footer Management (PRU176)
- **Menu Name (Thai)**: E-PaySlip Footer Management
- **Menu Name (English)**: E-PaySlip Footer Management
- **JSP Files**: 
  - `PRU176.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: No

#### 1.4.4 E-PaySlip Regeneration (PRU130_STD)
- **Menu Name (Thai)**: E-PaySlip Regeneration
- **Menu Name (English)**: E-PaySlip Regeneration
- **JSP Files**: 
  - `PRU130_STD.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## 2. Text File Transfer (PR06A)

### 2.1 After Payroll Calculation (PR06A01)

#### 2.1.1 Transfer to bank (PR06A0101)
- **Menu Name (Thai)**: นำส่งธนาคาร
- **Menu Name (English)**: Transfer to bank
- **JSP Files**: 
  - `PRT003-BANK` - Bank transfer screen
- **Type**: Export function (uses goExport)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.2 Transfer to bank (SCB) (PR06A0103)
- **Menu Name (Thai)**: นำส่งธนาคาร (SCB)
- **Menu Name (English)**: Transfer to bank (SCB)
- **JSP Files**: 
  - `PRT003-BANKSCB.jsp` - SCB bank transfer screen
  - `PRT004TABLE.jsp` - Table screen
  - `PRT003-BANKOPTION.jsp` - Option screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.3 Transfer to bank (SCB V.2) (PR06A0110)
- **Menu Name (Thai)**: นำส่งธนาคาร (SCB V.2)
- **Menu Name (English)**: Transfer to bank (SCB V.2)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function (uses goExportBank)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.4 Transfer to bank (SCB V.2 Name) (PR06A0110)
- **Menu Name (Thai)**: นำส่งธนาคาร (SCB V.2 Name)
- **Menu Name (English)**: Transfer to bank (SCB V.2 Name)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.5 Transfer to bank (SCB V.3) (PR06A0119)
- **Menu Name (Thai)**: นำส่งธนาคาร (SCB V.3)
- **Menu Name (English)**: Transfer to bank (SCB V.3)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.6 Transfer to bank (SCB BCM) (PR06A012)
- **Menu Name (Thai)**: นำส่งธนาคาร (SCB BCM)
- **Menu Name (English)**: Transfer to bank (SCB BCM)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.7 Transfer to bank (SCB V.4) (PR06A0152)
- **Menu Name (Thai)**: นำส่งธนาคาร (SCB V.4)
- **Menu Name (English)**: Transfer to bank (SCB V.4)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.8 Transfer to bank (SCB V.6) (PR06A0153)
- **Menu Name (Thai)**: นำส่งธนาคาร (SCB V.6)
- **Menu Name (English)**: Transfer to bank (SCB V.6)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.9 Transfer to bank (BBL) (PR06A0104)
- **Menu Name (Thai)**: นำส่งธนาคาร (BBL)
- **Menu Name (English)**: Transfer to bank (BBL)
- **JSP Files**: 
  - `PRT003-BANKBBL.jsp` - BBL bank transfer screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.10 Transfer to bank (BBL V.2) (PR06A0115)
- **Menu Name (Thai)**: นำส่งธนาคาร (BBL V.2)
- **Menu Name (English)**: Transfer to bank (BBL V.2)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
  - `PRT003-BANKOPTION.jsp` - Option screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.11 Transfer to bank (BBL OTHER) (PR06A0115)
- **Menu Name (Thai)**: นำส่งธนาคาร (BBL OTHER)
- **Menu Name (English)**: Transfer to bank (BBL OTHER)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
  - `PRT003-BANKOPTION.jsp` - Option screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.12 Transfer to bank (BBL V.3) (PR06A0122)
- **Menu Name (Thai)**: นำส่งธนาคาร (BBL V.3)
- **Menu Name (English)**: Transfer to bank (BBL V.3)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.13 Transfer to bank (BBL 80 V.4) (PR06A0129)
- **Menu Name (Thai)**: นำส่งธนาคาร (BBL 80 V.4)
- **Menu Name (English)**: Transfer to bank (BBL 80 V.4)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.14 Transfer to bank (BBL KCG) (PR06A0128)
- **Menu Name (Thai)**: นำส่งธนาคาร (BBL KCG)
- **Menu Name (English)**: Transfer to bank (BBL KCG)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.15 Transfer to bank (BBL KCG V.2) (PR06A0133)
- **Menu Name (Thai)**: นำส่งธนาคาร (BBL KCG V.2)
- **Menu Name (English)**: Transfer to bank (BBL KCG V.2)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.16 Transfer to bank (KTB KCG) (PR06A0126)
- **Menu Name (Thai)**: นำส่งธนาคาร (KTB KCG)
- **Menu Name (English)**: Transfer to bank (KTB KCG)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.17 Transfer to bank (KTB) V2 (PR06A0136)
- **Menu Name (Thai)**: นำส่งธนาคาร (KTB) V2
- **Menu Name (English)**: Transfer to bank (KTB) V2
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.18 Transfer to bank (TBANK KCG) (PR06A0127)
- **Menu Name (Thai)**: นำส่งธนาคาร (TBANK KCG)
- **Menu Name (English)**: Transfer to bank (TBANK KCG)
- **JSP Files**: 
  - `PRT003-BANKOPTION.jsp` - Option screen
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.19 Transfer to bank (TBANK JT) (PR06A0132)
- **Menu Name (Thai)**: นำส่งธนาคาร (TBANK JT)
- **Menu Name (English)**: Transfer to bank (TBANK JT)
- **JSP Files**: 
  - `PRT003-BANKOPTION.jsp` - Option screen
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.20 Transfer to bank (KBANK) (PR06A0105)
- **Menu Name (Thai)**: นำส่งธนาคาร (KBANK)
- **Menu Name (English)**: Transfer to bank (KBANK)
- **JSP Files**: 
  - `PRT003-BANKKBK.jsp` - KBANK bank transfer screen
  - `EXPORTBANKKBK` - Export screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.21 Transfer to bank (KBANK V.2) (PR06A0111)
- **Menu Name (Thai)**: นำส่งธนาคาร (KBANK V.2)
- **Menu Name (English)**: Transfer to bank (KBANK V.2)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
  - `PRT003-BANKOPTION.jsp` - Option screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.22 Transfer to bank (KBANK V.3) (PR06A0123)
- **Menu Name (Thai)**: นำส่งธนาคาร (KBANK V.3)
- **Menu Name (English)**: Transfer to bank (KBANK V.3)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
  - `PRT003-BANKOPTION.jsp` - Option screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.23 Transfer to bank (KBANK V.3) THAI (PR06A0123)
- **Menu Name (Thai)**: นำส่งธนาคาร (KBANK V.3) ไทย
- **Menu Name (English)**: Transfer to bank (KBANK V.3) THAI
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
  - `PRT003-BANKOPTION.jsp` - Option screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.24 Transfer to bank (KBANK V.4) (PR06A0140)
- **Menu Name (Thai)**: นำส่งธนาคาร (KBANK V.4)
- **Menu Name (English)**: Transfer to bank (KBANK V.4)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
  - `PRT003-BANKOPTION.jsp` - Option screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.25 Transfer to bank (TMB) (PR06A0120)
- **Menu Name (Thai)**: นำส่งธนาคาร (TMB)
- **Menu Name (English)**: Transfer to bank (TMB)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.26 Transfer to bank (TMB V.2) (PR06A0121)
- **Menu Name (Thai)**: นำส่งธนาคาร (TMB V.2)
- **Menu Name (English)**: Transfer to bank (TMB V.2)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.27 Transfer to bank (TMB V.3) (PR06A0125)
- **Menu Name (Thai)**: นำส่งธนาคาร (TMB V.3)
- **Menu Name (English)**: Transfer to bank (TMB V.3)
- **JSP Files**: 
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.28 Transfer to bank (CITI) (PR06A0134)
- **Menu Name (Thai)**: นำส่งธนาคาร (CITI)
- **Menu Name (English)**: Transfer to bank (CITI)
- **JSP Files**: 
  - `PRT003-BANKOPTION.jsp` - Option screen
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.29 Transfer data to bank (Emporium) (PR06A0135)
- **Menu Name (Thai)**: นำส่งข้อมูลธนาคาร (Emporium)
- **Menu Name (English)**: Transfer data to bank (Emporium)
- **JSP Files**: 
  - `PRT003-BANKOPTION.jsp` - Option screen
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.30 Transfer data to bank (Emporium)(UPAYDAT) (PR06A0137)
- **Menu Name (Thai)**: นำส่งข้อมูลธนาคาร (Emporium)(UPAYDAT)
- **Menu Name (English)**: Transfer data to bank (Emporium)(UPAYDAT)
- **JSP Files**: 
  - `PRT003-BANKOPTION.jsp` - Option screen
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.31 Transfer to bank (SMBC JP) (PR06A0144)
- **Menu Name (Thai)**: นำส่งธนาคาร (SMBC JP)
- **Menu Name (English)**: Transfer to bank (SMBC JP)
- **JSP Files**: 
  - `PRT003-BANKOPTION.jsp` - Option screen
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.32 Transfer to bank (SMBC JP) Ver 2 (PR06A0151)
- **Menu Name (Thai)**: นำส่งธนาคาร (SMBC JP)แบบที่ 2
- **Menu Name (English)**: Transfer to bank (SMBC JP) Ver 2
- **JSP Files**: 
  - `PRT003-BANKOPTION.jsp` - Option screen
  - `PRT003-BANKV2.jsp` - Bank V2 screen
  - `PRT004TABLE.jsp` - Table screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.33 Provident Fund (PR06A0102)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ
- **Menu Name (English)**: Provident Fund
- **Type**: Export function (uses goExportPVF)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.34 KASSET (PR06A0107)
- **Menu Name (Thai)**: หลักทรัพย์จัดการกองทุนกสิกรไทย
- **Menu Name (English)**: KASSET
- **Type**: Export function (uses goExportTAX)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.35 Provident Fund (UOB) (PR06A0106)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ (UOB)
- **Menu Name (English)**: Provident Fund (UOB)
- **Type**: Export function (uses goExportPVF2)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.36 Provident Fund (AIA) (PR06A0109)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ (AIA)
- **Menu Name (English)**: Provident Fund (AIA)
- **JSP Files**: 
  - `TEXTFILE_AIA.jsp` - AIA text file screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.37 Provident Fund (ITE) (PR06A0113)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ (ITE)
- **Menu Name (English)**: Provident Fund (ITE)
- **JSP Files**: 
  - `TEXTFILE_PVF_ITE.jsp` - ITE text file screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.38 JV (PR06A0108)
- **Menu Name (Thai)**: JV
- **Menu Name (English)**: JV
- **JSP Files**: 
  - `EXPORTEXCEL_TOA` - Excel export screen
- **Type**: Export function (uses goExportExcel)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.39 Provident Fund (CIMB) (PR06A0114)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ (CIMB)
- **Menu Name (English)**: Provident Fund (CIMB)
- **Type**: Export function (uses goExportPVF2)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.40 Provident Fund (ASIA PLUS) (PR06A0124)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ (ASIA PLUS)
- **Menu Name (English)**: Provident Fund (ASIA PLUS)
- **Type**: Export function (uses goExportPVF2)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.41 Provident Fund JTFOOD 2103 (PR06A0141)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ JTFOOD 2103
- **Menu Name (English)**: Provident Fund JTFOOD 2103
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.42 Provident Fund JTFOOD 4103 (PR06A0142)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ JTFOOD 4103
- **Menu Name (English)**: Provident Fund JTFOOD 4103
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.43 Provident Fund JTFOOD 6103 (PR06A0143)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ JTFOOD 6103
- **Menu Name (English)**: Provident Fund JTFOOD 6103
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.44 Provident Fund (TISCO PART1) (PR06A0116)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ (TISCO PART1)
- **Menu Name (English)**: Provident Fund (TISCO PART1)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.45 Provident Fund (TISCO PART2) (PR06A0117)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ (TISCO PART2)
- **Menu Name (English)**: Provident Fund (TISCO PART2)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.46 Provident Fund (TISCO PART3) (PR06A0118)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ (TISCO PART3)
- **Menu Name (English)**: Provident Fund (TISCO PART3)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.47 Provident Fund .PRN (TISCO PART1) (PR06A0145)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ .PRN (TISCO PART1)
- **Menu Name (English)**: Provident Fund .PRN (TISCO PART1)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.48 Provident Fund .PRN (TISCO PART2) (PR06A0146)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ .PRN (TISCO PART2)
- **Menu Name (English)**: Provident Fund .PRN (TISCO PART2)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.49 Provident Fund .PRN (TISCO PART3) (PR06A0147)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ .PRN (TISCO PART3)
- **Menu Name (English)**: Provident Fund .PRN (TISCO PART3)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.50 Provident Fund .TXT(TISCO PART1) (PR06A0148)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ .TXT(TISCO PART1)
- **Menu Name (English)**: Provident Fund .TXT(TISCO PART1)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.51 Provident Fund .TXT(TISCO PART2) (PR06A0149)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ .TXT(TISCO PART2)
- **Menu Name (English)**: Provident Fund .TXT(TISCO PART2)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.52 Provident Fund .TXT(TISCO PART3) (PR06A0150)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ .TXT(TISCO PART3)
- **Menu Name (English)**: Provident Fund .TXT(TISCO PART3)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.53 Provident Fund (CIMB) (PR06A010210)
- **Menu Name (Thai)**: นำส่งกองทุนฯ (CIMB)
- **Menu Name (English)**: Provident Fund (CIMB)
- **JSP Files**: 
  - `PVFCIMBV2.jsp` - CIMB V2 screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.54 Transfer to bank (SCB Surety) (PR06A0112)
- **Menu Name (Thai)**: นำส่งธนาคาร (SCB Surety)
- **Menu Name (English)**: Transfer to bank (SCB Surety)
- **JSP Files**: 
  - `PRT003-BANKSCBSURETY.jsp` - SCB Surety screen
  - `PRT004TABLE.jsp` - Table screen
  - `PRT003-BANKOPTION.jsp` - Option screen
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.55 Deliver the cooperative (Walcoal) (PR06A010310)
- **Menu Name (Thai)**: นำส่งสหกรณ์ (Walcoal)
- **Menu Name (English)**: Deliver the cooperative (Walcoal)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.1.56 Provident Fund (BBLAM) (PR06A0154)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพ (BBLAM)
- **Menu Name (English)**: Provident Fund (BBLAM)
- **Type**: Export function
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 2.2 After Period End (PR06A02)

#### 2.2.1 Tax PND1 (PR06A0201)
- **Menu Name (Thai)**: นำส่งภาษี ภ.ง.ด.1
- **Menu Name (English)**: Tax PND1
- **Type**: Export function (uses goExportTAX)
- **XML File**: EXPORTTAX.xml
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.2.2 Tax PND1 Kor (PR06A0202)
- **Menu Name (Thai)**: นำส่งภาษี ภ.ง.ด.1ก
- **Menu Name (English)**: Tax PND1 Kor
- **Type**: Export function
- **XML File**: EXPORTTAX_1KOR.xml
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.2.3 Tax PND1 Kor (RD Prep) (PR06A0208)
- **Menu Name (Thai)**: นำส่งภาษี ภ.ง.ด.1ก (โปรแกรม RD Prep)
- **Menu Name (English)**: Tax PND1 Kor (RD Prep)
- **Type**: Export function
- **XML File**: EXPORTTAX_1KOR_RDPREP.xml
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.2.4 Tax PND3 (PR06A0209)
- **Menu Name (Thai)**: นำส่งภาษี ภ.ง.ด.3
- **Menu Name (English)**: Tax PND3
- **JSP Files**: 
  - `EXPORTTAX3` - Export screen
- **Type**: Export function
- **XML File**: EXPORTTAX3.xml
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.2.5 Tax PND3 Kor (PR06A0210)
- **Menu Name (Thai)**: นำส่งภาษี ภ.ง.ด.3ก
- **Menu Name (English)**: Tax PND3 Kor
- **JSP Files**: 
  - `EXPORTTAX_3KOR` - Export screen
- **Type**: Export function
- **XML File**: EXPORTTAX_3KOR.xml
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.2.6 Social Security (PR06A0205)
- **Menu Name (Thai)**: นำส่งประกันสังคม
- **Menu Name (English)**: Social Security
- **Type**: Export function (uses goExportSOC)
- **XML File**: EXPORTSOC.xml
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.2.7 General Ledger (PR06A0206)
- **Menu Name (Thai)**: บัญชีแยกประเภท
- **Menu Name (English)**: General Ledger
- **Type**: Export function (uses goExport1)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 2.2.8 Provident Fund Thanachart (PR06A0207)
- **Menu Name (Thai)**: นำส่งกองทุนสำรองเลี้ยงชีพธนชาติ
- **Menu Name (English)**: Provident Fund Thanachart
- **JSP Files**: 
  - `EXPORTPVF_HIS` - Export history screen
- **Type**: Export function (uses goExportPVF_HIS)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 2.3 Other Reports (PR06A04)

#### 2.3.1 Transfer to Social Security (PR06A0401)
- **Menu Name (Thai)**: นำส่งประกันสังคมด้วยสื่อข้อมูลอิเล็กทรอนิกส์
- **Menu Name (English)**: Transfer to Social Security
- **JSP Files**: 
  - `PRT003-SSO` - SSO screen
  - `PRT003-SSO-OPTION` - SSO option screen
- **Type**: Export function (uses golinkpageSSO)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## 3. Options (PR05A)

### 3.1 Configuration (PR05A01)

#### 3.1.1 Group Payroll Setting Table (PRU131)
- **Menu Name (Thai)**: ตารางจัดกลุ่มเงินเดือน
- **Menu Name (English)**: Group Payroll Setting Table
- **JSP Files**: 
  - `PRU131.jsp` - Main screen
  - `PRU159.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

### 3.2 Import Payroll Data (PRU316)
- **Menu Name (Thai)**: ดึงข้อมูลระบบเงินเดือน
- **Menu Name (English)**: Import Payroll Data
- **JSP Files**: 
  - `PRU316.jsp` - Main screen
  - `ViewData.jsp` - View data screen
  - `PRU316_IMPORT.jsp` - Import screen
  - `PRU316_EXCEL.jsp` - Excel screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 3.3 Export Data (PRT002)
- **Menu Name (Thai)**: นำข้อมูลออกสู่ระบบ
- **Menu Name (English)**: Export Data
- **JSP Files**: 
  - `PRT002.jsp` - Main screen
  - `PRT003-EASYBUY.jsp` - EasyBuy screen
  - `PRT004.jsp` - Related screen
  - `PRT003-SOC.jsp` - Social security screen
  - `PRT003-TAX.jsp` - Tax screen
  - `PRT005.jsp` - Related screen
  - `PRT006.jsp` - Related screen
  - `PRT007.jsp` - Related screen
  - `PRT008.jsp` - Related screen
  - `PRR002.jsp` - Report screen
  - `PRR044.jsp` - Report screen
  - `PRT003-PVF.jsp` - Provident fund screen
  - `PRT003-BANK.jsp` - Bank screen
  - `EXPORTPVF` - Export PVF
  - `EXPORTTAX` - Export tax
  - `EXPORTSOC` - Export social security
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 3.4 Define Payroll Period (PRU135)
- **Menu Name (Thai)**: กำหนดงวดเงินเดือน
- **Menu Name (English)**: Define Payroll Period
- **JSP Files**: 
  - `PRU135.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 3.5 Tax Recalculating (PRU119)
- **Menu Name (Thai)**: คำนวณภาษีใหม่
- **Menu Name (English)**: Tax Recalculating
- **JSP Files**: 
  - `PRU119.jsp` - Main screen
  - `PRU119HELP.jsp` - Help screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 3.6 Delete Payroll Transaction (PRU121)
- **Menu Name (Thai)**: ลบข้อมูลการคำนวณรายได้
- **Menu Name (English)**: Delete Payroll Transaction
- **JSP Files**: 
  - `PRU121.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 3.7 Delete Working Hour from TA (PRU161)
- **Menu Name (Thai)**: ลบข้อมูลการทำงานที่โอนมาจาก Time
- **Menu Name (English)**: Delete Working Hour from TA
- **JSP Files**: 
  - `PRU161.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 3.8 Sent E-Mail Epay Slip (PRU338)
- **Menu Name (Thai)**: นำส่งอีเมล Epay Slip
- **Menu Name (English)**: Sent E-Mail Epay Slip
- **JSP Files**: 
  - `PRU338.jsp` - Main screen
  - `PRU086.jsp` - Related screen
  - `PRU338_PROCESS.jsp` - Process screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 3.9 Sent E-Mail P.N.D. 91 (PRU339)
- **Menu Name (Thai)**: นำส่งอีเมล ภงด. 91
- **Menu Name (English)**: Sent E-Mail P.N.D. 91
- **JSP Files**: 
  - `PRU339.jsp` - Main screen
  - `PRU086.jsp` - Related screen
  - `PRU339_PROCESS.jsp` - Process screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

### 3.10 Sent E-Mail Withholding tax certificate (PRU340)
- **Menu Name (Thai)**: นำส่งอีเมล หนังสือรับรองการหักภาษี ณ ที่จ่าย (ใบ 50 ทวิ)
- **Menu Name (English)**: Sent E-Mail Withholding tax certificate
- **JSP Files**: 
  - `PRU340.jsp` - Main screen
  - `PRU086.jsp` - Related screen
  - `PRU340_PROCESS.jsp` - Process screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## 4. Setup (PR01A)

### 4.1 Bonus (PR01A25)

#### 4.1.1 Bonus code (PR01A2500)
- **Menu Name (Thai)**: รหัสโบนัส
- **Menu Name (English)**: Bonus code
- **JSP Files**: 
  - `PRU257.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 4.1.2 Bonus table setup (PR01A2501)
- **Menu Name (Thai)**: ตารางเงื่อนไขโบนัส
- **Menu Name (English)**: Bonus table setup
- **JSP Files**: 
  - `PRU256.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 4.1.3 Bonus formula (PR01A2505)
- **Menu Name (Thai)**: ทะเบียนสูตรโบนัส
- **Menu Name (English)**: Bonus formula
- **JSP Files**: 
  - `PR_BONUS_FORMULA.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 4.1.4 Bonus master setup (PR01A2502)
- **Menu Name (Thai)**: ทะเบียนโบนัส
- **Menu Name (English)**: Bonus master setup
- **JSP Files**: 
  - `PR_BONUS_001.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 4.1.5 Bonus accrual (PR01A2503)
- **Menu Name (Thai)**: คำนวณตั้งยอดโบนัส
- **Menu Name (English)**: Bonus accrual
- **JSP Files**: 
  - `PR_BONUS_ACC.jsp` - Main screen
  - `PR_BONUS_ACC_CHILD.jsp` - Child screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 4.1.6 Bonus processing (PR01A2504)
- **Menu Name (Thai)**: คำนวณโบนัส
- **Menu Name (English)**: Bonus processing
- **JSP Files**: 
  - `PR_BONUS_PROCESS.jsp` - Main screen
  - `PR_BONUS_PROCESS_CHILD.jsp` - Child screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 4.2 Payroll Journal Voucher (PR01A23)

#### 4.2.1 Cost Center (PR01A2301)
- **Menu Name (Thai)**: ทะเบียนกระจายต้นทุน (Cost Center)
- **Menu Name (English)**: Cost Center
- **JSP Files**: 
  - `PRU006_SETUP.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 4.2.2 Main Cost Center (PR01A2302)
- **Menu Name (Thai)**: ทะเบียน Main Cost Center
- **Menu Name (English)**: Main Cost Center
- **JSP Files**: 
  - `PRU164.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 4.2.3 Journal Voucher Sequence Number (PR01A2303)
- **Menu Name (Thai)**: รหัสบัญชีแยกประเภท
- **Menu Name (English)**: Journal Voucher Sequence Number
- **JSP Files**: 
  - `PRU166.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 4.2.4 Payroll Journal Voucher Setup (PR01A2304)
- **Menu Name (Thai)**: บัญชีแยกประเภท Setup
- **Menu Name (English)**: Payroll Journal Voucher Setup
- **JSP Files**: 
  - `PRU165.jsp` - Main screen
  - `PRU165_DETAIL.jsp` - Detail screen
  - `PRU165_HELP.jsp` - Help screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 4.2.5 Payroll Journal Voucher Template (Process) (PR01A2305)
- **Menu Name (Thai)**: สร้าง Template บัญชีแยกประเภท
- **Menu Name (English)**: Payroll Journal Voucher Template (Process)
- **JSP Files**: 
  - `PRU167.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 4.2.6 Payroll Journal Voucher Template (PR01A2306)
- **Menu Name (Thai)**: Template บัญชีแยกประเภท
- **Menu Name (English)**: Payroll Journal Voucher Template
- **JSP Files**: 
  - `PRU168.jsp` - Main screen
  - `PRU168_DETAIL.jsp` - Detail screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

#### 4.2.7 Payroll Journal Voucher Data (Process) (PR01A2307)
- **Menu Name (Thai)**: Data บัญชีแยกประเภท (Process)
- **Menu Name (English)**: Payroll Journal Voucher Data (Process)
- **JSP Files**: 
  - `PRU170.jsp` - Main screen
  - `PRU170_HELP.jsp` - Help screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 4.2.8 Payroll Journal Voucher Data (PR01A2308)
- **Menu Name (Thai)**: Data บัญชีแยกประเภท
- **Menu Name (English)**: Payroll Journal Voucher Data
- **JSP Files**: 
  - `PRU171.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 4.2.9 Payroll Journal Voucher (Report PDF) (PR01A2309)
- **Menu Name (Thai)**: รายงานบัญชีแยกประเภท (Report PDF)
- **Menu Name (English)**: Payroll Journal Voucher (Report PDF)
- **JSP Files**: 
  - `PRRJVDATAEXPORT` - Export screen
  - `PRRJVDATAOPTION` - Option screen
- **Type**: Report (uses linkpageReport1)
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 4.2.10 Payroll Journal Voucher (Report EXCEL) (PR01A2310)
- **Menu Name (Thai)**: รายงานบัญชีแยกประเภท (Report EXCEL)
- **Menu Name (English)**: Payroll Journal Voucher (Report EXCEL)
- **JSP Files**: 
  - `PRRJVDATAEXCEL.jsp` - Excel screen
  - `PRRJVDATAEXCEL_EX.jsp` - Export screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 4.2.11 Payroll Journal Voucher (Report EXCEL SAP) (PR01A2311)
- **Menu Name (Thai)**: รายงานบัญชีแยกประเภท (Report EXCEL SAP)
- **Menu Name (English)**: Payroll Journal Voucher (Report EXCEL SAP)
- **JSP Files**: 
  - `PRRJVDATAEXCELSAP.jsp` - SAP Excel screen
  - `PRRJVDATAEXCELSAP_EX.jsp` - Export screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 4.2.12 Transfer data to SAP (PR01A2322)
- **Menu Name (Thai)**: นำส่งข้อมูลบัญชีแยกประเภท SAP
- **Menu Name (English)**: Transfer data to SAP
- **JSP Files**: 
  - `PRRJVDATAEXPORT_KEX.jsp` - KEX export screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

#### 4.2.13 Pay Frequency Table (PR01A2321)
- **Menu Name (Thai)**: ทะเบียนระยะเวลาการจ่ายเงินเดือน
- **Menu Name (English)**: Pay Frequency Table
- **JSP Files**: 
  - `PRU018HISTORY.jsp` - History screen
  - `PRU102HISTORY.jsp` - History screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

### 4.3 Tax Allowance (CS012)
- **Menu Name (Thai)**: ค่าลดหย่อนในการคำนวณภาษี
- **Menu Name (English)**: Tax Allowance
- **JSP Files**: 
  - `CS012.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.4 Compensation Tax Computation (CS013)
- **Menu Name (Thai)**: เงื่อนไขการคำนวณภาษีกรณีรับเงินบำเหน็จ
- **Menu Name (English)**: Compensation Tax Computation
- **JSP Files**: 
  - `CS013.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.5 Social Security Setup (CS022)
- **Menu Name (Thai)**: กำหนดค่าเกี่ยวกับภาษีและประกันสังคมบริษัท
- **Menu Name (English)**: Social Security Setup
- **JSP Files**: 
  - `CS022.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.6 Employee Welfare Fund Setup (CS023)
- **Menu Name (Thai)**: กำหนดค่า กองทุนสงเคราะห์ลูกจ้าง
- **Menu Name (English)**: Employee Welfare Fund Setup
- **JSP Files**: 
  - `CS023.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.7 Account Code Table (PRU0211)
- **Menu Name (Thai)**: ทะเบียนรหัสบัญชี
- **Menu Name (English)**: Account Code Table
- **JSP Files**: 
  - `PRU021.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.8 Fund Center Code Table (PRU0212)
- **Menu Name (Thai)**: ทะเบียนรหัสการตัดจ่าย (Funcenter)
- **Menu Name (English)**: Fund Center Code Table
- **JSP Files**: 
  - `PRU163.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.9 Cost Center (OLD) (PRU006)
- **Menu Name (Thai)**: ทะเบียนกระจายต้นทุน (Cost Center) (OLD)
- **Menu Name (English)**: Cost Center (OLD)
- **JSP Files**: 
  - `PRU006.jsp` - Main screen
  - `PRU025.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.10 Cost Center (PRU006_SETUP)
- **Menu Name (Thai)**: ทะเบียนกระจายต้นทุน (Cost Center)
- **Menu Name (English)**: Cost Center
- **JSP Files**: 
  - `PRU006_SETUP.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.11 Main Cost Center (PRU164)
- **Menu Name (Thai)**: ทะเบียน Main Cost Center
- **Menu Name (English)**: Main Cost Center
- **JSP Files**: 
  - `PRU164.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.12 Personal Income Tax Table (CS004)
- **Menu Name (Thai)**: ตารางภาษีคำนวณจากเงินได้สุทธิ
- **Menu Name (English)**: Personal Income Tax Table
- **JSP Files**: 
  - `CS004.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.13 Provident Fund Contribution Table (PRU007)
- **Menu Name (Thai)**: ตารางเงินสะสมกองทุน
- **Menu Name (English)**: Provident Fund Contribution Table
- **JSP Files**: 
  - `PRU007.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.14 Provident Fund Vesting Table (PRU0901)
- **Menu Name (Thai)**: ตารางเงินสะสมกรณีลาออก
- **Menu Name (English)**: Provident Fund Vesting Table
- **JSP Files**: 
  - `PRU090.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.15 Pay Frequency Table (PRU018)
- **Menu Name (Thai)**: ทะเบียนระยะเวลาการจ่ายเงินเดือน
- **Menu Name (English)**: Pay Frequency Table
- **JSP Files**: 
  - `PRU018.jsp` - Main screen
  - `PRU102.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.16 Exchange Rate Table (PRU019)
- **Menu Name (Thai)**: ทะเบียนอัตราการแลกเปลี่ยน
- **Menu Name (English)**: Exchange Rate Table
- **JSP Files**: 
  - `PRU019.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.17 Income Group (PRU082)
- **Menu Name (Thai)**: ทะเบียนกลุ่มรายได้
- **Menu Name (English)**: Income Group
- **JSP Files**: 
  - `PRU082.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.18 Income and Deduction Setup (PRU077)
- **Menu Name (Thai)**: รายได้และรายหักที่จ่ายทุกเดือน
- **Menu Name (English)**: Income and Deduction Setup
- **JSP Files**: 
  - `PRU077.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.19 Tax Index Table (PRU143)
- **Menu Name (Thai)**: ทะเบียนลำดับภาษี
- **Menu Name (English)**: Tax Index Table
- **JSP Files**: 
  - `PRU143.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.20 Regular Income and Deduction (PRU095)
- **Menu Name (Thai)**: ทะเบียนบันทึกรายได้และเงินหักประจำ
- **Menu Name (English)**: Regular Income and Deduction
- **JSP Files**: 
  - `PRU095.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.21 Irregular Income and Deduction (PRU092)
- **Menu Name (Thai)**: ทะเบียนบันทึกรายได้และเงินหักไม่ประจำ
- **Menu Name (English)**: Irregular Income and Deduction
- **JSP Files**: 
  - `PRU092.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.22 Fund Type (PRU105)
- **Menu Name (Thai)**: ทะเบียนประเภทกองทุน
- **Menu Name (English)**: Fund Type
- **JSP Files**: 
  - `PRU105.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.23 Fund Manager (PRU104)
- **Menu Name (Thai)**: ทะเบียนผู้จัดการกองทุน
- **Menu Name (English)**: Fund Manager
- **JSP Files**: 
  - `PRU104.jsp` - Main screen
  - `PRT075.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.24 Fund Table (PRU076)
- **Menu Name (Thai)**: ทะเบียนกองทุน
- **Menu Name (English)**: Fund Table
- **JSP Files**: 
  - `PRU076.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.25 Provident Fund Resign (PRU090)
- **Menu Name (Thai)**: ทะเบียนเงินทุนคิดภายหน้า
- **Menu Name (English)**: Provident Fund Resign
- **JSP Files**: 
  - `PRU090.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.26 Pay Frequency Table (PRU018SVC)
- **Menu Name (Thai)**: ทะเบียนระยะเวลาการจ่ายเงินเดือน
- **Menu Name (English)**: Pay Frequency Table
- **JSP Files**: 
  - `PRU018SVC.jsp` - Main screen
  - `PRU102SVC.jsp` - Related screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.27 Currency Sign Table (PRU318)
- **Menu Name (Thai)**: ทะเบียนสัญลักษณ์สกุลเงิน
- **Menu Name (English)**: Currency Sign Table
- **JSP Files**: 
  - `PRU318.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

### 4.28 Irregular Income and Deduction (STORE) (PRR205)
- **Menu Name (Thai)**: ทะเบียนเงินได้และเงินหักไม่ประจำ (STORE)
- **Menu Name (English)**: Irregular Income and Deduction (STORE)
- **JSP Files**: 
  - `PRR205.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: Yes
  - Save: Yes
  - Delete: Yes

---

## 5. Terms Of Use (PR07A)

### 5.1 User Manual (PR07A1)
- **Menu Name (Thai)**: คู่มือการใช้งาน
- **Menu Name (English)**: User Manual
- **JSP Files**: 
  - `MODULE_MANUAL.jsp` - Main screen
- **Permissions**: 
  - Active: Yes
  - Edit: No
  - Save: No
  - Delete: No

---

## Additional Files

### Module Index
- `PR_INDEX.jsp` - Main module index page (if exists)

### Import/Export
- Various export functions using JavaScript functions (goExport, goExportBank, goExportPVF, etc.)
- Import screens for payroll data

### Other Payroll Files
- `PRU*.jsp` - Payroll transaction and setup screens
- `PRT*.jsp` - Payroll transfer/export screens
- `PR_BONUS*.jsp` - Bonus processing screens
- `PRRJVDATA*.jsp` - Journal voucher screens
- `TEXTFILE*.jsp` - Text file export screens

---

## Notes

1. **Export Functions**: Many screens use JavaScript functions (goExport, goExportBank, goExportPVF, goExportTAX, goExportSOC) instead of direct JSP links
2. **Bank Transfer Variants**: Multiple versions for different banks (SCB, BBL, KBANK, TMB, etc.) with various format versions
3. **Provident Fund Variants**: Multiple provident fund export formats for different fund managers
4. **Tax Export**: Multiple tax form exports (PND1, PND1 Kor, PND3, PND3 Kor)
5. **Complex Processing**: Payroll processing involves multiple steps (before, run, after)
6. **E-PaySlip**: Electronic payslip generation and management
7. **Journal Voucher**: Complex accounting integration with SAP and other systems
8. **Bonus Processing**: Separate bonus calculation and processing system

---

## Migration Considerations

### High Priority Screens
- Payroll processing screens (PRU124, PRU125, PRU126_OEI, PRU127_TN, PRU129_STD)
- Data after calculation screens (PRU029_NSTDA, PRU031_2, PRU173, PRU180)
- Income and deduction screens (PRU072, PRU140, PRU169, PRU047PSN)
- E-PaySlip screens (PRU174, PRU175, PRU176, PRU130_STD)

### Medium Priority Screens
- Setup/master data screens (CS012, CS013, CS022, CS023, PRU021, PRU077, PRU082, PRU095, PRU092)
- Cost center and journal voucher screens (PRU006_SETUP, PRU164, PRU165, PRU166, PRU167, PRU168, PRU170, PRU171)
- Bonus screens (PRU256, PRU257, PR_BONUS_*)

### Lower Priority Screens
- Export/transfer screens (mostly backend functions)
- Options screens (PRU119, PRU121, PRU161, PRU135, PRU316, PRU338, PRU339, PRU340)

### Technical Notes
- Many screens use the CSC library framework
- Export functions use JavaScript to call backend services
- File generation for bank transfers, tax forms, and provident fund contributions
- Integration with external systems (banks, tax authorities, fund managers)
- Complex calculation logic for payroll, tax, and provident fund
- Multi-format support for different bank and fund manager requirements

