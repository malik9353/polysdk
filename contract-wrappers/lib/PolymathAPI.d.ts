import { PolyResponse, BigNumber, Provider } from '@polymathnetwork/abi-wrappers';
import PolymathRegistryWrapper from './contract_wrappers/registries/polymath_registry_wrapper';
import SecurityTokenRegistryWrapper from './contract_wrappers/registries/security_token_registry_wrapper';
import PolyTokenWrapper from './contract_wrappers/tokens/poly_token_wrapper';
import ModuleRegistryWrapper from './contract_wrappers/registries/module_registry_wrapper';
import TokenWrapperFactory from './factories/tokenWrapperFactory';
import ModuleWrapperFactory from './factories/moduleWrapperFactory';
import FeatureRegistryWrapper from './contract_wrappers/registries/feature_registry_wrapper';
import ERC20 from './contract_wrappers/tokens/erc20_wrapper';
/**
 * @param provider The web3 provider
 * @param polymathRegistry The PolymathRegistry contract address '0x...'
 */
export interface ApiConstructorParams {
    provider: Provider;
    polymathRegistryAddress?: string;
    defaultGasPrice?: BigNumber;
}
/**
 * @param address (optional) Account address
 */
export interface GetBalanceParams {
    address?: string;
}
export interface GetTokensParams {
    amount: BigNumber;
    address?: string;
}
export interface GetERC20WrapperParams {
    address: string;
}
/**
 * The PolymathAPI class contains smart contract wrappers helpful to interact with Polymath ecosystem.
 */
export declare class PolymathAPI {
    /**
     * An instance of the PolymathRegistryWrapper class containing methods
     * for interacting with PolymathRegistry smart contract.
     */
    polymathRegistry: PolymathRegistryWrapper;
    /**
     * An instance of the SecurityTokenRegistryWrapper class containing methods
     * for interacting with SecurityTokenRegistry smart contract.
     */
    securityTokenRegistry: SecurityTokenRegistryWrapper;
    /**
     * An instance of the PolyTokenWrapper class containing methods
     * for interacting with PolyToken smart contract.
     */
    polyToken: PolyTokenWrapper;
    /**
     * An instance of the ModuleRegistryWrapper class containing methods
     * for interacting with ModuleRegistry smart contract.
     */
    moduleRegistry: ModuleRegistryWrapper;
    /**
     * An instance of the FeatureRegistryWrapper class containing methods
     * for interacting with FeatureRegistry smart contract.
     */
    featureRegistry: FeatureRegistryWrapper;
    /**
     * An instance of the TokenWrapperFactory class to get
     * TokenWrapper instances to interact with SecurityToken or ERC20 smart contracts
     */
    tokenFactory: TokenWrapperFactory;
    /**
     * An instance of the ModuleWrapperFactory class to get
     * different module wrapper instances to interact with SecurityToken smart contracts
     */
    moduleFactory: ModuleWrapperFactory;
    /**
     * An instance of the PolyTokenFaucetWrapper class containing methods
     * for interacting with PolyTokenFaucet smart contract.
     */
    private polyTokenFaucet;
    private readonly web3Wrapper;
    private contractFactory;
    /**
     * Instantiates a new PolymathAPI instance.
     * @return  An instance of the PolymathAPI class.
     */
    constructor(params: ApiConstructorParams);
    getPolyTokens: (params: GetTokensParams) => Promise<PolyResponse>;
    /**
     * Get a wrapped token from an address
     * @return TokenWrapper ERC20
     */
    getERC20TokenWrapper: (params: GetERC20WrapperParams) => Promise<ERC20>;
    /**
     * Get the account currently used by PolymathAPI
     * @return Address string
     */
    getAccount: () => Promise<string>;
    /**
     * Get the ETH balance
     * @return Balance BigNumber
     */
    getBalance: (params: GetBalanceParams) => Promise<BigNumber>;
    /**
     * Is it Testnet network?
     */
    isTestnet: () => Promise<boolean>;
}
//# sourceMappingURL=PolymathAPI.d.ts.map