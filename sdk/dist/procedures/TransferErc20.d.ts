import { Procedure } from './Procedure';
import { TransferErc20ProcedureArgs, ProcedureType } from '../types';
/**
 * Procedure to transfer funds of an ERC20 token. If no token address is specified, it defaults to POLY
 */
export declare class TransferErc20 extends Procedure<TransferErc20ProcedureArgs> {
    type: ProcedureType;
    prepareTransactions(): Promise<void>;
}
//# sourceMappingURL=TransferErc20.d.ts.map