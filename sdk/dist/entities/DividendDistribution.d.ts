import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { Entity } from './Entity';
import { DividendType, DividendShareholderStatus } from '../types';
import { Context } from '../Context';
export interface UniqueIdentifiers {
    securityTokenId: string;
    dividendType: DividendType;
    index: number;
}
export interface Params {
    securityTokenSymbol: string;
    checkpointId: string;
    created: Date;
    maturity: Date;
    expiry: Date;
    amount: BigNumber;
    claimedAmount: BigNumber;
    totalSupply: BigNumber;
    reclaimed: boolean;
    totalWithheld: BigNumber;
    totalWithheldWithdrawn: BigNumber;
    shareholders: DividendShareholderStatus[];
    name: string;
    currency: string | null;
}
export declare class DividendDistribution extends Entity<Params> {
    static generateId({ securityTokenId, dividendType, index }: UniqueIdentifiers): string;
    static unserialize(serialized: string): UniqueIdentifiers;
    uid: string;
    index: number;
    checkpointId: string;
    dividendType: DividendType;
    securityTokenSymbol: string;
    securityTokenId: string;
    created: Date;
    maturity: Date;
    expiry: Date;
    amount: BigNumber;
    claimedAmount: BigNumber;
    totalSupply: BigNumber;
    reclaimed: boolean;
    totalWithheld: BigNumber;
    totalWithheldWithdrawn: BigNumber;
    shareholders: DividendShareholderStatus[];
    name: string;
    currency: string | null;
    protected context: Context;
    constructor(params: Params & UniqueIdentifiers, context: Context);
    /**
     * Push payment for this dividend distribution
     */
    pushPayment: () => Promise<import("./TransactionQueue").TransactionQueue<import("../types").PushDividendPaymentProcedureArgs, void>>;
    /**
     * Withdraw collected taxes from this dividend distribution
     */
    withdrawTaxes: () => Promise<import("./TransactionQueue").TransactionQueue<import("../types").WithdrawTaxesProcedureArgs, void>>;
    toPojo(): {
        uid: string;
        index: number;
        checkpointId: string;
        dividendType: DividendType;
        securityTokenSymbol: string;
        securityTokenId: string;
        created: Date;
        maturity: Date;
        expiry: Date;
        amount: BigNumber;
        claimedAmount: BigNumber;
        totalSupply: BigNumber;
        reclaimed: boolean;
        totalWithheld: BigNumber;
        totalWithheldWithdrawn: BigNumber;
        shareholders: DividendShareholderStatus[];
        name: string;
        currency: string | null;
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=DividendDistribution.d.ts.map