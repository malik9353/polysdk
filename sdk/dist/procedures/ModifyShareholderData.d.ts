import { Procedure } from './Procedure';
import { ProcedureType, ModifyShareholderDataProcedureArgs } from '../types';
import { Shareholder } from '../entities';
export declare class ModifyShareholderData extends Procedure<ModifyShareholderDataProcedureArgs, Shareholder[]> {
    type: ProcedureType;
    prepareTransactions(): Promise<import("../PostTransactionResolver").PostTransactionResolver<Shareholder[]>>;
}
//# sourceMappingURL=ModifyShareholderData.d.ts.map