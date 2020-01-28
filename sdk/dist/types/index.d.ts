import { PolyResponse, BigNumber, FundRaiseType as Currency, CappedSTOFundRaiseType as CappedStoCurrency } from '@polymathnetwork/contract-wrappers';
import { PostTransactionResolver } from '../PostTransactionResolver';
export { CappedStoCurrency, Currency };
export interface DividendShareholderStatus {
    address: string;
    paymentReceived: boolean;
    excluded: boolean;
    withheldTax: BigNumber;
    amountReceived: BigNumber;
    balance: BigNumber;
}
export declare enum DividendType {
    Erc20 = "Erc20",
    Eth = "Eth"
}
export declare function isDividendType(type: any): type is DividendType;
export declare enum StoType {
    Capped = "Capped",
    UsdTiered = "UsdTiered"
}
export declare function isStoType(type: any): type is StoType;
export interface TaxWithholdingEntry {
    address: string;
    percentage: number;
}
export declare enum ErrorCode {
    IncompatibleBrowser = "IncompatibleBrowser",
    NonBrowserEnvironment = "NonBrowserEnvironment",
    MetamaskNotInstalled = "MetamaskNotInstalled",
    UserDeniedAccess = "UserDeniedAccess",
    WalletIsLocked = "WalletIsLocked",
    ProcedureValidationError = "ProcedureValidationError",
    FetcherValidationError = "FetcherValidationError",
    TransactionRejectedByUser = "TransactionRejectedByUser",
    TransactionReverted = "TransactionReverted",
    FatalError = "FatalError",
    UnexpectedReturnData = "UnexpectedReturnData",
    UnexpectedEventLogs = "UnexpectedEventLogs",
    InvalidUuid = "InvalidUuid",
    InvalidAddress = "InvalidAddress",
    InsufficientBalance = "InsufficientBalance",
    InexistentModule = "InexistentModule"
}
export interface ShareholderBalance {
    address: string;
    balance: BigNumber;
}
export declare type LowLevelMethod<A> = (args: A) => Promise<PolyResponse>;
export interface TransactionSpec<Args = any, R extends any = any> {
    method: LowLevelMethod<Args>;
    args: MapMaybeResolver<Args>;
    postTransactionResolver?: PostTransactionResolver<R>;
    tag?: PolyTransactionTag;
}
export declare enum ProcedureType {
    UnnamedProcedure = "UnnamedProcedure",
    ApproveErc20 = "ApproveErc20",
    TransferErc20 = "TransferErc20",
    CreateCheckpoint = "CreateCheckpoint",
    EnableDividendManagers = "EnableDividendManagers",
    EnableGeneralPermissionManager = "EnableGeneralPermissionManager",
    LaunchCappedSto = "LaunchCappedSto",
    LaunchUsdTieredSto = "LaunchUsdTieredSto",
    CreateErc20DividendDistribution = "CreateErc20DividendDistribution",
    CreateEtherDividendDistribution = "CreateEtherDividendDistribution",
    CreateSecurityToken = "CreateSecurityToken",
    ReclaimFunds = "ReclaimFunds",
    ReserveSecurityToken = "ReserveSecurityToken",
    WithdrawTaxes = "WithdrawTaxes",
    UpdateDividendsTaxWithholdingList = "UpdateDividendsTaxWithholdingList",
    SetDividendsWallet = "SetDividendsWallet",
    PushDividendPayment = "PushDividendPayment",
    ChangeDelegatePermission = "ChangeDelegatePermission",
    ControllerTransfer = "ControllerTransfer",
    PauseSto = "PauseSto",
    SetController = "SetController",
    ModifyShareholderData = "ModifyShareholderData",
    RevokeKyc = "RevokeKyc"
}
export declare enum PolyTransactionTag {
    Any = "Any",
    GetTokens = "GetTokens",
    ApproveErc20 = "ApproveErc20",
    TransferErc20 = "TransferErc20",
    ReserveSecurityToken = "ReserveSecurityToken",
    CreateSecurityToken = "CreateSecurityToken",
    CreateCheckpoint = "CreateCheckpoint",
    CreateErc20DividendDistribution = "CreateErc20DividendDistribution",
    CreateEtherDividendDistribution = "CreateEtherDividendDistribution",
    SetErc20TaxWithholding = "SetErc20TaxWithholding",
    SetEtherTaxWithholding = "SetEtherTaxWithholding",
    EnableDividends = "EnableDividends",
    EnableCappedSto = "EnableCappedSto",
    EnableUsdTieredSto = "EnableUsdTieredSto",
    EnableGeneralPermissionManager = "EnableGeneralPermissionManager",
    ReclaimDividendFunds = "ReclaimDividendFunds",
    WithdrawTaxWithholdings = "WithdrawTaxWithholdings",
    PushDividendPayment = "PushDividendPayment",
    SetDividendsWallet = "SetDividendsWallet",
    ChangeDelegatePermission = "ChangeDelegatePermission",
    ControllerTransfer = "ControllerTransfer",
    PauseSto = "PauseSto",
    SetController = "SetController",
    ModifyKycDataMulti = "ModifyKycDataMulti",
    ModifyInvestorFlagMulti = "ModifyInvestorFlagMulti"
}
export declare type MaybeResolver<T> = PostTransactionResolver<T> | T;
export declare type MapMaybeResolver<T> = {
    [K in keyof T]: MaybeResolver<T[K]>;
};
export interface ApproveErc20ProcedureArgs {
    amount: BigNumber;
    spender: string;
    tokenAddress?: string;
}
export interface TransferErc20ProcedureArgs {
    amount: BigNumber;
    receiver: string;
    tokenAddress?: string;
}
export interface CreateCheckpointProcedureArgs {
    symbol: string;
}
export interface CreateErc20DividendDistributionProcedureArgs {
    symbol: string;
    maturityDate: Date;
    expiryDate: Date;
    erc20Address: string;
    amount: BigNumber;
    checkpointIndex: number;
    name: string;
    excludedAddresses?: string[];
    taxWithholdings?: TaxWithholdingEntry[];
}
export interface CreateEtherDividendDistributionProcedureArgs {
    symbol: string;
    maturityDate: Date;
    expiryDate: Date;
    amount: BigNumber;
    checkpointIndex: number;
    name: string;
    excludedAddresses?: string[];
    taxWithholdings?: TaxWithholdingEntry[];
}
export interface PushDividendPaymentProcedureArgs {
    symbol: string;
    dividendIndex: number;
    dividendType: DividendType;
    shareholderAddresses?: string[];
}
export interface CreateSecurityTokenProcedureArgs {
    name: string;
    symbol: string;
    detailsUrl?: string;
    divisible: boolean;
    treasuryWallet?: string;
}
export interface EnableDividendManagersProcedureArgs {
    symbol: string;
    storageWalletAddress: string;
    types?: DividendType[];
}
export interface EnableGeneralPermissionManagerProcedureArgs {
    symbol: string;
}
export interface LaunchCappedStoProcedureArgs {
    symbol: string;
    startDate: Date;
    endDate: Date;
    tokensOnSale: BigNumber;
    rate: BigNumber;
    currency: CappedStoCurrency;
    storageWallet: string;
}
export interface StoTier {
    /**
     * Amount of tokens to sell in this tier
     */
    tokensOnSale: BigNumber;
    /**
     * Price of each token in this tier in USD
     */
    price: BigNumber;
    /**
     * Amount of tokens to sell at a discount if paid in POLY.
     * Must be less than the amount of tokens on sale
     */
    tokensWithDiscount?: BigNumber;
    /**
     * Price of tokens sold at a discount
     */
    discountedPrice?: BigNumber;
}
export interface LaunchUsdTieredStoProcedureArgs {
    symbol: string;
    startDate: Date;
    endDate: Date;
    tiers: StoTier[];
    nonAccreditedInvestmentLimit: BigNumber;
    minimumInvestment: BigNumber;
    currencies: Currency[];
    storageWallet: string;
    treasuryWallet: string;
    usdTokenAddresses: string[];
}
export interface ReclaimFundsProcedureArgs {
    symbol: string;
    dividendIndex: number;
    dividendType: DividendType;
}
export interface ReserveSecurityTokenProcedureArgs {
    symbol: string;
    owner?: string;
}
export interface WithdrawTaxesProcedureArgs {
    symbol: string;
    dividendIndex: number;
    dividendType: DividendType;
}
export interface UpdateDividendsTaxWithholdingListProcedureArgs {
    symbol: string;
    dividendType: DividendType;
    shareholderAddresses: string[];
    percentages: number[];
}
export interface SetDividendsWalletProcedureArgs {
    symbol: string;
    dividendType: DividendType;
    address: string;
}
export interface ChangeDelegatePermissionProcedureArgs {
    symbol: string;
    delegate: string;
    op: PermissibleOperation;
    isGranted: boolean;
    details?: string;
}
export interface ControllerTransferProcedureArgs {
    from: string;
    to: string;
    symbol: string;
    amount: BigNumber;
    data?: string;
    log?: string;
}
export interface PauseStoProcedureArgs {
    symbol: string;
    stoAddress: string;
    stoType: StoType;
}
export interface SetControllerProcedureArgs {
    symbol: string;
    controller: string;
}
export interface ShareholderDataEntry {
    /**
     * shareholder wallet address to whitelist
     */
    address: string;
    /**
     * date from which the shareholder can transfer tokens
     */
    canSendAfter: Date;
    /**
     * date from which the shareholder can receive tokens
     */
    canReceiveAfter: Date;
    /**
     * date at which the shareholder's KYC expires
     */
    kycExpiry: Date;
    /**
     * whether the shareholder is accredited
     */
    isAccredited: boolean;
    /**
     * whether the shareholder is allowed to purchase tokens in an STO
     */
    canBuyFromSto: boolean;
}
export interface ModifyShareholderDataProcedureArgs {
    symbol: string;
    shareholderData: ShareholderDataEntry[];
}
export interface RevokeKycProcedureArgs {
    symbol: string;
    shareholderAddresses: string[];
}
export interface ProcedureArguments {
    [ProcedureType.ApproveErc20]: ApproveErc20ProcedureArgs;
    [ProcedureType.TransferErc20]: TransferErc20ProcedureArgs;
    [ProcedureType.CreateCheckpoint]: CreateCheckpointProcedureArgs;
    [ProcedureType.CreateErc20DividendDistribution]: CreateErc20DividendDistributionProcedureArgs;
    [ProcedureType.CreateEtherDividendDistribution]: CreateEtherDividendDistributionProcedureArgs;
    [ProcedureType.CreateSecurityToken]: CreateSecurityTokenProcedureArgs;
    [ProcedureType.EnableDividendManagers]: EnableDividendManagersProcedureArgs;
    [ProcedureType.ReclaimFunds]: ReclaimFundsProcedureArgs;
    [ProcedureType.ReserveSecurityToken]: ReserveSecurityTokenProcedureArgs;
    [ProcedureType.WithdrawTaxes]: WithdrawTaxesProcedureArgs;
    [ProcedureType.UpdateDividendsTaxWithholdingList]: UpdateDividendsTaxWithholdingListProcedureArgs;
    [ProcedureType.PushDividendPayment]: PushDividendPaymentProcedureArgs;
    [ProcedureType.SetDividendsWallet]: SetDividendsWalletProcedureArgs;
    [ProcedureType.LaunchCappedSto]: LaunchCappedStoProcedureArgs;
    [ProcedureType.LaunchUsdTieredSto]: LaunchUsdTieredStoProcedureArgs;
    [ProcedureType.PauseSto]: PauseStoProcedureArgs;
    [ProcedureType.ControllerTransfer]: ControllerTransferProcedureArgs;
    [ProcedureType.SetController]: SetControllerProcedureArgs;
    [ProcedureType.ChangeDelegatePermission]: ChangeDelegatePermissionProcedureArgs;
    [ProcedureType.ModifyShareholderData]: ModifyShareholderDataProcedureArgs;
    [ProcedureType.RevokeKyc]: RevokeKycProcedureArgs;
    [ProcedureType.UnnamedProcedure]: {};
}
export declare enum TransactionStatus {
    Idle = "Idle",
    Unapproved = "Unapproved",
    Running = "Running",
    Rejected = "Rejected",
    Succeeded = "Succeeded",
    Failed = "Failed"
}
export declare enum TransactionQueueStatus {
    Idle = "Idle",
    Running = "Running",
    Failed = "Failed",
    Succeeded = "Succeeded"
}
export declare enum PermissibleOperation {
    ModifyShareholderData = "GTM_WHITELIST_UPDATE"
}
export interface Fees {
    usd: BigNumber | null;
    poly: BigNumber;
}
export interface Pojo {
    [key: string]: string | number | boolean | null | Pojo | BigNumber | Date | (string | number | boolean | null | Pojo | BigNumber | Date)[];
}
export declare function isPojo(pojo: any): pojo is Pojo;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare enum TransactionSpeed {
    Slow = "slow",
    Medium = "medium",
    Fast = "fast",
    Fastest = "fastest"
}
//# sourceMappingURL=index.d.ts.map