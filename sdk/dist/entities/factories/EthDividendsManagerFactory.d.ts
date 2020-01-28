import { Factory } from './Factory';
import { Context } from '../../Context';
import { EthDividendsManager, Params, UniqueIdentifiers } from '../EthDividendsManager';
export declare class EthDividendsManagerFactory extends Factory<EthDividendsManager, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        address: string;
        storageWalletAddress: string;
        securityTokenId: string;
        securityTokenSymbol: string;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=EthDividendsManagerFactory.d.ts.map