import { Procedure } from './Procedure';
import { ProcedureType, ControllerTransferProcedureArgs } from '../types';
export declare class ControllerTransfer extends Procedure<ControllerTransferProcedureArgs> {
    type: ProcedureType;
    prepareTransactions(): Promise<void>;
}
//# sourceMappingURL=ControllerTransfer.d.ts.map