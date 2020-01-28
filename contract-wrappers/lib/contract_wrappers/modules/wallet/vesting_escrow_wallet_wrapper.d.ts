import { VestingEscrowWalletContract, VestingEscrowWalletEvents, VestingEscrowWalletAddScheduleEventArgs, VestingEscrowWalletModifyScheduleEventArgs, VestingEscrowWalletRevokeAllSchedulesEventArgs, VestingEscrowWalletRevokeScheduleEventArgs, VestingEscrowWalletDepositTokensEventArgs, VestingEscrowWalletSendToTreasuryEventArgs, VestingEscrowWalletSendTokensEventArgs, VestingEscrowWalletAddTemplateEventArgs, VestingEscrowWalletRemoveTemplateEventArgs, VestingEscrowWalletTreasuryWalletChangedEventArgs, VestingEscrowWalletPauseEventArgs, VestingEscrowWalletUnpauseEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs } from '../../../types';
interface AddScheduleSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.AddSchedule;
    callback: EventCallback<VestingEscrowWalletAddScheduleEventArgs>;
}
interface GetAddScheduleLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.AddSchedule;
}
interface ModifyScheduleSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.ModifySchedule;
    callback: EventCallback<VestingEscrowWalletModifyScheduleEventArgs>;
}
interface GetModifyScheduleLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.ModifySchedule;
}
interface RevokeAllSchedulesSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.RevokeAllSchedules;
    callback: EventCallback<VestingEscrowWalletRevokeAllSchedulesEventArgs>;
}
interface GetRevokeAllSchedulesLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.RevokeAllSchedules;
}
interface RevokeScheduleSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.RevokeSchedule;
    callback: EventCallback<VestingEscrowWalletRevokeScheduleEventArgs>;
}
interface GetRevokeScheduleLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.RevokeSchedule;
}
interface DepositTokensSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.DepositTokens;
    callback: EventCallback<VestingEscrowWalletDepositTokensEventArgs>;
}
interface GetDepositTokensLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.DepositTokens;
}
interface SendToTreasurySubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.SendToTreasury;
    callback: EventCallback<VestingEscrowWalletSendToTreasuryEventArgs>;
}
interface GetSendToTreasuryLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.SendToTreasury;
}
interface SendTokensSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.SendTokens;
    callback: EventCallback<VestingEscrowWalletSendTokensEventArgs>;
}
interface GetSendTokensLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.SendTokens;
}
interface AddTemplateSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.AddTemplate;
    callback: EventCallback<VestingEscrowWalletAddTemplateEventArgs>;
}
interface GetAddTemplateLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.AddTemplate;
}
interface RemoveTemplateSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.RemoveTemplate;
    callback: EventCallback<VestingEscrowWalletRemoveTemplateEventArgs>;
}
interface GetRemoveTemplateLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.RemoveTemplate;
}
interface TreasuryWalletChangedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.TreasuryWalletChanged;
    callback: EventCallback<VestingEscrowWalletTreasuryWalletChangedEventArgs>;
}
interface GetTreasuryWalletChangedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.TreasuryWalletChanged;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.Pause;
    callback: EventCallback<VestingEscrowWalletPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: VestingEscrowWalletEvents.Unpause;
    callback: EventCallback<VestingEscrowWalletUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: VestingEscrowWalletEvents.Unpause;
}
interface VestingEscrowWalletSubscribeAsyncParams extends Subscribe {
    (params: AddScheduleSubscribeAsyncParams): Promise<string>;
    (params: ModifyScheduleSubscribeAsyncParams): Promise<string>;
    (params: RevokeAllSchedulesSubscribeAsyncParams): Promise<string>;
    (params: RevokeScheduleSubscribeAsyncParams): Promise<string>;
    (params: DepositTokensSubscribeAsyncParams): Promise<string>;
    (params: SendToTreasurySubscribeAsyncParams): Promise<string>;
    (params: SendTokensSubscribeAsyncParams): Promise<string>;
    (params: AddTemplateSubscribeAsyncParams): Promise<string>;
    (params: RemoveTemplateSubscribeAsyncParams): Promise<string>;
    (params: TreasuryWalletChangedSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetVestingEscrowWalletLogsAsyncParams extends GetLogs {
    (params: GetAddScheduleLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletAddScheduleEventArgs>[]>;
    (params: GetModifyScheduleLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletModifyScheduleEventArgs>[]>;
    (params: GetRevokeAllSchedulesLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletRevokeAllSchedulesEventArgs>[]>;
    (params: GetRevokeScheduleLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletRevokeScheduleEventArgs>[]>;
    (params: GetDepositTokensLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletDepositTokensEventArgs>[]>;
    (params: GetSendToTreasuryLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletSendToTreasuryEventArgs>[]>;
    (params: GetSendTokensLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletSendTokensEventArgs>[]>;
    (params: GetAddTemplateLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletAddTemplateEventArgs>[]>;
    (params: GetRemoveTemplateLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletRemoveTemplateEventArgs>[]>;
    (params: GetTreasuryWalletChangedLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletTreasuryWalletChangedEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<VestingEscrowWalletUnpauseEventArgs>[]>;
}
export declare namespace VestingEscrowWalletTransactionParams {
    interface ChangeTreasuryWallet extends ChangeTreasuryWalletParams {
    }
    interface DepositTokens extends DepositTokensParams {
    }
    interface SendToTreasury extends SendToTreasuryParams {
    }
    interface PushAvailableTokens extends PushAvailableTokensParams {
    }
    interface AddTemplate extends AddTemplateParams {
    }
    interface RemoveTemplate extends RemoveTemplateParams {
    }
    interface AddSchedule extends AddScheduleParams {
    }
    interface AddScheduleFromTemplate extends AddScheduleFromTemplateParams {
    }
    interface ModifySchedule extends ModifyScheduleParams {
    }
    interface RevokeSchedule extends RevokeScheduleParams {
    }
    interface RevokeAllSchedules extends RevokeAllSchedulesParams {
    }
    interface PushAvailableTokensMulti extends PushAvailableTokensMultiParams {
    }
    interface AddScheduleMulti extends AddScheduleMultiParams {
    }
    interface AddScheduleFromTemplateMulti extends AddScheduleFromTemplateMultiParams {
    }
    interface RevokeSchedulesMulti extends RevokeSchedulesMultiParams {
    }
    interface ModifyScheduleMulti extends ModifyScheduleMultiParams {
    }
}
/**
 * @param beneficiary Beneficiary
 * @param index Index of schedule
 */
interface SchedulesParams {
    beneficiary: string;
    index: number;
}
/**
 * @param index Index of template
 */
interface TemplateNamesParams {
    index: number;
}
/**
 * @param index Index of beneficiary
 */
interface BeneficiariesParams {
    index: number;
}
/**
 * @param newTreasuryWallet Address of the treasury wallet
 */
interface ChangeTreasuryWalletParams extends TxParams {
    newTreasuryWallet: string;
}
/**
 * @param numberOfTokens Number of tokens that should be deposited
 */
interface DepositTokensParams extends TxParams {
    numberOfTokens: BigNumber;
}
/**
 * @param amount Amount of tokens that should be send to the treasury wallet
 */
interface SendToTreasuryParams extends TxParams {
    amount: BigNumber;
}
/**
 * @param beneficiary Address of the beneficiary who will receive tokens
 */
interface PushAvailableTokensParams extends TxParams {
    beneficiary: string;
}
/**
 * @param name Name of the template will be created
 * @param numberOfTokens Number of tokens that should be assigned to schedule
 * @param duration Duration of the vesting schedule in seconds
 * @param frequency Frequency of the vesting schedule in seconds
 */
interface AddTemplateParams extends TxParams {
    name: string;
    numberOfTokens: BigNumber;
    duration: number;
    frequency: number;
}
/**
 * @param name Name of the template that will be removed
 */
interface RemoveTemplateParams extends TxParams {
    name: string;
}
/**
 * @param beneficiary Address of the beneficiary for whom it is scheduled
 * @param templateName Name of the template that will be created
 * @param numberOfTokens Total number of tokens for created schedule
 * @param duration Duration of the created vesting schedule
 * @param frequency Frequency of the created vesting schedule
 * @param startTime Start time of the created vesting schedule
 */
interface AddScheduleParams extends TxParams {
    beneficiary: string;
    templateName: string;
    numberOfTokens: BigNumber;
    duration: number;
    frequency: number;
    startTime: Date;
}
/**
 * @param beneficiary Address of the beneficiary for whom it is scheduled
 * @param templateName Name of the exists template
 * @param startTime Start time of the created vesting schedule
 */
interface AddScheduleFromTemplateParams extends TxParams {
    beneficiary: string;
    templateName: string;
    startTime: Date;
}
/**
 * @param beneficiary Address of the beneficiary for whom it is modified
 * @param templateName Name of the template was used for schedule creation
 * @param startTime Start time of the created vesting schedule
 */
interface ModifyScheduleParams extends TxParams {
    beneficiary: string;
    templateName: string;
    startTime: Date;
}
/**
 * @param beneficiary Address of the beneficiary for whom it is revoked
 * @param templateName Name of the template was used for schedule creation
 */
interface RevokeScheduleParams extends TxParams {
    beneficiary: string;
    templateName: string;
}
/**
 * @param beneficiary Address of the beneficiary for whom all schedules will be revoked
 */
interface RevokeAllSchedulesParams extends TxParams {
    beneficiary: string;
}
/**
 * @param beneficiary Address of the beneficiary who will receive tokens
 * @param templateName Name of the template was used for schedule creation
 */
interface GetScheduleParams {
    beneficiary: string;
    templateName: string;
}
/**
 * @param beneficiary Address of the beneficiary
 */
interface GetTemplateNamesParams {
    beneficiary: string;
}
/**
 * @param beneficiary Address of the beneficiary
 */
interface GetScheduleCountParams {
    beneficiary: string;
}
/**
 * @param fromIndex Start index of array of beneficiary's addresses
 * @param toIndex End index of array of beneficiary's addresses
 */
interface PushAvailableTokensMultiParams extends TxParams {
    fromIndex: number;
    toIndex: number;
}
/**
 * @param beneficiaries Array of the beneficiary's addresses
 * @param templateNames Array of the template names
 * @param numberOfTokens Array of number of tokens should be assigned to schedules
 * @param durations Array of the vesting duration
 * @param frequencies Array of the vesting frequency
 * @param startTimes Array of the vesting start time
 */
interface AddScheduleMultiParams extends TxParams {
    beneficiaries: string[];
    templateNames: string[];
    numberOfTokens: BigNumber[];
    durations: number[];
    frequencies: number[];
    startTimes: Date[];
}
/**
 * @param beneficiaries Array of beneficiary's addresses
 * @param templateNames Array of the template names were used for schedule creation
 * @param startTimes Array of the vesting start time
 */
interface AddScheduleFromTemplateMultiParams extends TxParams {
    beneficiaries: string[];
    templateNames: string[];
    startTimes: Date[];
}
/**
 * @param beneficiaries Array of the beneficiary's addresses
 */
interface RevokeSchedulesMultiParams extends TxParams {
    beneficiaries: string[];
}
/**
 * @param beneficiaries Array of the beneficiary's addresses
 * @param templateNames Array of the template names
 * @param startTimes Array of the vesting start time
 */
interface ModifyScheduleMultiParams extends TxParams {
    beneficiaries: string[];
    templateNames: string[];
    startTimes: Date[];
}
declare enum StateStatus {
    Created = 0,
    Started = 1,
    Completed = 2
}
interface Schedule {
    templateName: string;
    claimedTokens: number;
    startTime: Date;
}
interface BeneficiarySchedule {
    numberOfTokens: BigNumber;
    duration: number;
    frequency: number;
    startTime: Date;
    claimedTokens: number;
    state: StateStatus;
}
/**
 * This class includes the functionality related to interacting with the Vesting Escrow Wallet contract.
 */
export default class VestingEscrowWalletWrapper extends ModuleWrapper {
    protected contract: Promise<VestingEscrowWalletContract>;
    /**
     * Instantiate VestingEscrowWalletWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     * @param contractFactory
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<VestingEscrowWalletContract>, contractFactory: ContractFactory);
    /**
     *  Unpause the module
     */
    unpause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     *  Check if module paused
     *  @return boolean is paused
     */
    paused: () => Promise<boolean>;
    /**
     *  Pause the module
     */
    pause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Address of the Treasury wallet. All of the unassigned token will transfer to that address.
     * @return address
     */
    treasuryWallet: () => Promise<string>;
    /**
     * Number of tokens that are hold by the `this` contract but are unassigned to any schedule
     * @return unassigned token value
     */
    unassignedTokens: () => Promise<BigNumber>;
    /**
     * Holds schedules array corresponds to the affiliate/employee address
     * @return templateName, claimedTokens amount, startTime date
     */
    schedules: (params: SchedulesParams) => Promise<Schedule>;
    /**
     * List of all template names
     * @return name string
     */
    templateNames: (params: TemplateNamesParams) => Promise<string>;
    /**
     * List of all beneficiaries who have the schedules running/completed/created
     * @return  beneficiary address
     */
    beneficiaries: (params: BeneficiariesParams) => Promise<string>;
    /**
     * Used to change the treasury wallet address
     */
    changeTreasuryWallet: (params: ChangeTreasuryWalletParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to deposit tokens from treasury wallet to the vesting escrow wallet
     */
    depositTokens: (params: DepositTokensParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Sends unassigned tokens to the treasury wallet
     */
    sendToTreasury: (params: SendToTreasuryParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns the treasury wallet address
     * @return treasury wallet address
     */
    getTreasuryWallet: () => Promise<string>;
    /**
     * Pushes available tokens to the beneficiary's address
     */
    pushAvailableTokens: (params: PushAvailableTokensParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to withdraw available tokens by beneficiary
     */
    pullAvailableTokens: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Adds template that can be used for creating schedule
     */
    addTemplate: (params: AddTemplateParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Removes template with a given name
     */
    removeTemplate: (params: RemoveTemplateParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns the amount of templates that can be used for creating schedules
     * @return Amount of templates
     */
    getTemplateCount: () => Promise<number>;
    /**
     * Gets the list of template names that can be used for creating schedules
     * @return Array of all template names
     */
    getAllTemplateNames: () => Promise<string[]>;
    /**
     * Adds a vesting schedule for the beneficiary address
     */
    addSchedule: (params: AddScheduleParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Adds a vesting schedule for the beneficiary address from a template
     */
    addScheduleFromTemplate: (params: AddScheduleFromTemplateParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifies a vesting schedule for a beneficiary address
     */
    modifySchedule: (params: ModifyScheduleParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Revokes a vesting schedule with a given template name for a given beneficiary
     */
    revokeSchedule: (params: RevokeScheduleParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Revokes all vesting schedules for a given beneficiary address
     */
    revokeAllSchedules: (params: RevokeAllSchedulesParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns a schedule with a given template name for a given beneficiary address
     * @return beneficiary's schedule data (numberOfTokens, duration, frequency, startTime, claimedTokens, state)
     */
    getSchedule: (params: GetScheduleParams) => Promise<BeneficiarySchedule>;
    /**
     * Returns a list of the template names for a given beneficiary address
     * @return List of template names used for the beneficiary address' schedules
     */
    getTemplateNames: (params: GetTemplateNamesParams) => Promise<string[]>;
    /**
     * Returns amount of schedules for a given beneficiary address
     * @return Amount of schedules
     */
    getScheduleCount: (params: GetScheduleCountParams) => Promise<number>;
    /**
     * Used to bulk add vesting schedules for each of the beneficiaries
     */
    pushAvailableTokensMulti: (params: PushAvailableTokensMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to bulk add vesting schedules for each of beneficiary
     */
    addScheduleMulti: (params: AddScheduleMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to bulk add vesting schedules from templates for each of the beneficiary addresses
     */
    addScheduleFromTemplateMulti: (params: AddScheduleFromTemplateMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to bulk revoke vesting schedules for each of the beneficiaries
     */
    revokeSchedulesMulti: (params: RevokeSchedulesMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to bulk modify vesting schedules for each of the beneficiaries
     */
    modifyScheduleMulti: (params: ModifyScheduleMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    private validateTemplate;
    private validateAddSchedule;
    private validateAddScheduleFromTemplate;
    private checkSchedule;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: VestingEscrowWalletSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetVestingEscrowWalletLogsAsyncParams;
}
export {};
//# sourceMappingURL=vesting_escrow_wallet_wrapper.d.ts.map