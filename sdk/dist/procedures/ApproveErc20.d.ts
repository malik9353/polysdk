import { Procedure } from './Procedure';
import { ApproveErc20ProcedureArgs, ProcedureType } from '../types';
/**
 * Procedure to approve spending funds on an ERC20 token. If no token address is specified, it defaults to POLY
 */
export declare class ApproveErc20 extends Procedure<ApproveErc20ProcedureArgs> {
    type: ProcedureType;
    prepareTransactions(): Promise<void>;
}
//# sourceMappingURL=ApproveErc20.d.ts.map