import { Factory } from './Factory';
import { Context } from '../../Context';
import { Erc20DividendsManager, Params, UniqueIdentifiers } from '../Erc20DividendsManager';
export declare class Erc20DividendsManagerFactory extends Factory<Erc20DividendsManager, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        address: string;
        storageWalletAddress: string;
        securityTokenId: string;
        securityTokenSymbol: string;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=Erc20DividendsManagerFactory.d.ts.map