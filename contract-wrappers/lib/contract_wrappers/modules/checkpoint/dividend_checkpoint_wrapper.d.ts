import { BigNumber, TxData, ERC20DetailedContract } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import { TxParams, DividendCheckpointBaseContract } from '../../../types';
export declare namespace DividendCheckpointTransactionParams {
    interface ChangeWallet extends ChangeWalletParams {
    }
    interface SetDefaultExcluded extends SetDefaultExcludedParams {
    }
    interface SetWithholding extends SetWithholdingParams {
    }
    interface SetWithholdingFixed extends SetWithholdingFixedParams {
    }
    interface PushDividendPaymentToAddresses extends PushDividendPaymentToAddressesParams {
    }
    interface PushDividendPayment extends PushDividendPaymentParams {
    }
    interface PullDividendPayment extends DividendIndexTxParams {
    }
    interface ReclaimDividend extends DividendIndexTxParams {
    }
    interface WithdrawWithholding extends DividendIndexTxParams {
    }
    interface UpdateDividendDates extends UpdateDividendDatesParams {
    }
}
/**
 * @param dividendIndex Index of the dividend
 */
interface DividendIndexParams {
    dividendIndex: number;
}
/**
 * @param checkpointId Checkpoint identifier
 */
interface CheckpointIdParams {
    checkpointId: number;
}
/**
 * @param investor Address of the investor
 */
interface InvestorParams {
    investor: string;
}
/**
 * @param dividendIndex Dividend to calculate
 * @param payee Affected investor address
 */
interface CalculateDividendParams {
    dividendIndex: number;
    payee: string;
}
/**
 * @param investor Investor address to check
 * @param dividendIndex Dividend to withdraw from
 */
interface InvestorStatus {
    investor: string;
    dividendIndex: number;
}
/**
 * @param wallet Ethereum account address to receive reclaimed dividends and tax
 */
interface ChangeWalletParams extends TxParams {
    wallet: string;
}
/**
 * @param excluded Addresses of investors
 */
interface SetDefaultExcludedParams extends TxParams {
    excluded: string[];
}
/**
 * @param investors Addresses of investors
 * @param withholding Withholding tax array for individual investors
 */
interface SetWithholdingParams extends TxParams {
    investors: string[];
    withholding: BigNumber[];
}
/**
 * @param investors Addresses of investor
 * @param withholding Single withholding tax for all investors
 */
interface SetWithholdingFixedParams extends TxParams {
    investors: string[];
    withholding: BigNumber;
}
/**
 * @param dividendIndex Dividend index to push
 * @param payees Addresses to which to push the dividend
 */
interface PushDividendPaymentToAddressesParams extends TxParams {
    dividendIndex: number;
    payees: string[];
}
/**
 * @param dividendIndex Dividend to push
 * @param start Index in investor list at which to start pushing dividends
 * @param end Index in investor list at which to stop pushing dividends
 */
interface PushDividendPaymentParams extends TxParams {
    dividendIndex: number;
    start: number;
    end: number;
}
/**
 * @param dividendIndex Dividend index to use
 */
interface DividendIndexTxParams extends TxParams {
    dividendIndex: number;
}
/**
 * @param dividendIndex Dividend to withdraw from
 * @param maturity Updated maturity date
 * @param expiry Updated expiry date
 */
interface UpdateDividendDatesParams extends TxParams {
    dividendIndex: number;
    maturity: Date;
    expiry: Date;
}
interface Dividend {
    checkpointId: number;
    /** Time at which the dividend was created */
    created: Date;
    /** Time after which dividend can be claimed - set to 0 to bypass */
    maturity: Date;
    /**
     * Time until which dividend can be claimed
     * After this time any remaining amount can be withdrawn by issuer
     * Set to very high value to bypass
     */
    expiry: Date;
    /** Dividend amount in WEI */
    amount: BigNumber;
    /** Amount of dividend claimed so far */
    claimedAmount: BigNumber;
    /** Total supply at the associated checkpoint */
    totalSupply: BigNumber;
    /** True if expiry has passed and issuer has reclaimed remaining dividend */
    reclaimed: boolean;
    /**  */
    totalWithheld: BigNumber;
    /**  */
    totalWithheldWithdrawn: BigNumber;
    /** Name/title - used for identification */
    name: string;
}
interface CalculateDividendResult {
    claim: BigNumber;
    withheld: BigNumber;
}
interface DividendData {
    /** Timestamp of dividend creation */
    created: Date;
    /** Timestamp of dividend maturity */
    maturity: Date;
    /** Timestamp of dividend expiry */
    expiry: Date;
    /** Amount of dividend */
    amount: BigNumber;
    /** Claimed amount of dividend */
    claimedAmount: BigNumber;
    /** Name of dividend */
    name: string;
}
interface DividendProgress {
    /** Investor address */
    investor: string;
    /** Whether investor has claimed */
    claimed: boolean;
    /** Whether investor is excluded */
    excluded: boolean;
    /** Amount of withheld tax (estimate if not claimed) */
    withheld: BigNumber;
    /** Amount of claim (estimate if not claimeed) */
    amount: BigNumber;
    /** Investor balance */
    balance: BigNumber;
}
interface CheckpointData {
    /** Investor address */
    investor: string;
    /** Investor balance */
    balance: BigNumber;
    /** Tax withheld percentage */
    withheld: BigNumber;
}
/**
 * This class includes the functionality related to interacting with the DividendCheckpoint contract.
 */
