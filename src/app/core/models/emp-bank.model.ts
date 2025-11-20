import { BaseModel, TranslateService } from './base.model';
import { Bank } from './bank.model';
import { BankBranch } from './bank-branch.model';

/**
 * Employee bank model
 */
export interface EmpBank {
  employeeId: string;
  bank: Bank;
  bankBranch: BankBranch;
  accountId: string;
  lineNo: string;
}

export class MyEmpBank extends BaseModel implements EmpBank {
  employeeId: string;
  bank: Bank;
  bankBranch: BankBranch;
  accountId: string;
  lineNo: string;

  constructor(data: Partial<any>, tranSer: TranslateService) {
    super(data, tranSer);
    this.employeeId = data.employeeId ? data.employeeId : '';
    this.bank = data.bank ? new Bank(data.bank, this.translateService!) : ({} as Bank);
    this.bankBranch = data.bankBranch
      ? new BankBranch(data.bankBranch, this.translateService!)
      : ({} as BankBranch);
    this.accountId = data.accountId ? data.accountId : '';
    this.lineNo = data.lineNo ? data.lineNo : '';
  }
}

