import { Factory } from './Factory';
import { Context } from '../../Context';
import { Investment, Params, UniqueIdentifiers } from '../Investment';
export declare class InvestmentFactory extends Factory<Investment, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        address: string;
        tokenAmount: import("bignumber.js").BigNumber;
        investedFunds: import("bignumber.js").BigNumber;
        securityTokenSymbol: string;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=InvestmentFactory.d.ts.map