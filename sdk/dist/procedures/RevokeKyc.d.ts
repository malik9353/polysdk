import { Procedure } from './Procedure';
import { ProcedureType, RevokeKycProcedureArgs } from '../types';
import { Shareholder } from '../entities';
export declare class RevokeKyc extends Procedure<RevokeKycProcedureArgs, Shareholder[]> {
    type: ProcedureType;
    prepareTransactions(): Promise<import("../PostTransactionResolver").PostTransactionResolver<Shareholder[]>>;
}
//# sourceMappingURL=RevokeKyc.d.ts.map