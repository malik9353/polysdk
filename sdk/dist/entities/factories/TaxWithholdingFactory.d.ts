import { Factory } from './Factory';
import { Context } from '../../Context';
import { DividendType } from '../../types';
import { TaxWithholding, Params, UniqueIdentifiers } from '../TaxWithholding';
export declare class TaxWithholdingFactory extends Factory<TaxWithholding, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        shareholderAddress: string;
        percentage: number;
        securityTokenSymbol: string;
        securityTokenId: string;
        dividendType: DividendType;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=TaxWithholdingFactory.d.ts.map