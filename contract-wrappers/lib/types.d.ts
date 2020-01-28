import { PolyTokenEventArgs, PolyTokenEvents, CappedSTOFactoryEventArgs, CappedSTOEventArgs, ERC20DetailedEventArgs, ERC20DetailedEvents, ERC20DividendCheckpointEventArgs, EtherDividendCheckpointEventArgs, FeatureRegistryEventArgs, GeneralTransferManagerEventArgs, ManualApprovalTransferManagerEventArgs, ModuleFactoryEventArgs, ModuleRegistryEventArgs, PolyTokenFaucetEventArgs, PolymathRegistryEventArgs, SecurityTokenRegistryEventArgs, SecurityTokenEventArgs, USDTieredSTOFactoryEventArgs, USDTieredSTOEventArgs, CappedSTOFactoryEvents, CappedSTOEvents, ERC20DividendCheckpointEvents, EtherDividendCheckpointEvents, FeatureRegistryEvents, GeneralTransferManagerEvents, ManualApprovalTransferManagerEvents, ModuleFactoryEvents, ModuleRegistryEvents, PolyTokenFaucetEvents, PolymathRegistryEvents, SecurityTokenRegistryEvents, ISecurityTokenRegistryEvents, SecurityTokenEvents, USDTieredSTOFactoryEvents, USDTieredSTOEvents, GeneralPermissionManagerEventArgs, GeneralPermissionManagerEvents, ModuleContract, GeneralPermissionManagerContract, GeneralTransferManagerContract, CappedSTOContract, USDTieredSTOContract, ERC20DividendCheckpointContract, STOContract, STOEvents, STOEventArgs, ERC20DetailedContract, PolyTokenContract, ISecurityTokenContract, EtherDividendCheckpointContract, ManualApprovalTransferManagerContract, CountTransferManagerContract, CountTransferManagerEventArgs, CountTransferManagerEvents, PercentageTransferManagerContract, PercentageTransferManagerEventArgs, PercentageTransferManagerEvents, VolumeRestrictionTMContract, VolumeRestrictionTMEvents, VolumeRestrictionTMEventArgs, VestingEscrowWalletEventArgs, VestingEscrowWalletContract, VestingEscrowWalletEvents, LockUpTransferManagerEventArgs, LockUpTransferManagerContract, LockUpTransferManagerEvents, BlacklistTransferManagerEventArgs, BlacklistTransferManagerContract, BlacklistTransferManagerEvents, PolyTokenFaucetContract, TxData, BigNumber, ContractEventArg, DecodedLogArgs, LogWithDecodedArgs, BlockParam } from '@polymathnetwork/abi-wrappers';
/**
 * @param txData Data to override default values on tx, i.e. 'from', 'gasPrice'
 * @param safetyFactor Factor to use for gas limit estimation
 */
