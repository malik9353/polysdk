import { ISecurityTokenRegistryContract, ISecurityTokenRegistryEvents, ISecurityTokenRegistryChangeExpiryLimitEventArgs, ISecurityTokenRegistryChangeSecurityLaunchFeeEventArgs, ISecurityTokenRegistryChangeTickerRegistrationFeeEventArgs, ISecurityTokenRegistryNewSecurityTokenEventArgs, ISecurityTokenRegistryOwnershipTransferredEventArgs, ISecurityTokenRegistryPauseEventArgs, ISecurityTokenRegistryUnpauseEventArgs, ISecurityTokenRegistryRegisterTickerEventArgs, ISecurityTokenRegistryTickerRemovedEventArgs, ISecurityTokenRegistryChangeTickerOwnershipEventArgs, ISecurityTokenRegistryChangeFeeCurrencyEventArgs, ISecurityTokenRegistrySecurityTokenRefreshedEventArgs, ISecurityTokenRegistryProtocolFactorySetEventArgs, ISecurityTokenRegistryLatestVersionSetEventArgs, ISecurityTokenRegistryProtocolFactoryRemovedEventArgs, ISecurityTokenContract, PolyTokenContract, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import ContractWrapper from '../contract_wrapper';
import ContractFactory from '../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs, FeeType } from '../../types';
interface ChangeFeeCurrencySubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeFeeCurrency;
    callback: EventCallback<ISecurityTokenRegistryChangeFeeCurrencyEventArgs>;
}
interface GetChangeFeeCurrencyLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeFeeCurrency;
}
interface SecurityTokenRefreshedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.SecurityTokenRefreshed;
    callback: EventCallback<ISecurityTokenRegistrySecurityTokenRefreshedEventArgs>;
}
interface GetSecurityTokenRefreshedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.SecurityTokenRefreshed;
}
interface ProtocolFactorySetSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ProtocolFactorySet;
    callback: EventCallback<ISecurityTokenRegistryProtocolFactorySetEventArgs>;
}
interface GetProtocolFactorySetLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ProtocolFactorySet;
}
interface LatestVersionSetSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.LatestVersionSet;
    callback: EventCallback<ISecurityTokenRegistryLatestVersionSetEventArgs>;
}
interface GetLatestVersionSetLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.LatestVersionSet;
}
interface ProtocolFactoryRemovedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ProtocolFactoryRemoved;
    callback: EventCallback<ISecurityTokenRegistryProtocolFactoryRemovedEventArgs>;
}
interface GetProtocolFactoryRemovedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ProtocolFactoryRemoved;
}
interface ChangeExpiryLimitSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeExpiryLimit;
    callback: EventCallback<ISecurityTokenRegistryChangeExpiryLimitEventArgs>;
}
interface GetChangeExpiryLimitLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeExpiryLimit;
}
interface ChangeSecurityLaunchFeeSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeSecurityLaunchFee;
    callback: EventCallback<ISecurityTokenRegistryChangeSecurityLaunchFeeEventArgs>;
}
interface GetChangeSecurityLaunchFeeLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeSecurityLaunchFee;
}
interface ChangeTickerOwnershipSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeTickerOwnership;
    callback: EventCallback<ISecurityTokenRegistryChangeTickerOwnershipEventArgs>;
}
interface GetChangeTickerOwnershipLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeTickerOwnership;
}
interface ChangeTickerRegistrationFeeSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeTickerRegistrationFee;
    callback: EventCallback<ISecurityTokenRegistryChangeTickerRegistrationFeeEventArgs>;
}
interface GetChangeTickerRegistrationFeeLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.ChangeTickerRegistrationFee;
}
interface NewSecurityTokenSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.NewSecurityToken;
    callback: EventCallback<ISecurityTokenRegistryNewSecurityTokenEventArgs>;
}
interface GetNewSecurityTokenLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.NewSecurityToken;
}
interface OwnershipTransferredSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.OwnershipTransferred;
    callback: EventCallback<ISecurityTokenRegistryOwnershipTransferredEventArgs>;
}
interface GetOwnershipTransferredLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.OwnershipTransferred;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.Pause;
    callback: EventCallback<ISecurityTokenRegistryPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.Pause;
}
interface RegisterTickerSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.RegisterTicker;
    callback: EventCallback<ISecurityTokenRegistryRegisterTickerEventArgs>;
}
interface GetRegisterTickerLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.RegisterTicker;
}
interface TickerRemovedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.TickerRemoved;
    callback: EventCallback<ISecurityTokenRegistryTickerRemovedEventArgs>;
}
interface GetTickerRemovedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.TickerRemoved;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ISecurityTokenRegistryEvents.Unpause;
    callback: EventCallback<ISecurityTokenRegistryUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ISecurityTokenRegistryEvents.Unpause;
}
interface SecurityTokenRegistrySubscribeAsyncParams extends Subscribe {
    (params: ChangeFeeCurrencySubscribeAsyncParams): Promise<string>;
    (params: SecurityTokenRefreshedSubscribeAsyncParams): Promise<string>;
    (params: ProtocolFactorySetSubscribeAsyncParams): Promise<string>;
    (params: LatestVersionSetSubscribeAsyncParams): Promise<string>;
    (params: ProtocolFactoryRemovedSubscribeAsyncParams): Promise<string>;
    (params: ChangeExpiryLimitSubscribeAsyncParams): Promise<string>;
    (params: ChangeSecurityLaunchFeeSubscribeAsyncParams): Promise<string>;
    (params: ChangeTickerOwnershipSubscribeAsyncParams): Promise<string>;
    (params: ChangeTickerRegistrationFeeSubscribeAsyncParams): Promise<string>;
    (params: NewSecurityTokenSubscribeAsyncParams): Promise<string>;
    (params: OwnershipTransferredSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: RegisterTickerSubscribeAsyncParams): Promise<string>;
    (params: TickerRemovedSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetISecurityTokenRegistryLogsAsyncParams extends GetLogs {
    (params: GetChangeFeeCurrencyLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryChangeFeeCurrencyEventArgs>[]>;
    (params: GetSecurityTokenRefreshedLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistrySecurityTokenRefreshedEventArgs>[]>;
    (params: GetProtocolFactorySetLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryProtocolFactorySetEventArgs>[]>;
    (params: GetLatestVersionSetLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryLatestVersionSetEventArgs>[]>;
    (params: GetProtocolFactoryRemovedLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryProtocolFactoryRemovedEventArgs>[]>;
    (params: GetChangeExpiryLimitLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryChangeExpiryLimitEventArgs>[]>;
    (params: GetChangeSecurityLaunchFeeLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryChangeSecurityLaunchFeeEventArgs>[]>;
    (params: GetChangeTickerOwnershipLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryChangeTickerOwnershipEventArgs>[]>;
    (params: GetChangeTickerRegistrationFeeLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryChangeTickerRegistrationFeeEventArgs>[]>;
    (params: GetNewSecurityTokenLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryNewSecurityTokenEventArgs>[]>;
    (params: GetOwnershipTransferredLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryOwnershipTransferredEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryPauseEventArgs>[]>;
    (params: GetRegisterTickerLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryRegisterTickerEventArgs>[]>;
    (params: GetTickerRemovedLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryTickerRemovedEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<ISecurityTokenRegistryUnpauseEventArgs>[]>;
}
export declare namespace SecurityTokenRegistryTransactionParams {
    interface RegisterTicker extends RegisterTickerParams {
    }
    interface TransferTickerOwnership extends TransferTickerOwnershipParams {
    }
    interface GenerateSecurityToken extends GenerateSecurityTokenParams {
    }
    interface ModifyTicker extends ModifyTickerParams {
    }
    interface RemoveTicker extends RemoveTickerParams {
    }
    interface ChangeExpiryLimit extends ChangeExpiryLimitParams {
    }
    interface NewSecurityToken extends NewSecurityTokenParams {
    }
    interface ChangeFeesAmountAndCurrency extends ChangeFeesAmountAndCurrencyParams {
    }
    interface RefreshSecurityToken extends RefreshSecurityTokenParams {
    }
    interface ModifyExistingSecurityToken extends ModifyExistingSecurityTokenParams {
    }
    interface ModifySecurityToken extends ModifySecurityTokenParams {
    }
    interface TransferOwnership extends TransferOwnershipParams {
    }
    interface ChangeFee extends ChangeFeeParams {
    }
    interface ReclaimERC20 extends ReclaimERC20Params {
    }
    interface PackageVersion extends PackageVersionParams {
    }
    interface ModifyExistingTicker extends ModifyExistingTickerParams {
    }
    interface SetProtocolFactory extends SetProtocolFactoryParams {
    }
    interface RegisterNewTicker extends RegisterNewTickerParams {
    }
}
/**
 * @param securityToken is the address of the security token.
 */
interface SecurityTokenAddressParams {
    securityTokenAddress: string;
}
/**
 * @param ownerAddress is the address which owns the list of tickers
 */
interface OwnerParams {
    owner?: string;
}
/**
 * @param feeType is a key corresponding to fee type
 */
interface GetFeesParams {
    feeType: FeeType;
}
/**
 * @param ticker is the unique token ticker
 */
interface TickerParams {
    ticker: string;
}
/**
 * @param ticker is the unique token ticker
 * @param tokenName is the name of the token
 */
interface RegisterTickerParams extends TxParams {
    /** Ticker owner */
    owner?: string;
    /** Ticker symbol */
    ticker: string;
    /** Token name */
    tokenName: string;
}
/**
 * @param newOwner is the address of the new owner of the ticker
 * @param ticker is the ticker symbol
 */
interface TransferTickerOwnershipParams extends TxParams {
    newOwner: string;
    ticker: string;
}
/**
 * @param name is the name of the token
 * @param ticker is the ticker symbol of the security token
 * @param details is the off-chain details of the token
 * @param divisible is whether or not the token is divisible
 */
interface GenerateSecurityTokenParams extends TxParams {
    name: string;
    ticker: string;
    details: string;
    divisible: boolean;
}
/**
 * @param owner is the owner of the token
 * @param ticker is the token ticker
 * @param tokenName is the name of the token
 * @param registrationDate is the date at which ticker is registered
 * @param expiryDate is the expiry date for the ticker
 * @param status is the token deployment status
 */
interface ModifyTickerParams extends TxParams {
    owner: string;
    ticker: string;
    tokenName: string;
    registrationDate: Date;
    expiryDate: Date;
    status: boolean;
}
/**
 * @param ticker is the token ticker
 */
interface RemoveTickerParams extends TxParams {
    ticker: string;
}
/**
 * @param newExpiry is the new expiry for newly generated tickers
 */
interface ChangeExpiryLimitParams extends TxParams {
    newExpiry: BigNumber;
}
/**
 * @param name is the name of the token
 * @param ticker is the ticker symbol of the security token
 * @param tokenDetails is the off-chain details of the token
 * @param divisible is whether or not the token is divisible
 * @param treasuryWallet Ethereum address which will holds the STs.
 * @param protocolVersion Version of securityToken contract
 */
interface NewSecurityTokenParams extends TxParams {
    name: string;
    ticker: string;
    tokenDetails: string;
    divisible: boolean;
    treasuryWallet: string;
    protocolVersion: string;
}
/**
 * @param tickerRegFee is the ticker registration fee (base 18 decimals)
 * @param stLaunchFee is the st generation fee (base 18 decimals)
 * @param isFeeInPoly defines if the fee is in poly or usd
 */
interface ChangeFeesAmountAndCurrencyParams extends TxParams {
    tickerRegFee: BigNumber;
    stLaunchFee: BigNumber;
    isFeeInPoly: boolean;
}
/**
 * @param name is the name of the token
 * @param ticker is the ticker symbol of the security token
 * @param tokenDetails is the off-chain details of the token
 * @param divisible is whether or not the token is divisible
 */
interface RefreshSecurityTokenParams extends TxParams {
    name: string;
    ticker: string;
    tokenDetails: string;
    divisible: boolean;
    treasuryWallet: string;
}
/**
 * @param ticker is the ticker symbol of the security token
 * @param owner is the owner of the token
 * @param securityToken is the address of the securityToken
 * @param tokenDetails is the off-chain details of the token
 * @param deployedAt is the timestamp at which the security token is deployed
 */
interface ModifyExistingSecurityTokenParams extends TxParams {
    ticker: string;
    owner: string;
    securityToken: string;
    tokenDetails: string;
    deployedAt: Date;
}
/**
 * @param name is the name of the token
 * @param ticker is the ticker symbol of the security token
 * @param owner is the owner of the token
 * @param securityToken is the address of the securityToken
 * @param tokenDetails is the off-chain details of the token
 * @param deployedAt is the timestamp at which the security token is deployed
 */
interface ModifySecurityTokenParams extends TxParams {
    name: string;
    ticker: string;
    owner: string;
    securityToken: string;
    tokenDetails: string;
    deployedAt: Date;
}
/**
 * @param newOwner The address to transfer ownership to.
 */
interface TransferOwnershipParams extends TxParams {
    newOwner: string;
}
interface ChangeFeeParams extends TxParams {
    newFee: BigNumber;
}
/**
 * @param tokenContract is the address of the token contract
 */
interface ReclaimERC20Params extends TxParams {
    tokenContract: string;
}
/**
 * @param version of the proxy.
 */
interface PackageVersionParams extends TxParams {
    version: string;
}
/**
 * @param owner is the owner of the token
 * @param ticker is the token ticker
 * @param registrationDate is the date at which ticker is registered
 * @param expiryDate is the expiry date for the ticker
 * @param status is the token deployment status
 */
interface ModifyExistingTickerParams extends TxParams {
    owner: string;
    ticker: string;
    registrationDate: Date;
    expiryDate: Date;
    status: boolean;
}
/**
 * @param STFactoryAddress is the address of the proxy.
 */
interface SetProtocolFactoryParams extends PackageVersionParams {
    STFactoryAddress: string;
}
/**
 * @param owner is address of the owner of the token
 * @param ticker is unique token ticker
 */
interface RegisterNewTickerParams extends TxParams {
    owner: string;
    ticker: string;
}
interface SecurityTokenData {
    ticker: string;
    owner: string;
    tokenDetails: string;
    deployedAt: Date;
}
interface TickerDetails {
    owner: string;
    registrationDate: Date;
    expiryDate: Date;
    tokenName: string;
    status: boolean;
}
/**
 * This class includes the functionality related to interacting with the ISecurityTokenRegistry contract.
 */
export default class SecurityTokenRegistryWrapper extends ContractWrapper {
    protected contract: Promise<ISecurityTokenRegistryContract>;
    protected contractFactory: ContractFactory;
    protected securityTokenContract: (address: string) => Promise<ISecurityTokenContract>;
    protected polyTokenContract: () => Promise<PolyTokenContract>;
    /**
     * Instantiate ISecurityTokenRegistryWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     * @param contractFactory
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<ISecurityTokenRegistryContract>, contractFactory: ContractFactory);
    /**
     * Gets tickers by owner
     * @returns Returns the list of tickers owned by the selected address
     */
    getTickersByOwner: (params?: OwnerParams | undefined) => Promise<string[]>;
    /**
     * Get the security token data
     * @returns Returns the security token data by address
     */
    getSecurityTokenData: (params: SecurityTokenAddressParams) => Promise<SecurityTokenData>;
    /**
     * Whether the fee's currency is in poly
     * @returns true = poly, false = usd
     */
    getIsFeeInPoly: () => Promise<boolean>;
    /**
     * Sets the ticker registration and ST launch fee amount and currency
     */
    changeFeesAmountAndCurrency: (params: ChangeFeesAmountAndCurrencyParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Deploys an instance of a new Security Token and replaces the old one in the registry
     * This can be used to upgrade from version 2.0 of ST to 3.0 or in case something goes wrong with earlier ST
     */
    refreshSecurityToken: (params: RefreshSecurityTokenParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Removes a STFactory
     */
    removeProtocolFactory: (params: PackageVersionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns the list of tokens to which the delegate has some access
     * @return list token addresses
     */
    getTokensByDelegate: (delegate: string) => Promise<string[]>;
    /**
     * Get the STFactory address of version
     * @return the STFactory Address of a particular version
     */
    getSTFactoryAddressOfVersion: (params: PackageVersionParams) => Promise<string>;
    /**
     * Get tokens by owner address
     * @returns Returns the list of tokens owned by the selected address
     */
    getTokensByOwner: (params?: OwnerParams | undefined) => Promise<string[]>;
    /**
     * Deploys an instance of a new Security Token and records it to the registry
     */
    generateNewSecurityToken: (params: NewSecurityTokenParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Registers the token ticker to the selected owner
     * Once the token ticker is registered to its owner then no other issuer can claim
     * its ownership. If the ticker expires and its issuer hasn't used it, then someone else can take it.
     */
    registerNewTicker: (params: RegisterNewTickerParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifies the ticker details. Only Polymath has the ability to do so.
     * Only allowed to modify the tickers which are not yet deployed.
     */
    modifyExistingTicker: (params: ModifyExistingTickerParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Adds a new custom Security Token and saves it to the registry. (Token should follow the ISecurityToken interface)
     */
    modifyExistingSecurityToken: (params: ModifyExistingSecurityTokenParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Get the ticker details
     * @returns Returns the owner and timestamp for a given ticker
     */
    getTickerDetails: (params: TickerParams) => Promise<TickerDetails>;
    /**
     * Get value of ticker registration fee
     * @return Ticker registration fee
     */
    getTickerRegistrationFee: () => Promise<BigNumber>;
    /**
     * Registers the token ticker to the selected owner
     * Once the token ticker is registered to its owner then no other issuer can claim
     * its ownership. If the ticker expires and its issuer hasn't used it, then someone else can take it.
     */
    registerTicker: (params: RegisterTickerParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Transfers the ownership of the ticker
     */
    transferTickerOwnership: (params: TransferTickerOwnershipParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Deploys an instance of a new Security Token and records it to the registry
     */
    generateSecurityToken: (params: GenerateSecurityTokenParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Gets the security token launch fee
     * @return Fee amount
     */
    getSecurityTokenLaunchFee: () => Promise<BigNumber>;
    /**
     * Returns the security token address by ticker symbol
     * @return address string
     */
    getSecurityTokenAddress: (params: TickerParams) => Promise<string>;
    /**
     * Gets ticker availability
     * @return boolean
     */
    tickerAvailable: (params: TickerParams) => Promise<boolean>;
    /**
     * Knows if the ticker was registered by the user
     * @return boolean
     */
    isTickerRegisteredByCurrentIssuer: (params: TickerParams) => Promise<boolean>;
    /**
     * Knows if the ticker was launched
     * @return boolean
     */
    isTokenLaunched: (params: TickerParams) => Promise<boolean>;
    /**
     * Modifies the ticker details. Only Polymath has the ability to do so.
     */
    modifyTicker: (params: ModifyTickerParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Removes the ticker details, associated ownership & security token mapping
     */
    removeTicker: (params: RemoveTickerParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Changes the expiry time for the token ticker. Only available to Polymath.
     */
    changeExpiryLimit: (params: ChangeExpiryLimitParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Adds a new custom Security Token and saves it to the registry. (Token should follow the ISecurityToken interface)
     */
    modifySecurityToken: (params: ModifySecurityTokenParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Checks that Security Token is registered
     * @return boolean
     */
    isSecurityToken: (params: SecurityTokenAddressParams) => Promise<boolean>;
    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     */
    transferOwnership: (params: TransferOwnershipParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Called by the owner to pause, triggers stopped state
     */
    pause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Called by the owner to unpause, returns to normal state
     */
    unpause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Sets the ticker registration fee in POLY tokens. Only Polymath.
     */
    changeTickerRegistrationFee: (params: ChangeFeeParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Sets the ticker registration fee in POLY tokens. Only Polymath.
     */
    changeSecurityLaunchFee: (params: ChangeFeeParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Reclaims all ERC20Basic compatible tokens
     */
    reclaimERC20: (params: ReclaimERC20Params) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Changes the protocol version and the SecurityToken contract
     */
    setProtocolFactory: (params: SetProtocolFactoryParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Get STFactory Address
     * @return the current STFactory Address
     */
    getSTFactoryAddress: () => Promise<string>;
    /**
     * Gets Protocol version
     * @return version array
     */
    getLatestProtocolVersion: () => Promise<BigNumber[]>;
    /**
     * Changes the PolyToken address. Only Polymath.
     */
    updateFromRegistry: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Gets the expiry limit
     * @return expiry limit
     */
    getExpiryLimit: () => Promise<BigNumber>;
    /**
     * Check whether the registry is paused or not
     * @return boolean
     */
    isPaused: () => Promise<boolean>;
    /**
     * Gets the owner of the contract
     * @return owner address
     */
    owner: () => Promise<string>;
    /**
     * Returns the list of all tokens
     * @return token address list
     */
    getTokens: () => Promise<string[]>;
    /**
     * Changes the default protocol version
     * Used only by Polymath to upgrade the SecurityToken contract and add more functionalities to future versions
     * Changing versions does not affect existing tokens.
     */
    setLatestVersion: (params: PackageVersionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Get the fees
     * @return the [usd & poly] fee for a particular feetype
     */
    getFees: (params: GetFeesParams) => Promise<BigNumber[]>;
    /**
     * Gets the status of the ticker
     * @return bool
     */
    getTickerStatus: (params: TickerParams) => Promise<boolean>;
    /**
     * Gets the owner of the ticker
     * @return address Address of the owner
     */
    getTickerOwner: (params: TickerParams) => Promise<string>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: SecurityTokenRegistrySubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetISecurityTokenRegistryLogsAsyncParams;
    private getTickerDetailsInternal;
    private checkWhenNotPausedOrOwner;
    private checkOnlyOwner;
    private checkRegisterTickerRequirements;
    private checkModifyST;
}
export {};
//# sourceMappingURL=security_token_registry_wrapper.d.ts.map