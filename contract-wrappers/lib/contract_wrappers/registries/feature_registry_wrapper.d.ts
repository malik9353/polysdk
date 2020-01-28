import { FeatureRegistryContract, FeatureRegistryEvents, FeatureRegistryChangeFeatureStatusEventArgs, FeatureRegistryOwnershipTransferredEventArgs, Web3Wrapper, LogWithDecodedArgs } from '@polymathnetwork/abi-wrappers';
import ContractWrapper from '../contract_wrapper';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, Subscribe, GetLogs } from '../../types';
interface ChangeFeatureStatusSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: FeatureRegistryEvents.ChangeFeatureStatus;
    callback: EventCallback<FeatureRegistryChangeFeatureStatusEventArgs>;
}
interface GetChangeFeatureStatusLogsAsyncParams extends GetLogsAsyncParams {
    eventName: FeatureRegistryEvents.ChangeFeatureStatus;
}
interface OwnershipTransferredSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: FeatureRegistryEvents.OwnershipTransferred;
    callback: EventCallback<FeatureRegistryOwnershipTransferredEventArgs>;
}
interface GetOwnershipTransferredLogsAsyncParams extends GetLogsAsyncParams {
    eventName: FeatureRegistryEvents.OwnershipTransferred;
}
interface FeatureRegistrySubscribeAsyncParams extends Subscribe {
    (params: ChangeFeatureStatusSubscribeAsyncParams): Promise<string>;
    (params: OwnershipTransferredSubscribeAsyncParams): Promise<string>;
}
interface GetFeatureRegistryLogsAsyncParams extends GetLogs {
    (params: GetChangeFeatureStatusLogsAsyncParams): Promise<LogWithDecodedArgs<FeatureRegistryChangeFeatureStatusEventArgs>[]>;
    (params: GetOwnershipTransferredLogsAsyncParams): Promise<LogWithDecodedArgs<FeatureRegistryOwnershipTransferredEventArgs>[]>;
}
export declare namespace FeatureRegistryTransactionParams {
    interface SetFeatureStatus extends SetFeatureStatusParams {
    }
}
/**
 * @param nameKey is the key for the feature status mapping
 */
interface GetFeatureStatusParams {
    nameKey: string;
}
/**
 * @param nameKey is the key for the feature status mapping
 * @param newStatus is the new feature status
 */
interface SetFeatureStatusParams extends TxParams {
    nameKey: string;
    newStatus: boolean;
}
/**
 * This class includes the functionality related to interacting with the FeatureRegistry contract.
 */
export default class FeatureRegistryWrapper extends ContractWrapper {
    protected contract: Promise<FeatureRegistryContract>;
    /**
     * Instantiate FeatureRegistryWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<FeatureRegistryContract>);
    /**
     * Get owner of contract
     * @return address
     */
    owner: () => Promise<string>;
    /**
     * Get the status of a feature
     * @return bool
     */
    getFeatureStatus: (params: GetFeatureStatusParams) => Promise<boolean>;
    /**
     * Change a feature status
     */
    setFeatureStatus: (params: SetFeatureStatusParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Get the CustomModulesAllowed status
     * @return bool
     */
    getCustomModulesAllowedStatus: () => Promise<boolean>;
    /**
     * Get the FreezeMintingAllowed status
     * @return bool
     */
    getFreezeMintingAllowedStatus: () => Promise<boolean>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: FeatureRegistrySubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetFeatureRegistryLogsAsyncParams;
}
export {};
//# sourceMappingURL=feature_registry_wrapper.d.ts.map