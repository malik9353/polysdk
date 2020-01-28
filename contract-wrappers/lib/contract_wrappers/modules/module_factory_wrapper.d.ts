import { BigNumber, ModuleFactoryContract, Web3Wrapper } from '@polymathnetwork/abi-wrappers';
import ContractWrapper from '../contract_wrapper';
import { BoundType, GetLogs, ModuleType, Subscribe, TxParams } from '../../types';
/**
 * @param setupCost Cost to setup module
 */
interface ChangeSetupCostParams extends TxParams {
    setupCost: BigNumber;
}
/**
 * @param isCostInPoly Boolean if cost is in poly
 */
interface ChangeCostAndTypeParams extends ChangeSetupCostParams {
    isCostInPoly: boolean;
}
/**
 * @param title New title
 */
interface ChangeTitleParams extends TxParams {
    title: string;
}
/**
 * @param description New description
 */
interface ChangeDescriptionParams extends TxParams {
    description: string;
}
/**
 * @param name New name
 */
interface ChangeNameParams extends TxParams {
    name: string;
}
/**
 * @param tag New tag
 */
interface ChangeTagsParams extends TxParams {
    tags: string[];
}
/**
 * @param boundType Type of STVersionBound
 * @param newVersion New version
 */
interface ChangeSTVersionBoundsParams extends TxParams {
    boundType: BoundType;
    newVersion: number[];
}
/**
 * This class includes the functionality related to interacting with the ModuleFactory contract.
 */
export default class ModuleFactoryWrapper extends ContractWrapper {
    protected contract: Promise<ModuleFactoryContract>;
    /**
     * Instantiate ModuleFactoryWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<ModuleFactoryContract>);
    /**
     * Get the owner of the Module Factory
     * @return owner address
     */
    owner: () => Promise<string>;
    /**
     * Get the name of the Module
     * @return name
     */
    name: () => Promise<string>;
    /**
     * Get the title of the Module
     * @return title
     */
    title: () => Promise<string>;
    /**
     * Get isCostInPoly
     * @return boolean
     */
    isCostInPoly: () => Promise<boolean>;
    /**
     * Get the description of the Module
     * @return description string
     */
    description: () => Promise<string>;
    /**
     * Get the version of the Module
     * @return version string
     */
    version: () => Promise<string>;
    /**
     * Get the types
     * @return list of module types
     */
    getTypes: () => Promise<ModuleType[]>;
    /**
     * Get the tags
     * @return tags list
     */
    getTags: () => Promise<string[]>;
    /**
     * Change the setupCost
     */
    changeSetupCost: (params: ChangeSetupCostParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Change the cost and type
     */
    changeCostAndType: (params: ChangeCostAndTypeParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Change the title
     */
    changeTitle: (params: ChangeTitleParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Change the description
     */
    changeDescription: (params: ChangeDescriptionParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Change the name
     */
    changeName: (params: ChangeNameParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Change the tags
     */
    changeTags: (params: ChangeTagsParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Change the ST VersionBounds
     */
    changeSTVersionBounds: (params: ChangeSTVersionBoundsParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     * Get setup cost
     * @return setupCost value
     */
    setupCost: () => Promise<BigNumber>;
    /**
     * Get upper ST version bounds
     * @return upper bounds list
     */
    getUpperSTVersionBounds: () => Promise<BigNumber[]>;
    /**
     * Get lower ST version bounds
     * @return lower bounds list
     */
    getLowerSTVersionBounds: () => Promise<BigNumber[]>;
    /**
     * Get setup cost in poly
     * @return cost in poly
     */
    setupCostInPoly: () => Promise<BigNumber>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: Subscribe;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetLogs;
    private checkOnlyOwner;
}
export {};
//# sourceMappingURL=module_factory_wrapper.d.ts.map