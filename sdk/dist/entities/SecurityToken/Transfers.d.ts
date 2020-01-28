import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { SubModule } from './SubModule';
export declare class Transfers extends SubModule {
    /**
     * Set the address of the Security Token's Controller. The controller may perform forced transfers
     */
    modifyController: (args: {
        controller: string;
    }) => Promise<import("..").TransactionQueue<import("../..").SetControllerProcedureArgs, void>>;
    /**
     * Perform a forced transfer of tokens from one address to another. You must be the
     * Security Token's controller to do this
     *
     * @param amount amount of tokens to be transferred
     * @param from address from which to transfer tokens
     * @param to address that will receive the tokens
     * @param reason optional message to describe why the transfer occurred
     * @param data optional data used to validate the transfer
     */
    controllerTransfer: (args: {
        amount: BigNumber;
        from: string;
        to: string;
        reason?: string | undefined;
        data?: string | undefined;
    }) => Promise<import("..").TransactionQueue<import("../..").ControllerTransferProcedureArgs, void>>;
}
//# sourceMappingURL=Transfers.d.ts.map