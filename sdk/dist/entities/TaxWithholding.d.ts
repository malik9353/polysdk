import { Entity } from './Entity';
import { DividendType } from '../types';
export interface UniqueIdentifiers {
    securityTokenId: string;
    dividendType: DividendType;
    shareholderAddress: string;
}
export interface Params {
    securityTokenSymbol: string;
    percentage: number;
}
export declare class TaxWithholding extends Entity<Params> {
    static generateId({ securityTokenId, dividendType, shareholderAddress, }: UniqueIdentifiers): string;
    static unserialize(serialized: string): UniqueIdentifiers;
    uid: string;
    securityTokenSymbol: string;
    securityTokenId: string;
    dividendType: DividendType;
    shareholderAddress: string;
    percentage: number;
    constructor(params: Params & UniqueIdentifiers);
    toPojo(): {
        uid: string;
        securityTokenId: string;
        securityTokenSymbol: string;
        dividendType: DividendType;
        shareholderAddress: string;
        percentage: number;
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=TaxWithholding.d.ts.map