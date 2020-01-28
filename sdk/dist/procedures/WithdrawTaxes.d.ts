import { Procedure } from './Procedure';
import { WithdrawTaxesProcedureArgs, ProcedureType } from '../types';
export declare class WithdrawTaxes extends Procedure<WithdrawTaxesProcedureArgs> {
    type: ProcedureType;
    prepareTransactions(): Promise<void>;
}
//# sourceMappingURL=WithdrawTaxes.d.ts.map