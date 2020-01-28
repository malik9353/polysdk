import { GeneralTransferManagerContract, USDTieredSTOContract, USDTieredSTOEvents, USDTieredSTOFundsReceivedEventArgs, USDTieredSTOPauseEventArgs, USDTieredSTOReserveTokenMintEventArgs, USDTieredSTOSetAddressesEventArgs, USDTieredSTOSetAllowBeneficialInvestmentsEventArgs, USDTieredSTOSetFundRaiseTypesEventArgs, USDTieredSTOSetLimitsEventArgs, USDTieredSTOSetNonAccreditedLimitEventArgs, USDTieredSTOSetTiersEventArgs, USDTieredSTOSetTimesEventArgs, USDTieredSTOSetTreasuryWalletEventArgs, USDTieredSTOTokenPurchaseEventArgs, USDTieredSTOUnpauseEventArgs, Web3Wrapper, BigNumber, LogWithDecodedArgs } from '@polymathnetwork/abi-wrappers';
import STOWrapper from './sto_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { EventCallback, FundRaiseType, GetLogs, GetLogsAsyncParams, Subscribe, SubscribeAsyncParams, TxParams } from '../../../types';
interface SetAllowBeneficialInvestmentsSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.SetAllowBeneficialInvestments;
    callback: EventCallback<USDTieredSTOSetAllowBeneficialInvestmentsEventArgs>;
}
interface GetSetAllowBeneficialInvestmentsLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.SetAllowBeneficialInvestments;
}
interface SetNonAccreditedLimitSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.SetNonAccreditedLimit;
    callback: EventCallback<USDTieredSTOSetNonAccreditedLimitEventArgs>;
}
interface GetSetNonAccreditedLimitLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.SetNonAccreditedLimit;
}
interface SetTreasuryWalletSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.SetTreasuryWallet;
    callback: EventCallback<USDTieredSTOSetTreasuryWalletEventArgs>;
}
interface GetSetTreasuryWalletLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.SetTreasuryWallet;
}
interface TokenPurchaseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.TokenPurchase;
    callback: EventCallback<USDTieredSTOTokenPurchaseEventArgs>;
}
interface GetTokenPurchaseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.TokenPurchase;
}
interface FundsReceivedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.FundsReceived;
    callback: EventCallback<USDTieredSTOFundsReceivedEventArgs>;
}
interface GetFundsReceivedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.FundsReceived;
}
interface ReserveTokenMintSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.ReserveTokenMint;
    callback: EventCallback<USDTieredSTOReserveTokenMintEventArgs>;
}
interface GetReserveTokenMintLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.ReserveTokenMint;
}
interface SetAddressesSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.SetAddresses;
    callback: EventCallback<USDTieredSTOSetAddressesEventArgs>;
}
interface GetSetAddressesLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.SetAddresses;
}
interface SetLimitsSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.SetLimits;
    callback: EventCallback<USDTieredSTOSetLimitsEventArgs>;
}
interface GetSetLimitsLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.SetLimits;
}
interface SetTimesSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.SetTimes;
    callback: EventCallback<USDTieredSTOSetTimesEventArgs>;
}
interface GetSetTimesLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.SetTimes;
}
interface SetTiersSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.SetTiers;
    callback: EventCallback<USDTieredSTOSetTiersEventArgs>;
}
interface GetSetTiersLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.SetTiers;
}
interface SetFundRaiseTypesSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.SetFundRaiseTypes;
    callback: EventCallback<USDTieredSTOSetFundRaiseTypesEventArgs>;
}
interface GetSetFundRaiseTypesLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.SetFundRaiseTypes;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.Pause;
    callback: EventCallback<USDTieredSTOPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: USDTieredSTOEvents.Unpause;
    callback: EventCallback<USDTieredSTOUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: USDTieredSTOEvents.Unpause;
}
interface USDTieredSTOSubscribeAsyncParams extends Subscribe {
    (params: SetAllowBeneficialInvestmentsSubscribeAsyncParams): Promise<string>;
    (params: SetNonAccreditedLimitSubscribeAsyncParams): Promise<string>;
    (params: SetTreasuryWalletSubscribeAsyncParams): Promise<string>;
    (params: TokenPurchaseSubscribeAsyncParams): Promise<string>;
    (params: FundsReceivedSubscribeAsyncParams): Promise<string>;
    (params: ReserveTokenMintSubscribeAsyncParams): Promise<string>;
    (params: SetAddressesSubscribeAsyncParams): Promise<string>;
    (params: SetLimitsSubscribeAsyncParams): Promise<string>;
    (params: SetTimesSubscribeAsyncParams): Promise<string>;
    (params: SetTiersSubscribeAsyncParams): Promise<string>;
    (params: SetFundRaiseTypesSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetUSDTieredSTOLogsAsyncParams extends GetLogs {
    (params: GetSetAllowBeneficialInvestmentsLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOSetAllowBeneficialInvestmentsEventArgs>[]>;
    (params: GetSetNonAccreditedLimitLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOSetNonAccreditedLimitEventArgs>[]>;
    (params: GetSetTreasuryWalletLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOSetTreasuryWalletEventArgs>[]>;
    (params: GetTokenPurchaseLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOTokenPurchaseEventArgs>[]>;
    (params: GetFundsReceivedLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOFundsReceivedEventArgs>[]>;
    (params: GetReserveTokenMintLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOReserveTokenMintEventArgs>[]>;
    (params: GetSetAddressesLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOSetAddressesEventArgs>[]>;
    (params: GetSetLimitsLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOSetLimitsEventArgs>[]>;
    (params: GetSetTimesLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOSetTimesEventArgs>[]>;
    (params: GetSetTiersLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOSetTiersEventArgs>[]>;
    (params: GetSetFundRaiseTypesLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOSetFundRaiseTypesEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<USDTieredSTOUnpauseEventArgs>[]>;
}
export declare namespace USDTieredSTOTransactionParams {
    interface ChangeNonAccreditedLimit extends ChangeNonAccreditedLimitParams {
    }
    interface ModifyTimes extends ModifyTimesParams {
    }
    interface ModifyLimits extends ModifyLimitsParams {
    }
    interface ModifyOracle extends ModifyOracleParams {
    }
    interface ModifyFunding extends ModifyFundingParams {
    }
    interface ModifyAddresses extends ModifyAddressesParams {
    }
    interface ModifyTiers extends ModifyTiersParams {
    }
    interface ChangeAllowBeneficialInvestments extends ChangeAllowBeneficialInvestmentsParams {
    }
    interface BuyWithETH extends BuyWithETHParams {
    }
    interface BuyWithETHRateLimited extends BuyWithETHRateLimitedParams {
    }
    interface BuyWithPOLY extends BuyWithPOLYParams {
    }
    interface BuyWithPOLYRateLimited extends BuyWithPOLYRateLimitedParams {
    }
    interface BuyWithUSD extends BuyWithUSDParams {
    }
    interface BuyWithUSDRateLimited extends BuyWithUSDRateLimitedParams {
    }
}
/**
 * @param tier Index of Tier
 */
interface TierIndexParams {
    tier: number;
}
/**
 * @param fundRaiseType Currency key
 * @param amount Value to convert from USD
 */
interface ConvertToOrFromUSDParams {
    fundRaiseType: FundRaiseType;
    amount: BigNumber;
}
/**
 * @param fundRaiseType Fund raise type to get rate of
 */
interface FundRaiseTypeParams {
    fundRaiseType: FundRaiseType;
}
/**
 * @param stableCoinAddress Address of USD Stable Coin
 */
interface StableCoinParams {
    stableCoinAddress: string;
}
/**
 * @param investorAddress Address of Investor
 */
interface InvestorAddressParams {
    investorAddress: string;
}
/**
 * @param investorAddress Address of Investor
 * @param fundRaiseType
 */
interface InvestorInvestedParams {
    investorAddress: string;
    fundRaiseType: FundRaiseType;
}
/**
 * @param investors Array of investor addresses to modify
 * @param nonAccreditedLimit Array of uints specifying non-accredited limits
 */
interface ChangeNonAccreditedLimitParams extends TxParams {
    investors: string[];
    nonAccreditedLimit: BigNumber[];
}
/**
 * @param startTime start time of sto
 * @param endTime end time of sto
 */
interface ModifyTimesParams extends TxParams {
    startTime: Date;
    endTime: Date;
}
/**
 * @param nonAccreditedLimitUSD max non accredited invets limit
 * @param minimumInvestmentUSD overall minimum investment limit
 */
interface ModifyLimitsParams extends TxParams {
    nonAccreditedLimitUSD: BigNumber;
    minimumInvestmentUSD: BigNumber;
}
/**
 * @param nonAccreditedLimitUSD max non accredited invets limit
 * @param minimumInvestmentUSD overall minimum investment limit
 */
interface ModifyOracleParams extends TxParams {
    fundRaiseType: FundRaiseType;
    oracleAddress: string;
}
/**
 * @param fundRaiseTypes Array of fund raise types to allow
 */
interface ModifyFundingParams extends TxParams {
    fundRaiseTypes: FundRaiseType[];
}
/**
 * @param wallet Address of wallet where funds are sent
 * @param treasuryWallet Address of wallet where unsold tokens are sent
 * @param usdTokens Address of usd tokens
 */
interface ModifyAddressesParams extends TxParams {
    wallet: string;
    treasuryWallet: string;
    usdTokens: string[];
}
/**
 * @param ratePerTier Array of rates per tier
 * @param ratePerTierDiscountPoly Array of discounted poly rates per tier
 * @param tokensPerTierTotal Array of total tokens per tier
 * @param tokensPerTierDiscountPoly Array of discounted tokens per tier
 */
interface ModifyTiersParams extends TxParams {
    ratePerTier: BigNumber[];
    ratePerTierDiscountPoly: BigNumber[];
    tokensPerTierTotal: BigNumber[];
    tokensPerTierDiscountPoly: BigNumber[];
}
/**
 * @param allowBeneficialInvestments Boolean to allow or disallow beneficial investments
 */
interface ChangeAllowBeneficialInvestmentsParams extends TxParams {
    allowBeneficialInvestments: boolean;
}
/**
 * @param beneficiary Address of beneficiary for tokens
 * @param ETH value used to buy
 */
interface BuyWithETHParams extends TxParams {
    beneficiary: string;
    value: BigNumber;
}
/**
 * @param minTokens Minimum amount of tokens to buy else revert
 */
interface BuyWithETHRateLimitedParams extends BuyWithETHParams {
    minTokens: BigNumber;
}
/**
 * @param beneficiary Address of beneficiary for tokens
 * @param investedPOLY Value of poly invested
 */
interface BuyWithPOLYParams extends TxParams {
    beneficiary: string;
    investedPOLY: BigNumber;
}
/**
 * @param minTokens Minimum amount of tokens to buy else revert
 */
interface BuyWithPOLYRateLimitedParams extends BuyWithPOLYParams {
    minTokens: BigNumber;
}
/**
 * @param beneficiary Address of beneficiary for tokens
 * @param investedSC Amount of stable coin invested
 * @param usdToken USD stable coin address to buy tokens with
 */
interface BuyWithUSDParams extends TxParams {
    beneficiary: string;
    investedSC: BigNumber;
    usdToken: string;
}
/**
 * @param minTokens Minimum amount of tokens to buy else revert
 */
interface BuyWithUSDRateLimitedParams extends BuyWithUSDParams {
    minTokens: BigNumber;
}
interface AccreditedData {
    /** Investor address */
    investor: string;
    accreditedData: InvestorData;
}
interface InvestorData {
    /** Whether investor is accredited */
    accredited: boolean;
    /** Overrides for default limit in USD for non-accredited investors multiplied by 10**18 (0 = no override) */
    nonAccreditedLimitUSDOverride: BigNumber;
}
interface Tier {
    /** How many token units a buyer gets per USD in this tier */
    rate: BigNumber;
    /** How many token units a buyer gets per USD in this tier (multiplied by 10**18) when investing in POLY up to tokensDiscountPoly */
    rateDiscountPoly: BigNumber;
    /** How many tokens are available in this tier (relative to totalSupply) */
    tokenTotal: BigNumber;
    /** How many token units are available in this tier (relative to totalSupply) at the ratePerTierDiscountPoly rate */
    tokensDiscountPoly: BigNumber;
    /** How many tokens have been minted in this tier (relative to totalSupply) */
    mintedTotal: BigNumber;
    /** How many tokens have been minted in this tier (relative to totalSupply) at discounted POLY rate */
    mintedDiscountPoly: BigNumber;
}
interface USDTieredSTOData {
    /** Timestamp at which offering gets start. */
    startTime: Date;
    /** Timestamp at which offering ends. */
    endTime: Date;
    /** Currently active tier */
    currentTier: number;
    /** Array of Number of tokens this STO will be allowed to sell at different tiers. */
    capPerTier: BigNumber[];
    /** Array Rate at which tokens are sold at different tiers */
    ratePerTier: BigNumber[];
    /** Amount of funds raised */
    fundsRaised: BigNumber;
    /** Number of individual investors this STO has. */
    investorCount: number;
    /** Amount of tokens sold. */
    tokensSold: BigNumber;
    /** Whether the STO accepts ETH */
    isRaisedInETH: boolean;
    /** Whether the STO accepts POLY */
    isRaisedInPOLY: boolean;
    /** Whether the STO accepts SableCoins */
    isRaisedInSC: boolean;
}
interface MintedByTier {
    mintedInETH: BigNumber;
    mintedInPOLY: BigNumber;
    mintedInSC: BigNumber;
}
/**
 * This class includes the functionality related to interacting with the USDTieredSTO contract.
 */
export default class USDTieredSTOWrapper extends STOWrapper {
    protected contract: Promise<USDTieredSTOContract>;
    protected generalTransferManagerContract: (address: string) => Promise<GeneralTransferManagerContract>;
    /**
     * Instantiate USDTieredSTOWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<USDTieredSTOContract>, contractFactory: ContractFactory);
    /**
     * Determine whether users can invest on behalf of a beneficiary
     * @return boolean status
     */
    allowBeneficialInvestments: () => Promise<boolean>;
    /**
     *  Check if the module is paused
     *  @return boolean if paused
     */
    paused: () => Promise<boolean>;
    /**
     * Final amount of tokens returned to the issuer
     * @return amount of tokens
     */
    finalAmountReturned: () => Promise<BigNumber>;
    /**
     * Amount in fund raise type invested by each investor
     * @return amount invested
     */
    investorInvested: (params: InvestorInvestedParams) => Promise<BigNumber>;
    /**
     * Amount in USD invested by each address
     * @return invested amount
     */
    investorInvestedUSD: (params: InvestorAddressParams) => Promise<BigNumber>;
    /**
     * Function to set allowBeneficialInvestments (allow beneficiary to be different to funder)
     */
    changeAllowBeneficialInvestments: (params: ChangeAllowBeneficialInvestmentsParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Buy with eth without rate restriction
     */
    buyWithETH: (params: BuyWithETHParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Buy with poly without rate restriction
     */
    buyWithPOLY: (params: BuyWithPOLYParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Buy with USD stable coin without rate restriction
     */
    buyWithUSD: (params: BuyWithUSDParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Buy tokens with eth and with rate restriction
     */
    buyWithETHRateLimited: (params: BuyWithETHRateLimitedParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Buy tokens with poly and with rate restriction
     */
    buyWithPOLYRateLimited: (params: BuyWithPOLYRateLimitedParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Buy tokens with usd stable coin and with rate restriction
     */
    buyWithUSDRateLimited: (params: BuyWithUSDRateLimitedParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * This function returns whether or not the STO is in fundraising mode (open)
     * @return bool Whether the STO is accepting investments
     */
    isOpen: () => Promise<boolean>;
    /**
     * Checks whether the cap has been reached.
     * @return bool Whether the cap was reached
     */
    capReached: () => Promise<boolean>;
    /**
     * returns current conversion rate of funds
     * @return rate value
     */
    getRate: (params: FundRaiseTypeParams) => Promise<BigNumber>;
    /**
     * This function converts from USD to ETH or POLY
     * @return Value in ETH or POLY
     */
    convertFromUSD: (params: ConvertToOrFromUSDParams) => Promise<BigNumber>;
    /**
     * Return the total no. of tokens minted
     * @return Total number of tokens minted
     */
    getTokensMinted: () => Promise<BigNumber>;
    /**
     * Return the total number of tokens sold in a given tier
     * @return Total amount of tokens sold in the tier
     */
    getTokensSoldByTier: (params: TierIndexParams) => Promise<BigNumber>;
    /**
     * Return the STO details
     * @return Unixtimestamp at which offering gets start, Unixtimestamp at which offering ends, Currently active tier,
     * Array of Number of tokens this STO will be allowed to sell at different tiers, Array rate at which tokens are
     * sold at different tiers, Amount of funds raised, Number of individual investors this STO have, Amount of tokens
     * solo, Array of booleans to show if funding is allowed in ETH, POLY, SC respectively
     */
    getSTODetails: () => Promise<USDTieredSTOData>;
    /**
     * Get current tier
     * @returns current tier number
     */
    currentTier: () => Promise<number>;
    /**
     * Get the limit in USD for non-accredited investors
     * @returns non accredited limit usd value
     */
    nonAccreditedLimitUSD: () => Promise<BigNumber>;
    /**
     * Get the minimun investment in USD
     * @return minimumInvestmentUSD value
     */
    minimumInvestmentUSD: () => Promise<BigNumber>;
    /**
     * Ethereum account address to receive unsold tokens
     * @return wallet address
     */
    treasuryWallet: () => Promise<string>;
    /**
     * Return the total no. of tokens sold
     * @return token sold amount
     */
    getTokensSold: () => Promise<BigNumber>;
    /**
     * Whether or not the STO has been finalized
     * @return isFinalized boolean
     */
    isFinalized: () => Promise<boolean>;
    /**
     * Return the total no. of tiers
     * @return tier count
     */
    getNumberOfTiers: () => Promise<number>;
    /**
     * Return the usd tokens accepted by the STO
     * @return list of usd token addresses
     */
    getUsdTokens: () => Promise<string[]>;
    /**
     * Amount of USD funds raised
     * @return value usd funds
     */
    fundsRaisedUSD: () => Promise<BigNumber>;
    /**
     * Return tiers
     * @return rate, rateDiscountPoly, tokensTotal, tokensDiscountPoly, mintedTotal, mintedDiscountPoly
     */
    tiers: (params: TierIndexParams) => Promise<Tier>;
    /**
     * Return array of minted tokens in each fund raise type for given tier
     * @return tokens amount by tier
     */
    getTokensMintedByTier: (params: TierIndexParams) => Promise<MintedByTier>;
    /**
     * This function converts from ETH or POLY to USD
     * @return Value in USD
     */
    convertToUSD: (params: ConvertToOrFromUSDParams) => Promise<BigNumber>;
    /**
     * Return the total no. of tokens sold for the given fund raise type
     * @return Total number of tokens sold for ETH
     */
    getTokensSoldFor: (params: FundRaiseTypeParams) => Promise<BigNumber>;
    /**
     * Amount of stable coin raised
     * @return stable coin amount
     */
    stableCoinsRaised: (params: StableCoinParams) => Promise<BigNumber>;
    /**
     * Finalizes the STO and mint remaining tokens to reserve address
     * Reserve address must be whitelisted to successfully finalize
     */
    finalize: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifies the list of overrides for non-accredited limits in USD
     */
    changeNonAccreditedLimit: (params: ChangeNonAccreditedLimitParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifies STO start and end times
     */
    modifyTimes: (params: ModifyTimesParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifies oracle
     */
    modifyOracle: (params: ModifyOracleParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifies max non accredited investment limit and overall minimum investment limit
     */
    modifyLimits: (params: ModifyLimitsParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifies fund raise types
     */
    modifyFunding: (params: ModifyFundingParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifies addresses used as wallet, reserve wallet and usd token
     */
    modifyAddresses: (params: ModifyAddressesParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Modifiers STO tiers. All tiers must be passed, can not edit specific tiers.
     */
    modifyTiers: (params: ModifyTiersParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns investor accredited & non-accredited override information
     * @return investor[], accredited data value, nonAccreditedLimitUSDOverride value
     */
    getAccreditedData: () => Promise<AccreditedData[]>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: USDTieredSTOSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetUSDTieredSTOLogsAsyncParams;
    private checkIfBuyIsValid;
}
export {};
//# sourceMappingURL=usd_tiered_sto_wrapper.d.ts.map