import { Procedure } from './Procedure';
import { CreateCheckpointProcedureArgs, ProcedureType } from '../types';
import { Checkpoint } from '../entities';
export declare class CreateCheckpoint extends Procedure<CreateCheckpointProcedureArgs, Checkpoint> {
    type: ProcedureType;
    prepareTransactions(): Promise<import("../PostTransactionResolver").PostTransactionResolver<Checkpoint>>;
}
//# sourceMappingURL=CreateCheckpoint.d.ts.map