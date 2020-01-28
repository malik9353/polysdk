import { Procedure } from './Procedure';
import { CreateEtherDividendDistributionProcedureArgs, ProcedureType } from '../types';
import { DividendDistribution } from '../entities';
export declare class CreateEtherDividendDistribution extends Procedure<CreateEtherDividendDistributionProcedureArgs, DividendDistribution> {
    type: ProcedureType;
    prepareTransactions(): Promise<import("../PostTransactionResolver").PostTransactionResolver<DividendDistribution>>;
}
//# sourceMappingURL=CreateEtherDividendDistribution.d.ts.map