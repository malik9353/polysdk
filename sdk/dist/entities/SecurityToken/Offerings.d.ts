import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { SubModule } from './SubModule';
import { CappedStoCurrency, StoTier, Currency, StoType } from '../../types';
import { CappedSto, UsdTieredSto } from '..';
interface GetSto {
    (args: {
        stoType: StoType.Capped;
        address: string;
    }): Promise<CappedSto>;
    (args: {
        stoType: StoType.UsdTiered;
        address: string;
    }): Promise<UsdTieredSto>;
    (args: string): Promise<CappedSto | UsdTieredSto>;
}
export declare class Offerings extends SubModule {
    /**
     * Launch a Capped STO
     *
     * @param startDate date when the STO should start
     * @param endDate date when the STO should end
     * @param tokensOnSale amount of tokens to be sold
     * @param rate amount of tokens an investor can purchase per unit of currency spent
     * @param currency currency in which the funds will be raised (ETH or POLY)
     * @param storageWallet wallet address that will receive the funds that are being raised
     *
     */
    launchCappedSto: (args: {
        startDate: Date;
        endDate: Date;
        tokensOnSale: BigNumber;
        rate: BigNumber;
        currency: CappedStoCurrency;
        storageWallet: string;
    }) => Promise<import("..").TransactionQueue<import("../../types").LaunchCappedStoProcedureArgs, CappedSto>>;
    /**
     * Launch a USD Tiered STO
     *
     * @param startDate date when the STO should start
     * @param endDate date when the STO should end
     * @param tiers tier information
     * @param tiers[].tokensOnSale amount of tokens to be sold on that tier
     * @param tiers[].price price of each token on that tier in USD
     * @param tiers[].tokensWithDiscount amount of tokens to be sold on that tier at a discount if paid in POLY (must be less than tokensOnSale, defaults to 0)
     * @param tiers[].discountedPrice price of discounted tokens on that tier (defaults to 0)
     * @param nonAccreditedInvestmentLimit maximum investment for non-accredited investors
     * @param minimumInvestment minimum investment amount
     * @param currencies array of currencies in which the funds will be raised (ETH, POLY, StableCoin)
     * @param storageWallet wallet address that will receive the funds that are being raised
     * @param treasuryWallet wallet address that will receive unsold tokens when the end date is reached
     * @param usdTokenAddresses array of USD stable coins that the offering supports
     *
     */
    launchUsdTieredSto: (args: {
        startDate: Date;
        endDate: Date;
        tiers: StoTier[];
        nonAccreditedInvestmentLimit: BigNumber;
        minimumInvestment: BigNumber;
        currencies: Currency[];
        storageWallet: string;
        treasuryWallet: string;
        usdTokenAddresses: string[];
    }) => Promise<import("..").TransactionQueue<import("../../types").LaunchUsdTieredStoProcedureArgs, UsdTieredSto>>;
    /**
     * Retrieve an STO by type and address or UUID
     *
     * @param stoType type of the STO (Capped or USDTiered)
     * @param address address of the STO contract
     */
    getSto: GetSto;
    /**
     * Retrieve all STOs attached to a security token
     *
     * @param stoTypes array of types of STOs to fetch (optional, defaults to both)
     */
    getStos: (opts?: {
        stoTypes: StoType[];
    }) => Promise<(CappedSto | UsdTieredSto)[]>;
}
export {};
//# sourceMappingURL=Offerings.d.ts.map