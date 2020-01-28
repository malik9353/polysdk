import { ManualApprovalTransferManagerContract, ManualApprovalTransferManagerEvents, ManualApprovalTransferManagerAddManualApprovalEventArgs, ManualApprovalTransferManagerModifyManualApprovalEventArgs, ManualApprovalTransferManagerRevokeManualApprovalEventArgs, ManualApprovalTransferManagerPauseEventArgs, ManualApprovalTransferManagerUnpauseEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs } from '../../../types';
interface AddManualApprovalSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.AddManualApproval;
    callback: EventCallback<ManualApprovalTransferManagerAddManualApprovalEventArgs>;
}
interface GetAddManualApprovalLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.AddManualApproval;
}
interface ModifyManualApprovalSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.ModifyManualApproval;
    callback: EventCallback<ManualApprovalTransferManagerModifyManualApprovalEventArgs>;
}
interface GetModifyManualApprovalLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.ModifyManualApproval;
}
interface RevokeManualApprovalSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.RevokeManualApproval;
    callback: EventCallback<ManualApprovalTransferManagerRevokeManualApprovalEventArgs>;
}
interface GetRevokeManualApprovalLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.RevokeManualApproval;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.Pause;
    callback: EventCallback<ManualApprovalTransferManagerPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.Unpause;
    callback: EventCallback<ManualApprovalTransferManagerUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ManualApprovalTransferManagerEvents.Unpause;
}
interface ManualApprovalTransferManagerSubscribeAsyncParams extends Subscribe {
    (params: AddManualApprovalSubscribeAsyncParams): Promise<string>;
    (params: ModifyManualApprovalSubscribeAsyncParams): Promise<string>;
    (params: RevokeManualApprovalSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetManualApprovalTransferManagerLogsAsyncParams extends GetLogs {
    (params: GetAddManualApprovalLogsAsyncParams): Promise<LogWithDecodedArgs<ManualApprovalTransferManagerAddManualApprovalEventArgs>[]>;
    (params: GetModifyManualApprovalLogsAsyncParams): Promise<LogWithDecodedArgs<ManualApprovalTransferManagerModifyManualApprovalEventArgs>[]>;
    (params: GetRevokeManualApprovalLogsAsyncParams): Promise<LogWithDecodedArgs<ManualApprovalTransferManagerRevokeManualApprovalEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<ManualApprovalTransferManagerPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<ManualApprovalTransferManagerUnpauseEventArgs>[]>;
}
export declare namespace ManualApprovalTransferManagerTransactionParams {
    interface AddManualApproval extends AddManualApprovalParams {
    }
    interface AddManualApprovalMulti extends AddManualApprovalMultiParams {
    }
    interface ModifyManualApproval extends ModifyManualApprovalParams {
    }
    interface ModifyManualApprovalMulti extends ModifyManualApprovalMultiParams {
    }
    interface RevokeManualApproval extends RevokeManualApprovalParams {
    }
    interface RevokeManualApprovalMulti extends RevokeManualApprovalMultiParams {
    }
}
/**
 * @param index
 */
interface ApprovalsParams {
    index: number;
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
 * @param from is the address from which transfers are approved
 * @param to is the address to which transfers are approved
 * @param allowance is the approved amount of tokens
 * @param expiryTime is the time until which the transfer is allowed
 * @param description Description about the manual approval
 */
interface AddManualApprovalParams extends TxParams {
    from: string;
    to: string;
    allowance: BigNumber;
    expiryTime: Date;
    description: string;
}
/**
 * @param from is the address array from which transfers are approved
 * @param to is the address array to which transfers are approved
 * @param allowances is the array of approved amounts
 * @param expiryTimes is the array of the times until which eath transfer is allowed
 * @param descriptions is the description array for these manual approvals
 */
interface AddManualApprovalMultiParams extends TxParams {
    from: string[];
    to: string[];
    allowances: BigNumber[];
    expiryTimes: Date[];
    descriptions: string[];
}
/**
 * @param from is the address from which transfers are approved
 * @param to is the address to which transfers are approved
 * @param expiryTime is the time until which the transfer is allowed
 * @param changeInAllowance is the change in allowance
 * @param description Description about the manual approval
 * @param increase tells whether the allowances will be increased (true) or decreased (false).
 * or any value when there is no change in allowances
 */
interface ModifyManualApprovalParams extends TxParams {
    from: string;
    to: string;
    expiryTime: Date;
    changeInAllowance: BigNumber;
    description: string;
    increase: boolean;
}
/**
 * @param from is the address array from which transfers are approved
 * @param to is the address array to which transfers are approved
 * @param expiryTimes is the array of the times until which each transfer is allowed
 * @param changeInAllowance is the array of change in allowances
 * @param descriptions is the description array for these manual approvals
 * @param increase Array of bools that tells whether the allowances will be increased (true) or decreased (false).
 * or any value when there is no change in allowances
 */
interface ModifyManualApprovalMultiParams extends TxParams {
    from: string[];
    to: string[];
    expiryTimes: Date[];
    changedAllowances: BigNumber[];
    descriptions: string[];
    increase: boolean[];
}
/**
 * @param from is the address from which transfers are approved
 * @param to is the address to which transfers are approved
 */
interface RevokeManualApprovalParams extends TxParams {
    from: string;
    to: string;
}
/**
 * @param from is the address array from which transfers are approved
 * @param to is the address array to which transfers are approved
 */
interface RevokeManualApprovalMultiParams extends TxParams {
    from: string[];
    to: string[];
}
/**
 * @param user Address of the holder corresponds to whom list of manual approvals
 * need to return
 */
interface GetActiveApprovalsToUserParams {
    user: string;
}
/**
 * @param from Address of the sender
 * @param to Address of the receiver
 */
interface GetApprovalDetailsParams {
    from: string;
    to: string;
}
interface Approval {
    /**  */
    from: string;
    /**  */
    to: string;
    /**  */
    allowance: BigNumber;
    /**  */
    expiryTime: Date;
    /**  */
    description: string;
}
/**
 * This class includes the functionality related to interacting with the ManualApproval Transfer Manager contract.
 */
export default class ManualApprovalTransferManagerWrapper extends ModuleWrapper {
    protected contract: Promise<ManualApprovalTransferManagerContract>;
    /**
     * Instantiate ManualApprovalTransferManagerWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<ManualApprovalTransferManagerContract>, contractFactory: ContractFactory);
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
     *  An array to track all approvals. It is an unbounded array but it's not a problem as
     * it is never looped through in an on chain call. It is defined as an Array instead of mapping
     * just to make it easier for users to fetch list of all approvals through constant functions.
     */
    approvals: (params: ApprovalsParams) => Promise<Approval>;
    /**
     * This function returns the signature of configure function
     */
    getInitFunction: () => Promise<string>;
    /**
     * Used to verify the transfer transaction (View)
     *  @return boolean transfer result, address
     */
    verifyTransfer: (params: VerifyTransferParams) => Promise<{
        transferResult: import("../../../types").TransferResult;
        address: string;
    }>;
    /**
     * Adds a pair of addresses to manual approvals
     */
    addManualApproval: (params: AddManualApprovalParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Adds multiple manual approvals in batch
     */
    addManualApprovalMulti: (params: AddManualApprovalMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modify the existing manual approvals
     */
    modifyManualApproval: (params: ModifyManualApprovalParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Adds multiple manual approvals in batch
     */
    modifyManualApprovalMulti: (params: ModifyManualApprovalMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Removes pairs of addresses from manual approvals
     */
    revokeManualApproval: (params: RevokeManualApprovalParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Removes multiple pairs of addresses from manual approvals
     */
    revokeManualApprovalMulti: (params: RevokeManualApprovalMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns the all active approvals corresponds to an address
     * @return addresses from, addresses to, allowances provided to the approvals, expiry times provided to the
     * approvals, descriptions provided to the approvals
     */
    getActiveApprovalsToUser: (params: GetActiveApprovalsToUserParams) => Promise<Approval[]>;
    /**
     * Get the details of the approval corresponds to from & to addresses
     * @return expiryTime of the approval, allowance provided to the approval, Description provided to the approval
     */
    getApprovalDetails: (params: GetApprovalDetailsParams) => Promise<Approval>;
    /**
     * Returns the current number of active approvals
     */
    getTotalApprovalsLength: () => Promise<number>;
    /**
     * Get the details of all approvals
     * @return addresses from, addresses to, allowances provided to the approvals, expiry times provided to the
     * approvals, descriptions provided to the approvals
     */
    getAllApprovals: () => Promise<Approval[]>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: ManualApprovalTransferManagerSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetManualApprovalTransferManagerLogsAsyncParams;
    private checkApprovalDoesNotExist;
    private checkApprovalDoesExist;
}
export {};
//# sourceMappingURL=manual_approval_transfer_manager_wrapper.d.ts.map