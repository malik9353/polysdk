import { Factory } from './Factory';
import { Context } from '../../Context';
import { Erc20TokenBalance, Params, UniqueIdentifiers } from '../Erc20TokenBalance';
export declare class Erc20TokenBalanceFactory extends Factory<Erc20TokenBalance, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        tokenSymbol: string;
        balance: import("bignumber.js").BigNumber;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=Erc20TokenBalanceFactory.d.ts.map