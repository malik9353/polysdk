import { ERC20DividendCheckpointContract, ModuleContract, ModuleFactoryContract, EtherDividendCheckpointContract, ERC20DetailedContract, ISecurityTokenContract, PolyTokenContract, GeneralPermissionManagerContract, PolyTokenFaucetContract, CappedSTOContract, CappedSTOFactoryContract, USDTieredSTOFactoryContract, USDTieredSTOContract, CountTransferManagerContract, GeneralTransferManagerContract, ManualApprovalTransferManagerContract, PercentageTransferManagerContract, LockUpTransferManagerContract, BlacklistTransferManagerContract, VolumeRestrictionTMContract, FeatureRegistryContract, ModuleRegistryContract, ISecurityTokenRegistryContract, PolymathRegistryContract, VestingEscrowWalletContract, Web3Wrapper, ContractAbi } from '@polymathnetwork/abi-wrappers';
export default class ContractFactory {
    private web3Wrapper;
    private abiArray;
    private provider;
    private polymathRegistry;
    private contractDefaults;
    constructor(web3Wrapper: Web3Wrapper, abiArray: ContractAbi[], polymathRegistryAddress?: string);
    getModuleContract(address: string): Promise<ModuleContract>;
    getERC20DividendCheckpointContract(address: string): Promise<ERC20DividendCheckpointContract>;
    getPolymathRegistryContract(): Promise<PolymathRegistryContract>;
    getModuleFactoryContract(address: string): Promise<ModuleFactoryContract>;
    getEtherDividendCheckpointContract(address: string): Promise<EtherDividendCheckpointContract>;
    getVestingEscrowWalletContract(address: string): Promise<VestingEscrowWalletContract>;
    getERC20DetailedContract(address: string): Promise<ERC20DetailedContract>;
    getAlternativeERC20Contract(address: string): Promise<ERC20DetailedContract>;
    getSecurityTokenContract(address: string): Promise<ISecurityTokenContract>;
    getPolyTokenFaucetContract(): Promise<PolyTokenFaucetContract>;
    getPolyTokenContract(): Promise<PolyTokenContract>;
    getGeneralPermissionManagerContract(address: string): Promise<GeneralPermissionManagerContract>;
    getCappedSTOFactoryContract(address: string): Promise<CappedSTOFactoryContract>;
    getCappedSTOContract(address: string): Promise<CappedSTOContract>;
    getUSDTieredSTOFactoryContract(address: string): Promise<USDTieredSTOFactoryContract>;
    getUSDTieredSTOContract(address: string): Promise<USDTieredSTOContract>;
    getCountTransferManagerContract(address: string): Promise<CountTransferManagerContract>;
    getGeneralTransferManagerContract(address: string): Promise<GeneralTransferManagerContract>;
    getManualApprovalTransferManagerContract(address: string): Promise<ManualApprovalTransferManagerContract>;
    getPercentageTransferManagerContract(address: string): Promise<PercentageTransferManagerContract>;
    getLockUpTransferManagerContract(address: string): Promise<LockUpTransferManagerContract>;
    getBlacklistTransferManagerContract(address: string): Promise<BlacklistTransferManagerContract>;
    getVolumeRestrictionTMContract(address: string): Promise<VolumeRestrictionTMContract>;
    getFeatureRegistryContract(): Promise<FeatureRegistryContract>;
    getModuleRegistryContract(): Promise<ModuleRegistryContract>;
    getSecurityTokenRegistryContract(): Promise<ISecurityTokenRegistryContract>;
}
//# sourceMappingURL=contractFactory.d.ts.map