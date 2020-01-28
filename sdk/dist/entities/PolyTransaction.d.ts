import { TransactionReceiptWithDecodedLogs } from '@polymathnetwork/contract-wrappers';
import { TransactionSpec, TransactionStatus, PolyTransactionTag } from '../types';
import { PolymathError } from '../PolymathError';
import { Entity } from './Entity';
import { TransactionQueue } from './TransactionQueue';
export declare class PolyTransaction<Args = any, R extends any = void> extends Entity<void> {
    static generateId(): string;
    uid: string;
    status: TransactionStatus;
    transactionQueue: TransactionQueue;
    promise: Promise<any>;
    error?: PolymathError;
    receipt?: TransactionReceiptWithDecodedLogs;
    tag: PolyTransactionTag;
    txHash?: string;
    args: TransactionSpec<Args, R>['args'];
    protected method: TransactionSpec<Args, R>['method'];
    private postResolver;
    private emitter;
    constructor(transaction: TransactionSpec<Args, R>, transactionQueue: TransactionQueue<any, any>);
    toPojo(): {
        uid: string;
        transactionQueueUid: string;
        status: TransactionStatus;
        tag: PolyTransactionTag;
        txHash: string | undefined;
        receipt: TransactionReceiptWithDecodedLogs | undefined;
        error: PolymathError | undefined;
        /**
         * NOTE @monitz87: we intentionally expose the args as any for the end user
         * until we figure out how to type this properly
         */
        args: any;
    };
    run(): Promise<void>;
    onStatusChange: (listener: (transaction: this) => void) => () => void;
    protected resolve: (val?: any) => void;
    protected reject: (reason?: any) => void;
    private internalRun;
    private updateStatus;
    private unwrapArg;
    /**
     * Picks all post-transaction resolvers and unwraps their values
     */
    private unwrapArgs;
    _refresh(_params: Partial<void>): void;
}
//# sourceMappingURL=PolyTransaction.d.ts.map