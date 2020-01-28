import { Factory } from './Factory';
import { Context } from '../../Context';
import { Currency } from '../../types';
import { CappedSto, Params, UniqueIdentifiers } from '../CappedSto';
import { Investment } from '../Investment';
export declare class CappedStoFactory extends Factory<CappedSto, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        securityTokenId: string;
        securityTokenSymbol: string;
        investments: Investment[];
        stoType: import("../../types").StoType;
        address: string;
        paused: boolean;
        capReached: boolean;
        startTime: Date;
        endTime: Date;
        cap: import("bignumber.js").BigNumber;
        rate: import("bignumber.js").BigNumber;
        fundraiseTypes: Currency[];
        raisedAmount: import("bignumber.js").BigNumber;
        soldTokensAmount: import("bignumber.js").BigNumber;
        investorAmount: number;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=CappedStoFactory.d.ts.map