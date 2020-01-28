import { VolumeRestrictionTMContract, VolumeRestrictionTMEvents, VolumeRestrictionTMChangedExemptWalletListEventArgs, VolumeRestrictionTMAddIndividualRestrictionEventArgs, VolumeRestrictionTMAddIndividualDailyRestrictionEventArgs, VolumeRestrictionTMModifyIndividualRestrictionEventArgs, VolumeRestrictionTMModifyIndividualDailyRestrictionEventArgs, VolumeRestrictionTMAddDefaultRestrictionEventArgs, VolumeRestrictionTMAddDefaultDailyRestrictionEventArgs, VolumeRestrictionTMModifyDefaultRestrictionEventArgs, VolumeRestrictionTMModifyDefaultDailyRestrictionEventArgs, VolumeRestrictionTMIndividualRestrictionRemovedEventArgs, VolumeRestrictionTMIndividualDailyRestrictionRemovedEventArgs, VolumeRestrictionTMDefaultRestrictionRemovedEventArgs, VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs, VolumeRestrictionTMPauseEventArgs, VolumeRestrictionTMUnpauseEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs, RestrictionType } from '../../../types';
interface ChangedExemptWalletListSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.ChangedExemptWalletList;
    callback: EventCallback<VolumeRestrictionTMChangedExemptWalletListEventArgs>;
}
interface GetChangedExemptWalletListLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.ChangedExemptWalletList;
}
interface AddIndividualRestrictionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.AddIndividualRestriction;
    callback: EventCallback<VolumeRestrictionTMAddIndividualRestrictionEventArgs>;
}
interface GetAddIndividualRestrictionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.AddIndividualRestriction;
}
interface AddIndividualDailyRestrictionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.AddIndividualDailyRestriction;
    callback: EventCallback<VolumeRestrictionTMAddIndividualDailyRestrictionEventArgs>;
}
interface GetAddIndividualDailyRestrictionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.AddIndividualDailyRestriction;
}
interface ModifyIndividualRestrictionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.ModifyIndividualRestriction;
    callback: EventCallback<VolumeRestrictionTMModifyIndividualRestrictionEventArgs>;
}
interface GetModifyIndividualRestrictionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.ModifyIndividualRestriction;
}
interface ModifyIndividualDailyRestrictionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.ModifyIndividualDailyRestriction;
    callback: EventCallback<VolumeRestrictionTMModifyIndividualDailyRestrictionEventArgs>;
}
interface GetModifyIndividualDailyRestrictionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.ModifyIndividualDailyRestriction;
}
interface AddDefaultRestrictionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.AddDefaultRestriction;
    callback: EventCallback<VolumeRestrictionTMAddDefaultRestrictionEventArgs>;
}
interface GetAddDefaultRestrictionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.AddDefaultRestriction;
}
interface AddDefaultDailyRestrictionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.AddDefaultDailyRestriction;
    callback: EventCallback<VolumeRestrictionTMAddDefaultDailyRestrictionEventArgs>;
}
interface GetAddDefaultDailyRestrictionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.AddDefaultDailyRestriction;
}
interface ModifyDefaultRestrictionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.ModifyDefaultRestriction;
    callback: EventCallback<VolumeRestrictionTMModifyDefaultRestrictionEventArgs>;
}
interface GetModifyDefaultRestrictionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.ModifyDefaultRestriction;
}
interface ModifyDefaultDailyRestrictionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.ModifyDefaultDailyRestriction;
    callback: EventCallback<VolumeRestrictionTMModifyDefaultDailyRestrictionEventArgs>;
}
interface GetModifyDefaultDailyRestrictionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.ModifyDefaultDailyRestriction;
}
interface IndividualRestrictionRemovedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.IndividualRestrictionRemoved;
    callback: EventCallback<VolumeRestrictionTMIndividualRestrictionRemovedEventArgs>;
}
interface GetIndividualRestrictionRemovedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.IndividualRestrictionRemoved;
}
interface IndividualDailyRestrictionRemovedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.IndividualDailyRestrictionRemoved;
    callback: EventCallback<VolumeRestrictionTMIndividualDailyRestrictionRemovedEventArgs>;
}
interface GetIndividualDailyRestrictionRemovedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.IndividualDailyRestrictionRemoved;
}
interface DefaultRestrictionRemovedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.DefaultRestrictionRemoved;
    callback: EventCallback<VolumeRestrictionTMDefaultRestrictionRemovedEventArgs>;
}
interface GetDefaultRestrictionRemovedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.DefaultRestrictionRemoved;
}
interface DefaultDailyRestrictionRemovedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.DefaultDailyRestrictionRemoved;
    callback: EventCallback<VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs>;
}
interface GetDefaultDailyRestrictionRemovedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.DefaultDailyRestrictionRemoved;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.Pause;
    callback: EventCallback<VolumeRestrictionTMPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VolumeRestrictionTMEvents.Unpause;
    callback: EventCallback<VolumeRestrictionTMUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VolumeRestrictionTMEvents.Unpause;
}
interface VolumeRestrictionTransferManagerSubscribeAsyncParams extends Subscribe {
    (params: ChangedExemptWalletListSubscribeAsyncParams): Promise<string>;
    (params: AddIndividualRestrictionSubscribeAsyncParams): Promise<string>;
    (params: AddIndividualDailyRestrictionSubscribeAsyncParams): Promise<string>;
    (params: ModifyIndividualRestrictionSubscribeAsyncParams): Promise<string>;
    (params: ModifyIndividualDailyRestrictionSubscribeAsyncParams): Promise<string>;
    (params: AddDefaultRestrictionSubscribeAsyncParams): Promise<string>;
    (params: AddDefaultDailyRestrictionSubscribeAsyncParams): Promise<string>;
    (params: ModifyDefaultRestrictionSubscribeAsyncParams): Promise<string>;
    (params: ModifyDefaultDailyRestrictionSubscribeAsyncParams): Promise<string>;
    (params: IndividualRestrictionRemovedSubscribeAsyncParams): Promise<string>;
    (params: IndividualDailyRestrictionRemovedSubscribeAsyncParams): Promise<string>;
    (params: DefaultRestrictionRemovedSubscribeAsyncParams): Promise<string>;
    (params: DefaultDailyRestrictionRemovedSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetVolumeRestrictionTransferManagerLogsAsyncParams extends GetLogs {
    (params: GetChangedExemptWalletListLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMChangedExemptWalletListEventArgs>[]>;
    (params: GetAddIndividualRestrictionLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMAddIndividualRestrictionEventArgs>[]>;
    (params: GetAddIndividualDailyRestrictionLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMAddIndividualDailyRestrictionEventArgs>[]>;
    (params: GetModifyIndividualRestrictionLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMModifyIndividualRestrictionEventArgs>[]>;
    (params: GetModifyIndividualDailyRestrictionLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMModifyIndividualDailyRestrictionEventArgs>[]>;
    (params: GetAddDefaultRestrictionLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMAddDefaultRestrictionEventArgs>[]>;
    (params: GetAddDefaultDailyRestrictionLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMAddDefaultDailyRestrictionEventArgs>[]>;
    (params: GetModifyDefaultRestrictionLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMModifyDefaultRestrictionEventArgs>[]>;
    (params: GetModifyDefaultDailyRestrictionLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMModifyDefaultDailyRestrictionEventArgs>[]>;
    (params: GetIndividualRestrictionRemovedLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMIndividualRestrictionRemovedEventArgs>[]>;
    (params: GetIndividualDailyRestrictionRemovedLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMIndividualDailyRestrictionRemovedEventArgs>[]>;
    (params: GetDefaultRestrictionRemovedLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMDefaultRestrictionRemovedEventArgs>[]>;
    (params: GetDefaultDailyRestrictionRemovedLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMDefaultDailyRestrictionRemovedEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<VolumeRestrictionTMUnpauseEventArgs>[]>;
}
export declare namespace VolumeRestrictionTransferManagerTransactionParams {
    interface RemoveIndividualRestriction extends HolderIndividualRestrictionParams {
    }
    interface RemoveIndividualDailyRestriction extends HolderIndividualRestrictionParams {
    }
    interface ChangeExemptWalletList extends ChangeExemptWalletListParams {
    }
    interface AddDefaultDailyRestriction extends DailyRestrictionParams {
    }
    interface ModifyDefaultDailyRestriction extends DailyRestrictionParams {
    }
    interface ModifyIndividualDailyRestriction extends IndividualDailyRestrictionParams {
    }
    interface AddDefaultRestriction extends RestrictionParams {
    }
    interface ModifyDefaultRestriction extends RestrictionParams {
    }
    interface AddIndividualDailyRestriction extends IndividualRestrictionParams {
    }
    interface AddIndividualRestriction extends IndividualRestrictionParams {
    }
    interface ModifyIndividualRestriction extends IndividualRestrictionParams {
    }
    interface RemoveIndividualRestrictionMulti extends RemoveIndividualRestrictionMultiParams {
    }
    interface RemoveIndividualDailyRestrictionMulti extends RemoveIndividualRestrictionMultiParams {
    }
    interface AddIndividualDailyRestrictionMulti extends IndividualDailyRestrictionMultiParams {
    }
    interface ModifyIndividualDailyRestrictionMulti extends IndividualDailyRestrictionMultiParams {
    }
    interface AddIndividualRestrictionMulti extends IndividualRestrictionMultiParams {
    }
    interface ModifyIndividualRestrictionMulti extends IndividualRestrictionMultiParams {
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
 * @param investor Address of the user
 */
interface HolderIndividualRestrictionParams extends TxParams {
    investor: string;
}
/**
 * @param wallet Ethereum wallet/contract address that need to be exempted
 * @param exempted Boolean value used to add (i.e true) or remove (i.e false) from the list
 */
interface ChangeExemptWalletListParams extends TxParams {
    wallet: string;
    change: boolean;
}
/**
 * @param allowedTokens Amount of tokens allowed to be traded for all token holder.
 * @param startTime Unix timestamp at which restriction get into effect
 * @param endTime Unix timestamp at which restriction effects will gets end.
 * @param restrictionType Whether it will be `Fixed` (fixed no. of tokens allowed to transact)
 * or `Percentage` (tokens are calculated as per the totalSupply in the fly).
 */
interface DailyRestrictionParams extends TxParams {
    allowedTokens: BigNumber;
    startTime: Date;
    endTime: Date;
    restrictionType: RestrictionType;
}
/**
 * @param holder Address of the token holder, whom restriction will be implied
 */
interface IndividualDailyRestrictionParams extends DailyRestrictionParams {
    holder: string;
}
/**
 * @param rollingPeriodInDays Rolling period in days (Minimum value should be 1 day)
 */
interface RestrictionParams extends DailyRestrictionParams {
    rollingPeriodInDays: number;
}
/**
 * @param holders Array of address of the token holders, whom restriction will be implied
 * @param allowedTokens Array of amount of tokens allowed to be trade for a given address.
 * @param startTimes Array of unix timestamps at which restrictions get into effect
 * @param rollingPeriodInDays Array of rolling period in days (Minimum value should be 1 day)
 * @param endTimes Array of unix timestamps at which restriction effects will gets end.
 * @param restrictionTypes Array of restriction types value whether it will be `Fixed` (fixed no. of tokens allowed to transact)
 * or `Percentage` (tokens are calculated as per the totalSupply in the fly).
 */
interface IndividualRestrictionParams extends RestrictionParams {
    holder: string;
}
/**
 * @param holders Array of address of the user
 */
interface RemoveIndividualRestrictionMultiParams extends TxParams {
    holders: string[];
}
/**
 * @param holders Array of address of the token holders, whom restriction will be implied
 * @param allowedTokens Array of amount of tokens allowed to be trade for a given address.
 * @param startTimes Array of unix timestamps at which restrictions get into effect
 * @param endTimes Array of unix timestamps at which restriction effects will gets end.
 * @param restrictionTypes Array of restriction types value whether it will be `Fixed` (fixed no. of tokens allowed to transact)
 * or `Percentage` (tokens are calculated as per the totalSupply in the fly).
 */
interface IndividualDailyRestrictionMultiParams extends TxParams {
    holders: string[];
    allowedTokens: BigNumber[];
    startTimes: Date[];
    endTimes: Date[];
    restrictionTypes: RestrictionType[];
}
/**
 * @param rollingPeriodInDays Array of rolling period in days (Minimum value should be 1 day)
 */
interface IndividualRestrictionMultiParams extends IndividualDailyRestrictionMultiParams {
    rollingPeriodInDays: number[];
}
/**
 * @param user Address of the token holder for whom the bucket details has queried
 */
interface GetIndividualBucketDetailsToUserParams {
    user: string;
}
/**
 * @param user Address of the token holder
 * @param at Timestamp
 */
interface GetTotalTradedByUserParams {
    user: string;
    at: Date;
}
interface GetRestrictedData {
    allAddresses: string;
    allowedTokens: BigNumber;
    startTime: Date;
    rollingPeriodInDays: number;
    endTime: Date;
    typeOfRestriction: BigNumber;
}
interface GetIndividualBucketDetails {
    lastTradedDayTime: Date;
    sumOfLastPeriod: BigNumber;
    daysCovered: number;
    dailyLastTradedDayTime: Date;
    lastTradedTimestamp: Date;
}
interface IndividualRestriction {
    allowedTokens: BigNumber;
    startTime: Date;
    rollingPeriodInDays: number;
    endTime: Date;
    restrictionType: RestrictionType;
}
/**
 * This class includes the functionality related to interacting with the Volume Restriction Transfer Manager contract.
 */
export default class VolumeRestrictionTransferManagerWrapper extends ModuleWrapper {
    protected contract: Promise<VolumeRestrictionTMContract>;
    /**
     * Instantiate VolumeRestrictionManagerWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<VolumeRestrictionTMContract>, contractFactory: ContractFactory);
    /**
     *  Unpause the module
     */
    unpause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     *  Check if module paused
     *  @return boolean value
     */
    paused: () => Promise<boolean>;
    /**
     *  Pause the module
     */
    pause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to verify the transfer transaction (View)
     * @return boolean transfer result, address
     */
    verifyTransfer: (params: VerifyTransferParams) => Promise<{
        transferResult: import("../../../types").TransferResult;
        address: string;
    }>;
    /**
     * Gets individual restriction for investor
     * @return allowedTokens, startTime, rollingPeriodInDays, endTime, restrictionType
     */
    getIndividualRestriction: (params: HolderIndividualRestrictionParams) => Promise<IndividualRestriction>;
    /**
     * Gets default restriction value
     * @return allowedTokens, startTime, rollingPeriodInDays, endTime, restrictionType
     */
    getDefaultRestriction: () => Promise<IndividualRestriction>;
    /**
     * Gets default daily restriction value
     * @return allowedTokens, startTime, rollingPeriodInDays, endTime, restrictionType
     */
    getDefaultDailyRestriction: () => Promise<IndividualRestriction>;
    /**
     * Use to return the list of exempted addresses
     */
    getExemptAddress: () => Promise<string[]>;
    /**
     * Gets individual daily restriction value
     * @return allowedTokens, startTime, rollingPeriodInDays, endTime, restrictionType
     */
    getIndividualDailyRestriction: (params: HolderIndividualRestrictionParams) => Promise<IndividualRestriction>;
    /**
     * Add/Remove wallet address from the exempt list
     */
    changeExemptWalletList: (params: ChangeExemptWalletListParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to add the new individual restriction for multiple token holders
     */
    addIndividualRestriction: (params: IndividualRestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to add the new individual daily restriction for all token holder
     */
    addIndividualDailyRestriction: (params: IndividualRestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to add the new individual daily restriction for multiple token holders
     */
    addIndividualDailyRestrictionMulti: (params: IndividualDailyRestrictionMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to add the new individual restriction for multiple token holders
     */
    addIndividualRestrictionMulti: (params: IndividualRestrictionMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to add the new default restriction for all token holder
     */
    addDefaultRestriction: (params: RestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to add the new default daily restriction for all token holder
     */
    addDefaultDailyRestriction: (params: DailyRestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to remove the individual restriction for a given address
     */
    removeIndividualRestriction: (params: HolderIndividualRestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to remove the individual restriction for a given address
     */
    removeIndividualRestrictionMulti: (params: RemoveIndividualRestrictionMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to remove the individual daily restriction for a given address
     */
    removeIndividualDailyRestriction: (params: HolderIndividualRestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to remove the individual daily restriction for a given address
     */
    removeIndividualDailyRestrictionMulti: (params: RemoveIndividualRestrictionMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to remove the default restriction
     */
    removeDefaultRestriction: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to remove the daily default restriction
     */
    removeDefaultDailyRestriction: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to modify the existing individual restriction for a given token holder
     */
    modifyIndividualRestriction: (params: IndividualRestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to modify the existing individual daily restriction for a given token holder
     */
    modifyIndividualDailyRestriction: (params: IndividualDailyRestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to modify the existing individual daily restriction for multiple token holders
     */
    modifyIndividualDailyRestrictionMulti: (params: IndividualDailyRestrictionMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to modify the existing individual restriction for multiple token holders
     */
    modifyIndividualRestrictionMulti: (params: IndividualRestrictionMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to modify the global restriction for all token holders
     */
    modifyDefaultRestriction: (params: RestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to modify the daily default restriction for all token holders
     */
    modifyDefaultDailyRestriction: (params: DailyRestrictionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to get the bucket details for a given address
     * @return lastTradedDayTime, sumOfLastPeriod, days covered, date lastTradedDayTime, timestamp at which last transaction get executed
     */
    getIndividualBucketDetailsToUser: (params: GetIndividualBucketDetailsToUserParams) => Promise<GetIndividualBucketDetails>;
    /**
     * Use to get the bucket details for a given address
     * @return lastTradedDayTime, sumOfLastPeriod, days covered, date lastTradedDayTime, timestamp at which last transaction get executed
     */
    getDefaultBucketDetailsToUser: (params: GetIndividualBucketDetailsToUserParams) => Promise<GetIndividualBucketDetails>;
    /**
     * Use to get the volume of token that being traded at a particular day (`at` + 24 hours) for a given user
     */
    getTotalTradedByUser: (params: GetTotalTradedByUserParams) => Promise<BigNumber>;
    /**
     * This function returns the signature of configure function
     */
    getInitFunction: () => Promise<string>;
    /**
     * Provide the restriction details of all the restricted addresses
     * @return List of the restricted addresses,
     * List of the tokens allowed to the restricted addresses corresponds to restricted address,
     * List of the start time of the restriction corresponds to restricted address,
     * List of the rolling period in days for a restriction corresponds to restricted address,
     * List of the end time of the restriction corresponds to restricted address,
     * List of the type of restriction to validate the value of the `allowedTokens`
     * of the restriction corresponds to restricted address,
     */
    getRestrictionData: () => Promise<GetRestrictedData[]>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: VolumeRestrictionTransferManagerSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetVolumeRestrictionTransferManagerLogsAsyncParams;
    private checkRestrictionInputParams;
    private decimalsByRestrictionType;
}
export {};
//# sourceMappingURL=volume_restriction_transfer_manager_wrapper.d.ts.map