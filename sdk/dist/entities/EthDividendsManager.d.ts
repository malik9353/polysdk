import { DividendsManager, Params, UniqueIdentifiers } from './DividendsManager';
import { Omit } from '../types';
export { Params, UniqueIdentifiers };
export declare class EthDividendsManager extends DividendsManager<Params> {
    static generateId({ securityTokenId, dividendType }: UniqueIdentifiers): string;
    uid: string;
    constructor({ securityTokenSymbol, securityTokenId, address, storageWalletAddress, }: Omit<Params & UniqueIdentifiers, 'dividendType'>);
}
//# sourceMappingURL=EthDividendsManager.d.ts.map