import { ERC20DividendCheckpointContract, ERC20DividendCheckpointEvents, ERC20DividendCheckpointERC20DividendDepositedEventArgs, ERC20DividendCheckpointERC20DividendClaimedEventArgs, ERC20DividendCheckpointERC20DividendReclaimedEventArgs, ERC20DividendCheckpointERC20DividendWithholdingWithdrawnEventArgs, ERC20DividendCheckpointSetDefaultExcludedAddressesEventArgs, ERC20DividendCheckpointSetWithholdingEventArgs, ERC20DividendCheckpointSetWithholdingFixedEventArgs, ERC20DetailedContract, BigNumber, LogWithDecodedArgs, Web3Wrapper } from '@polymathnetwork/abi-wrappers';
import DividendCheckpointWrapper from './dividend_checkpoint_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs } from '../../../types';
interface ERC20DividendDepositedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ERC20DividendCheckpointEvents.ERC20DividendDeposited;
    callback: EventCallback<ERC20DividendCheckpointERC20DividendDepositedEventArgs>;
}
interface GetERC20DividendDepositedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ERC20DividendCheckpointEvents.ERC20DividendDeposited;
}
interface ERC20DividendClaimedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ERC20DividendCheckpointEvents.ERC20DividendClaimed;
    callback: EventCallback<ERC20DividendCheckpointERC20DividendClaimedEventArgs>;
}
interface GetERC20DividendClaimedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ERC20DividendCheckpointEvents.ERC20DividendClaimed;
}
interface ERC20DividendReclaimedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ERC20DividendCheckpointEvents.ERC20DividendReclaimed;
    callback: EventCallback<ERC20DividendCheckpointERC20DividendReclaimedEventArgs>;
}
interface GetERC20DividendReclaimedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ERC20DividendCheckpointEvents.ERC20DividendReclaimed;
}
interface ERC20DividendWithholdingWithdrawnSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ERC20DividendCheckpointEvents.ERC20DividendWithholdingWithdrawn;
    callback: EventCallback<ERC20DividendCheckpointERC20DividendWithholdingWithdrawnEventArgs>;
}
interface GetERC20DividendWithholdingWithdrawnLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ERC20DividendCheckpointEvents.ERC20DividendWithholdingWithdrawn;
}
interface SetDefaultExcludedAddressesSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ERC20DividendCheckpointEvents.SetDefaultExcludedAddresses;
    callback: EventCallback<ERC20DividendCheckpointSetDefaultExcludedAddressesEventArgs>;
}
interface GetSetDefaultExcludedAddressesLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ERC20DividendCheckpointEvents.SetDefaultExcludedAddresses;
}
interface SetWithholdingSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ERC20DividendCheckpointEvents.SetWithholding;
    callback: EventCallback<ERC20DividendCheckpointSetWithholdingEventArgs>;
}
interface GetSetWithholdingLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ERC20DividendCheckpointEvents.SetWithholding;
}
interface SetWithholdingFixedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ERC20DividendCheckpointEvents.SetWithholdingFixed;
    callback: EventCallback<ERC20DividendCheckpointSetWithholdingFixedEventArgs>;
}
interface GetSetWithholdingFixedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ERC20DividendCheckpointEvents.SetWithholdingFixed;
}
interface ERC20DividendCheckpointSubscribeAsyncParams extends Subscribe {
    (params: ERC20DividendDepositedSubscribeAsyncParams): Promise<string>;
    (params: ERC20DividendClaimedSubscribeAsyncParams): Promise<string>;
    (params: ERC20DividendReclaimedSubscribeAsyncParams): Promise<string>;
    (params: ERC20DividendWithholdingWithdrawnSubscribeAsyncParams): Promise<string>;
    (params: SetDefaultExcludedAddressesSubscribeAsyncParams): Promise<string>;
    (params: SetWithholdingSubscribeAsyncParams): Promise<string>;
    (params: SetWithholdingFixedSubscribeAsyncParams): Promise<string>;
}
interface GetERC20DividendCheckpointLogsAsyncParams extends GetLogs {
    (params: GetERC20DividendDepositedLogsAsyncParams): Promise<LogWithDecodedArgs<ERC20DividendCheckpointERC20DividendDepositedEventArgs>[]>;
    (params: GetERC20DividendClaimedLogsAsyncParams): Promise<LogWithDecodedArgs<ERC20DividendCheckpointERC20DividendClaimedEventArgs>[]>;
    (params: GetERC20DividendReclaimedLogsAsyncParams): Promise<LogWithDecodedArgs<ERC20DividendCheckpointERC20DividendReclaimedEventArgs>[]>;
    (params: GetERC20DividendWithholdingWithdrawnLogsAsyncParams): Promise<LogWithDecodedArgs<ERC20DividendCheckpointERC20DividendWithholdingWithdrawnEventArgs>[]>;
    (params: GetSetDefaultExcludedAddressesLogsAsyncParams): Promise<LogWithDecodedArgs<ERC20DividendCheckpointSetDefaultExcludedAddressesEventArgs>[]>;
    (params: GetSetWithholdingLogsAsyncParams): Promise<LogWithDecodedArgs<ERC20DividendCheckpointSetWithholdingEventArgs>[]>;
    (params: GetSetWithholdingFixedLogsAsyncParams): Promise<LogWithDecodedArgs<ERC20DividendCheckpointSetWithholdingFixedEventArgs>[]>;
}
export declare namespace ERC20DividendCheckpointTransactionParams {
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
 * @param dividendIndex Index of the dividend
 */
interface DividendIndexParams {
    dividendIndex: number;
}
/**
 * @param maturity Time from which dividend can be paid
 * @param expiry Time until dividend can no longer be paid, and can be reclaimed by issuer
 * @param token Address of ERC20 token in which dividend is to be denominated
 * @param amount Amount of specified token for dividend
 * @param name Name/Title for identification
 */
interface CreateDividendParams extends TxParams {
    maturity: Date;
    expiry: Date;
    token: string;
    amount: BigNumber;
    name: string;
}
/**
 * @param checkpointId Checkpoint id from which to create dividends
 */
interface CreateDividendWithCheckpointParams extends CreateDividendParams {
    checkpointId: number;
}
/**
 * @param excluded List of addresses to exclude
 */
interface CreateDividendWithExclusionsParams extends CreateDividendParams {
    excluded: string[];
}
/**
 * @param checkpointId Checkpoint id from which to create dividends
 * @param excluded List of addresses to exclude
 */
interface CreateDividendWithCheckpointAndExclusionsParams extends CreateDividendParams {
    checkpointId: number;
    excluded: string[];
}
/**
 * This class includes the functionality related to interacting with the ERC20DividendCheckpoint contract.
 */
export default class ERC20DividendCheckpointWrapper extends DividendCheckpointWrapper {
    protected contract: Promise<ERC20DividendCheckpointContract>;
    protected erc20DetailedContract: (address: string) => Promise<ERC20DetailedContract>;
    protected getDecimals: (dividendIndex: number) => Promise<BigNumber>;
    /**
     * Instantiate ERC20DividendCheckpointWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     * @param contractFactory
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<ERC20DividendCheckpointContract>, contractFactory: ContractFactory);
    /**
     * Mapping to token address for each dividend
     */
    dividendTokens: (params: DividendIndexParams) => Promise<string>;
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
    subscribeAsync: ERC20DividendCheckpointSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetERC20DividendCheckpointLogsAsyncParams;
}
export {};
//# sourceMappingURL=erc20_dividend_checkpoint_wrapper.d.ts.map