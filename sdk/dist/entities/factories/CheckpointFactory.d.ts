import { Factory } from './Factory';
import { Context } from '../../Context';
import { Checkpoint, Params, UniqueIdentifiers } from '../Checkpoint';
import { DividendDistribution } from '../DividendDistribution';
export declare class CheckpointFactory extends Factory<Checkpoint, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        index: number;
        totalSupply: import("bignumber.js").BigNumber;
        shareholderBalances: import("../../PolymathBase").ShareholderBalance[];
        createdAt: Date;
        dividendDistributions: DividendDistribution[];
        securityTokenSymbol: string;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=CheckpointFactory.d.ts.map