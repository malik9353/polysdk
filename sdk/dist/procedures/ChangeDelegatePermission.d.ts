import { Procedure } from './Procedure';
import { ProcedureType, ChangeDelegatePermissionProcedureArgs } from '../types';
export declare class ChangeDelegatePermission extends Procedure<ChangeDelegatePermissionProcedureArgs> {
    type: ProcedureType;
    prepareTransactions(): Promise<void>;
}
//# sourceMappingURL=ChangeDelegatePermission.d.ts.map