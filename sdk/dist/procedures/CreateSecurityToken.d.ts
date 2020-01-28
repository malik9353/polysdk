import { Procedure } from './Procedure';
import { CreateSecurityTokenProcedureArgs, ProcedureType } from '../types';
import { SecurityToken } from '../entities';
export declare class CreateSecurityToken extends Procedure<CreateSecurityTokenProcedureArgs, SecurityToken> {
    type: ProcedureType;
    prepareTransactions(): Promise<import("../PostTransactionResolver").PostTransactionResolver<SecurityToken>>;
}
//# sourceMappingURL=CreateSecurityToken.d.ts.map