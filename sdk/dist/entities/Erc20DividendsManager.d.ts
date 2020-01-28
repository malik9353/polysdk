import { DividendsManager, Params, UniqueIdentifiers } from './DividendsManager';
import { Omit } from '../types';
export { Params, UniqueIdentifiers };
export declare class Erc20DividendsManager extends DividendsManager<Params> {
    static generateId({ securityTokenId, dividendType }: UniqueIdentifiers): string;
    uid: string;
    constructor({ securityTokenSymbol, securityTokenId, address, storageWalletAddress, }: Omit<Params & UniqueIdentifiers, 'dividendType'>);
}
//# sourceMappingURL=Erc20DividendsManager.d.ts.map