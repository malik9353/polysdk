import { PolyTokenFaucetContract, Web3Wrapper, BigNumber } from '@polymathnetwork/abi-wrappers';
import ContractWrapper from '../contract_wrapper';
import { TxParams } from '../../types';
export declare namespace PolyTokenFaucetTransactionParams {
    interface GetTokens extends GetTokensParams {
    }
}
/**
 * @param amount Amount of tokens to get from faucet
 * @param recipient Address to transfer to
 */
interface GetTokensParams extends TxParams {
    amount: BigNumber;
    recipient: string;
}
/**
 * This class includes the functionality related to interacting with the PolyTokenFaucet contract.
 */
export default class PolyTokenFaucetWrapper extends ContractWrapper {
    protected contract: Promise<PolyTokenFaucetContract>;
    /**
     * Instantiate PolyTokenFaucetWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<PolyTokenFaucetContract>);
    /**
     * Used to get tokens from faucet
     */
    getTokens: (params: GetTokensParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    getLogsAsync: undefined;
    subscribeAsync: undefined;
}
export {};
//# sourceMappingURL=poly_token_faucet_wrapper.d.ts.map