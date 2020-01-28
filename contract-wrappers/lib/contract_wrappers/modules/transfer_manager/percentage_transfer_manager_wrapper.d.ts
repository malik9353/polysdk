import { PercentageTransferManagerContract, PercentageTransferManagerEvents, PercentageTransferManagerModifyHolderPercentageEventArgs, PercentageTransferManagerModifyWhitelistEventArgs, PercentageTransferManagerSetAllowPrimaryIssuanceEventArgs, PercentageTransferManagerPauseEventArgs, PercentageTransferManagerUnpauseEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs } from '../../../types';
interface ModifyHolderPercentageSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: PercentageTransferManagerEvents.ModifyHolderPercentage;
    callback: EventCallback<PercentageTransferManagerModifyHolderPercentageEventArgs>;
}
interface GetModifyHolderPercentageLogsAsyncParams extends GetLogsAsyncParams {
    eventName: PercentageTransferManagerEvents.ModifyHolderPercentage;
}
interface ModifyWhitelistSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: PercentageTransferManagerEvents.ModifyWhitelist;
    callback: EventCallback<PercentageTransferManagerModifyWhitelistEventArgs>;
}
interface GetModifyWhitelistLogsAsyncParams extends GetLogsAsyncParams {
    eventName: PercentageTransferManagerEvents.ModifyWhitelist;
}
interface SetAllowPrimaryIssuanceSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: PercentageTransferManagerEvents.SetAllowPrimaryIssuance;
    callback: EventCallback<PercentageTransferManagerSetAllowPrimaryIssuanceEventArgs>;
}
interface GetSetAllowPrimaryIssuanceLogsAsyncParams extends GetLogsAsyncParams {
    eventName: PercentageTransferManagerEvents.SetAllowPrimaryIssuance;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: PercentageTransferManagerEvents.Pause;
    callback: EventCallback<PercentageTransferManagerPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: PercentageTransferManagerEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: PercentageTransferManagerEvents.Unpause;
    callback: EventCallback<PercentageTransferManagerUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: PercentageTransferManagerEvents.Unpause;
}
interface PercentageTransferManagerSubscribeAsyncParams extends Subscribe {
    (params: ModifyHolderPercentageSubscribeAsyncParams): Promise<string>;
    (params: ModifyWhitelistSubscribeAsyncParams): Promise<string>;
    (params: SetAllowPrimaryIssuanceSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetPercentageTransferManagerLogsAsyncParams extends GetLogs {
    (params: GetModifyHolderPercentageLogsAsyncParams): Promise<LogWithDecodedArgs<PercentageTransferManagerModifyHolderPercentageEventArgs>[]>;
    (params: GetModifyWhitelistLogsAsyncParams): Promise<LogWithDecodedArgs<PercentageTransferManagerModifyWhitelistEventArgs>[]>;
    (params: GetSetAllowPrimaryIssuanceLogsAsyncParams): Promise<LogWithDecodedArgs<PercentageTransferManagerSetAllowPrimaryIssuanceEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<PercentageTransferManagerPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<PercentageTransferManagerUnpauseEventArgs>[]>;
}
export declare namespace PercentageTransferManagerTransactionParams {
    interface ChangeHolderPercentage extends ChangeHolderPercentageParams {
    }
    interface ModifyWhitelist extends ModifyWhitelistParams {
    }
    interface ModifyWhitelistMulti extends ModifyWhitelistMultiParams {
    }
    interface SetAllowPrimaryIssuance extends SetAllowPrimaryIssuanceParams {
    }
}
/**
 * @param investorAddress Address of the investor
 */
interface InvestorAddressParams {
    investorAddress: string;
}
/**
 * @param from Address of the sender
 * @param to Address of the receiver
 * @param amount
 * @param data
 */
interface VerifyTransferParams {
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
/**
 * @param maxHolderPercentage is the new maximum percentage
 */
interface ChangeHolderPercentageParams extends TxParams {
    maxHolderPercentage: BigNumber;
}
/**
 * @param investor is the address to whitelist
 * @param valid whether or not the address it to be added or removed from the whitelist
 */
interface ModifyWhitelistParams extends TxParams {
    investor: string;
    valid: boolean;
}
/**
 * @param investors Array of the addresses to whitelist
 * @param valids Array of boolean value to decide whether or not the address it to be added or removed from the whitelist
 */
interface ModifyWhitelistMultiParams extends TxParams {
    investors: string[];
    valids: boolean[];
}
/**
 * @param allowPrimaryIssuance whether to allow all primary issuance transfers
 */
interface SetAllowPrimaryIssuanceParams extends TxParams {
    allowPrimaryIssuance: boolean;
}
/**
 * This class includes the functionality related to interacting with the Percentage Transfer Manager contract.
 */
export default class PercentageTransferManagerWrapper extends ModuleWrapper {
    protected contract: Promise<PercentageTransferManagerContract>;
    /**
     * Instantiate PercentageTransferManagerWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<PercentageTransferManagerContract>, contractFactory: ContractFactory);
    /**
     * Ignore transactions which are part of the primary issuance
     * @return boolean allowed
     */
    allowPrimaryIssuance: () => Promise<boolean>;
    /**
     * Maximum percentage that any holder can have, multiplied by 10**16
     * @return percentage value
     */
    maxHolderPercentage: () => Promise<BigNumber>;
    /**
     *  Unpause the module
     */
    unpause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     *  Check if module is paused
     */
    paused: () => Promise<boolean>;
    /**
     *  Pause the module
     */
    pause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Addresses on this list are always able to send / receive tokens
     * @return boolean on whitelist
     */
    whitelist: (params: InvestorAddressParams) => Promise<boolean>;
    /**
     * Used to verify the transfer transaction (View)
     * @return boolean transfer result, address
     */
    verifyTransfer: (params: VerifyTransferParams) => Promise<{
        transferResult: import("../../../types").TransferResult;
        address: string;
    }>;
    /**
     * Sets the maximum percentage that an individual token holder can hold
     */
    changeHolderPercentage: (params: ChangeHolderPercentageParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Adds or removes single addresses from the whitelist.
     */
    modifyWhitelist: (params: ModifyWhitelistParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Adds or removes addresses from the whitelist.
     */
    modifyWhitelistMulti: (params: ModifyWhitelistMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Sets whether or not to consider primary issuance transfers
     */
    setAllowPrimaryIssuance: (params: SetAllowPrimaryIssuanceParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: PercentageTransferManagerSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetPercentageTransferManagerLogsAsyncParams;
}
export {};
//# sourceMappingURL=percentage_transfer_manager_wrapper.d.ts.map