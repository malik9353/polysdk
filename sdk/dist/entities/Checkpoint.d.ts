import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { Entity } from './Entity';
import { DividendDistribution } from './DividendDistribution';
import { ShareholderBalance } from '../types';
export interface UniqueIdentifiers {
    securityTokenId: string;
    index: number;
}
export interface Params {
    dividendDistributions: DividendDistribution[];
    securityTokenSymbol: string;
    shareholderBalances: ShareholderBalance[];
    totalSupply: BigNumber;
    createdAt: Date;
}
export declare class Checkpoint extends Entity<Params> {
    static generateId({ securityTokenId, index }: UniqueIdentifiers): string;
    static unserialize(serialized: string): UniqueIdentifiers;
    uid: string;
    dividendDistributions: DividendDistribution[];
    securityTokenSymbol: string;
    securityTokenId: string;
    index: number;
    shareholderBalances: ShareholderBalance[];
    totalSupply: BigNumber;
    createdAt: Date;
    constructor(params: Params & UniqueIdentifiers);
    toPojo(): {
        uid: string;
        dividendDistributions: {
            uid: string;
            index: number;
            checkpointId: string;
            dividendType: import("../types").DividendType;
            securityTokenSymbol: string;
            securityTokenId: string;
            created: Date;
            maturity: Date;
            expiry: Date;
            amount: BigNumber;
            claimedAmount: BigNumber;
            totalSupply: BigNumber;
            reclaimed: boolean;
            totalWithheld: BigNumber;
            totalWithheldWithdrawn: BigNumber;
            shareholders: import("../types").DividendShareholderStatus[];
            name: string;
            currency: string | null;
        }[];
        securityTokenSymbol: string;
        securityTokenId: string;
        index: number;
        shareholderBalances: ShareholderBalance[];
        totalSupply: BigNumber;
        createdAt: Date;
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=Checkpoint.d.ts.map