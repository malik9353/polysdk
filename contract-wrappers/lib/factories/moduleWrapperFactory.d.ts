import { Web3Wrapper } from '@polymathnetwork/abi-wrappers';
import CountTransferManagerWrapper from '../contract_wrappers/modules/transfer_manager/count_transfer_manager_wrapper';
import ManualApprovalTransferManagerWrapper from '../contract_wrappers/modules/transfer_manager/manual_approval_transfer_manager_wrapper';
import PercentageTransferManagerWrapper from '../contract_wrappers/modules/transfer_manager/percentage_transfer_manager_wrapper';
import LockUpTransferManagerWrapper from '../contract_wrappers/modules/transfer_manager/lock_up_transfer_manager_wrapper';
import BlacklistTransferManagerWrapper from '../contract_wrappers/modules/transfer_manager/blacklist_transfer_manager_wrapper';
import VolumeRestrictionTransferManagerWrapper from '../contract_wrappers/modules/transfer_manager/volume_restriction_transfer_manager_wrapper';
import ERC20DividendCheckpointWrapper from '../contract_wrappers/modules/checkpoint/erc20_dividend_checkpoint_wrapper';
import EtherDividendCheckpointWrapper from '../contract_wrappers/modules/checkpoint/ether_dividend_checkpoint_wrapper';
import CappedSTOWrapper from '../contract_wrappers/modules/sto/capped_sto_wrapper';
import USDTieredSTOWrapper from '../contract_wrappers/modules/sto/usd_tiered_sto_wrapper';
import GeneralTransferManagerWrapper from '../contract_wrappers/modules/transfer_manager/general_transfer_manager_wrapper';
import GeneralPermissionManagerWrapper from '../contract_wrappers/modules/permission_manager/general_permission_manager_wrapper';
import ModuleFactoryWrapper from '../contract_wrappers/modules/module_factory_wrapper';
import VestingEscrowWalletWrapper from '../contract_wrappers/modules/wallet/vesting_escrow_wallet_wrapper';
import ContractFactory from './contractFactory';
import { ModuleName } from '../types';
interface GetModuleParams {
    address: string;
    name: ModuleName;
}
interface GetVestingEscrowWallet extends GetModuleParams {
    name: ModuleName.VestingEscrowWallet;
}
interface GetGeneralPermissionManager extends GetModuleParams {
    name: ModuleName.GeneralPermissionManager;
}
interface GetCountTransferManager extends GetModuleParams {
    name: ModuleName.CountTransferManager;
}
interface GetGeneralTransferManager extends GetModuleParams {
    name: ModuleName.GeneralTransferManager;
}
interface GetManualApprovalTransferManager extends GetModuleParams {
    name: ModuleName.ManualApprovalTransferManager;
}
interface GetPercentageTransferManager extends GetModuleParams {
    name: ModuleName.PercentageTransferManager;
}
interface GetLockUpTransferManager extends GetModuleParams {
    name: ModuleName.LockUpTransferManager;
}
interface GetBlacklistTransferManager extends GetModuleParams {
    name: ModuleName.BlacklistTransferManager;
}
interface GetVolumeRestrictionTransferManager extends GetModuleParams {
    name: ModuleName.VolumeRestrictionTM;
}
interface GetCappedSTO extends GetModuleParams {
    name: ModuleName.CappedSTO;
}
interface GetUSDTieredSTO extends GetModuleParams {
    name: ModuleName.UsdTieredSTO;
}
interface GetERC20DividendCheckpoint extends GetModuleParams {
    name: ModuleName.ERC20DividendCheckpoint;
}
interface GetEtherDividendCheckpoint extends GetModuleParams {
    name: ModuleName.EtherDividendCheckpoint;
}
interface GetModuleInstance {
    (params: GetGeneralPermissionManager): Promise<GeneralPermissionManagerWrapper>;
    (params: GetCountTransferManager): Promise<CountTransferManagerWrapper>;
    (params: GetGeneralTransferManager): Promise<GeneralTransferManagerWrapper>;
    (params: GetManualApprovalTransferManager): Promise<ManualApprovalTransferManagerWrapper>;
    (params: GetPercentageTransferManager): Promise<PercentageTransferManagerWrapper>;
    (params: GetLockUpTransferManager): Promise<LockUpTransferManagerWrapper>;
    (params: GetBlacklistTransferManager): Promise<BlacklistTransferManagerWrapper>;
    (params: GetVolumeRestrictionTransferManager): Promise<VolumeRestrictionTransferManagerWrapper>;
    (params: GetCappedSTO): Promise<CappedSTOWrapper>;
    (params: GetUSDTieredSTO): Promise<USDTieredSTOWrapper>;
    (params: GetERC20DividendCheckpoint): Promise<ERC20DividendCheckpointWrapper>;
    (params: GetEtherDividendCheckpoint): Promise<EtherDividendCheckpointWrapper>;
    (params: GetVestingEscrowWallet): Promise<VestingEscrowWalletWrapper>;
}
/**
 * The ModuleWrapperFactory class is a factory to get instances from modules attached to a SecurityToken.
 */
export default class ModuleWrapperFactory {
    private readonly web3Wrapper;
    private contractFactory;
    constructor(web3Wrapper: Web3Wrapper, contractFactory: ContractFactory);
    getModuleFactory: (address: string) => Promise<ModuleFactoryWrapper>;
    getModuleInstance: GetModuleInstance;
}
export {};
//# sourceMappingURL=moduleWrapperFactory.d.ts.map