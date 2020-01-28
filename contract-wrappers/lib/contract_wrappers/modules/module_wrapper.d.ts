import { ISecurityTokenContract, ModuleFactoryContract, PolyTokenContract, ERC20DetailedContract, Web3Wrapper, TxData } from '@polymathnetwork/abi-wrappers';
import ContractWrapper from '../contract_wrapper';
import ContractFactory from '../../factories/contractFactory';
import { TxParams, GenericModuleContract, GetLogs, Subscribe } from '../../types';
/**
 * @param tokenContract ERC20 Token Contract Address
 */
interface ReclaimERC20Params extends TxParams {
    tokenContract: string;
}
/**
 * This class includes the functionality related to interacting with the General Permission Manager contract.
 */
export default class ModuleWrapper extends ContractWrapper {
    protected contract: Promise<GenericModuleContract>;
    protected contractFactory: ContractFactory;
    protected securityTokenContract: () => Promise<ISecurityTokenContract>;
    protected polyTokenContract: () => Promise<PolyTokenContract>;
    protected detailedERC20TokenContract: (address: string) => Promise<ERC20DetailedContract>;
    protected moduleFactoryContract: () => Promise<ModuleFactoryContract>;
    getLogsAsync: GetLogs | undefined;
    subscribeAsync: Subscribe | undefined;
    /**
     * Instantiate GeneralPermissionManagerWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<GenericModuleContract>, contractFactory: ContractFactory);
    /**
     * Return init function result
     * @return init function string
     */
    getInitFunction: () => Promise<string>;
    /**
     * Return poly token address
     * @return address
     */
    polyToken: () => Promise<string>;
    /**
     * Return security token address
     * @return address
     */
    securityToken: () => Promise<string>;
    /**
     * Return permissions
     * @return list of permissions
     */
    getPermissions: () => Promise<string[]>;
    /**
     * Return factory address
     * @return address
     */
    factory: () => Promise<string>;
    /**
     * Reclaim ETH from contract
     */
    reclaimETH: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Reclaim ERC20 tokens from contract
     */
    reclaimERC20: (params: ReclaimERC20Params) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    isValidModule: () => Promise<boolean>;
    protected isCallerTheSecurityTokenOwner: (txData: Partial<TxData> | undefined) => Promise<boolean>;
    protected isCallerAllowed: (txData: Partial<TxData> | undefined, perm: string) => Promise<boolean>;
}
export {};
//# sourceMappingURL=module_wrapper.d.ts.map