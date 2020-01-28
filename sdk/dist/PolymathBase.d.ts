import { PolymathAPI, ModuleName, GeneralPermissionManager, CountTransferManager, GeneralTransferManager, ManualApprovalTransferManager, PercentageTransferManager, VolumeRestrictionTransferManager, CappedSTO, USDTieredSTO, ERC20DividendCheckpoint, EtherDividendCheckpoint, SecurityToken, BigNumber } from '@polymathnetwork/contract-wrappers';
import { DividendType } from './types';
interface GetAttachedModulesParams {
    symbol: string;
    moduleName: ModuleName;
}
interface GetAttachedModulesOpts {
    unarchived: boolean;
}
interface GetAttachedGeneralPermissionManagersParams extends GetAttachedModulesParams {
    moduleName: ModuleName.GeneralPermissionManager;
}
interface GetAttachedCountTransferManagersParams extends GetAttachedModulesParams {
    moduleName: ModuleName.CountTransferManager;
}
interface GetAttachedGeneralTransferManagersParams extends GetAttachedModulesParams {
    moduleName: ModuleName.GeneralTransferManager;
}
interface GetAttachedManualApprovalTransferManagersParams extends GetAttachedModulesParams {
    moduleName: ModuleName.ManualApprovalTransferManager;
}
interface GetAttachedPercentageTransferManagersParams extends GetAttachedModulesParams {
    moduleName: ModuleName.PercentageTransferManager;
}
interface GetAttachedVolumeRestrictionTransferManagersParams extends GetAttachedModulesParams {
    moduleName: ModuleName.VolumeRestrictionTM;
}
interface GetAttachedCappedStosParams extends GetAttachedModulesParams {
    moduleName: ModuleName.CappedSTO;
}
interface GetAttachedUSDTieredStosParams extends GetAttachedModulesParams {
    moduleName: ModuleName.UsdTieredSTO;
}
interface GetAttachedErc20DividendCheckpointsParams extends GetAttachedModulesParams {
    moduleName: ModuleName.ERC20DividendCheckpoint;
}
interface GetAttachedEtherDividendCheckpointsParams extends GetAttachedModulesParams {
    moduleName: ModuleName.EtherDividendCheckpoint;
}
interface GetAttachedModules {
    (params: GetAttachedGeneralPermissionManagersParams, opts?: GetAttachedModulesOpts): Promise<GeneralPermissionManager[]>;
    (params: GetAttachedCountTransferManagersParams, opts?: GetAttachedModulesOpts): Promise<CountTransferManager[]>;
    (params: GetAttachedGeneralTransferManagersParams, opts?: GetAttachedModulesOpts): Promise<GeneralTransferManager[]>;
    (params: GetAttachedManualApprovalTransferManagersParams, opts?: GetAttachedModulesOpts): Promise<ManualApprovalTransferManager[]>;
    (params: GetAttachedPercentageTransferManagersParams, opts?: GetAttachedModulesOpts): Promise<PercentageTransferManager[]>;
    (params: GetAttachedVolumeRestrictionTransferManagersParams, opts?: GetAttachedModulesOpts): Promise<VolumeRestrictionTransferManager[]>;
    (params: GetAttachedCappedStosParams, opts?: GetAttachedModulesOpts): Promise<CappedSTO[]>;
    (params: GetAttachedUSDTieredStosParams, opts?: GetAttachedModulesOpts): Promise<USDTieredSTO[]>;
    (params: GetAttachedErc20DividendCheckpointsParams, opts?: GetAttachedModulesOpts): Promise<ERC20DividendCheckpoint[]>;
    (params: GetAttachedEtherDividendCheckpointsParams, opts?: GetAttachedModulesOpts): Promise<EtherDividendCheckpoint[]>;
}
interface GetModuleFactoryAddressArgs {
    moduleName: ModuleName;
    tokenAddress: string;
}
export interface ShareholderBalance {
    balance: BigNumber;
    address: string;
}
export interface BaseCheckpoint {
    index: number;
    totalSupply: BigNumber;
    shareholderBalances: ShareholderBalance[];
    createdAt: Date;
}
export interface DividendShareholderStatus {
    address: string;
    paymentReceived: boolean;
    excluded: boolean;
    withheldTax: BigNumber;
    amountReceived: BigNumber;
    balance: BigNumber;
}
export interface BaseDividend {
    index: number;
    checkpointId: number;
    dividendType: DividendType;
    created: Date;
    maturity: Date;
    expiry: Date;
    amount: BigNumber;
    claimedAmount: BigNumber;
    totalSupply: BigNumber;
    reclaimed: boolean;
    totalWithheld: BigNumber;
    totalWithheldWithdrawn: BigNumber;
    name: string;
    currency: string | null;
    shareholders: DividendShareholderStatus[];
}
export declare class PolymathBase extends PolymathAPI {
    getModuleFactoryAddress: ({ moduleName, tokenAddress, }: GetModuleFactoryAddressArgs) => Promise<string>;
    getAttachedModules: GetAttachedModules;
    getCheckpoint: ({ checkpointId, securityToken, }: {
        checkpointId: number;
        securityToken: SecurityToken;
    }) => Promise<BaseCheckpoint>;
    getCheckpoints: ({ securityToken }: {
        securityToken: SecurityToken;
    }) => Promise<BaseCheckpoint[]>;
    private getCheckpointData;
    getDividend: ({ dividendIndex, dividendsModule, }: {
        dividendIndex: number;
        dividendsModule: ERC20DividendCheckpoint | EtherDividendCheckpoint;
    }) => Promise<BaseDividend>;
    getDividendsByCheckpoint: ({ checkpointId, dividendsModule, }: {
        checkpointId: number;
        dividendsModule: ERC20DividendCheckpoint | EtherDividendCheckpoint;
    }) => Promise<BaseDividend[]>;
    getDividends: ({ dividendsModule, }: {
        dividendsModule: ERC20DividendCheckpoint | EtherDividendCheckpoint;
    }) => Promise<BaseDividend[]>;
    /**
     * Auxiliary function to fetch all dividend distributions
     */
    getAllDividends: ({ securityTokenSymbol, checkpointId, dividendTypes, }: {
        securityTokenSymbol: string;
        checkpointId?: number | undefined;
        dividendTypes?: DividendType[] | undefined;
    }) => Promise<BaseDividend[]>;
}
export {};
//# sourceMappingURL=PolymathBase.d.ts.map