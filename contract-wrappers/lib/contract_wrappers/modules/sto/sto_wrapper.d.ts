import { BigNumber } from '@polymathnetwork/abi-wrappers';
import { TxParams, STOBaseContract, FundRaiseType } from '../../../types';
import ModuleWrapper from '../module_wrapper';
/**
 * @param type The FundRaiseType
 */
interface FundRaiseTypesParams {
    type: FundRaiseType;
}
/**
 * This class includes the functionality related to interacting with the all STOs contracts.
 */
export default abstract class STOWrapper extends ModuleWrapper {
    protected abstract contract: Promise<STOBaseContract>;
    /**
     *  check if the module is paused
     *  @return boolean status of paused
     */
    paused: () => Promise<boolean>;
    /**
     *  security token address
     *  @return address
     */
    securityToken: () => Promise<string>;
    /**
     * Type of currency used to collect the funds
     * @return boolean corresponding to fund raise type
     */
    fundRaiseTypes: (params: FundRaiseTypesParams) => Promise<boolean>;
    /**
     * Returns funds raised by the STO
     * @return amount of funds raised
     */
    fundsRaised: (params: FundRaiseTypesParams) => Promise<BigNumber>;
    /**
     * Start time of the STO
     * @returns startTime
     */
    startTime: () => Promise<Date>;
    /**
     * End time of the STO
     * @returns endTime
     */
    endTime: () => Promise<Date>;
    /**
     * End time of the Capped STO
     * @returns pausedTime
     */
    pausedTime: () => Promise<Date>;
    /**
     * Number of individual investors this STO have.
     * @return number of investors
     */
    investorCount: () => Promise<number>;
    /**
     * Ethereum account address to hold the funds
     * @return wallet address
     */
    wallet: () => Promise<string>;
    /**
     * Return the total no. of tokens sold
     */
    totalTokensSold: () => Promise<BigNumber>;
    /**
     * Returns funds raised by the STO
     */
    getRaised: (params: FundRaiseTypesParams) => Promise<BigNumber>;
    /**
     *  pause the module
     */
    pause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
    /**
     *  unpause the module
     */
    unpause: (params: TxParams) => Promise<import("@polymathnetwork/abi-wrappers").PolyResponse>;
}
export {};
//# sourceMappingURL=sto_wrapper.d.ts.map