import { Factory } from './Factory';
import { Context } from '../../Context';
import { Shareholder, Params, UniqueIdentifiers } from '../Shareholder';
export declare class ShareholderFactory extends Factory<Shareholder, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        balance: import("bignumber.js").BigNumber;
        canSendAfter: Date;
        canReceiveAfter: Date;
        kycExpiry: Date;
        isAccredited: boolean;
        canBuyFromSto: boolean;
        securityTokenId: string;
        securityTokenSymbol: string;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=ShareholderFactory.d.ts.map