import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { SubModule } from './SubModule';
import { DividendType, TaxWithholdingEntry } from '../../types';
import { DividendDistribution } from '../DividendDistribution';
import { Erc20DividendsManager } from '../Erc20DividendsManager';
import { EthDividendsManager } from '../EthDividendsManager';
import { TaxWithholding } from '../TaxWithholding';
interface GetManager {
    (args: {
        dividendType: DividendType.Erc20;
    }): Promise<Erc20DividendsManager | null>;
    (args: {
        dividendType: DividendType.Eth;
    }): Promise<EthDividendsManager | null>;
    (args: string): Promise<Erc20DividendsManager | EthDividendsManager | null>;
}
export declare class Dividends extends SubModule {
    /**
     * Enable dividend functionalities (ERC20, ETH or both)
     *
     * @param storageWalletAddress wallet that will receive reclaimed dividends and withheld taxes
     * @param types array containing the types of dividends to enable (will enable both if not present)
     */
    enable: (args: {
        storageWalletAddress: string;
        types?: DividendType[] | undefined;
    }) => Promise<import("..").TransactionQueue<import("../../types").EnableDividendManagersProcedureArgs, void>>;
    /**
     * Distribute dividends in POLY
     *
     * @param checkpointId uuid of the checkpoint to use as reference for the distribution
     * @param maturityDate date from which dividends can be paid/collected
     * @param expiryDate date up to which dividends can be paid/collected
     * @param amount amount to be distributed
     * @param name human readable name of the distribution
     * @param excludedAddresses shareholder addresses that will be excluded from the distribution (optional)
     * @param taxWithholdings array that specifies how much to withhold from each shareholder for tax purposes
     * @param taxWithholdings[].address shareholder address
     * @param taxWithholdings[].percentage tax percentage to be withheld
     */
    createPolyDistribution: (args: {
        checkpointId: string;
        maturityDate: Date;
        expiryDate: Date;
        amount: BigNumber;
        name: string;
        excludedAddresses?: string[] | undefined;
        taxWithholdings?: TaxWithholdingEntry[] | undefined;
    }) => Promise<import("..").TransactionQueue<import("../../types").CreateErc20DividendDistributionProcedureArgs, DividendDistribution>>;
    /**
     * Distribute dividends in a specified ERC20 token
     *
     * @param checkpointId uuid of the checkpoint to use as reference for the distribution
     * @param maturityDate date from which dividends can be paid/collected
     * @param expiryDate date up to which dividends can be paid/collected
     * @param erc20Address address of the ERC20 token that will be used as currency
     * @param amount amount to be distributed
     * @param name human readable name of the distribution
     * @param excludedAddresses shareholder addresses that will be excluded from the distribution (optional)
     * @param taxWithholdings array that specifies how much to withhold from each shareholder for tax purposes
     * @param taxWithholdings[].address shareholder address
     * @param taxWithholdings[].percentage tax percentage to be withheld
     */
    createErc20Distribution: (args: {
        checkpointId: string;
        maturityDate: Date;
        expiryDate: Date;
        erc20Address: string;
        amount: BigNumber;
        name: string;
        excludedAddresses?: string[] | undefined;
        taxWithholdings?: TaxWithholdingEntry[] | undefined;
    }) => Promise<import("..").TransactionQueue<import("../../types").CreateErc20DividendDistributionProcedureArgs, DividendDistribution>>;
    /**
     * Distribute dividends in ETH
     *
     * @param checkpointId uuid of the checkpoint to use as reference for the distribution
     * @param maturityDate date from which dividends can be paid/collected
     * @param expiryDate date up to which dividends can be paid/collected
     * @param amount amount to be distributed
     * @param name human readable name of the distribution
     * @param excludedAddresses shareholder addresses that will be excluded from the distribution (optional)
     * @param taxWithholdings array that specifies how much to withhold from each shareholder for tax purposes
     * @param taxWithholdings[].address shareholder address
     * @param taxWithholdings[].percentage tax percentage to be withheld
     */
    createEthDistribution: (args: {
        checkpointId: string;
        maturityDate: Date;
        expiryDate: Date;
        amount: BigNumber;
        name: string;
        excludedAddresses?: string[] | undefined;
        taxWithholdings?: TaxWithholdingEntry[] | undefined;
    }) => Promise<import("..").TransactionQueue<import("../../types").CreateEtherDividendDistributionProcedureArgs, DividendDistribution>>;
    /**
     * Set default tax withtholding list for a type of dividends
     *
     * @param dividendType type of dividends for which to modify the tax withholding list
     * @param taxWithholdings array that specifies how much to withhold from each shareholder for tax purposes
     * @param taxWithholdings[].address shareholder address
     * @param taxWithholdings[].percentage tax percentage to be withheld
     */
    modifyTaxWithholdingList: (args: {
        dividendType: DividendType;
        taxWithholdings: TaxWithholdingEntry[];
    }) => Promise<import("..").TransactionQueue<import("../../types").UpdateDividendsTaxWithholdingListProcedureArgs, void>>;
    /**
     * Change dividends manager storage wallet address
     *
     * @param dividendType type of dividends for which to modify the storage wallet
     * @param address new storage wallet address
     */
    modifyStorageWallet: (args: {
        dividendType: DividendType;
        address: string;
    }) => Promise<import("..").TransactionQueue<import("../../types").SetDividendsWalletProcedureArgs, void>>;
    /**
     * Retrieve a list of investor addresses and their corresponding tax withholding
     * percentages
     */
    getTaxWithholdingList: (args: {
        dividendType: DividendType;
    }) => Promise<TaxWithholding[]>;
    /**
     * Retrieve all dividend distributions at a certain checkpoint
     *
     * @param checkpointId UUID of the checkpoint
     */
    getDistributions: (args: {
        checkpointId: string;
    }, opts?: {
        dividendTypes?: DividendType[] | undefined;
    } | undefined) => Promise<DividendDistribution[]>;
    /**
     * Retrieve a particular dividend distribution by type and index or UUID
     *
     * @param dividendType type of the dividend distribution
     * @param dividendIndex index of the dividend distribution
     */
    getDistribution: (args: string | {
        dividendType: DividendType;
        dividendIndex: number;
    }) => Promise<DividendDistribution>;
    /**
     * Retrieve a Dividends Manager related to the Security Token by UUID or type.
     *
     * @throws if dividends of that type haven't been enabled
     *
     * @param dividendType type of manager
     */
    getManager: GetManager;
}
export {};
//# sourceMappingURL=Dividends.d.ts.map