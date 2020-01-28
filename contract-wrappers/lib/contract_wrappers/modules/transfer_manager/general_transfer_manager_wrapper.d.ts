import { GeneralTransferManagerContract, GeneralTransferManagerEvents, GeneralTransferManagerChangeIssuanceAddressEventArgs, GeneralTransferManagerModifyKYCDataEventArgs, GeneralTransferManagerModifyInvestorFlagEventArgs, GeneralTransferManagerModifyTransferRequirementsEventArgs, GeneralTransferManagerChangeDefaultsEventArgs, GeneralTransferManagerPauseEventArgs, GeneralTransferManagerUnpauseEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs, FlagsType, Perm, TransferType, Partition } from '../../../types';
interface ChangeIssuanceAddressSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: GeneralTransferManagerEvents.ChangeIssuanceAddress;
    callback: EventCallback<GeneralTransferManagerChangeIssuanceAddressEventArgs>;
}
interface GetChangeIssuanceAddressLogsAsyncParams extends GetLogsAsyncParams {
    eventName: GeneralTransferManagerEvents.ChangeIssuanceAddress;
}
interface ChangeDefaultsSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: GeneralTransferManagerEvents.ChangeDefaults;
    callback: EventCallback<GeneralTransferManagerChangeDefaultsEventArgs>;
}
interface GetChangeDefaultsLogsAsyncParams extends GetLogsAsyncParams {
    eventName: GeneralTransferManagerEvents.ChangeDefaults;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: GeneralTransferManagerEvents.Pause;
    callback: EventCallback<GeneralTransferManagerPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: GeneralTransferManagerEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: GeneralTransferManagerEvents.Unpause;
    callback: EventCallback<GeneralTransferManagerUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: GeneralTransferManagerEvents.Unpause;
}
interface ModifyKYCDataSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: GeneralTransferManagerEvents.ModifyKYCData;
    callback: EventCallback<GeneralTransferManagerModifyKYCDataEventArgs>;
}
interface GetModifyKYCDataLogsAsyncParams extends GetLogsAsyncParams {
    eventName: GeneralTransferManagerEvents.ModifyKYCData;
}
interface ModifyInvestorFlagSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: GeneralTransferManagerEvents.ModifyInvestorFlag;
    callback: EventCallback<GeneralTransferManagerModifyInvestorFlagEventArgs>;
}
interface GetModifyInvestorFlagLogsAsyncParams extends GetLogsAsyncParams {
    eventName: GeneralTransferManagerEvents.ModifyInvestorFlag;
}
interface ModifyTransferRequirementsSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: GeneralTransferManagerEvents.ModifyTransferRequirements;
    callback: EventCallback<GeneralTransferManagerModifyTransferRequirementsEventArgs>;
}
interface GetModifyTransferRequirementsLogsAsyncParams extends GetLogsAsyncParams {
    eventName: GeneralTransferManagerEvents.ModifyTransferRequirements;
}
interface GeneralTransferManagerSubscribeAsyncParams extends Subscribe {
    (params: ChangeIssuanceAddressSubscribeAsyncParams): Promise<string>;
    (params: ChangeDefaultsSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
    (params: ModifyKYCDataSubscribeAsyncParams): Promise<string>;
    (params: ModifyInvestorFlagSubscribeAsyncParams): Promise<string>;
    (params: ModifyTransferRequirementsSubscribeAsyncParams): Promise<string>;
}
interface GetGeneralTransferManagerLogsAsyncParams extends GetLogs {
    (params: GetChangeIssuanceAddressLogsAsyncParams): Promise<LogWithDecodedArgs<GeneralTransferManagerChangeIssuanceAddressEventArgs>[]>;
    (params: GetChangeDefaultsLogsAsyncParams): Promise<LogWithDecodedArgs<GeneralTransferManagerChangeDefaultsEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<GeneralTransferManagerPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<GeneralTransferManagerUnpauseEventArgs>[]>;
    (params: GetModifyKYCDataLogsAsyncParams): Promise<LogWithDecodedArgs<GeneralTransferManagerModifyKYCDataEventArgs>[]>;
    (params: GetModifyInvestorFlagLogsAsyncParams): Promise<LogWithDecodedArgs<GeneralTransferManagerModifyInvestorFlagEventArgs>[]>;
    (params: GetModifyTransferRequirementsLogsAsyncParams): Promise<LogWithDecodedArgs<GeneralTransferManagerModifyTransferRequirementsEventArgs>[]>;
}
export declare namespace GeneralTransferManagerTransactionParams {
    interface ChangeDefaults extends ChangeDefaultsParams {
    }
    interface ChangeIssuanceAddress extends ChangeIssuanceAddressParams {
    }
    interface ModifyKYCData extends ModifyKYCDataParams {
    }
    interface ModifyKYCDataSigned extends ModifyKYCDataSignedParams {
    }
    interface ModifyInvestorFlag extends ModifyInvestorFlagParams {
    }
    interface ModifyInvestorFlagMulti extends ModifyInvestorFlagMultiParams {
    }
    interface ExecuteTransfer extends ExecuteTransferParams {
    }
    interface ModifyTransferRequirements extends ModifyTransferRequirementsParams {
    }
    interface ModifyTransferRequirementsMulti extends ModifyTransferRequirementsMultiParams {
    }
    interface ModifyKYCDataMulti extends ModifyKYCDataMultiParams {
    }
    interface ModifyKYCDataSignedMulti extends ModifyKYCDataSignedMultiParams {
    }
}
/**
 * @param address Address noncemap related to
 * @param nonce Nonce of the signature
 */
interface NonceMapParams {
    address: string;
    nonce: number;
}
/**
 * @param defaultCanSendAfter default for zero canSendAfter
 * @param defaultCanReceiveAfter default for zero canReceiveAfter
 */
interface ChangeDefaultsParams extends TxParams {
    defaultFromTime: Date;
    defaultToTime: Date;
}
/**
 * @param issuanceAddress new address for the issuance
 */
interface ChangeIssuanceAddressParams extends TxParams {
    issuanceAddress: string;
}
/**
 * @param investor is the address to whitelist
 * @param canSendAfter is the moment when the sale lockup period ends and the investor can freely sell or transfer their tokens
 * @param canReceiveAfter is the moment when the purchase lockup period ends and the investor can freely purchase or receive tokens from others
 * @param expiryTime is the moment till investors KYC will be validated. After that investor need to do re-KYC
 */
interface ModifyKYCDataParams extends TxParams {
    investor: string;
    canSendAfter: Date;
    canReceiveAfter: Date;
    expiryTime: Date;
}
/**
 * @param investor is the address to whitelist
 * @param canSendAfter is the moment when the sale lockup period ends and the investor can freely sell his tokens
 * @param canReceiveAfter is the moment when the purchase lockup period ends and the investor can freely purchase tokens from others
 * @param expiryTime is the moment till investors KYC will be validated. After that investor need to do re-KYC
 * @param validFrom is the time that this signature is valid from
 * @param validTo is the time that this signature is valid until
 * @param nonce nonce of signature (avoid replay attack)
 * @param signature issuer signature
 */
interface ModifyKYCDataSignedParams extends TxParams {
    investor: string;
    canSendAfter: Date;
    canReceiveAfter: Date;
    expiryTime: Date;
    validFrom: Date;
    validTo: Date;
    nonce: number;
    signature: string;
}
/**
 * @param investor Address
 * @param flag FlagsType
 */
interface GetInvestorFlag {
    investor: string;
    flag: FlagsType;
}
/**
 * @param investor Address
 */
interface GetInvestorFlags {
    investor: string;
}
/**
 * @param investors Address array
 */
interface GetKYCDataParams {
    investors: string[];
}
/**
 * @param investor is the address of the investor.
 * @param flag index of flag to change. flag is used to know specifics about investor like isAccredited.
 * @param value value of the flag. a flag can be true or false.
 */
interface ModifyInvestorFlagParams extends TxParams {
    investor: string;
    flag: FlagsType;
    value: boolean;
}
/**
 * @param investors list of the addresses to modify data about.
 * @param flag list of flag indexes to change. Flags are used to know specifics about investor like isAccredited.
 * @param value list of flag values to set. A flag can be true or false.
 */
interface ModifyInvestorFlagMultiParams extends TxParams {
    investors: string[];
    flag: FlagsType[];
    value: boolean[];
}
/**
 * @param from Address of the sender
 * @param to Address of the receiver
 * @param data Data value
 */
interface ExecuteTransferParams extends TxParams {
    from: string;
    to: string;
    data: string;
}
/**
 * @param transferType type of transfer (0 = General, 1 = Issuance, 2 = Redemption)
 * @param fromValidKYC defines if KYC is required for the sender
 * @param toValidKYC defines if KYC is required for the receiver
 * @param fromRestricted defines if transfer time restriction is checked for the sender
 * @param toRestricted defines if transfer time restriction is checked for the receiver
 */
interface ModifyTransferRequirementsParams extends TxParams {
    transferType: TransferType;
    fromValidKYC: boolean;
    toValidKYC: boolean;
    fromRestricted: boolean;
    toRestricted: boolean;
}
/**
 * @param transferTypes is a list of types of transfer (0 = General, 1 = Issuance, 2 = Redemption)
 * @param fromValidKYC is a list that defines if KYC is required for each sender
 * @param toValidKYC is a list that defines if KYC is required for each receiver
 * @param fromRestricted is a list that defines if transfer time restriction is checked for each sender
 * @param toRestricted is a list that defines if transfer time restriction is checked for each receiver
 */
interface ModifyTransferRequirementsMultiParams extends TxParams {
    transferTypes: TransferType[];
    fromValidKYC: boolean[];
    toValidKYC: boolean[];
    fromRestricted: boolean[];
    toRestricted: boolean[];
}
/**
 * @param investors is a list of addresses to whitelist
 * @param canSendAfter is a list of the moments when the sale lockup period ends and each investor can freely sell his tokens
 * @param canReceiveAfter is a list of the moments when the purchase lockup period ends and each investor can freely purchase tokens from others
 * @param expiryTime is a list of the moments up to which each investor's KYC will be validated. After that investor needs to re-do KYC
 */
interface ModifyKYCDataMultiParams extends TxParams {
    investors: string[];
    canSendAfter: Date[];
    canReceiveAfter: Date[];
    expiryTime: Date[];
}
/**
 * @param investors is a list of addresses to whitelist
 * @param canSendAfter is a list of the moments when the sale lockup period ends and each investor can freely sell his tokens
 * @param canReceiveAfter is a list of the moments when the purchase lockup period ends and each investor can freely purchase tokens from others
 * @param expiryTime is a list of the moments up to which each investor's KYC will be validated. After that investor needs to re-do KYC
 * @param validFrom is the time from which this signature is valid
 * @param validTo is the time until which this signature is valid
 * @param nonce nonce of signature (avoid replay attack)
 * @param signature issuer signature
 */
interface ModifyKYCDataSignedMultiParams extends TxParams {
    investors: string[];
    canSendAfter: Date[];
    canReceiveAfter: Date[];
    expiryTime: Date[];
    validFrom: Date;
    validTo: Date;
    nonce: number;
    signature: string;
}
/**
 * @param fromIndex From index in range
 * @param toIndex To index in range
 */
interface GetInvestors {
    fromIndex: number;
    toIndex: number;
}
/**
 * @param partition identifier
 * @param tokenHolder whose token amount is being queried
 * @param additionalBalance it is the `_value` that transfer during transfer/transferFrom function call
 */
interface GetTokensByPartitionParams {
    partition: Partition;
    tokenHolder: string;
    additionalBalance: BigNumber;
}
interface Defaults {
    canSendAfter: Date;
    canReceiveAfter: Date;
}
interface KYCData {
    canSendAfter: Date;
    canReceiveAfter: Date;
    expiryTime: Date;
}
interface KYCDataWithInvestor extends KYCData {
    investor: string;
}
/**
 * This class includes the functionality related to interacting with the General Transfer Manager contract.
 */
export default class GeneralTransferManagerWrapper extends ModuleWrapper {
    protected contract: Promise<GeneralTransferManagerContract>;
    /**
     * Instantiate GeneralTransferManagerWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     * @param contractFactory
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<GeneralTransferManagerContract>, contractFactory: ContractFactory);
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
     *  Map of used nonces by customer
     *  @return boolean result
     */
    nonceMap: (params: NonceMapParams) => Promise<boolean>;
    /**
     * Address from which issuances arrive
     */
    issuanceAddress: () => Promise<string>;
    /**
     *  Offset to be applied to all timings (except KYC expiry)
     *  @return canSendAfter, canReceiveAfter
     */
    defaults: () => Promise<Defaults>;
    /**
     * Used to change the default times used when canSendAfter / canReceiveAfter are zero
     */
    changeDefaults: (params: ChangeDefaultsParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to change the Issuance Address
     */
    changeIssuanceAddress: (params: ChangeIssuanceAddressParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Add or remove KYC info of an investor.
     */
    modifyKYCData: (params: ModifyKYCDataParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Gets the investor flag
     */
    getInvestorFlag: (params: GetInvestorFlag) => Promise<boolean>;
    private isFlagTrue;
    private unpackFlags;
    /**
     * Get all investor flags
     */
    getAllInvestorFlags: () => Promise<{
        investor: string;
        isAccredited: boolean;
        canNotBuyFromSTO: boolean;
        isVolRestricted: boolean;
    }[]>;
    /**
     * Gets the investor flags
     */
    getInvestorFlags: (params: GetInvestorFlags) => Promise<{
        investor: string;
        isAccredited: boolean;
        canNotBuyFromSTO: boolean;
        isVolRestricted: boolean;
    }>;
    /**
     * Returns list of all investors data
     */
    getAllKYCData: () => Promise<KYCDataWithInvestor[]>;
    /**
     * Returns list of specified investors data
     * @returns canSendAfter array, canReceiveAfter array, expiryTime array
     */
    getKYCData: (params: GetKYCDataParams) => Promise<KYCData[]>;
    /**
     * Return the amount of tokens for a given user as per the partition
     */
    getTokensByPartition: (params: GetTokensByPartitionParams) => Promise<BigNumber>;
    /**
     * Adds or removes addresses from the whitelist - can be called by anyone with a valid signature
     */
    modifyKYCDataSigned: (params: ModifyKYCDataSignedParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to modify investor Flag.
     */
    modifyInvestorFlag: (params: ModifyInvestorFlagParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to modify investor data.
     */
    modifyInvestorFlagMulti: (params: ModifyInvestorFlagMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Default implementation of verifyTransfer used by SecurityToken
     * If the transfer request comes from the STO, it only checks that the investor is in the whitelist
     * If the transfer request comes from a token holder, it checks that:
     * a) Both are on the whitelist
     * b) Seller's sale lockup period is over
     * c) Buyer's purchase lockup is over
     */
    executeTransfer: (params: ExecuteTransferParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Default implementation of verifyTransfer used by SecurityToken
     */
    verifyTransfer: (params: ExecuteTransferParams) => Promise<[BigNumber, string]>;
    /**
     * Modifies the successful checks required for a transfer to be deemed valid.
     */
    modifyTransferRequirements: (params: ModifyTransferRequirementsParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifies the successful checks required for transfers.
     */
    modifyTransferRequirementsMulti: (params: ModifyTransferRequirementsMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Add or remove KYC info of an investor.
     */
    modifyKYCDataMulti: (params: ModifyKYCDataMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Adds or removes addresses from the whitelist - can be called by anyone with a valid signature
     */
    modifyKYCDataSignedMulti: (params: ModifyKYCDataSignedMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns list of all investors
     * @return investor array
     */
    getAllInvestors: () => Promise<string[]>;
    /**
     * Returns list of investors in a range
     * @return investor array
     */
    getInvestors: (params: GetInvestors) => Promise<string[]>;
    /**
     * Return the permissions flags that are associated with general transfer manager
     * @return array of Perm type
     */
    getPermissions: () => Promise<Perm[]>;
    /**
     * Get Address bytes32 string value
     * @return bytes32 to string representation
     */
    getAddressBytes32: () => Promise<string>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: GeneralTransferManagerSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetGeneralTransferManagerLogsAsyncParams;
}
export {};
//# sourceMappingURL=general_transfer_manager_wrapper.d.ts.map