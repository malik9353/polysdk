import { BigNumber, Web3Wrapper } from '@polymathnetwork/abi-wrappers';
import ContractWrapper from '../contract_wrapper';
import { TxParams, ERC20Contract } from '../../types';
export declare namespace ERC20TransactionParams {
    interface Approve extends ApproveParams {
    }
    interface TransferFrom extends TransferFromParams {
    }
    interface Transfer extends TransferParams {
    }
}
/**
 * @param spender The address which will spend the funds
 * @param value The amount of tokens to be spent
 */
interface ApproveParams extends TxParams {
    spender: string;
    value: BigNumber;
}
/**
 * @param from The address which will spend the funds
 * @param to The address who will receive the funds
 * @param value The amount of tokens to be spent
 */
interface TransferFromParams extends TxParams {
    from: string;
    to: string;
    value: BigNumber;
}
/**
 * @param owner The address to query the the balance of
 */
interface GetBalanceOfParams {
    owner?: string;
}
/**
 * @param to The address who will receive the funds
 * @param value The amount of tokens to be spent
 */
interface TransferParams extends TxParams {
    to: string;
    value: BigNumber;
}
/**
 * @param owner address The address which owns the tokens
 * @param spender address The address which will spend the tokens
 */
interface AllowanceParams {
    owner: string;
    spender: string;
}
/**
 * This class includes the functionality related to interacting with the ERC20 contract.
 */
export default abstract class ERC20TokenWrapper extends ContractWrapper {
    protected contract: Promise<ERC20Contract>;
    /**
     * Instantiate ERC20Wrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<ERC20Contract>);
    /**
     * Returns the token name
     * @return name
     */
    name: () => Promise<string>;
    /**
     * Approves the passed address to spend the specified amount of tokens
     */
    approve: (params: ApproveParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns the token total supply
     * @return total supply amount
     */
    totalSupply: () => Promise<BigNumber>;
    /**
     * Send tokens amount of tokens from address from to address to
     */
    transferFrom: (params: TransferFromParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns the setted decimals
     * @return decimal amount
     */
    decimals: () => Promise<BigNumber>;
    /**
     * Returns the balance of the specified address
     * @return A BigNumber representing the amount owned by the passed address
     */
    balanceOf: (params?: GetBalanceOfParams | undefined) => Promise<BigNumber>;
    /**
     * Returns the token symbol
     * @return symbol
     */
    symbol: () => Promise<string>;
    /**
     * Transfer the balance from token owner's account to 'to' account
     */
    transfer: (params: TransferParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Function to check the amount of tokens a spender is allowed to spend
     * @return A BigNumber specifying the amount of tokens left available for the spender
     */
    allowance: (params: AllowanceParams) => Promise<BigNumber>;
    isValidContract(): Promise<boolean>;
}
export {};
//# sourceMappingURL=erc20_wrapper.d.ts.map