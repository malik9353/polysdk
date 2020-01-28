import { CountTransferManagerContract, CountTransferManagerEvents, CountTransferManagerModifyHolderCountEventArgs, CountTransferManagerPauseEventArgs, CountTransferManagerUnpauseEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs } from '../../../types';
interface ModifyHolderCountSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: CountTransferManagerEvents.ModifyHolderCount;
    callback: EventCallback<CountTransferManagerModifyHolderCountEventArgs>;
}
interface GetModifyHolderCountLogsAsyncParams extends GetLogsAsyncParams {
    eventName: CountTransferManagerEvents.ModifyHolderCount;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: CountTransferManagerEvents.Pause;
    callback: EventCallback<CountTransferManagerPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: CountTransferManagerEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: CountTransferManagerEvents.Unpause;
    callback: EventCallback<CountTransferManagerUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: CountTransferManagerEvents.Unpause;
}
interface CountTransferManagerSubscribeAsyncParams extends Subscribe {
    (params: ModifyHolderCountSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetCountTransferManagerLogsAsyncParams extends GetLogs {
    (params: GetModifyHolderCountLogsAsyncParams): Promise<LogWithDecodedArgs<CountTransferManagerModifyHolderCountEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<CountTransferManagerPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<CountTransferManagerUnpauseEventArgs>[]>;
}
export declare namespace CountTransferManagerTransactionParams {
    interface ChangeHolderCount extends ChangeHolderCountParams {
    }
}
/**
 * @param from Address of the sender
 * @param to Address of the receiver
 * @param amount Amount to send
 * @param data Data value
 */
interface VerifyTransferParams {
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
/**
 * @param maxHolderCount is the new maximum amount of token holders
 */
interface ChangeHolderCountParams extends TxParams {
    maxHolderCount: number;
}
/**
 * This class includes the functionality related to interacting with the Count Transfer Manager contract.
 */
export default class CountTransferManagerWrapper extends ModuleWrapper {
    protected contract: Promise<CountTransferManagerContract>;
    /**
     * Instantiate CountTransferManagerWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     * @param contractFactory
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<CountTransferManagerContract>, contractFactory: ContractFactory);
    /**
     *  Unpause the module
     */
    unpause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     *  Check if module paused
     */
    paused: () => Promise<boolean>;
    /**
     *  Pause the module
     */
    pause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     *The maximum number of concurrent token holders
     */
    maxHolderCount: () => Promise<number>;
    /**
     * Used to verify the transfer transaction and prevent a transfer if it passes the allowed amount of token holders
     * @return boolean transfer result, address
     */
    verifyTransfer: (params: VerifyTransferParams) => Promise<{
        transferResult: import("../../../types").TransferResult;
        address: string;
    }>;
    /**
     * Sets the cap for the amount of token holders there can be
     */
    changeHolderCount: (params: ChangeHolderCountParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: CountTransferManagerSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetCountTransferManagerLogsAsyncParams;
}
export {};
//# sourceMappingURL=count_transfer_manager_wrapper.d.ts.map