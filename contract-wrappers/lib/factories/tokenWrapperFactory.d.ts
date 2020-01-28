import { Web3Wrapper } from '@polymathnetwork/abi-wrappers';
import SecurityTokenRegistryWrapper from '../contract_wrappers/registries/security_token_registry_wrapper';
import SecurityTokenWrapper from '../contract_wrappers/tokens/security_token_wrapper';
import ERC20TokenWrapper from '../contract_wrappers/tokens/erc20_wrapper';
import ContractFactory from './contractFactory';
/**
 * The SecurityTokenFactory class is a factory to generate new SecurityTokenWrappers.
 */
export default class TokenWrapperFactory {
    private readonly web3Wrapper;
    /**
     * An instance of the ContractFactory class containing methods
     * to create instances for each contract.
     */
    private contractFactory;
    /**
     * An instance of the SecurityTokenRegistryWrapper class containing methods
     * for interacting with SecurityTokenRegistry smart contract.
     */
    private securityTokenRegistry;
    constructor(web3Wrapper: Web3Wrapper, securityTokenRegistry: SecurityTokenRegistryWrapper, contractFactory: ContractFactory);
    /**
     * @param address Security Token contract address
     *
     * @memberof SecurityTokenWrapperFactory
     */
    getERC20TokenInstanceFromAddress: (address: string) => Promise<ERC20TokenWrapper>;
    /**
     * @param address Security Token contract address
     *
     * @memberof SecurityTokenWrapperFactory
     */
    getSecurityTokenInstanceFromAddress: (address: string) => Promise<SecurityTokenWrapper>;
    /**
     * @param ticker Security Token token symbol
     *
     * @memberof SecurityTokenWrapperFactory
     */
    getSecurityTokenInstanceFromTicker: (ticker: string) => Promise<SecurityTokenWrapper>;
}
//# sourceMappingURL=tokenWrapperFactory.d.ts.map