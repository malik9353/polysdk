import { Factory } from './Factory';
import { Context } from '../../Context';
import { SecurityTokenReservation, Params, UniqueIdentifiers } from '../SecurityTokenReservation';
export declare class SecurityTokenReservationFactory extends Factory<SecurityTokenReservation, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        expiry: Date;
        reservedAt: Date;
        ownerAddress: string;
        securityTokenAddress: string | undefined;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=SecurityTokenReservationFactory.d.ts.map