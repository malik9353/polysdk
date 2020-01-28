import { GeneralPermissionManagerContract, GeneralPermissionManagerEvents, GeneralPermissionManagerChangePermissionEventArgs, GeneralPermissionManagerAddDelegateEventArgs, Web3Wrapper, LogWithDecodedArgs } from '@polymathnetwork/abi-wrappers';
import ModuleWrapper from '../module_wrapper';
import ContractFactory from '../../../factories/contractFactory';
import { TxParams, GetLogsAsyncParams, SubscribeAsyncParams, EventCallback, GetLogs, Subscribe, Perm } from '../../../types';
interface ChangePermissionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: GeneralPermissionManagerEvents.ChangePermission;
    callback: EventCallback<GeneralPermissionManagerChangePermissionEventArgs>;
}
interface GetChangePermissionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: GeneralPermissionManagerEvents.ChangePermission;
}
interface AddDelegateSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: GeneralPermissionManagerEvents.AddDelegate;
    callback: EventCallback<GeneralPermissionManagerAddDelegateEventArgs>;
}
interface GetAddDelegateLogsAsyncParams extends GetLogsAsyncParams {
    eventName: GeneralPermissionManagerEvents.AddDelegate;
}
interface GeneralPermissionManagerSubscribeAsyncParams extends Subscribe {
    (params: ChangePermissionSubscribeAsyncParams): Promise<string>;
    (params: AddDelegateSubscribeAsyncParams): Promise<string>;
}
interface GetGeneralPermissionManagerLogsAsyncParams extends GetLogs {
    (params: GetChangePermissionLogsAsyncParams): Promise<LogWithDecodedArgs<GeneralPermissionManagerChangePermissionEventArgs>[]>;
    (params: GetAddDelegateLogsAsyncParams): Promise<LogWithDecodedArgs<GeneralPermissionManagerAddDelegateEventArgs>[]>;
}
export declare namespace GeneralPermissionManagerTransactionParams {
    interface DeleteDelegate extends DelegateTxParams {
    }
    interface AddDelegate extends AddDelegateParams {
    }
    interface ChangePermission extends ChangePermissionParams {
    }
    interface ChangePermissionMulti extends ChangePermissionMultiParams {
    }
}
/**
 * @param delegate Ethereum address of the delegate
 * @param module Ethereum contract address of the module
 * @param perm Permission flag
 */
interface PermParams {
    module: string;
    delegate: string;
    permission: Perm;
}
/**
 * @param delegateIndex Index of the delegate
 */
interface DelegateIndexParams {
    delegateIndex: number;
}
/**
 * @param delegate the address of potential delegate
 */
interface DelegateParams {
    delegate: string;
}
/**
 * @param module Ethereum contract address of the module
 * @param perm Permission flag
 */
interface GetAllDelegatesWithPermParams {
    module: string;
    perm: Perm;
}
/**
 * @param delegate Ethereum address of the delegate
 * @param types Array of types
 */
interface GetAllModulesAndPermsFromTypesParams {
    delegate: string;
    types: number[];
}
/**
 * @param delegate Ethereum address of the delegate
 */
interface DelegateTxParams extends TxParams {
    delegate: string;
}
/**
 * @param delegate Ethereum address of the delegate
 * @param details Details about the delegate i.e `Belongs to financial firm`
 */
interface AddDelegateParams extends TxParams {
    delegate: string;
    details: string;
}
/**
 * @param delegate Ethereum address of the delegate
 * @param module Ethereum contract address of the module
 * @param perm Permission flag
 * @param valid Bool flag use to switch on/off the permission
 */
interface ChangePermissionParams extends TxParams {
    delegate: string;
    module: string;
    perm: Perm;
    valid: boolean;
}
/**
 * @param delegate Ethereum address of the delegate
 * @param modules Multiple module matching the multiple perms, needs to be same length
 * @param perms Multiple permission flag needs to be changed
 * @param valids Bool array consist the flag to switch on/off the permission
 */
interface ChangePermissionMultiParams extends TxParams {
    delegate: string;
    modules: string[];
    perms: Perm[];
    valids: boolean[];
}
interface PermissionsPerModule {
    /** Module address */
    module: string;
    /** List of permissions */
    permissions: Perm[];
}
/**
 * This class includes the functionality related to interacting with the General Permission Manager contract.
 */
export default class GeneralPermissionManagerWrapper extends ModuleWrapper {
    protected contract: Promise<GeneralPermissionManagerContract>;
    /**
     * Instantiate GeneralPermissionManagerWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<GeneralPermissionManagerContract>, contractFactory: ContractFactory);
    /**
     * Mapping used to hold the permissions on the modules provided to delegate
     */
    perms: (params: PermParams) => Promise<boolean>;
    /**
     * Array to track all delegates
     */
    allDelegates: (params: DelegateIndexParams) => Promise<string>;
    /**
     * Mapping to hold the delegate details
     */
    delegateDetails: (params: DelegateParams) => Promise<string>;
    /**
     * Used to check the permission on delegate corresponds to module contract address
     * @return bool if permission is valid
     */
    checkPermission: (params: PermParams) => Promise<boolean>;
    /**
     * Used to add a delegate
     */
    addDelegate: (params: AddDelegateParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to delete a delegate
     */
    deleteDelegate: (params: DelegateTxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to check if an address is a delegate or not
     * @return boolean if address is delegate
     */
    checkDelegate: (params: DelegateParams) => Promise<boolean>;
    /**
     * Used to provide/change the permission to the delegate corresponds to the module contract
     */
    changePermission: (params: ChangePermissionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to change one or more permissions for a single delegate at once
     */
    changePermissionMulti: (params: ChangePermissionMultiParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Used to return all delegates with a given permission and module
     * @return delegates address array
     */
    getAllDelegatesWithPerm: (params: GetAllDelegatesWithPermParams) => Promise<string[]>;
    /**
     * Used to return all permission of a single or multiple module
     * @return The address array of Modules this delegate has permission, the permission array of the corresponding Modules
     */
    getAllModulesAndPermsFromTypes: (params: GetAllModulesAndPermsFromTypesParams) => Promise<PermissionsPerModule[]>;
    /**
     * Used to get all delegates
     * @return delegate addresses array
     */
    getAllDelegates: () => Promise<string[]>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: GeneralPermissionManagerSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetGeneralPermissionManagerLogsAsyncParams;
}
export {};
//# sourceMappingURL=general_permission_manager_wrapper.d.ts.map