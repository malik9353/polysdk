import { Factory } from './Factory';
import { Context } from '../../Context';
import { Currency } from '../../types';
import { Investment } from '../Investment';
import { UsdTieredSto, Params, UniqueIdentifiers } from '../UsdTieredSto';
export declare class UsdTieredStoFactory extends Factory<UsdTieredSto, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        securityTokenId: string;
        securityTokenSymbol: string;
        tiers: {
            cap: import("bignumber.js").BigNumber;
            rate: import("bignumber.js").BigNumber;
        }[];
        investments: Investment[];
        stoType: import("../../types").StoType;
        address: string;
        paused: boolean;
        capReached: boolean;
        startTime: Date;
        endTime: Date;
        currentTier: number;
        fundraiseTypes: Currency[];
        raisedAmount: import("bignumber.js").BigNumber;
        investorAmount: number;
        soldTokensAmount: import("bignumber.js").BigNumber;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=UsdTieredStoFactory.d.ts.map