export default abstract class DividendCheckpointWrapper extends ModuleWrapper {
    protected abstract contract: Promise<DividendCheckpointBaseContract>;
    protected erc20DetailedContract: (address: string) => Promise<ERC20DetailedContract>;
    protected abstract getDecimals(dividendIndex: number): Promise<BigNumber>;
    /**
     *  wallet
     */
    wallet: () => Promise<string>;
    /**
     *  get the treasury wallet
     */
    getTreasuryWallet: () => Promise<string>;
    /**
     *  check if the module is paused
     */
    paused: () => Promise<boolean>;
    /**
     *  check dividend information at a specific dividend index
     *  @return checkpointId, created, maturity, expiry, token amount,
     *  claimedAmount, totalSupply, reclaimed tokens, total withheld,
     *  total withdrawn and name of dividend
     */
    dividends: (params: DividendIndexParams) => Promise<Dividend>;
    /**
     *  check excluded address at a specific dividend index
     *  @return excluded address
     */
    excluded: (params: DividendIndexParams) => Promise<string>;
    /**
     *  check withholding tax for an investor
     *  @return amount of withholding tax
     */
    withholdingTax: (params: InvestorParams) => Promise<BigNumber>;
    /**
     *  pause the module
     */
    pause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     *  unpause the module
     */
    unpause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Function used to change wallet address
     */
    changeWallet: (params: ChangeWalletParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Return the default excluded addresses
     * @return List of excluded addresses
     */
    getDefaultExcluded: () => Promise<string[]>;
    /**
     * Creates a checkpoint on the security token
     */
    createCheckpoint: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Function to clear and set list of excluded addresses used for future dividends
     */
    setDefaultExcluded: (params: SetDefaultExcludedParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Function to set withholding tax rates for investors
     */
    setWithholding: (params: SetWithholdingParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Function to set withholding tax rates for investors
     */
    setWithholdingFixed: (params: SetWithholdingFixedParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Issuer can push dividends to provided addresses
     */
    pushDividendPaymentToAddresses: (params: PushDividendPaymentToAddressesParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Issuer can push dividends using the investor list from the security token
     */
    pushDividendPayment: (params: PushDividendPaymentParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Investors can pull their own dividends
     */
    pullDividendPayment: (params: DividendIndexTxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Issuer can reclaim remaining unclaimed dividend amounts, for expired dividends
     */
    reclaimDividend: (params: DividendIndexTxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Calculate amount of dividends claimable
     * @return claim, withheld amounts
     */
    calculateDividend: (params: CalculateDividendParams) => Promise<CalculateDividendResult>;
    /**
     * Get the index according to the checkpoint id
     * @return dividend index
     */
    getDividendIndex: (params: CheckpointIdParams) => Promise<number[]>;
    /**
     * Allows issuer to withdraw withheld tax
     */
    withdrawWithholding: (params: DividendIndexTxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Allows issuer to change maturity / expiry dates for dividends
     * NB - setting the maturity of a currently matured dividend to a future date
     * will effectively refreeze claims on that dividend until the new maturity date passes
     * @ dev NB - setting the expiry date to a past date will mean no more payments can be pulled
     * or pushed out of a dividend
     */
    updateDividendDates: (params: UpdateDividendDatesParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Get static dividend data
     * @return timestamp of dividends creation, timestamp of dividends maturity, timestamp of dividends expiry, amount
     * of dividends, claimed amount of dividends, name of dividends
     */
    getDividendsData: () => Promise<DividendData[]>;
    private pushDividendsData;
    /**
     * Get static dividend data
     * @return timestamp of dividend creation, timestamp of dividend maturity, timestamp of dividend expiry, amount of
     * dividend, claimed amount of dividend, name of dividend
     */
    getDividendData: (params: DividendIndexParams) => Promise<DividendData>;
    /**
     * Retrieves list of investors, their claim status and whether they are excluded
     * @return list of investors, whether investor has claimed, whether investor is excluded, amount of withheld tax
     * (estimate if not claimed), amount of claim (estimate if not claimeed), investor balance
     */
    getDividendProgress: (params: DividendIndexParams) => Promise<DividendProgress[]>;
    private pushDividendProgress;
    /**
     * Retrieves list of investors, their balances, and their current withholding tax percentage
     * @return list of investors, investor balances, investor withheld percentages
     */
    getCheckpointData: (params: CheckpointIdParams) => Promise<CheckpointData[]>;
    private pushCheckpointData;
    /**
     * Checks whether an address has claimed a dividend
     * @return bool whether the address has claimed
     */
    isClaimed: (params: InvestorStatus) => Promise<boolean>;
    /**
     * Checks whether an address is excluded from claiming a dividend
     * @return bool whether the address is excluded
     */
    isExcluded: (params: InvestorStatus) => Promise<boolean>;
    private isValidDividendIndex;
    private checkValidDividend;
    protected checkIfDividendCreationIsValid: (expiry: Date, maturity: Date, amount: BigNumber, name: string, token?: string | undefined, txData?: Partial<TxData> | undefined, checkpointId?: number | undefined, excluded?: string[]) => Promise<void>;
}
export {};
//# sourceMappingURL=dividend_checkpoint_wrapper.d.ts.map