export interface TxParams {
    txData?: Partial<TxData>;
    safetyFactor?: number;
}
export declare enum NetworkId {
    Mainnet = 1,
    Kovan = 42,
    Local = 15
}
export declare enum ModuleType {
    PermissionManager = 1,
    TransferManager = 2,
    STO = 3,
    Dividends = 4,
    Burn = 5,
    Wallet = 7
}
export declare enum TransferType {
    General = 0,
    Issuance = 1,
    Redemption = 2
}
export declare enum FundRaiseType {
    ETH = 0,
    POLY = 1,
    StableCoin = 2
}
export declare enum CappedSTOFundRaiseType {
    ETH = 0,
    POLY = 1
}
export declare enum FlagsType {
    IsAccredited = 0,
    CanNotBuyFromSto = 1,
    IsVolRestricted = 2
}
export declare enum TransferResult {
    INVALID = 0,
    NA = 1,
    VALID = 2,
    FORCE_VALID = 3
}
export declare enum FeeType {
    TickerRegFee = "tickerRegFee",
    StLaunchFee = "stLaunchFee"
}
export declare enum Feature {
    CustomModulesAllowed = "customModulesAllowed",
    FreezeMintingAllowed = "freezeMintingAllowed"
}
export declare enum Partition {
    Unlocked = "UNLOCKED",
    Locked = "LOCKED",
    Undefined = "UNDEFINED"
}
export declare enum BoundType {
    LowerBound = "lowerBound",
    UpperBound = "upperBound"
}
export declare enum PolymathContract {
    PolyToken = "PolyToken",
    ModuleRegistry = "ModuleRegistry",
    FeatureRegistry = "FeatureRegistry",
    SecurityTokenRegistry = "SecurityTokenRegistry",
    PolyUsdOracle = "PolyUsdOracle",
    EthUsdOracle = "EthUsdOracle"
}
export declare enum ModuleName {
    GeneralPermissionManager = "GeneralPermissionManager",
    CountTransferManager = "CountTransferManager",
    GeneralTransferManager = "GeneralTransferManager",
    ManualApprovalTransferManager = "ManualApprovalTransferManager",
    PercentageTransferManager = "PercentageTransferManager",
    LockUpTransferManager = "LockUpTransferManager",
    BlacklistTransferManager = "BlacklistTransferManager",
    VolumeRestrictionTM = "VolumeRestrictionTM",
    CappedSTO = "CappedSTO",
    UsdTieredSTO = "USDTieredSTO",
    ERC20DividendCheckpoint = "ERC20DividendCheckpoint",
    EtherDividendCheckpoint = "EtherDividendCheckpoint",
    VestingEscrowWallet = "VestingEscrowWallet"
}
export declare enum TransferStatusCode {
    TransferFailure = "0x50",
    TransferSuccess = "0x51",
    InsufficientBalance = "0x52",
    InsufficientAllowance = "0x53",
    TransfersHalted = "0x54",
    FundsLocked = "0x55",
    InvalidSender = "0x56",
    InvalidReceiver = "0x57",
    InvalidOperator = "0x58"
}
export declare enum Perm {
    Admin = "ADMIN",
    Operator = "OPERATOR"
}
export declare enum RestrictionType {
    Fixed = 0,
    Percentage = 1
}
export interface DecodedLogEvent<ArgsType extends DecodedLogArgs> {
    isRemoved: boolean;
    log: LogWithDecodedArgs<ArgsType>;
}
export declare type EventCallback<ArgsType extends DecodedLogArgs> = (err: null | Error, log?: DecodedLogEvent<ArgsType>) => void;
export interface IndexedFilterValues {
    [index: string]: ContractEventArg;
}
export interface BlockRange {
    fromBlock: BlockParam;
    toBlock: BlockParam;
}
export declare type ContractEventArgs = PolyTokenEventArgs | CappedSTOFactoryEventArgs | CappedSTOEventArgs | ERC20DetailedEventArgs | ERC20DividendCheckpointEventArgs | EtherDividendCheckpointEventArgs | FeatureRegistryEventArgs | GeneralPermissionManagerEventArgs | GeneralTransferManagerEventArgs | ManualApprovalTransferManagerEventArgs | ModuleFactoryEventArgs | ModuleRegistryEventArgs | PolyTokenFaucetEventArgs | PolymathRegistryEventArgs | SecurityTokenRegistryEventArgs | SecurityTokenEventArgs | USDTieredSTOFactoryEventArgs | USDTieredSTOEventArgs | STOEventArgs | CountTransferManagerEventArgs | PercentageTransferManagerEventArgs | LockUpTransferManagerEventArgs | VolumeRestrictionTMEventArgs | BlacklistTransferManagerEventArgs | VestingEscrowWalletEventArgs;
export declare type ContractEvents = PolyTokenEvents | CappedSTOFactoryEvents | CappedSTOEvents | ERC20DetailedEvents | ERC20DividendCheckpointEvents | EtherDividendCheckpointEvents | FeatureRegistryEvents | GeneralPermissionManagerEvents | GeneralTransferManagerEvents | ManualApprovalTransferManagerEvents | ModuleFactoryEvents | ModuleRegistryEvents | PolyTokenFaucetEvents | PolymathRegistryEvents | SecurityTokenRegistryEvents | ISecurityTokenRegistryEvents | SecurityTokenEvents | USDTieredSTOFactoryEvents | USDTieredSTOEvents | STOEvents | CountTransferManagerEvents | PercentageTransferManagerEvents | VestingEscrowWalletEvents | LockUpTransferManagerEvents | BlacklistTransferManagerEvents | VolumeRestrictionTMEvents;
/**
 * @param eventName           The contract event you would like to subscribe to.
 * @param blockRange          Block range to get logs from.
 * @param indexFilterValues   An object where the keys are indexed args returned by the event and
 *                            the value is the value you are interested in.
 */
