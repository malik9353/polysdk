import { Procedure } from './Procedure';
import { ProcedureType, LaunchCappedStoProcedureArgs } from '../types';
import { CappedSto } from '../entities';
export declare class LaunchCappedSto extends Procedure<LaunchCappedStoProcedureArgs, CappedSto> {
    type: ProcedureType;
    prepareTransactions(): Promise<import("../PostTransactionResolver").PostTransactionResolver<CappedSto>>;
}
//# sourceMappingURL=LaunchCappedSto.d.ts.map