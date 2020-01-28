import { ModuleRegistryContract, ModuleRegistryEvents, ModuleRegistryModuleRegisteredEventArgs, ModuleRegistryModuleRemovedEventArgs, ModuleRegistryModuleUsedEventArgs, ModuleRegistryModuleVerifiedEventArgs, ModuleRegistryModuleUnverifiedEventArgs, ModuleRegistryOwnershipTransferredEventArgs, ModuleRegistryPauseEventArgs, ModuleRegistryUnpauseEventArgs, ISecurityTokenRegistryContract, FeatureRegistryContract, ModuleFactoryContract, Web3Wrapper, LogWithDecodedArgs } from '@polymathnetwork/abi-wrappers';
import ContractWrapper from '../contract_wrapper';
import ContractFactory from '../../factories/contractFactory';
import { EventCallback, GetLogs, GetLogsAsyncParams, ModuleType, Subscribe, SubscribeAsyncParams, TxParams } from '../../types';
interface PauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ModuleRegistryEvents.Pause;
    callback: EventCallback<ModuleRegistryPauseEventArgs>;
}
interface GetPauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ModuleRegistryEvents.Pause;
}
interface UnpauseSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ModuleRegistryEvents.Unpause;
    callback: EventCallback<ModuleRegistryUnpauseEventArgs>;
}
interface GetUnpauseLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ModuleRegistryEvents.Unpause;
}
interface ModuleUsedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ModuleRegistryEvents.ModuleUsed;
    callback: EventCallback<ModuleRegistryModuleUsedEventArgs>;
}
interface GetModuleUsedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ModuleRegistryEvents.ModuleUsed;
}
interface ModuleRegisteredSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ModuleRegistryEvents.ModuleRegistered;
    callback: EventCallback<ModuleRegistryModuleRegisteredEventArgs>;
}
interface GetModuleRegisteredLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ModuleRegistryEvents.ModuleRegistered;
}
interface ModuleVerifiedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ModuleRegistryEvents.ModuleVerified;
    callback: EventCallback<ModuleRegistryModuleVerifiedEventArgs>;
}
interface GetModuleVerifiedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ModuleRegistryEvents.ModuleVerified;
}
interface ModuleUnverifiedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ModuleRegistryEvents.ModuleUnverified;
    callback: EventCallback<ModuleRegistryModuleVerifiedEventArgs>;
}
interface GetModuleUnverifiedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ModuleRegistryEvents.ModuleUnverified;
}
interface ModuleRemovedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ModuleRegistryEvents.ModuleRemoved;
    callback: EventCallback<ModuleRegistryModuleRemovedEventArgs>;
}
interface GetModuleRemovedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ModuleRegistryEvents.ModuleRemoved;
}
interface OwnershipTransferredSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: ModuleRegistryEvents.OwnershipTransferred;
    callback: EventCallback<ModuleRegistryOwnershipTransferredEventArgs>;
}
interface GetOwnershipTransferredLogsAsyncParams extends GetLogsAsyncParams {
    eventName: ModuleRegistryEvents.OwnershipTransferred;
}
interface ModuleRegistrySubscribeAsyncParams extends Subscribe {
    (params: PauseSubscribeAsyncParams): Promise<string>;
    (params: UnpauseSubscribeAsyncParams): Promise<string>;
    (params: ModuleUsedSubscribeAsyncParams): Promise<string>;
    (params: ModuleRegisteredSubscribeAsyncParams): Promise<string>;
    (params: ModuleVerifiedSubscribeAsyncParams): Promise<string>;
    (params: ModuleUnverifiedSubscribeAsyncParams): Promise<string>;
    (params: ModuleRemovedSubscribeAsyncParams): Promise<string>;
    (params: OwnershipTransferredSubscribeAsyncParams): Promise<string>;
}
interface GetModuleRegistryLogsAsyncParams extends GetLogs {
    (params: GetPauseLogsAsyncParams): Promise<LogWithDecodedArgs<ModuleRegistryPauseEventArgs>[]>;
    (params: GetUnpauseLogsAsyncParams): Promise<LogWithDecodedArgs<ModuleRegistryUnpauseEventArgs>[]>;
    (params: GetModuleUsedLogsAsyncParams): Promise<LogWithDecodedArgs<ModuleRegistryModuleUsedEventArgs>[]>;
    (params: GetModuleRegisteredLogsAsyncParams): Promise<LogWithDecodedArgs<ModuleRegistryModuleRegisteredEventArgs>[]>;
    (params: GetModuleVerifiedLogsAsyncParams): Promise<LogWithDecodedArgs<ModuleRegistryModuleVerifiedEventArgs>[]>;
    (params: GetModuleUnverifiedLogsAsyncParams): Promise<LogWithDecodedArgs<ModuleRegistryModuleUnverifiedEventArgs>[]>;
    (params: GetModuleRemovedLogsAsyncParams): Promise<LogWithDecodedArgs<ModuleRegistryModuleRemovedEventArgs>[]>;
    (params: GetOwnershipTransferredLogsAsyncParams): Promise<LogWithDecodedArgs<ModuleRegistryOwnershipTransferredEventArgs>[]>;
}
export declare namespace ModuleRegistryTransactionParams {
    interface RegisterModule extends ModuleFactoryParams {
    }
    interface RemoveModule extends ModuleFactoryParams {
    }
    interface UnverifyModule extends ModuleFactoryParams {
    }
    interface VerifyModule extends ModuleFactoryParams {
    }
    interface ReclaimERC20 extends ReclaimERC20Params {
    }
    interface TransferOwnership extends TransferOwnershipParams {
    }
}
/**
 * @param moduleFactory is the address of the module factory
 */
