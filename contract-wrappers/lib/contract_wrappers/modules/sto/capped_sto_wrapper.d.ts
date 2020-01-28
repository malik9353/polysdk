import { CappedSTOContract, CappedSTOEvents, CappedSTOTokenPurchaseEventArgs, CappedSTOSetAllowBeneficialInvestmentsEventArgs, CappedSTOSetFundRaiseTypesEventArgs, CappedSTOPauseEventArgs, CappedSTOUnpauseEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import STOWrapper from './sto_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, TxParams, Subscribe, GetLogs } from '../../../types';
interface TokenPurchaseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: CappedSTOEvents.TokenPurchase;
    callback: EventCallback<CappedSTOTokenPurchaseEventArgs>;
}
interface GetTokenPurchaseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: CappedSTOEvents.TokenPurchase;
}
interface SetAllowBeneficialInvestmentsSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: CappedSTOEvents.SetAllowBeneficialInvestments;
    callback: EventCallback<CappedSTOSetAllowBeneficialInvestmentsEventArgs>;
}
interface GetSetAllowBeneficialInvestmentsLogsAsyncParams extends GetLogsAsyncParams {
    eventName: CappedSTOEvents.SetAllowBeneficialInvestments;
}
interface SetFundRaiseTypesSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: CappedSTOEvents.SetFundRaiseTypes;
    callback: EventCallback<CappedSTOSetFundRaiseTypesEventArgs>;
}
interface GetSetFundRaiseTypesLogsAsyncParams extends GetLogsAsyncParams {
    eventName: CappedSTOEvents.SetFundRaiseTypes;
}
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: CappedSTOEvents.Pause;
    callback: EventCallback<CappedSTOPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: CappedSTOEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: CappedSTOEvents.Unpause;
    callback: EventCallback<CappedSTOUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: CappedSTOEvents.Unpause;
}
interface CappedSTOSubscribeAsyncParams extends Subscribe {
    (params: TokenPurchaseSubscribeAsyncParams): Promise<string>;
    (params: SetAllowBeneficialInvestmentsSubscribeAsyncParams): Promise<string>;
    (params: SetFundRaiseTypesSubscribeAsyncParams): Promise<string>;
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
}
interface GetCappedSTOLogsAsyncParams extends GetLogs {
    (params: GetTokenPurchaseLogsAsyncParams): Promise<LogWithDecodedArgs<CappedSTOTokenPurchaseEventArgs>[]>;
    (params: GetSetAllowBeneficialInvestmentsLogsAsyncParams): Promise<LogWithDecodedArgs<CappedSTOSetAllowBeneficialInvestmentsEventArgs>[]>;
    (params: GetSetFundRaiseTypesLogsAsyncParams): Promise<LogWithDecodedArgs<CappedSTOSetFundRaiseTypesEventArgs>[]>;
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<CappedSTOPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<CappedSTOUnpauseEventArgs>[]>;
}
export declare namespace CappedSTOTransactionParams {
    interface ChangeAllowBeneficialInvestments extends ChangeAllowBeneficialInvestmentsParams {
    }
    interface BuyTokens extends BuyTokensParams {
    }
    interface BuyTokensWithPoly extends BuyTokensWithPolyParams {
    }
}
/**
 * @param investorAddress Address of the investor
 */
interface InvestorsParams extends TxParams {
    investorAddress: string;
}
/**
 * @param allowBeneficicalInvestments Boolean to allow or disallow beneficial investments
 */
interface ChangeAllowBeneficialInvestmentsParams extends TxParams {
    allowBeneficialInvestments: boolean;
}
/**
 * @param beneficiary Address performing the token purchase
 * @param value Value of investment
 */
interface BuyTokensParams extends TxParams {
    beneficiary: string;
    value: BigNumber;
}
/**
 * @param investedPOLY Amount of POLY invested
 */
interface BuyTokensWithPolyParams extends TxParams {
    investedPOLY: BigNumber;
}
interface CappedSTODetails {
    /** Timestamp at which offering gets start. */
    startTime: Date;
    /** Timestamp at which offering ends. */
    endTime: Date;
    /** Number of token base units this STO will be allowed to sell to investors. */
    cap: BigNumber;
    /** Token units a buyer gets(multiplied by 10^18) per wei / base unit of POLY */
    rate: BigNumber;
    /** Amount of funds raised */
    fundsRaised: BigNumber;
    /** Number of individual investors this STO have. */
    investorCount: number;
    /** Amount of tokens get sold. */
    totalTokensSold: BigNumber;
    /** Boolean value to justify whether the fund raise type is POLY or not, i.e true for POLY. */
    isRaisedInPoly: boolean;
}
/**
 * This class includes the functionality related to interacting with the CappedSTO contract.
 */
export default class CappedSTOWrapper extends STOWrapper {
    protected contract: Promise<CappedSTOContract>;
    /**
     * Instantiate CappedSTOWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<CappedSTOContract>, contractFactory: ContractFactory);
    /**
     * How many token units a buyer gets (multiplied by 10^18) per wei / base unit of POLY
     * @return rate
     */
    rate: () => Promise<BigNumber>;
    /**
     * How many token base units this STO will be allowed to sell to investors
     * @return cap amount
     */
    cap: () => Promise<BigNumber>;
    /**
     * Determine whether users can invest on behalf of a beneficiary
     * @return boolean status
     */
    allowBeneficialInvestments: () => Promise<boolean>;
    /**
     *  check if the module is paused
     *  @return boolean if paused
     */
    paused: () => Promise<boolean>;
    /**
     * Access mapping of Capped STO investors
     * @return amount of investor investment
     */
    investors: (params: InvestorsParams) => Promise<BigNumber>;
    /**
     * Function to set allowBeneficialInvestments (allow beneficiary to be different to funder)
     */
    changeAllowBeneficialInvestments: (params: ChangeAllowBeneficialInvestmentsParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Low level token purchase
     */
    buyTokens: (params: BuyTokensParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Low level token purchase for poly
     */
    buyTokensWithPoly: (params: BuyTokensWithPolyParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Checks whether the cap has been reached.
     * @return bool Whether the cap was reached
     */
    capReached: () => Promise<boolean>;
    /**
     * Return the total no. of tokens sold
     */
    getTokensSold: () => Promise<BigNumber>;
    /**
     * Return the STO details
     * @return Date at which offering gets start, Date at which offering ends, Number of token base units this STO will
     * be allowed to sell to investors, Token units a buyer gets as the rate, Amount of funds raised, Number of
     * individual investors this STO have, Amount of tokens get sold, Boolean value to justify whether the fund raise
     * type is POLY or not, ie true for POLY, Boolean value to know the nature of the STO Whether it is pre-mint or
     * mint on buying type sto
     */
    getSTODetails: () => Promise<CappedSTODetails>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: CappedSTOSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetCappedSTOLogsAsyncParams;
}
export {};
//# sourceMappingURL=capped_sto_wrapper.d.ts.map