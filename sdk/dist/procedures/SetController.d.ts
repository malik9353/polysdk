import { Procedure } from './Procedure';
import { ProcedureType, SetControllerProcedureArgs } from '../types';
export declare class SetController extends Procedure<SetControllerProcedureArgs> {
    type: ProcedureType;
    prepareTransactions(): Promise<void>;
}
//# sourceMappingURL=SetController.d.ts.map