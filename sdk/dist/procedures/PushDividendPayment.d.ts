import { Procedure } from './Procedure';
import { PushDividendPaymentProcedureArgs, ProcedureType } from '../types';
export declare class PushDividendPayment extends Procedure<PushDividendPaymentProcedureArgs> {
    type: ProcedureType;
    prepareTransactions(): Promise<void>;
}
//# sourceMappingURL=PushDividendPayment.d.ts.map