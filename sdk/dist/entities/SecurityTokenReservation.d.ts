import { Entity } from './Entity';
import { Context } from '../Context';
export interface UniqueIdentifiers {
    symbol: string;
}
export interface Params {
    expiry: Date;
    reservedAt: Date;
    ownerAddress: string;
    securityTokenAddress?: string;
}
export declare class SecurityTokenReservation extends Entity<Params> {
    static generateId({ symbol }: UniqueIdentifiers): string;
    static unserialize(serialized: string): UniqueIdentifiers;
    uid: string;
    symbol: string;
    /**
     * Date at which this reservation expires
     */
    expiry: Date;
    /**
     * Date when the Security Token was reserved
     */
    reservedAt: Date;
    /**
     * Address of the owner of the reservation
     */
    ownerAddress: string;
    /**
     * Address of the Security Token if it has already been launched, undefined if not
     */
    securityTokenAddress?: string;
    protected context: Context;
    constructor(params: Params & UniqueIdentifiers, context: Context);
    /**
     * Creates a security token with the reserved symbol
     *
     * @param name name of the security token
     * @param detailsUrl URL containing information about the security
     * @param divisible whether the token should be divisible or not
     * @param treasuryWallet address of a wallet to be used to store tokens for some operations (defaults to)
     */
    createSecurityToken: (args: {
        name: string;
        detailsUrl?: string | undefined;
        divisible: boolean;
        treasuryWallet?: string | undefined;
    }) => Promise<import("./TransactionQueue").TransactionQueue<import("../types").CreateSecurityTokenProcedureArgs, import(".").SecurityToken>>;
    /**
     * Returns true if the Security Token associated to this reservation has already been launched
     */
    isLaunched: () => Promise<boolean>;
    toPojo(): {
        uid: string;
        symbol: string;
        expiry: Date;
        securityTokenAddress: string | undefined;
        reservedAt: Date;
        ownerAddress: string;
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=SecurityTokenReservation.d.ts.map