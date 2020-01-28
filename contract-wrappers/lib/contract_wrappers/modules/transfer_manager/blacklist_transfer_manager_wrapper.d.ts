import { BigNumber, BlacklistTransferManagerContract, BlacklistTransferManagerEvents, BlacklistTransferManagerPauseEventArgs, BlacklistTransferManagerUnpauseEventArgs, BlacklistTransferManagerAddBlacklistTypeEventArgs, BlacklistTransferManagerModifyBlacklistTypeEventArgs, BlacklistTransferManagerDeleteBlacklistTypeEventArgs, BlacklistTransferManagerAddInvestorToBlacklistEventArgs, BlacklistTransferManagerDeleteInvestorFromBlacklistEventArgs, LogWithDecodedArgs, Web3Wrapper } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { EventCallback, GetLogs, GetLogsAsyncParams, Partition, Perm, Subscribe, SubscribeAsyncParams, TransferResult, TxParams } from '../../../types';
interface DeleteInvestorFromBlacklistSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: BlacklistTransferManagerEvents.DeleteInvestorFromBlacklist;
    callback: EventCallback<BlacklistTransferManagerDeleteInvestorFromBlacklistEventArgs>;
}
interface GetDeleteInvestorFromBlacklistLogsAsyncParams extends GetLogsAsyncParams {
    eventName: BlacklistTransferManagerEvents.DeleteInvestorFromBlacklist;
}
interface AddInvestorToBlacklistSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: BlacklistTransferManagerEvents.AddInvestorToBlacklist;
    callback: EventCallback<BlacklistTransferManagerAddInvestorToBlacklistEventArgs>;
}
interface GetAddInvestorToBlacklistLogsAsyncParams extends GetLogsAsyncParams {
    eventName: BlacklistTransferManagerEvents.AddInvestorToBlacklist;
}
interface DeleteBlacklistTypeSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: BlacklistTransferManagerEvents.DeleteBlacklistType;
    callback: EventCallback<BlacklistTransferManagerDeleteBlacklistTypeEventArgs>;
}
interface GetDeleteBlacklistTypeLogsAsyncParams extends GetLogsAsyncParams {
    eventName: BlacklistTransferManagerEvents.DeleteBlacklistType;
}
interface ModifyBlacklistTypeSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: BlacklistTransferManagerEvents.ModifyBlacklistType;
    callback: EventCallback<BlacklistTransferManagerModifyBlacklistTypeEventArgs>;
}
interface GetModifyBlacklistTypeLogsAsyncParams extends GetLogsAsyncParams {
    eventName: BlacklistTransferManagerEvents.ModifyBlacklistType;
}
interface AddBlacklistTypeSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: BlacklistTransferManagerEvents.AddBlacklistType;
    callback: EventCallback<BlacklistTransferManagerAddBlacklistTypeEventArgs>;
}
interface GetAddBlacklistTypeLogsAsyncParams extends GetLogsAsyncParams {
    eventName: BlacklistTransferManagerEvents.AddBlacklistType;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: BlacklistTransferManagerEvents.Pause;
    callback: EventCallback<BlacklistTransferManagerPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: BlacklistTransferManagerEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: BlacklistTransferManagerEvents.Unpause;
    callback: EventCallback<BlacklistTransferManagerUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: BlacklistTransferManagerEvents.Unpause;
}
interface BlacklistTransferManagerSubscribeAsyncParams extends Subscribe {
    (params: AddBlacklistTypeSubscribeAsyncParams): Promise<string>;
    (params: ModifyBlacklistTypeSubscribeAsyncParams): Promise<string>;
    (params: DeleteBlacklistTypeSubscribeAsyncParams): Promise<string>;
    (params: AddInvestorToBlacklistSubscribeAsyncParams): Promise<string>;
    (params: DeleteInvestorFromBlacklistSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetBlacklistTransferManagerLogsAsyncParams extends GetLogs {
    (params: GetAddBlacklistTypeLogsAsyncParams): Promise<LogWithDecodedArgs<BlacklistTransferManagerPauseEventArgs>[]>;
    (params: GetModifyBlacklistTypeLogsAsyncParams): Promise<LogWithDecodedArgs<BlacklistTransferManagerPauseEventArgs>[]>;
    (params: GetDeleteBlacklistTypeLogsAsyncParams): Promise<LogWithDecodedArgs<BlacklistTransferManagerPauseEventArgs>[]>;
    (params: GetAddInvestorToBlacklistLogsAsyncParams): Promise<LogWithDecodedArgs<BlacklistTransferManagerPauseEventArgs>[]>;
    (params: GetDeleteInvestorFromBlacklistLogsAsyncParams): Promise<LogWithDecodedArgs<BlacklistTransferManagerPauseEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<BlacklistTransferManagerPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<BlacklistTransferManagerUnpauseEventArgs>[]>;
}
export declare namespace BlacklistTransferManagerTransactionParams {
    interface AddBlacklistType extends BlacklistTypeParams {
    }
    interface ModifyBlacklistType extends BlacklistTypeParams {
    }
    interface AddNewInvestorToNewBlacklist extends AddNewInvestorToNewBlacklistParams {
    }
    interface AddNewBlacklistTypeMulti extends BlacklistTypeMultiParams {
    }
    interface ModifyBlacklistTypeMulti extends BlacklistTypeMultiParams {
    }
    interface DeleteBlacklistType extends DeleteBlacklistTypeParams {
    }
    interface DeleteBlacklistTypeMulti extends DeleteBlacklistTypeMultiParams {
    }
    interface AddInvestorToBlacklist extends InvestorAndBlacklistParams {
    }
    interface DeleteInvestorFromBlacklist extends InvestorAndBlacklistParams {
    }
    interface DeleteInvestorFromAllBlacklist extends DeleteInvestorFromAllBlacklistParams {
    }
    interface DeleteInvestorFromAllBlacklistMulti extends DeleteInvestorFromAllBlacklistMultiParams {
    }
    interface AddInvestorToBlacklistMulti extends InvestorMultiAndBlacklistParams {
    }
    interface AddMultiInvestorToBlacklistMulti extends InvestorMultiAndBlacklistMultiParams {
    }
    interface DeleteMultiInvestorsFromBlacklistMulti extends InvestorMultiAndBlacklistMultiParams {
    }
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
 * @param partition Identifier
 * @param tokenHolder Whom token amount need to query
 * @param additionalBalance It is the `value` that transfers during transfer/transferFrom function call
 */
interface GetTokensByPartitionParams {
    partition: Partition;
    tokenHolder: string;
    additionalBalance: BigNumber;
}
/**
 * @param blacklistName Name of the blacklist type
 */
interface BlacklistParams {
    blacklistName: string;
}
/**
 * @param user Address of the user
 */
interface UserAddressParams {
    user: string;
}
/**
 * @param startTime Start date of the blacklist type
 * @param endTime End date of the blacklist type
 * @param blacklistName Name of the blacklist type
 * @param repeatPeriodTime Repeat period of the blacklist type (measured in days)
 */
interface BlacklistTypeParams extends TxParams {
    startTime: Date;
    endTime: Date;
    blacklistName: string;
    repeatPeriodTime: number;
}
/**
 * @param startTime Start date of the blacklist type
 * @param endTime End date of the blacklist type
 * @param blacklistName Name of the blacklist type
 * @param repeatPeriodTime Repeat period of the blacklist type (measured in days)
 * @param investor Address of the investor
 */
interface AddNewInvestorToNewBlacklistParams extends BlacklistTypeParams {
    investor: string;
}
/**
 * @param startTimes Start dates of the blacklist types
 * @param endTimes End dates of the blacklist types
 * @param blacklistNames Names of the blacklist types
 * @param repeatPeriodTimes Repeat periods of the blacklist type (measured in days)
 */
interface BlacklistTypeMultiParams extends TxParams {
    startTimes: Date[];
    endTimes: Date[];
    blacklistNames: string[];
    repeatPeriodTimes: number[];
}
/**
 * @param blacklistName Name of the blacklist type
 */
interface DeleteBlacklistTypeParams extends TxParams {
    blacklistName: string;
}
/**
 * @param blacklistNames Names of the blacklist types
 */
interface DeleteBlacklistTypeMultiParams extends TxParams {
    blacklistNames: string[];
}
/**
 * @param investor Address of the investor
 * @param blacklistName Name of the blacklist
 */
interface InvestorAndBlacklistParams extends TxParams {
    userAddress: string;
    blacklistName: string;
}
/**
 * @param investor Address of the investor
 */
interface DeleteInvestorFromAllBlacklistParams extends TxParams {
    investor: string;
}
/**
 * @param investor Addresses of the investors
 */
interface DeleteInvestorFromAllBlacklistMultiParams extends TxParams {
    investors: string[];
}
/**
 * @param investors Address of the investor
 * @param blacklistName Name of the blacklist
 */
interface InvestorMultiAndBlacklistParams extends TxParams {
    userAddresses: string[];
    blacklistName: string;
}
/**
 * @param investors Address of the investor
 * @param blacklistNames Name of the blacklist
 */
interface InvestorMultiAndBlacklistMultiParams extends TxParams {
    userAddresses: string[];
    blacklistNames: string[];
}
/**
 * @param transferResult
 * @param address
 */
interface VerifyTransfer {
    transferResult: TransferResult;
    address: string;
}
/**
 * @param startTime Date of start for blacklist
 * @param endTime Date of end for blacklist
 * @param repeatPeriodTime Time until it is repeated (Measured in days) (0 if it is not repeated)
 */
interface BlacklistsDetails {
    startTime: Date;
    endTime: Date;
    repeatPeriodTime: number;
}
/**
 * This class includes the functionality related to interacting with the Blacklist Transfer Manager contract.
 */
export default class BlacklistTransferManagerWrapper extends ModuleWrapper {
    protected contract: Promise<BlacklistTransferManagerContract>;
    /**
     * Instantiate BlacklistTransferManagerWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     * @param contractFactory
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<BlacklistTransferManagerContract>, contractFactory: ContractFactory);
    /**
     *  Unpause the module
     */
    unpause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     *  Check if the module is paused
     */
    paused: () => Promise<boolean>;
    /**
     *  Pause the module
     */
    pause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Return the different blacklist details corresponding to a blacklists name
     */
    blacklists: (params: BlacklistParams) => Promise<BlacklistsDetails>;
    /**
     * Used to add the blacklist type
     */
    addBlacklistType: (params: BlacklistTypeParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to add multiple blacklist types
     */
    addNewBlacklistTypeMulti: (params: BlacklistTypeMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to modify the details of a given blacklist type
     */
    modifyBlacklistType: (params: BlacklistTypeParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to modify the details of given multiple blacklist types
     */
    modifyBlacklistTypeMulti: (params: BlacklistTypeMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to delete the blacklist type
     */
    deleteBlacklistType: (params: DeleteBlacklistTypeParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to delete the multiple blacklist types
     */
    deleteBlacklistTypeMulti: (params: DeleteBlacklistTypeMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to assign the blacklist type to the investor
     */
    addInvestorToBlacklist: (params: InvestorAndBlacklistParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to assign a single blacklist type to multiple investors
     */
    addInvestorToBlacklistMulti: (params: InvestorMultiAndBlacklistParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to assign multiple specific blacklist types to multiple investors
     */
    addMultiInvestorToBlacklistMulti: (params: InvestorMultiAndBlacklistMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to create a new blacklist type and add it to the investor
     */
    addInvestorToNewBlacklist: (params: AddNewInvestorToNewBlacklistParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to delete the investor from the blacklist
     */
    deleteInvestorFromBlacklist: (params: InvestorAndBlacklistParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to delete the multiple investors from multiple specific blacklists
     */
    deleteMultiInvestorsFromBlacklistMulti: (params: InvestorMultiAndBlacklistMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to delete the investor from all the associated blacklist types
     */
    deleteInvestorFromAllBlacklist: (params: DeleteInvestorFromAllBlacklistParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to delete multiple investors from multiple associated blacklist types
     */
    deleteInvestorFromAllBlacklistMulti: (params: DeleteInvestorFromAllBlacklistMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * get the list of the investors that correspond to a blacklist type
     * @return address List of investors associated with the blacklist
     */
    getListOfAddresses: (params: BlacklistParams) => Promise<string[]>;
    /**
     * get the list of blacklists associated with a particular investor
     * @return List of blacklist names associated with the given address
     */
    getBlacklistNamesToUser: (params: UserAddressParams) => Promise<string[]>;
    /**
     * get the list of blacklist names
     * @return bytes32 Array of blacklist names
     */
    getAllBlacklists: () => Promise<string[]>;
    /**
     * return the amount of tokens for a given user as per the partition
     * @return amount of tokens
     */
    getTokensByPartition: (params: GetTokensByPartitionParams) => Promise<BigNumber>;
    /**
     * Return the permissions flags that are associated with blacklist transfer manager
     */
    getPermissions: () => Promise<Perm[]>;
    /**
     * Used to verify the transfer transaction (View)
     * Restrict the blacklist address to transfer tokens
     * if the current time is between the timeframe define for the
     * blacklist type associated with the from address
     * @return boolean transfer result, address
     */
    verifyTransfer: (params: VerifyTransferParams) => Promise<VerifyTransfer>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: BlacklistTransferManagerSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetBlacklistTransferManagerLogsAsyncParams;
    private checkAddBlacklistType;
    private checkModifyBlacklistType;
    private checkBlacklistTypeDetails;
    private checkDeleteBlacklistType;
    private checkBlacklistToModifyInvestors;
    private checkAddInvestorToBlacklist;
    private checkDeleteInvestorFromBlacklist;
    private checkDeleteInvestorFromAllBlacklist;
}
export {};
//# sourceMappingURL=blacklist_transfer_manager_wrapper.d.ts.map