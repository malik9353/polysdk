import { TransactionReceiptWithDecodedLogs } from '@polymathnetwork/contract-wrappers';
import { LowLevelMethod, MapMaybeResolver, MaybeResolver, ProcedureType, PolyTransactionTag, Fees } from '../types';
import { TransactionQueue } from '../entities/TransactionQueue';
import { Context } from '../Context';
import { PostTransactionResolver } from '../PostTransactionResolver';
export interface ProcedureClass<Args = any, ReturnType extends any = any> {
    new (args: Args, context: Context): Procedure<Args, ReturnType>;
}
export declare abstract class Procedure<Args, ReturnType = void> {
    type: ProcedureType;
    protected args: Args;
    protected context: Context;
    private transactions;
    private fees;
    constructor(args: Args, context: Context);
    /**
     * Mandatory method that builds a list of transactions that will be
     * run
     */
    prepare: () => Promise<TransactionQueue<Args, ReturnType>>;
    /**
     * Appends a Procedure into the TransactionQueue's queue. This defines
     * what will be run by the TransactionQueue when it is started.
     *
     * @param Proc A Procedure that will be run in the Procedure's TransactionQueue
     *
     * @returns whichever value is returned by the Procedure
     */
    addProcedure: <A, R extends any = any>(Proc: ProcedureClass<A, R>) => (args: A) => Promise<MaybeResolver<R | undefined>>;
    /**
     * Appends a method into the TransactionQueue's queue. This defines
     * what will be run by the TransactionQueue when it is started.
     *
     * @param method A method that will be run in the Procedure's TransactionQueue
     * @param options.tag An optional tag for SDK users to identify this transaction, this
     * can be used for doing things such as mapping descriptions to tags in the UI
     * @param options.fee Value in POLY of the transaction (defaults to 0)
     * @param options.resolver An asynchronous callback used to provide runtime data after
     * the added transaction has finished successfully
     *
     * @returns a PostTransactionResolver that resolves to the value returned by the resolver function, or undefined if no resolver function was passed
     */
    addTransaction: <A, R extends any = any>(method: LowLevelMethod<A>, { tag, fees, resolver, }?: {
        tag?: PolyTransactionTag | undefined;
        fees?: Fees | undefined;
        resolver?: ((receipt: TransactionReceiptWithDecodedLogs) => Promise<R>) | undefined;
    }) => (args: MapMaybeResolver<A>) => Promise<PostTransactionResolver<R>>;
    protected abstract prepareTransactions(): Promise<MaybeResolver<ReturnType>>;
}
//# sourceMappingURL=Procedure.d.ts.map