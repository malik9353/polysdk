import { Web3Wrapper, Provider } from '@polymathnetwork/contract-wrappers';
export declare enum BrowserSupport {
    NoMetamask = "NoMetamask",
    MetamaskLegacy = "MetamaskLegacy",
    MetamaskModern = "MetamaskModern",
    None = "None"
}
/**
 * Returns the browser support for Ethereum
 */
export declare function getBrowserSupport(): BrowserSupport;
export declare function getInjectedProvider(): Promise<Provider | undefined>;
export declare function getWeb3(): Promise<Web3Wrapper>;
/**
 * Returns the current networkId provided by the browser
 */
export declare function getNetworkId(): Promise<number | null>;
export declare function getCurrentAddress(): Promise<string>;
/**
 * Runs the callback anytime the wallet address changes in the browser
 *
 * @param cb callback that receives the new address and the previous one
 *
 * @returns an unsubscribe function
 */
export declare function onAddressChange(cb: (newAddress: string, previousAddress?: string) => void): () => void;
/**
 * Runs the callback anytime the current network changes in the browser
 *
 * @param cb callback that receives the new network id and the previous one
 *
 * @returns an unsubscribe function
 */
export declare function onNetworkChange(cb: (newNetwork: number, previousNetwork?: number) => void): () => void;
//# sourceMappingURL=browserUtils.d.ts.map