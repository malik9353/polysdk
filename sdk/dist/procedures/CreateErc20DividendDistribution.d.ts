import { Procedure } from './Procedure';
import { CreateErc20DividendDistributionProcedureArgs, ProcedureType } from '../types';
import { DividendDistribution } from '../entities';
export declare class CreateErc20DividendDistribution extends Procedure<CreateErc20DividendDistributionProcedureArgs, DividendDistribution> {
    type: ProcedureType;
    prepareTransactions(): Promise<import("../PostTransactionResolver").PostTransactionResolver<DividendDistribution>>;
}
//# sourceMappingURL=CreateErc20DividendDistribution.d.ts.map