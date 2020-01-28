import { TransactionSpec, MaybeResolver, ProcedureType, TransactionQueueStatus, Fees } from '../types';
import { Entity } from './Entity';
import { PolyTransaction } from './PolyTransaction';
export declare class TransactionQueue<Args extends any = any, ReturnType extends any = void> extends Entity<void> {
    static generateId(): string;
    readonly entityType: string;
    procedureType: ProcedureType;
    uid: string;
    transactions: PolyTransaction[];
    status: TransactionQueueStatus;
    args: Args;
    error?: Error;
    fees: Fees;
    private promise;
    private queue;
    private returnValue;
    private emitter;
    constructor(transactions: TransactionSpec[], fees: Fees, returnValue: MaybeResolver<ReturnType>, args: Args, procedureType?: ProcedureType);
    toPojo(): {
        uid: string;
        transactions: {
            uid: string;
            transactionQueueUid: string;
            status: import("../types").TransactionStatus;
            tag: import("../types").PolyTransactionTag;
            txHash: string | undefined;
            receipt: import("ethereum-types").TransactionReceiptWithDecodedLogs | undefined;
            error: import("..").PolymathError | undefined;
            args: any;
        }[];
        status: TransactionQueueStatus;
        fees: Fees;
        procedureType: ProcedureType;
        args: Args;
    };
    run: () => Promise<ReturnType>;
    onStatusChange(listener: (transactionQueue: this) => void): () => void;
    onTransactionStatusChange(listener: (transaction: PolyTransaction, transactionQueue: this) => void): () => void;
    protected resolve: (val?: ReturnType) => void;
    protected reject: (reason?: any) => void;
    private updateStatus;
    private executeTransactionQueue;
    _refresh(_params: Partial<void>): void;
}
//# sourceMappingURL=TransactionQueue.d.ts.map