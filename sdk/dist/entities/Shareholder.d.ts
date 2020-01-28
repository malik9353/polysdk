import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { Entity } from './Entity';
export interface UniqueIdentifiers {
    securityTokenId: string;
    address: string;
}
export interface Params {
    securityTokenSymbol: string;
    canSendAfter: Date;
    canReceiveAfter: Date;
    kycExpiry: Date;
    isAccredited: boolean;
    canBuyFromSto: boolean;
    balance: BigNumber;
}
export declare class Shareholder extends Entity<Params> {
    static generateId({ securityTokenId, address }: UniqueIdentifiers): string;
    static unserialize(serialized: string): UniqueIdentifiers;
    uid: string;
    securityTokenSymbol: string;
    securityTokenId: string;
    canSendAfter: Date;
    canReceiveAfter: Date;
    kycExpiry: Date;
    isAccredited: boolean;
    canBuyFromSto: boolean;
    balance: BigNumber;
    address: string;
    constructor(params: Params & UniqueIdentifiers);
    /**
     * Checks if this shareholder's KYC has been manually revoked
     */
    isRevoked(): boolean;
    toPojo(): {
        uid: string;
        securityTokenId: string;
        securityTokenSymbol: string;
        address: string;
        canSendAfter: Date;
        canReceiveAfter: Date;
        kycExpiry: Date;
        isAccredited: boolean;
        canBuyFromSto: boolean;
        balance: BigNumber;
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=Shareholder.d.ts.map