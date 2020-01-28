import { SecurityToken, Params, UniqueIdentifiers } from '../SecurityToken';
import { Factory } from './Factory';
import { Context } from '../../Context';
export declare class SecurityTokenFactory extends Factory<SecurityToken, Params, UniqueIdentifiers> {
    protected generateProperties: (uid: string) => Promise<{
        name: string;
        owner: string;
        address: string;
    }>;
    constructor(context: Context);
}
//# sourceMappingURL=SecurityTokenFactory.d.ts.map