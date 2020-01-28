import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { TransactionSpeed } from './types';
import { Erc20TokenBalance, SecurityToken } from './entities';
interface PolymathNetworkParams {
    polymathRegistryAddress: string;
    speed?: TransactionSpeed;
}
interface PolymathNetworkNodeParams extends PolymathNetworkParams {
    providerUrl: string;
    privateKey: string;
}
interface Connect {
    (params: PolymathNetworkParams): Promise<Polymath>;
    (params: PolymathNetworkNodeParams): Promise<Polymath>;
}
/**
 * @param symbol Security Token symbol
 */
interface SymbolParams {
    symbol: string;
}
/**
 * @param address Address of the Security Token contract
 */
interface AddressParams {
    address: string;
}
interface GetSecurityToken {
    (params: SymbolParams): Promise<SecurityToken>;
    (params: AddressParams): Promise<SecurityToken>;
    (params: string): Promise<SecurityToken>;
}
export declare class Polymath {
    isUnsupported: boolean;
    isConnected: boolean;
    polymathRegistryAddress: string;
    private context;
    connect: Connect;
    /**
     * Reserve a Security Token
     *
     * @param symbol Security Token symbol
     * @param owner address that will own the reservation (optional, use this if you want to reserve a token on behalf of someone else)
     */
    reserveSecurityToken: (args: {
        symbol: string;
        owner?: string | undefined;
    }) => Promise<import("./entities").TransactionQueue<import("./types").ReserveSecurityTokenProcedureArgs, import("./entities").SecurityTokenReservation>>;
    /**
     * Retrieve all Security Token Reservations currently owned by an issuer. This includes
     * Security Tokens that have already been launched
     *
     * @param owner issuer's address (defaults to current address)
     */
    getSecurityTokenReservations: (args?: {
        owner: string;
    } | undefined) => Promise<import("./entities").SecurityTokenReservation[]>;
    /**
     * Retrieve a Security Token Reservation by symbol or UUID
     *
     * @param symbol Security Token symbol
     */
    getSecurityTokenReservation: (args: string | {
        symbol: string;
    }) => Promise<import("./entities").SecurityTokenReservation>;
    /**
     * Retrieve all launched Security Tokens related to a wallet.
     * This includes tokens owned by the wallet and tokens for which the wallet holds some role
     *
     * @param walletAddress defaults to current address
     */
    getSecurityTokens: (args?: {
        walletAddress: string;
    } | undefined) => Promise<SecurityToken[]>;
    /**
     * Retrieve a security token by symbol, address or UUID
     */
    getSecurityToken: GetSecurityToken;
    /**
     * Check if a token symbol (ticker) is available for reservation
     *
     * @param symbol security token symbol for which to check availability
     */
    isSymbolAvailable: (args: {
        symbol: string;
    }) => Promise<boolean>;
    /**
     * Check if a token follows the ERC20 standard
     *
     * @param address address of the token contract
     */
    isValidErc20: (args: {
        address: string;
    }) => Promise<void>;
    /**
     * Get the balance of ETH in a wallet
     *
     * @param walletAddress wallet to check for balance
     */
    getEthBalance: (args: {
        walletAddress: string;
    }) => Promise<BigNumber>;
    /**
     * Get the balance of a specific ERC20 token in a wallet
     *
     * @param tokenAddress address of the ERC20 token
     * @param walletAddress wallet to check for balance
     */
    getErc20TokenBalance: (args: string | {
        tokenAddress: string;
        walletAddress: string;
    }) => Promise<Erc20TokenBalance>;
    /**
     * Get the current version of the Polymath Protocol
     *
     * @returns version string (i.e. 3.0.0)
     */
    getLatestProtocolVersion: () => Promise<string>;
    /**
     * Get the address of the POLY token
     */
    getPolyTokenAddress: () => Promise<string>;
    /**
     * Returns the wallet address of the current user
     */
    getCurrentAddress: () => Promise<string>;
    /**
     * Obtains a recommended default gas price based on the desired transaction speed
     *
     * On mainnet, the gas price is fetched from ethgasstation.info (most reliable)\
     * On testnets (or if ethgasstation is unavailable), the gas price is fetched from the network itself via eth_gasPrice\
     * If everything else fails, we use a base default of 1 GWEI
     *
     * On the last two cases, the obtained price is multiplied by a factor depending on the speed:\
     * Slow = x1\
     * Medium = x2\
     * Fast = x3\
     * Fastest = x5
     */
    private getGasPrice;
}
export {};
//# sourceMappingURL=Polymath.d.ts.map