import { EtherDividendCheckpointContract, EtherDividendCheckpointEvents, EtherDividendCheckpointEtherDividendDepositedEventArgs, EtherDividendCheckpointEtherDividendClaimedEventArgs, EtherDividendCheckpointEtherDividendReclaimedEventArgs, EtherDividendCheckpointEtherDividendClaimFailedEventArgs, EtherDividendCheckpointEtherDividendWithholdingWithdrawnEventArgs, EtherDividendCheckpointSetDefaultExcludedAddressesEventArgs, EtherDividendCheckpointSetWithholdingEventArgs, EtherDividendCheckpointSetWithholdingFixedEventArgs, EtherDividendCheckpointSetWalletEventArgs, EtherDividendCheckpointUpdateDividendDatesEventArgs, EtherDividendCheckpointPauseEventArgs, EtherDividendCheckpointUnpauseEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import DividendCheckpointWrapper from './dividend_checkpoint_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs } from '../../../types';
interface EtherDividendDepositedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendDeposited;
    callback: EventCallback<EtherDividendCheckpointEtherDividendDepositedEventArgs>;
}
interface GetEtherDividendDepositedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendDeposited;
}
interface EtherDividendClaimedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendClaimed;
    callback: EventCallback<EtherDividendCheckpointEtherDividendClaimedEventArgs>;
}
interface GetEtherDividendClaimedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendClaimed;
}
interface EtherDividendReclaimedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendReclaimed;
    callback: EventCallback<EtherDividendCheckpointEtherDividendReclaimedEventArgs>;
}
interface GetEtherDividendReclaimedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendReclaimed;
}
interface EtherDividendClaimFailedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendClaimFailed;
    callback: EventCallback<EtherDividendCheckpointEtherDividendClaimFailedEventArgs>;
}
interface GetEtherDividendClaimFailedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendClaimFailed;
}
interface EtherDividendWithholdingWithdrawnSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendWithholdingWithdrawn;
    callback: EventCallback<EtherDividendCheckpointEtherDividendWithholdingWithdrawnEventArgs>;
}
interface GetEtherDividendWithholdingWithdrawnLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.EtherDividendWithholdingWithdrawn;
}
interface SetDefaultExcludedAddressesSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.SetDefaultExcludedAddresses;
    callback: EventCallback<EtherDividendCheckpointSetDefaultExcludedAddressesEventArgs>;
}
interface GetSetDefaultExcludedAddressesLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.SetDefaultExcludedAddresses;
}
interface SetWithholdingSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.SetWithholding;
    callback: EventCallback<EtherDividendCheckpointSetWithholdingEventArgs>;
}
interface GetSetWithholdingLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.SetWithholding;
}
interface SetWithholdingFixedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.SetWithholdingFixed;
    callback: EventCallback<EtherDividendCheckpointSetWithholdingFixedEventArgs>;
}
interface GetSetWithholdingFixedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.SetWithholdingFixed;
}
interface SetWalletSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.SetWallet;
    callback: EventCallback<EtherDividendCheckpointSetWalletEventArgs>;
}
interface GetSetWalletLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.SetWallet;
}
interface UpdateDividendDatesSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.UpdateDividendDates;
    callback: EventCallback<EtherDividendCheckpointUpdateDividendDatesEventArgs>;
}
interface GetUpdateDividendDatesLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.UpdateDividendDates;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.Pause;
    callback: EventCallback<EtherDividendCheckpointPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: EtherDividendCheckpointEvents.Unpause;
    callback: EventCallback<EtherDividendCheckpointUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: EtherDividendCheckpointEvents.Unpause;
}
interface EtherDividendCheckpointSubscribeAsyncParams extends Subscribe {
    (params: EtherDividendDepositedSubscribeAsyncParams): Promise<string>;
    (params: EtherDividendClaimedSubscribeAsyncParams): Promise<string>;
    (params: EtherDividendReclaimedSubscribeAsyncParams): Promise<string>;
    (params: EtherDividendClaimFailedSubscribeAsyncParams): Promise<string>;
    (params: EtherDividendWithholdingWithdrawnSubscribeAsyncParams): Promise<string>;
    (params: SetDefaultExcludedAddressesSubscribeAsyncParams): Promise<string>;
    (params: SetWithholdingSubscribeAsyncParams): Promise<string>;
    (params: SetWithholdingFixedSubscribeAsyncParams): Promise<string>;
    (params: SetWalletSubscribeAsyncParams): Promise<string>;
    (params: UpdateDividendDatesSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetEtherDividendCheckpointLogsAsyncParams extends GetLogs {
    (params: GetEtherDividendDepositedLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointEtherDividendDepositedEventArgs>[]>;
    (params: GetEtherDividendClaimedLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointEtherDividendClaimedEventArgs>[]>;
    (params: GetEtherDividendReclaimedLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointEtherDividendReclaimedEventArgs>[]>;
    (params: GetEtherDividendClaimFailedLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointEtherDividendClaimFailedEventArgs>[]>;
    (params: GetEtherDividendWithholdingWithdrawnLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointEtherDividendWithholdingWithdrawnEventArgs>[]>;
    (params: GetSetDefaultExcludedAddressesLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointSetDefaultExcludedAddressesEventArgs>[]>;
    (params: GetSetWithholdingLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointSetWithholdingEventArgs>[]>;
    (params: GetSetWithholdingFixedLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointSetWithholdingFixedEventArgs>[]>;
    (params: GetSetWalletLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointSetWalletEventArgs>[]>;
    (params: GetUpdateDividendDatesLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointUpdateDividendDatesEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<EtherDividendCheckpointUnpauseEventArgs>[]>;
}
export declare namespace EtherDividendCheckpointTransactionParams {
    interface CreateDividend extends CreateDividendParams {
    }
    interface CreateDividendWithCheckpoint extends CreateDividendWithCheckpointParams {
    }
    interface CreateDividendWithExclusions extends CreateDividendWithExclusionsParams {
    }
    interface CreateDividendWithCheckpointAndExclusions extends CreateDividendWithCheckpointAndExclusionsParams {
    }
}
/**
 * @param maturity Time from which dividend can be paid
 * @param expiry Time until dividend can no longer be paid, and can be reclaimed by issuer
 * @param name Name/title for identification
 * @param value Value of ether to contribute towards dividend
 */
interface CreateDividendParams extends TxParams {
    maturity: Date;
    expiry: Date;
    name: string;
    value: BigNumber;
}
/**
 * @param checkpointId The identifier for the checkpoint
 */
interface CreateDividendWithCheckpointParams extends CreateDividendParams {
    checkpointId: number;
}
/**
 * @param checkpointId The identifier for the checkpoint
 */
interface CreateDividendWithExclusionsParams extends CreateDividendParams {
    excluded: string[];
}
/**
 * @param checkpointId The identifier for the checkpoint
 */
interface CreateDividendWithCheckpointAndExclusionsParams extends CreateDividendWithExclusionsParams {
    checkpointId: number;
}
/**
 * This class includes the functionality related to interacting with the EtherDividendCheckpoint contract.
 */
export default class EtherDividendCheckpointWrapper extends DividendCheckpointWrapper {
    protected contract: Promise<EtherDividendCheckpointContract>;
    protected getDecimals: () => Promise<BigNumber>;
    /**
     * Instantiate EtherDividendCheckpointWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<EtherDividendCheckpointContract>, contractFactory: ContractFactory);
    /**
     * Creates a dividend and checkpoint for the dividend
     */
    createDividend: (params: CreateDividendParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Creates a dividend with a provided checkpoint
     */
    createDividendWithCheckpoint: (params: CreateDividendWithCheckpointParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Creates a dividend and checkpoint for the dividend with excluded addresses
     */
    createDividendWithExclusions: (params: CreateDividendWithExclusionsParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Creates a dividend with a provided checkpoint and with excluded addresses
     */
    createDividendWithCheckpointAndExclusions: (params: CreateDividendWithCheckpointAndExclusionsParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: EtherDividendCheckpointSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetEtherDividendCheckpointLogsAsyncParams;
}
export {};
//# sourceMappingURL=ether_dividend_checkpoint_wrapper.d.ts.map