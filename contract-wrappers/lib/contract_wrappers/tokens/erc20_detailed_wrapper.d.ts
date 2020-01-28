import { ERC20DetailedContract, Web3Wrapper } from '@polymathnetwork/abi-wrappers';
import ERC20TokenWrapper from './erc20_wrapper';
import { GetLogs, Subscribe } from '../../types';
/**
 * This class includes the functionality related to interacting with the AlternativeERC20 contract.
 */
export default class ERC20DetailedWrapper extends ERC20TokenWrapper {
    protected contract: Promise<ERC20DetailedContract>;
    /**
     * Instantiate AlternativeERC20Wrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<ERC20DetailedContract>);
    subscribeAsync: Subscribe;
    getLogsAsync: GetLogs;
}
//# sourceMappingURL=erc20_detailed_wrapper.d.ts.map