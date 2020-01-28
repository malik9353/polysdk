import { PolymathRegistryContract, PolymathRegistryEvents, PolymathRegistryChangeAddressEventArgs, PolymathRegistryOwnershipTransferredEventArgs, Web3Wrapper, LogWithDecodedArgs } from '@polymathnetwork/abi-wrappers';
import ContractWrapper from '../contract_wrapper';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, GetLogs, Subscribe } from '../../types';
interface ChangeAddressSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: PolymathRegistryEvents.ChangeAddress;
    callback: EventCallback<PolymathRegistryChangeAddressEventArgs>;
}
interface GetChangeAddressLogsAsyncParams extends GetLogsAsyncParams {
    eventName: PolymathRegistryEvents.ChangeAddress;
}
interface OwnershipTransferredSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: PolymathRegistryEvents.OwnershipTransferred;
    callback: EventCallback<PolymathRegistryOwnershipTransferredEventArgs>;
}
interface GetOwnershipTransferredLogsAsyncParams extends GetLogsAsyncParams {
    eventName: PolymathRegistryEvents.OwnershipTransferred;
}
interface PolymathRegistrySubscribeAsyncParams extends Subscribe {
    (params: ChangeAddressSubscribeAsyncParams): Promise<string>;
    (params: OwnershipTransferredSubscribeAsyncParams): Promise<string>;
}
interface GetPolymathRegistryLogsAsyncParams extends GetLogs {
    (params: GetChangeAddressLogsAsyncParams): Promise<LogWithDecodedArgs<PolymathRegistryChangeAddressEventArgs>[]>;
    (params: GetOwnershipTransferredLogsAsyncParams): Promise<LogWithDecodedArgs<PolymathRegistryOwnershipTransferredEventArgs>[]>;
}
export declare namespace PolymathRegistryTransactionParams {
    interface ChangeAddress extends ChangeAddressParams {
    }
}
/**
 * @param contractName is the key for the contract address mapping
 */
interface GetAddressParams {
    contractName: string;
}
/**
 * @param nameKey is the key for the contract address mapping
 * @param newAddress is the new contract address
 */
interface ChangeAddressParams extends TxParams {
    nameKey: string;
    newAddress: string;
}
/**
 * This class includes the functionality related to interacting with the PolymathRegistry contract.
 */
export default class PolymathRegistryWrapper extends ContractWrapper {
    protected contract: Promise<PolymathRegistryContract>;
    /**
     * Instantiate PolymathRegistryWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<PolymathRegistryContract>);
    /**
     * Get owner of contract
     * @return address
     */
    owner: () => Promise<string>;
    /**
     * Gets the contract address
     * @return address string
     */
    getAddress: (params: GetAddressParams) => Promise<string>;
    /**
     * Gets the PolyToken contract address
     * @return address string
     */
    getPolyTokenAddress: () => Promise<string>;
    /**
     * Gets the ModuleRegistry contract address
     * @return address string
     */
    getModuleRegistryAddress: () => Promise<string>;
    /**
     * Gets the FeatureRegistry contract address
     * @return address string
     */
    getFeatureRegistryAddress: () => Promise<string>;
    /**
     * Gets the SecurityTokenRegistry contract address
     * @return address string
     */
    getSecurityTokenRegistryAddress: () => Promise<string>;
    /**
     * Gets the PolyUsdOracle contract address
     * @return address string
     */
    getPolyUsdOracleAddress: () => Promise<string>;
    /**
     * Gets the EthUsdOracle contract address
     * @return address string
     */
    getEthUsdOracleAddress: () => Promise<string>;
    /**
     * Changes the contract address
     */
    changeAddress: (params: ChangeAddressParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: PolymathRegistrySubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetPolymathRegistryLogsAsyncParams;
    private getAddressInternal;
}
export {};
//# sourceMappingURL=polymath_registry_wrapper.d.ts.map