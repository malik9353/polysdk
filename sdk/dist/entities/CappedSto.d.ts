import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { Sto, UniqueIdentifiers, Params as StoParams } from './Sto';
import { Context } from '../Context';
export interface Params extends StoParams {
    cap: BigNumber;
    rate: BigNumber;
}
export { UniqueIdentifiers };
export declare class CappedSto extends Sto<Params> {
    static generateId({ securityTokenId, stoType, address }: UniqueIdentifiers): string;
    uid: string;
    cap: BigNumber;
    rate: BigNumber;
    constructor(params: Params & UniqueIdentifiers, context: Context);
    toPojo(): {
        cap: BigNumber;
        rate: BigNumber;
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
//# sourceMappingURL=CappedSto.d.ts.map