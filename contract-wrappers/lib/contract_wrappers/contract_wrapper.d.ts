import { BaseContract, Web3Wrapper, RawLog, LogEntry, LogWithDecodedArgs, TxData } from '@polymathnetwork/abi-wrappers';
import { BlockRange, ContractEventArgs, ContractEvents, IndexedFilterValues, EventCallback, GetLogs, Subscribe } from '../types';
export default abstract class ContractWrapper {
    protected contract: Promise<BaseContract>;
    protected web3Wrapper: Web3Wrapper;
    abstract getLogsAsync: GetLogs | undefined;
    abstract subscribeAsync: Subscribe | undefined;
    /**
     * Returns the contract ABI
     */
    abi: () => Promise<import("ethereum-types").AbiDefinition[]>;
    /**
     * Returns the contract address
     */
    address: () => Promise<string>;
    /**
     * Cancel a subscription
     * @param subscriptionToken Subscription token returned by `subscribe()`
     */
    unsubscribe: (subscriptionToken: string) => void;
    /**
     * Cancels all existing subscriptions
     */
    unsubscribeAll: () => void;
    private _blockAndLogStreamerIfExists;
    private _blockAndLogStreamIntervalIfExists?;
    private _onLogAddedSubscriptionToken;
    private _onLogRemovedSubscriptionToken;
    private readonly _blockPollingIntervalMs;
    private readonly _filters;
    private readonly _filterCallbacks;
    private static _onBlockAndLogStreamerError;
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<BaseContract>);
    protected unsubscribeInternal(filterToken: string, err?: Error): void;
    protected subscribeInternal<ArgsType extends ContractEventArgs>(address: string, eventName: ContractEvents, indexFilterValues: IndexedFilterValues, callback: EventCallback<ArgsType>, isVerbose?: boolean): Promise<string>;
    protected getLogsAsyncInternal<ArgsType extends ContractEventArgs>(address: string, eventName: ContractEvents, blockRange?: BlockRange, indexFilterValues?: IndexedFilterValues): Promise<LogWithDecodedArgs<ArgsType>[]>;
    protected tryToDecodeLogOrNoopInternal<ArgsType extends ContractEventArgs>(log: LogEntry): LogWithDecodedArgs<ArgsType> | RawLog;
    private _onLogStateChanged;
    private _startBlockAndLogStream;
    private _blockstreamGetBlockOrNullAsync;
    private _blockstreamGetLatestBlockOrNullAsync;
    private _stopBlockAndLogStream;
    private _blockstreamGetLogsAsync;
    private _reconcileBlockAsync;
    protected getDefaultFromAddress: () => Promise<string>;
    protected getCallerAddress: (txData: Partial<TxData> | undefined) => Promise<string>;
}
//# sourceMappingURL=contract_wrapper.d.ts.map