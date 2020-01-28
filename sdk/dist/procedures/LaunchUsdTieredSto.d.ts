import { Procedure } from './Procedure';
import { ProcedureType, LaunchUsdTieredStoProcedureArgs } from '../types';
import { UsdTieredSto } from '../entities';
export declare class LaunchUsdTieredSto extends Procedure<LaunchUsdTieredStoProcedureArgs, UsdTieredSto> {
    type: ProcedureType;
    prepareTransactions(): Promise<import("../PostTransactionResolver").PostTransactionResolver<UsdTieredSto>>;
}
//# sourceMappingURL=LaunchUsdTieredSto.d.ts.map