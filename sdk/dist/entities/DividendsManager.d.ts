import { Entity } from './Entity';
import { DividendType } from '../types';
export interface UniqueIdentifiers {
    securityTokenId: string;
    dividendType: DividendType;
}
export interface Params {
    address: string;
    securityTokenSymbol: string;
    storageWalletAddress: string;
}
export declare abstract class DividendsManager<P> extends Entity<P> {
    abstract uid: string;
    address: string;
    securityTokenSymbol: string;
    securityTokenId: string;
    storageWalletAddress: string;
    dividendType: DividendType;
    static unserialize(serialized: string): UniqueIdentifiers;
    constructor(params: Params & UniqueIdentifiers);
    toPojo(): {
        uid: string;
        address: string;
        securityTokenSymbol: string;
        securityTokenId: string;
        storageWalletAddress: string;
        dividendType: DividendType;
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=DividendsManager.d.ts.map