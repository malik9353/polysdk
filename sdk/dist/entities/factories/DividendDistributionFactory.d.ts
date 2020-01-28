import { Factory } from './Factory';
import { Context } from '../../Context';
import { DividendDistribution, Params, UniqueIdentifiers } from '../DividendDistribution';
import { DividendType } from '../../types';
export declare class DividendDistributionFactory extends Factory<DividendDistribution, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        checkpointId: string;
        securityTokenId: string;
        securityTokenSymbol: string;
        index: number;
        dividendType: DividendType;
        created: Date;
        maturity: Date;
        expiry: Date;
        amount: import("bignumber.js").BigNumber;
        claimedAmount: import("bignumber.js").BigNumber;
        totalSupply: import("bignumber.js").BigNumber;
        reclaimed: boolean;
        totalWithheld: import("bignumber.js").BigNumber;
        totalWithheldWithdrawn: import("bignumber.js").BigNumber;
        name: string;
        currency: string | null;
        shareholders: import("../../PolymathBase").DividendShareholderStatus[];
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=DividendDistributionFactory.d.ts.map