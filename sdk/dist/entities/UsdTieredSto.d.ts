import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { Sto, UniqueIdentifiers, Params as StoParams } from './Sto';
import { Context } from '../Context';
export { UniqueIdentifiers };
export interface Tier {
    cap: BigNumber;
    rate: BigNumber;
}
export interface Params extends StoParams {
    currentTier: number;
    tiers: Tier[];
}
export declare class UsdTieredSto extends Sto<Params> {
    static generateId({ securityTokenId, stoType, address }: UniqueIdentifiers): string;
    uid: string;
    currentTier: number;
    tiers: Tier[];
    constructor(params: Params & UniqueIdentifiers, context: Context);
    toPojo(): {
        currentTier: number;
        tiers: Tier[];
        uid: string;
        securityTokenId: string;
        securityTokenSymbol: string;
        fundraiseTypes: import("@polymathnetwork/contract-wrappers").FundRaiseType[];
        raisedAmount: BigNumber;
        soldTokensAmount: BigNumber;
        investorAmount: number;
        startTime: Date;
        endTime: Date;
        investments: {
            uid: string;
            securityTokenId: string;
            securityTokenSymbol: string;
            stoId: string;
            address: string;
            index: number;
            tokenAmount: BigNumber;
            investedFunds: BigNumber;
        }[];
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=UsdTieredSto.d.ts.map