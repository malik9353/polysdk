import { Procedure } from './Procedure';
import { ReclaimFundsProcedureArgs, ProcedureType } from '../types';
export declare class ReclaimFunds extends Procedure<ReclaimFundsProcedureArgs> {
    type: ProcedureType;
    prepareTransactions(): Promise<void>;
}
//# sourceMappingURL=ReclaimFunds.d.ts.map