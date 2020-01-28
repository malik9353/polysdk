import { Procedure } from './Procedure';
import { ProcedureType, PauseStoProcedureArgs } from '../types';
export declare class PauseSto extends Procedure<PauseStoProcedureArgs> {
    type: ProcedureType;
    prepareTransactions(): Promise<void>;
}
//# sourceMappingURL=PauseSto.d.ts.map