import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { Entity } from './Entity';
export interface UniqueIdentifiers {
    tokenAddress: string;
    walletAddress: string;
}
export interface Params {
    tokenSymbol: string | null;
    balance: BigNumber;
}
export declare class Erc20TokenBalance extends Entity<Params> {
    static generateId({ tokenAddress, walletAddress }: UniqueIdentifiers): string;
    static unserialize(serialized: any): UniqueIdentifiers;
    uid: string;
    tokenSymbol: string | null;
    tokenAddress: string;
    walletAddress: string;
    balance: BigNumber;
    constructor(params: Params & UniqueIdentifiers);
    toPojo(): {
        uid: string;
        tokenSymbol: string | null;
        tokenAddress: string;
        balance: BigNumber;
        walletAddress: string;
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=Erc20TokenBalance.d.ts.map