export interface GetLogsAsyncParams {
    eventName: ContractEvents;
    blockRange?: BlockRange;
    indexFilterValues?: IndexedFilterValues;
}
/**
 * @param contractAddress     The hex encoded address where the contract is deployed.
 * @param eventName           The contract event you would like to subscribe to.
 * @param indexFilterValues   An object where the keys are indexed args returned by the event and
 *                            the value is the value you are interested in.
 * @param callback            Callback that gets called when a log is added/removed
 * @param isVerbose           Enable verbose subscription warnings (e.g recoverable network issues encountered)
 */
export interface SubscribeAsyncParams {
    eventName: ContractEvents;
    indexFilterValues: IndexedFilterValues;
    callback: EventCallback<ContractEventArg>;
    isVerbose?: boolean;
}
export interface GetLogs {
    (params: GetLogsAsyncParams): Promise<LogWithDecodedArgs<ContractEventArgs>[]>;
}
export interface Subscribe {
    (params: SubscribeAsyncParams): Promise<string>;
}
export declare type ERC20Contract = ERC20DetailedContract | ISecurityTokenContract | PolyTokenContract | PolyTokenFaucetContract;
export declare type GenericModuleContract = ModuleContract | GeneralPermissionManagerContract | GeneralTransferManagerContract | STOBaseContract | DividendCheckpointBaseContract | ManualApprovalTransferManagerContract | CountTransferManagerContract | PercentageTransferManagerContract | VolumeRestrictionTMContract | VestingEscrowWalletContract | LockUpTransferManagerContract | BlacklistTransferManagerContract | VolumeRestrictionTMContract;
export declare type STOBaseContract = STOContract | CappedSTOContract | USDTieredSTOContract;
export declare type DividendCheckpointBaseContract = ERC20DividendCheckpointContract | EtherDividendCheckpointContract;
export declare const PERCENTAGE_DECIMALS: BigNumber;
export declare const FULL_DECIMALS: BigNumber;
export declare enum ErrorCode {
    Unauthorized = "Unauthorized",
    InvalidAddress = "InvalidAddress",
    InsufficientBalance = "InsufficientBalance",
    InvalidSubscriptionToken = "InvalidSubscriptionToken",
    DuplicatedStrings = "DuplicatedStrings",
    TooLate = "TooLate",
    TooEarly = "TooEarly",
    InvalidData = "InvalidData",
    MismatchedArrayLength = "MismatchedArrayLength",
    InvalidVersion = "InvalidVersion",
    InvalidPartition = "InvalidPartition",
    ContractPaused = "ContractPaused",
    PreconditionRequired = "PreconditionRequired",
    AlreadyClaimed = "AlreadyClaimed",
    AddressExcluded = "AddressExcluded",
    InvalidDividend = "InvalidDividend",
    InvalidCheckpoint = "InvalidCheckpoint",
    ArrayTooLarge = "ArrayTooLarge",
    InvalidBound = "InvalidBound",
    InsufficientAllowance = "InsufficientAllowance",
    DifferentMode = "DifferentMode",
    InvalidTransfer = "InvalidTransfer",
    InvalidDiscount = "InvalidDiscount",
    STOClosed = "STOClosed",
    CoinNotAllowed = "CoinNotAllowed",
    AlreadyExists = "AlreadyExists",
    NotFound = "NotFound",
    TickerExpired = "TickerExpired",
    UnknownNetwork = "UnknownNetwork"
}
//# sourceMappingURL=types.d.ts.map