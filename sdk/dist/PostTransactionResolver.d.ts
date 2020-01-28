import { TransactionReceiptWithDecodedLogs } from '@polymathnetwork/contract-wrappers';
export declare class PostTransactionResolver<Value extends any> {
    result?: Value;
    private resolver;
    constructor(resolver?: (receipt: TransactionReceiptWithDecodedLogs) => Promise<Value>);
    run(receipt: TransactionReceiptWithDecodedLogs): Promise<void>;
}
export declare function isPostTransactionResolver<T = any>(val: any): val is PostTransactionResolver<T>;
//# sourceMappingURL=PostTransactionResolver.d.ts.map