interface ModuleFactoryParams extends TxParams {
    moduleFactory: string;
}
/**
 * @param moduleType is the module type to look for
 * @param securityToken is the address of SecurityToken
 */
interface TypeAndTokenParams {
    moduleType: ModuleType;
    securityToken: string;
}
/**
 * @param moduleType is the module type to look for
 */
interface ModuleTypeParams {
    moduleType: ModuleType;
}
/**
 * @param moduleFactoryAddress is the address of the relevant module factory
 * @param securityTokenAddress is the address of the relevant security token
 */
interface IsCompatibleModuleParams {
    moduleFactoryAddress: string;
    securityTokenAddress: string;
}
/**
 * @param factoryAddress
 */
interface GetFactoryDetailsParams {
    factoryAddress: string;
}
/**
 * @param tokenContract ERC20 token contract address
 */
interface ReclaimERC20Params extends TxParams {
    tokenContract: string;
}
/**
 * @param newOwner The address to transfer ownership to
 */
interface TransferOwnershipParams extends TxParams {
    newOwner: string;
}
interface TagsByModule {
    module: string;
    tags: string[];
}
interface FactoryDetails {
    isVerified: boolean;
    ownerAddress: string;
    securityTokenAddresses: string[];
}
/**
 * This class includes the functionality related to interacting with the ModuleRegistry contract.
 */
export default class ModuleRegistryWrapper extends ContractWrapper {
    protected contract: Promise<ModuleRegistryContract>;
    protected contractFactory: ContractFactory;
    protected securityTokenRegistryContract: () => Promise<ISecurityTokenRegistryContract>;
    protected featureRegistryContract: () => Promise<FeatureRegistryContract>;
    protected moduleFactoryContract: (address: string) => Promise<ModuleFactoryContract>;
    /**
     * Instantiate ModuleRegistryWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     * @param contractFactory
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<ModuleRegistryContract>, contractFactory: ContractFactory);
    /**
     *  Check that a module and its factory are compatible
     * @return bool whether module and token are compatible
     */
    isCompatibleModule: (params: IsCompatibleModuleParams) => Promise<boolean>;
    /**
     *  Called by the ModuleFactory owner to register new modules for SecurityTokens to use
     */
    registerModule: (params: ModuleFactoryParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Called by the ModuleFactory owner or registry curator to delete a ModuleFactory from the registry
     */
    removeModule: (params: ModuleFactoryParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Called by Polymath to verify Module Factories for SecurityTokens to use.
     * A module can not be used by an ST unless first approved/verified by Polymath
     * (The only exception to this is that the author of the module is the owner of the ST)
     * -> Only if Polymath enabled the feature.
     */
    verifyModule: (params: ModuleFactoryParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Called by Polymath to verify Module Factories for SecurityTokens to use.
     * A module can not be used by an ST unless first approved/verified by Polymath
     * (The only exception to this is that the author of the module is the owner of the ST)
     * -> Only if Polymath enabled the feature.
     */
    unverifyModule: (params: ModuleFactoryParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Returns all the tags related to the a module type which are valid for the given token
     * @return list of tags, corresponding list of module factories
     */
    getTagsByTypeAndToken: (params: TypeAndTokenParams) => Promise<TagsByModule[]>;
    /**
     * Returns all the tags related to the a module type which are valid for the given token
     * @return list of tags, corresponding list of module factories
     */
    getTagsByType: (params: ModuleTypeParams) => Promise<TagsByModule[]>;
    /**
     * Gets the factory details
     * @return factoryIsVerified, factoryOwnerAddress, listSecurityTokens
     */
    getFactoryDetails: (params: GetFactoryDetailsParams) => Promise<FactoryDetails>;
    /**
     * Returns the list of addresses of verified Module Factory of a particular type
     * @return address array that contains the list of addresses of module factory contracts.
     */
    getModulesByType: (params: ModuleTypeParams) => Promise<string[]>;
    /**
     * Returns the list of addresses of all Module Factory of a particular type
     * @return address array that contains the list of addresses of module factory contracts.
     */
    getAllModulesByType: (params: ModuleTypeParams) => Promise<string[]>;
    /**
     * Returns the list of available Module factory addresses of a particular type for a given token.
     * @return address array that contains the list of available addresses of module factory contracts.
     */
    getModulesByTypeAndToken: (params: TypeAndTokenParams) => Promise<string[]>;
    /**
     * Reclaim ERC20 tokens from contract
     */
    reclaimERC20: (params: ReclaimERC20Params) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Pause the module
     */
    pause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Unpause the module
     */
    unpause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Stores the contract addresses of other key contracts from the PolymathRegistry
     */
    updateFromRegistry: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     */
    transferOwnership: (params: TransferOwnershipParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Get owner address
     * @return address
     */
    owner: () => Promise<string>;
    /**
     * Check is paused
     * @return boolean isPaused
     */
    isPaused: () => Promise<boolean>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: ModuleRegistrySubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetModuleRegistryLogsAsyncParams;
    private checkForRegisteredModule;
    private callGetModulesByTypeAndReturnIfModuleExists;
    private checkMsgSenderIsOwner;
    private checkModuleRegistered;
    private checkModuleNotRegistered;
    private checkModuleNotPausedOrOwner;
    private checkModuleNotPaused;
    private checkIsOwnerOrModuleFactoryOwner;
}
export {};
//# sourceMappingURL=module_registry_wrapper.d.ts.map