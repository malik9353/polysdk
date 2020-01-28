import { Procedure } from './Procedure';
import { ReserveSecurityTokenProcedureArgs, ProcedureType } from '../types';
import { SecurityTokenReservation } from '../entities';
export declare class ReserveSecurityToken extends Procedure<ReserveSecurityTokenProcedureArgs, SecurityTokenReservation> {
    type: ProcedureType;
    prepareTransactions(): Promise<import("../PostTransactionResolver").PostTransactionResolver<SecurityTokenReservation>>;
}
//# sourceMappingURL=ReserveSecurityToken.d.ts.map