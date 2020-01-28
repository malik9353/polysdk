import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { Entity } from './Entity';
export interface UniqueIdentifiers {
    securityTokenId: string;
    stoId: string;
    index: number;
}
export interface Params {
    securityTokenSymbol: string;
    address: string;
    tokenAmount: BigNumber;
    investedFunds: BigNumber;
}
export declare class Investment extends Entity<Params> {
    static generateId({ securityTokenId, stoId, index }: UniqueIdentifiers): string;
    static unserialize(serialized: string): UniqueIdentifiers;
    uid: string;
    securityTokenId: string;
    stoId: string;
    securityTokenSymbol: string;
    address: string;
    index: number;
    tokenAmount: BigNumber;
    investedFunds: BigNumber;
    constructor(params: Params & UniqueIdentifiers);
    toPojo(): {
        uid: string;
        securityTokenId: string;
        securityTokenSymbol: string;
        stoId: string;
        address: string;
        index: number;
        tokenAmount: BigNumber;
        investedFunds: BigNumber;
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=Investment.d.ts.map