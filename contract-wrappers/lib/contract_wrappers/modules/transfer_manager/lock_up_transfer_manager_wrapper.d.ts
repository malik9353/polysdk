import { BigNumber, LockUpTransferManagerAddLockUpToUserEventArgs, LockUpTransferManagerAddNewLockUpTypeEventArgs, LockUpTransferManagerContract, LockUpTransferManagerEvents, LockUpTransferManagerModifyLockUpTypeEventArgs, LockUpTransferManagerPauseEventArgs, LockUpTransferManagerRemoveLockUpFromUserEventArgs, LockUpTransferManagerRemoveLockUpTypeEventArgs, LockUpTransferManagerUnpauseEventArgs, LogWithDecodedArgs, Web3Wrapper } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { EventCallback, GetLogs, GetLogsAsyncParams, Partition, Perm, Subscribe, SubscribeAsyncParams, TransferResult, TxParams } from '../../../types';
interface AddLockUpToUserSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: LockUpTransferManagerEvents.AddLockUpToUser;
    callback: EventCallback<LockUpTransferManagerAddLockUpToUserEventArgs>;
}
interface GetAddLockUpToUserLogsAsyncParams extends GetLogsAsyncParams {
    eventName: LockUpTransferManagerEvents.AddLockUpToUser;
}
interface RemoveLockUpFromUserSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: LockUpTransferManagerEvents.RemoveLockUpFromUser;
    callback: EventCallback<LockUpTransferManagerRemoveLockUpFromUserEventArgs>;
}
interface GetRemoveLockUpFromUserLogsAsyncParams extends GetLogsAsyncParams {
    eventName: LockUpTransferManagerEvents.RemoveLockUpFromUser;
}
interface ModifyLockUpTypeSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: LockUpTransferManagerEvents.ModifyLockUpType;
    callback: EventCallback<LockUpTransferManagerModifyLockUpTypeEventArgs>;
}
interface GetModifyLockUpTypeLogsAsyncParams extends GetLogsAsyncParams {
    eventName: LockUpTransferManagerEvents.ModifyLockUpType;
}
interface AddNewLockUpTypeSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: LockUpTransferManagerEvents.AddNewLockUpType;
    callback: EventCallback<LockUpTransferManagerAddNewLockUpTypeEventArgs>;
}
interface GetAddNewLockUpTypeLogsAsyncParams extends GetLogsAsyncParams {
    eventName: LockUpTransferManagerEvents.AddNewLockUpType;
}
interface RemoveLockUpTypeSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: LockUpTransferManagerEvents.RemoveLockUpType;
    callback: EventCallback<LockUpTransferManagerRemoveLockUpTypeEventArgs>;
}
interface GetRemoveLockUpTypeLogsAsyncParams extends GetLogsAsyncParams {
    eventName: LockUpTransferManagerEvents.RemoveLockUpType;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: LockUpTransferManagerEvents.Pause;
    callback: EventCallback<LockUpTransferManagerPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: LockUpTransferManagerEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: LockUpTransferManagerEvents.Unpause;
    callback: EventCallback<LockUpTransferManagerUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: LockUpTransferManagerEvents.Unpause;
}
interface LockUpTransferManagerSubscribeAsyncParams extends Subscribe {
    (params: AddLockUpToUserSubscribeAsyncParams): Promise<string>;
    (params: RemoveLockUpFromUserSubscribeAsyncParams): Promise<string>;
    (params: ModifyLockUpTypeSubscribeAsyncParams): Promise<string>;
    (params: AddNewLockUpTypeSubscribeAsyncParams): Promise<string>;
    (params: RemoveLockUpTypeSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetLockUpTransferManagerLogsAsyncParams extends GetLogs {
    (params: GetAddLockUpToUserLogsAsyncParams): Promise<LogWithDecodedArgs<LockUpTransferManagerAddLockUpToUserEventArgs>[]>;
    (params: GetRemoveLockUpFromUserLogsAsyncParams): Promise<LogWithDecodedArgs<LockUpTransferManagerRemoveLockUpFromUserEventArgs>[]>;
    (params: GetModifyLockUpTypeLogsAsyncParams): Promise<LogWithDecodedArgs<LockUpTransferManagerModifyLockUpTypeEventArgs>[]>;
    (params: GetAddNewLockUpTypeLogsAsyncParams): Promise<LogWithDecodedArgs<LockUpTransferManagerAddNewLockUpTypeEventArgs>[]>;
    (params: GetRemoveLockUpTypeLogsAsyncParams): Promise<LogWithDecodedArgs<LockUpTransferManagerRemoveLockUpTypeEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<LockUpTransferManagerPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<LockUpTransferManagerUnpauseEventArgs>[]>;
}
export declare namespace LockUpTransferManagerTransactionParams {
    interface AddNewLockUpType extends LockUpTypeParams {
    }
    interface ModifyLockUpType extends LockUpTypeParams {
    }
    interface AddNewLockUpTypeMulti extends LockUpTypeMultiParams {
    }
    interface ModifyLockUpTypeMulti extends LockUpTypeMultiParams {
    }
    interface AddLockUpByName extends LockUpByNameParams {
    }
    interface AddLockUpByNameMulti extends LockUpByNameMultiParams {
    }
    interface AddNewLockUpToUser extends AddNewLockUpToUserParams {
    }
    interface AddNewLockUpToUserMulti extends AddNewLockUpToUserMultiParams {
    }
    interface RemoveLockUpFromUser extends RemoveLockUpFromUserParams {
    }
    interface RemoveLockUpFromUserMulti extends RemoveLockUpFromUserMultiParams {
    }
    interface RemoveLockUpType extends RemoveLockUpTypeParams {
    }
    interface RemoveLockUpTypeMulti extends RemoveLockUpTypeMultiParams {
    }
}
/**
 * @param lockupName The name of the lockup
 */
interface LockupsParams {
    lockupName: string;
}
/**
 * @param user Address of the user
 */
interface UserAddressParams {
    user: string;
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
 * @param from Address of the sender
 * @param to Address of the receiver
 * @param amount The amount of tokens to transfer
 * @param data
 */
interface VerifyTransferParams {
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
}
/**
 * @param lockupAmount Amount of tokens that need to be locked.
 * @param startTime When this lockup starts (seconds)
 * @param lockUpPeriodSeconds Total period of lockup (seconds)
 * @param releaseFrequencySeconds How often to release a tranche of tokens (seconds)
 * @param lockupName Name of the lockup
 */
interface LockUpTypeParams extends TxParams {
    lockupAmount: BigNumber;
    startTime: Date;
    lockUpPeriodSeconds: number;
    releaseFrequenciesSeconds: number;
    lockupName: string;
}
/**
 * @param lockupAmounts Array of amount of tokens that need to lock.
 * @param startTimes Array of startTimes when this lockup starts (seconds)
 * @param lockUpPeriodsSeconds Array of total period of lockup (seconds)
 * @param releaseFrequenciesSeconds Array of how often to release a tranche of tokens (seconds)
 * @param lockupNames Array of names of the lockup
 */
interface LockUpTypeMultiParams extends TxParams {
    lockupAmounts: BigNumber[];
    startTimes: Date[];
    lockUpPeriodSeconds: number[];
    releaseFrequenciesSeconds: number[];
    lockupNames: string[];
}
/**
 * @param userAddress Address of the user
 * @param lockupName Name of the lockup
 */
interface LockUpByNameParams extends TxParams {
    userAddress: string;
    lockupName: string;
}
/**
 * @param userAddresses Array of addresses of the users
 * @param lockupNames Array of names of the lockups
 */
interface LockUpByNameMultiParams extends TxParams {
    userAddresses: string[];
    lockupNames: string[];
}
/**
 * @param userAddress Address of the user whose tokens should be locked up
 * @param lockupAmount Amount of tokens that need to lock.
 * @param startTime When this lockup starts (seconds)
 * @param lockUpPeriodSeconds Total period of lockup (seconds)
 * @param releaseFrequencySeconds How often to release a tranche of tokens (seconds)
 * @param lockupName Name of the lockup
 */
interface AddNewLockUpToUserParams extends TxParams {
    userAddress: string;
    lockupAmount: BigNumber;
    startTime: Date;
    lockUpPeriodSeconds: number;
    releaseFrequenciesSeconds: number;
    lockupName: string;
}
/**
 * @param userAddresses Array of address of the user whose tokens should be locked up
 * @param lockupAmounts Array of the amounts that need to be locked for the different addresses.
 * @param startTimes Array of When this lockup starts (seconds)
 * @param lockUpPeriodsSeconds Array of total periods of lockup (seconds)
 * @param releaseFrequenciesSeconds Array of how often to release a tranche of tokens (seconds)
 * @param lockupNames Array of names of the lockup
 */
interface AddNewLockUpToUserMultiParams extends TxParams {
    userAddresses: string[];
    lockupAmounts: BigNumber[];
    startTimes: Date[];
    lockUpPeriodSeconds: number[];
    releaseFrequenciesSeconds: number[];
    lockupNames: string[];
}
/**
 * @param userAddress Address of the user whose tokens are locked up
 * @param lockupName Name of the lockup need to be removed.
 */
interface RemoveLockUpFromUserParams extends TxParams {
    userAddress: string;
    lockupName: string;
}
/**
 * @param userAddresses Array of addresses of the user whose tokens are locked up
 * @param lockupNames Array of the names of the lockup that needs to be removed.
 */
interface RemoveLockUpFromUserMultiParams extends TxParams {
    userAddresses: string[];
    lockupNames: string[];
}
/**
 * @param lockupName Name of the lockup
 */
interface RemoveLockUpTypeParams extends TxParams {
    lockupName: string;
}
/**
 * @param lockupNames Array of the lockup names.
 */
interface RemoveLockUpTypeMultiParams extends TxParams {
    lockupNames: string[];
}
/**
 * @param lockupAmount Amount of tokens locked up
 * @param startTime Date lockup will start
 * @param lockupPeriodSeconds Number of seconds tokens will be locked
 * @param releaseFrequencySeconds Number of seconds until tranche of tokens unlocked
 */
interface LockUp {
    lockupAmount: BigNumber;
    startTime: Date;
    lockUpPeriodSeconds: number;
    releaseFrequencySeconds: number;
}
/**
 * @param unlockedAmount Amount of tokens already unlocked
 */
interface LockUpWithAmount extends LockUp {
    unlockedAmount: BigNumber;
}
/**
 * @param lockupName The name of the lockup
 */
interface LockUpData extends LockUpWithAmount {
    lockupName: string;
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
 * This class includes the functionality related to interacting with the LockUp Transfer Manager contract.
 */
export default class LockUpTransferManagerWrapper extends ModuleWrapper {
    protected contract: Promise<LockUpTransferManagerContract>;
    /**
     * Instantiate LockUpTransferManagerWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     * @param contractFactory
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<LockUpTransferManagerContract>, contractFactory: ContractFactory);
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
     *  mapping used to store the lockup details corresponds to lockup name
     */
    lockups: (params: LockupsParams) => Promise<LockUp>;
    /**
     * Get a specific element in a user's lockups array given the user's address and the element index
     */
    getLockUp: (params: LockupsParams) => Promise<LockUpWithAmount>;
    /**
     * Return the data of all the lockups
     */
    getAllLockupData: () => Promise<LockUpData[]>;
    /**
     * Get the list of user addresses of a specific lockup type by name
     * @return address List of users associated with the given lockup name
     */
    getListOfAddresses: (params: LockupsParams) => Promise<string[]>;
    /**
     * Get the list of all lockups names
     * @return bytes32 Array of lockups names
     */
    getAllLockups: () => Promise<string[]>;
    /**
     * Get the list of the lockups for a given user
     * @return bytes32 List of lockups names associated with the given address
     */
    getLockupsNamesToUser: (params: UserAddressParams) => Promise<string[]>;
    /**
     * Use to get the total locked tokens for a given user
     * @return uint256 Total locked tokens amount
     */
    getLockedTokenToUser: (params: UserAddressParams) => Promise<BigNumber>;
    /**
     * Return the amount of tokens for a given user as per the partition
     * @return Amount of tokens
     */
    getTokensByPartition: (params: GetTokensByPartitionParams) => Promise<BigNumber>;
    /**
     * Returns the permissions flags that are associated with Percentage transfer Manager
     */
    getPermissions: () => Promise<Perm[]>;
    /**
     *  Used to verify the transfer transaction and prevent locked up tokens from being transferred
     *  @return boolean transfer result, address
     */
    verifyTransfer: (params: VerifyTransferParams) => Promise<VerifyTransfer>;
    /**
     * Use to add the new lockup type
     */
    addNewLockUpType: (params: LockUpTypeParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to add multiple new lockup types
     */
    addNewLockUpTypeMulti: (params: LockUpTypeMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Add a lockup to a specific user
     */
    addLockUpByName: (params: LockUpByNameParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Add multiple lockups to multiple users
     */
    addLockUpByNameMulti: (params: LockUpByNameMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Lets the admin create a volume restriction lockup for a given address.
     */
    addNewLockUpToUser: (params: AddNewLockUpToUserParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Lets the admin create multiple volume restriction lockups for multiple given addresses.
     */
    addNewLockUpToUserMulti: (params: AddNewLockUpToUserMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Lets the admin remove a user from a lock up
     */
    removeLockUpFromUser: (params: RemoveLockUpFromUserParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Use to remove the lockup for multiple users
     */
    removeLockUpFromUserMulti: (params: RemoveLockUpFromUserMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to remove the lockup type
     */
    removeLockupType: (params: RemoveLockUpTypeParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to remove the multiple lockup type
     */
    removeLockupTypeMulti: (params: RemoveLockUpTypeMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Lets the admin modify a lockup.
     */
    modifyLockUpType: (params: LockUpTypeParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Lets the admin modify a volume restriction lockup for multiple addresses.
     */
    modifyLockUpTypeMulti: (params: LockUpTypeMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: LockUpTransferManagerSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetLockUpTransferManagerLogsAsyncParams;
    private checkAddNewLockUpType;
    private checkModifyLockUpType;
    private checkLockUpTypeInformation;
    private checkAddLockUpByName;
    private checkRemoveLockUpFromUser;
    private checkRemoveLockUpType;
}
export {};
//# sourceMappingURL=lock_up_transfer_manager_wrapper.d.ts.map