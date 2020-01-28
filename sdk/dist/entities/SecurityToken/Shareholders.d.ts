import { ShareholderDataEntry } from '../../types';
import { SubModule } from './SubModule';
import { Checkpoint } from '../Checkpoint';
import { Shareholder } from '../Shareholder';
export declare class Shareholders extends SubModule {
    /**
     * Add/modify investor data. For an investor to be able to hold, sell or purchase tokens, his address (and other KYC data)
     * must be added/modified via this method
     *
     * @param shareholderData array of shareholder data to add/modify
     * @param shareholderData[].address address of the shareholder whose data will be added/modified
     * @param shareholderData[].canSendAfter date after which the shareholder can transfer tokens
     * @param shareholderData[].canReceiveAfter date after which the shareholder can receive tokens
     * @param shareholderData[].kycExpiry date at which the shareholder's KYC expires
     * @param shareholderData[].isAccredited whether the shareholder is accredited (defaults to false)
     * @param shareholderData[].canBuyFromSto whether the shareholder is allowed to purchase tokens in an STO (defaults to true)
     */
    modifyData: (args: {
        shareholderData: ShareholderDataEntry[];
    }) => Promise<import("..").TransactionQueue<import("../../types").ModifyShareholderDataProcedureArgs, Shareholder[]>>;
    /**
     * Revokes KYC for a group of shareholder addresses. Supplied addresses must have valid KYC
     *
     * @param shareholderAddresses array of shareholder addresses
     */
    revokeKyc: (args: {
        shareholderAddresses: string[];
    }) => Promise<import("..").TransactionQueue<import("../../types").RevokeKycProcedureArgs, Shareholder[]>>;
    /**
     * Create a snapshot of the balances of every shareholder at the current date
     */
    createCheckpoint: () => Promise<import("..").TransactionQueue<import("../../types").CreateCheckpointProcedureArgs, Checkpoint>>;
    /**
     * Retrieve list of checkpoints and their corresponding dividend distributions of every type
     */
    getCheckpoints: () => Promise<Checkpoint[]>;
    /**
     * Retrieve a checkpoint from the security token by index or UUID
     *
     * @param checkpointIndex index of the checkpoint within the Security Token
     */
    getCheckpoint: (args: string | {
        checkpointIndex: number;
    }) => Promise<Checkpoint>;
    /**
     * Get data for all shareholders associated to the Security Token
     */
    getShareholders: () => Promise<Shareholder[]>;
}
//# sourceMappingURL=Shareholders.d.ts.map