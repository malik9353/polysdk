import { PolyTokenContract, PolyTokenEvents, PolyTokenTransferEventArgs, PolyTokenApprovalEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs } from '../../types';
import ERC20TokenWrapper from './erc20_wrapper';
interface ApprovalSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: PolyTokenEvents.Approval;
    callback: EventCallback<PolyTokenApprovalEventArgs>;
}
interface GetApprovalLogsAsyncParams extends GetLogsAsyncParams {
    eventName: PolyTokenEvents.Approval;
}
interface TransferSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: PolyTokenEvents.Transfer;
    callback: EventCallback<PolyTokenTransferEventArgs>;
}
interface GetTransferLogsAsyncParams extends GetLogsAsyncParams {
    eventName: PolyTokenEvents.Transfer;
}
interface PolyTokenSubscribeAsyncParams extends Subscribe {
    (params: ApprovalSubscribeAsyncParams): Promise<string>;
    (params: TransferSubscribeAsyncParams): Promise<string>;
}
interface GetPolyTokenLogsAsyncParams extends GetLogs {
    (params: GetApprovalLogsAsyncParams): Promise<LogWithDecodedArgs<PolyTokenApprovalEventArgs>[]>;
    (params: GetTransferLogsAsyncParams): Promise<LogWithDecodedArgs<PolyTokenTransferEventArgs>[]>;
}
export declare namespace PolyTokenTransactionParams {
    interface ChangeApproval extends ChangeApprovalParams {
    }
}
/**
 * @param spender The address which will spend the funds.
 * @param value The amount of tokens to increase the allowance by.
 */
interface ChangeApprovalParams extends TxParams {
    spender: string;
    value: BigNumber;
}
/**
 * This class includes the functionality related to interacting with the PolyToken contract.
 */
export default class PolyTokenWrapper extends ERC20TokenWrapper {
    protected contract: Promise<PolyTokenContract>;
    /**
     * Instantiate PolyTokenWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     * @param polymathRegistry The PolymathRegistryWrapper instance contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<PolyTokenContract>);
    /**
     * Use to increase approval
     */
    increaseApproval: (params: ChangeApprovalParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to decrease approval
     */
    decreaseApproval: (params: ChangeApprovalParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Get decimal factor
     * @return factor
     */
    decimalFactor: () => Promise<BigNumber>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: PolyTokenSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetPolyTokenLogsAsyncParams;
}
export {};
//# sourceMappingURL=poly_token_wrapper.d.ts.map