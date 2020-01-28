import { FeatureRegistryContract, ISecurityTokenContract, ModuleFactoryContract, ModuleRegistryContract, PolyResponse, PolyTokenContract, SecurityTokenApprovalEventArgs, SecurityTokenAuthorizedOperatorByPartitionEventArgs, SecurityTokenAuthorizedOperatorEventArgs, SecurityTokenCheckpointCreatedEventArgs, SecurityTokenControllerRedemptionEventArgs, SecurityTokenControllerTransferEventArgs, SecurityTokenDisableControllerEventArgs, SecurityTokenDocumentRemovedEventArgs, SecurityTokenDocumentUpdatedEventArgs, SecurityTokenEvents, SecurityTokenFreezeIssuanceEventArgs, SecurityTokenFreezeTransfersEventArgs, SecurityTokenGranularityChangedEventArgs, SecurityTokenIssuedByPartitionEventArgs, SecurityTokenIssuedEventArgs, SecurityTokenModuleAddedEventArgs, SecurityTokenModuleArchivedEventArgs, SecurityTokenModuleBudgetChangedEventArgs, SecurityTokenModuleRemovedEventArgs, SecurityTokenModuleUnarchivedEventArgs, SecurityTokenModuleUpgradedEventArgs, SecurityTokenOwnershipTransferredEventArgs, SecurityTokenRedeemedByPartitionEventArgs, SecurityTokenRedeemedEventArgs, SecurityTokenRevokedOperatorByPartitionEventArgs, SecurityTokenRevokedOperatorEventArgs, SecurityTokenSetControllerEventArgs, SecurityTokenTokenUpgradedEventArgs, SecurityTokenTransferByPartitionEventArgs, SecurityTokenTransferEventArgs, SecurityTokenTreasuryWalletChangedEventArgs, SecurityTokenUpdateTokenDetailsEventArgs, SecurityTokenUpdateTokenNameEventArgs, Web3Wrapper, LogWithDecodedArgs, BigNumber } from '@polymathnetwork/abi-wrappers';
import ERC20TokenWrapper from './erc20_wrapper';
import ContractFactory from '../../factories/contractFactory';
import { EventCallback, FundRaiseType, GetLogs, GetLogsAsyncParams, ModuleName, ModuleType, Partition, Perm, Subscribe, SubscribeAsyncParams, TxParams, CappedSTOFundRaiseType, TransferStatusCode } from '../../types';
interface ApprovalSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.Approval;
    callback: EventCallback<SecurityTokenApprovalEventArgs>;
}
interface GetApprovalLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.Approval;
}
interface TransferSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.Transfer;
    callback: EventCallback<SecurityTokenTransferEventArgs>;
}
interface GetTransferLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.Transfer;
}
interface ModuleAddedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.ModuleAdded;
    callback: EventCallback<SecurityTokenModuleAddedEventArgs>;
}
interface GetModuleAddedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.ModuleAdded;
}
interface ModuleUpgradedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.ModuleUpgraded;
    callback: EventCallback<SecurityTokenModuleUpgradedEventArgs>;
}
interface GetModuleUpgradedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.ModuleUpgraded;
}
interface UpdateTokenDetailsSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.UpdateTokenDetails;
    callback: EventCallback<SecurityTokenUpdateTokenDetailsEventArgs>;
}
interface GetUpdateTokenDetailsLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.UpdateTokenDetails;
}
interface UpdateTokenNameSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.UpdateTokenName;
    callback: EventCallback<SecurityTokenUpdateTokenNameEventArgs>;
}
interface GetUpdateTokenNameLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.UpdateTokenName;
}
interface GranularityChangedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.GranularityChanged;
    callback: EventCallback<SecurityTokenGranularityChangedEventArgs>;
}
interface GetGranularityChangedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.GranularityChanged;
}
interface ModuleArchivedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.ModuleArchived;
    callback: EventCallback<SecurityTokenModuleArchivedEventArgs>;
}
interface GetModuleArchivedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.ModuleArchived;
}
interface ModuleUnarchivedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.ModuleUnarchived;
    callback: EventCallback<SecurityTokenModuleUnarchivedEventArgs>;
}
interface GetModuleUnarchivedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.ModuleUnarchived;
}
interface ModuleRemovedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.ModuleRemoved;
    callback: EventCallback<SecurityTokenModuleRemovedEventArgs>;
}
interface GetModuleRemovedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.ModuleRemoved;
}
interface ModuleBudgetChangedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.ModuleBudgetChanged;
    callback: EventCallback<SecurityTokenModuleBudgetChangedEventArgs>;
}
interface GetModuleBudgetChangedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.ModuleBudgetChanged;
}
interface TransferByPartitionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.TransferByPartition;
    callback: EventCallback<SecurityTokenTransferByPartitionEventArgs>;
}
interface GetTransferByPartitionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.TransferByPartition;
}
interface AuthorizedOperatorSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.AuthorizedOperator;
    callback: EventCallback<SecurityTokenAuthorizedOperatorEventArgs>;
}
interface GetAuthorizedOperatorLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.AuthorizedOperator;
}
interface RevokedOperatorSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.RevokedOperator;
    callback: EventCallback<SecurityTokenRevokedOperatorEventArgs>;
}
interface GetRevokedOperatorLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.RevokedOperator;
}
interface AuthorizedOperatorByPartitionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.AuthorizedOperatorByPartition;
    callback: EventCallback<SecurityTokenAuthorizedOperatorByPartitionEventArgs>;
}
interface GetAuthorizedOperatorByPartitionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.AuthorizedOperatorByPartition;
}
interface RevokedOperatorByPartitionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.RevokedOperatorByPartition;
    callback: EventCallback<SecurityTokenRevokedOperatorByPartitionEventArgs>;
}
interface GetRevokedOperatorByPartitionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.RevokedOperatorByPartition;
}
interface IssuedByPartitionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.IssuedByPartition;
    callback: EventCallback<SecurityTokenIssuedByPartitionEventArgs>;
}
interface GetIssuedByPartitionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.IssuedByPartition;
}
interface RedeemedByPartitionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.RedeemedByPartition;
    callback: EventCallback<SecurityTokenRedeemedByPartitionEventArgs>;
}
interface GetRedeemedByPartitionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.RedeemedByPartition;
}
interface ControllerTransferSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.ControllerTransfer;
    callback: EventCallback<SecurityTokenControllerTransferEventArgs>;
}
interface GetControllerTransferLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.ControllerTransfer;
}
interface ControllerRedemptionSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.ControllerRedemption;
    callback: EventCallback<SecurityTokenControllerRedemptionEventArgs>;
}
interface GetControllerRedemptionLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.ControllerRedemption;
}
interface DocumentRemovedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.DocumentRemoved;
    callback: EventCallback<SecurityTokenDocumentRemovedEventArgs>;
}
interface GetDocumentRemovedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.DocumentRemoved;
}
interface DocumentUpdatedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.DocumentUpdated;
    callback: EventCallback<SecurityTokenDocumentUpdatedEventArgs>;
}
interface GetDocumentUpdatedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.DocumentUpdated;
}
interface FreezeTransfersSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.FreezeTransfers;
    callback: EventCallback<SecurityTokenFreezeTransfersEventArgs>;
}
interface GetFreezeTransfersLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.FreezeTransfers;
}
interface CheckpointCreatedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.CheckpointCreated;
    callback: EventCallback<SecurityTokenCheckpointCreatedEventArgs>;
}
interface GetCheckpointCreatedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.CheckpointCreated;
}
interface FreezeIssuanceSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.FreezeIssuance;
    callback: EventCallback<SecurityTokenFreezeIssuanceEventArgs>;
}
interface GetFreezeIssuanceLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.FreezeIssuance;
}
interface IssuedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.Issued;
    callback: EventCallback<SecurityTokenIssuedEventArgs>;
}
interface GetIssuedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.Issued;
}
interface RedeemedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.Redeemed;
    callback: EventCallback<SecurityTokenRedeemedEventArgs>;
}
interface GetRedeemedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.Redeemed;
}
interface SetControllerSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.SetController;
    callback: EventCallback<SecurityTokenSetControllerEventArgs>;
}
interface GetSetControllerLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.SetController;
}
interface TreasuryWalletChangedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.TreasuryWalletChanged;
    callback: EventCallback<SecurityTokenTreasuryWalletChangedEventArgs>;
}
interface GetTreasuryWalletChangedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.TreasuryWalletChanged;
}
interface DisableControllerSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.DisableController;
    callback: EventCallback<SecurityTokenDisableControllerEventArgs>;
}
interface GetDisableControllerLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.DisableController;
}
interface OwnershipTransferredSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.OwnershipTransferred;
    callback: EventCallback<SecurityTokenOwnershipTransferredEventArgs>;
}
interface GetOwnershipTransferredLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.OwnershipTransferred;
}
interface TokenUpgradedSubscribeAsyncParams extends SubscribeAsyncParams {
    eventName: SecurityTokenEvents.TokenUpgraded;
    callback: EventCallback<SecurityTokenTokenUpgradedEventArgs>;
}
interface GetTokenUpgradedLogsAsyncParams extends GetLogsAsyncParams {
    eventName: SecurityTokenEvents.TokenUpgraded;
}
interface SecurityTokenSubscribeAsyncParams extends Subscribe {
    (params: ApprovalSubscribeAsyncParams): Promise<string>;
    (params: TransferSubscribeAsyncParams): Promise<string>;
    (params: ModuleAddedSubscribeAsyncParams): Promise<string>;
    (params: ModuleUpgradedSubscribeAsyncParams): Promise<string>;
    (params: UpdateTokenDetailsSubscribeAsyncParams): Promise<string>;
    (params: UpdateTokenNameSubscribeAsyncParams): Promise<string>;
    (params: GranularityChangedSubscribeAsyncParams): Promise<string>;
    (params: ModuleArchivedSubscribeAsyncParams): Promise<string>;
    (params: ModuleUnarchivedSubscribeAsyncParams): Promise<string>;
    (params: ModuleRemovedSubscribeAsyncParams): Promise<string>;
    (params: ModuleBudgetChangedSubscribeAsyncParams): Promise<string>;
    (params: TransferByPartitionSubscribeAsyncParams): Promise<string>;
    (params: AuthorizedOperatorSubscribeAsyncParams): Promise<string>;
    (params: RevokedOperatorSubscribeAsyncParams): Promise<string>;
    (params: AuthorizedOperatorByPartitionSubscribeAsyncParams): Promise<string>;
    (params: RevokedOperatorByPartitionSubscribeAsyncParams): Promise<string>;
    (params: IssuedByPartitionSubscribeAsyncParams): Promise<string>;
    (params: RedeemedByPartitionSubscribeAsyncParams): Promise<string>;
    (params: ControllerTransferSubscribeAsyncParams): Promise<string>;
    (params: ControllerRedemptionSubscribeAsyncParams): Promise<string>;
    (params: DocumentRemovedSubscribeAsyncParams): Promise<string>;
    (params: DocumentUpdatedSubscribeAsyncParams): Promise<string>;
    (params: FreezeTransfersSubscribeAsyncParams): Promise<string>;
    (params: CheckpointCreatedSubscribeAsyncParams): Promise<string>;
    (params: FreezeIssuanceSubscribeAsyncParams): Promise<string>;
    (params: IssuedSubscribeAsyncParams): Promise<string>;
    (params: RedeemedSubscribeAsyncParams): Promise<string>;
    (params: SetControllerSubscribeAsyncParams): Promise<string>;
    (params: TreasuryWalletChangedSubscribeAsyncParams): Promise<string>;
    (params: DisableControllerSubscribeAsyncParams): Promise<string>;
    (params: OwnershipTransferredSubscribeAsyncParams): Promise<string>;
    (params: TokenUpgradedSubscribeAsyncParams): Promise<string>;
}
interface GetSecurityTokenLogsAsyncParams extends GetLogs {
    (params: GetApprovalLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenApprovalEventArgs>[]>;
    (params: GetTransferLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenTransferEventArgs>[]>;
    (params: GetModuleAddedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenModuleAddedEventArgs>[]>;
    (params: GetModuleUpgradedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenModuleUpgradedEventArgs>[]>;
    (params: GetUpdateTokenDetailsLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenUpdateTokenDetailsEventArgs>[]>;
    (params: GetUpdateTokenNameLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenUpdateTokenNameEventArgs>[]>;
    (params: GetGranularityChangedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenGranularityChangedEventArgs>[]>;
    (params: GetModuleArchivedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenModuleArchivedEventArgs>[]>;
    (params: GetModuleUnarchivedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenModuleUnarchivedEventArgs>[]>;
    (params: GetModuleRemovedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenModuleRemovedEventArgs>[]>;
    (params: GetModuleBudgetChangedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenModuleBudgetChangedEventArgs>[]>;
    (params: GetTransferByPartitionLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenModuleBudgetChangedEventArgs>[]>;
    (params: GetAuthorizedOperatorLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetRevokedOperatorLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetAuthorizedOperatorByPartitionLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetRevokedOperatorByPartitionLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetIssuedByPartitionLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetRedeemedByPartitionLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetControllerTransferLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetControllerRedemptionLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetDocumentRemovedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetDocumentUpdatedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetFreezeTransfersLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeTransfersEventArgs>[]>;
    (params: GetCheckpointCreatedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenCheckpointCreatedEventArgs>[]>;
    (params: GetFreezeIssuanceLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenFreezeIssuanceEventArgs>[]>;
    (params: GetIssuedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenIssuedEventArgs>[]>;
    (params: GetRedeemedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenRedeemedEventArgs>[]>;
    (params: GetSetControllerLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenSetControllerEventArgs>[]>;
    (params: GetTreasuryWalletChangedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenTreasuryWalletChangedEventArgs>[]>;
    (params: GetDisableControllerLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenDisableControllerEventArgs>[]>;
    (params: GetOwnershipTransferredLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenOwnershipTransferredEventArgs>[]>;
    (params: GetTokenUpgradedLogsAsyncParams): Promise<LogWithDecodedArgs<SecurityTokenTokenUpgradedEventArgs>[]>;
}
export declare namespace SecurityTokenTransactionParams {
    interface FreezeIssuance extends FreezeIssuanceParams {
    }
    interface ArchiveModule extends ModuleAddressTxParams {
    }
    interface UnarchiveModule extends ModuleAddressTxParams {
    }
    interface RemoveModule extends ModuleAddressTxParams {
    }
    interface UpgradeModule extends ModuleAddressTxParams {
    }
    interface ChangeDataStore extends DataStoreAddressParams {
    }
    interface SetDocument extends SetDocumentParams {
    }
    interface GetDocument extends DocumentParams {
    }
    interface RemoveDocument extends DocumentParams {
    }
    interface ChangeTreasuryWallet extends ChangeTreasuryWalletParams {
    }
    interface ChangeApproval extends ChangeApprovalParams {
    }
    interface TransferOwnership extends TransferOwnershipParams {
    }
    interface WithdrawERC20 extends WithdrawERC20Params {
    }
    interface ChangeModuleBudget extends ChangeModuleBudgetParams {
    }
    interface UpdateTokenDetails extends UpdateTokenDetailsParams {
    }
    interface ChangeGranularity extends ChangeGranularityParams {
    }
    interface ChangeName extends ChangeNameParams {
    }
    interface TransferWithData extends TransferWithDataParams {
    }
    interface TransferFromWithData extends TransferFromWithDataParams {
    }
    interface Issue extends IssueParams {
    }
    interface IssueByPartition extends IssueByPartitionParams {
    }
    interface IssueMulti extends IssueMultiParams {
    }
    interface Redeem extends RedeemParams {
    }
    interface RedeemByPartition extends RedeemByPartitionParams {
    }
    interface OperatorRedeemByPartition extends OperatorRedeemByPartitionParams {
    }
    interface RedeemFrom extends RedeemFromParams {
    }
    interface TransferByPartition extends TransferByPartitionParams {
    }
    interface AuthorizeOperator extends AuthorizeOperatorParams {
    }
    interface AuthorizeOperatorByPartition extends AuthorizeOperatorByPartitionParams {
    }
    interface RevokeOperator extends RevokeOperatorParams {
    }
    interface RevokeOperatorByPartition extends RevokeOperatorByPartitionParams {
    }
    interface OperatorTransferByPartition extends OperatorTransferByPartitionParams {
    }
    interface SetController extends SetControllerParams {
    }
    interface DisableController extends DisableControllerParams {
    }
    interface ControllerTransfer extends ControllerTransferParams {
    }
    interface ControllerRedeem extends ControllerRedeemParams {
    }
    interface AddModule extends AddModuleParams {
    }
    interface AddNoDataModule extends AddNoDataModuleParams {
    }
    interface AddVestingEscrowWallet extends AddVestingEscrowWalletParams {
    }
    interface AddCountTransferManager extends AddCountTransferManagerParams {
    }
    interface AddPercentageTransferManager extends AddPercentageTransferManagerParams {
    }
    interface AddDividendCheckpoint extends AddDividendCheckpointParams {
    }
    interface AddCappedSTO extends AddCappedSTOParams {
    }
    interface AddUSDTieredSTO extends AddUSDTieredSTOParams {
    }
}
/**
 * @param operator The operator to check
 * @param tokenHolder The token holder to check
 */
interface IsOperatorParams {
    operator: string;
    tokenHolder: string;
}
/**
 * @param partition The partition to check
 */
interface IsOperatorForPartitionParams extends IsOperatorParams {
    partition: Partition;
}
/**
 * @param tokenHolder Whom balance need to queried
 */
interface PartitionsOfParams {
    tokenHolder: string;
}
/**
 * @param signature calldata
 */
interface FreezeIssuanceParams extends TxParams {
    signature: string;
}
/**
 * @param type type of the module
 */
interface ModuleTypeParams {
    type: ModuleType;
}
/**
 * @param moduleAddress Address
 */
interface ModuleAddressParams {
    moduleAddress: string;
}
/**
 * @param module address of the module
 */
interface ModuleAddressTxParams extends TxParams {
    moduleAddress: string;
}
/**
 * @param dataStore Address of the token data store
 */
interface DataStoreAddressParams extends TxParams {
    dataStore: string;
}
/**

 * @param name Name of the document. It should be unique always
 * @param uri Off-chain uri of the document from where it is accessible to investors/advisors to read.
 * @param documentHash hash (of the contents) of the document.
 */
interface SetDocumentParams extends TxParams {
    name: string;
    uri: string;
    documentHash: string;
}
/**
 * @param name Name of the document. It should be unique always
 */
interface DocumentParams extends TxParams {
    name: string;
}
/**
 * @param treasuryWallet Ethereum address of the treasury wallet
 */
interface ChangeTreasuryWalletParams extends TxParams {
    treasuryWallet: string;
}
/**
 * @param from sender of transfer
 * @param to receiver of transfer
 * @param value value of transfer
 * @param data data to indicate validation
 */
interface CanTransferParams {
    to: string;
    value: BigNumber;
    data: string;
}
/**
 * @param from Address
 */
interface CanTransferFromParams extends CanTransferParams {
    from: string;
}
/**
 * @param partition
 */
interface CanTransferByPartitionParams extends CanTransferFromParams {
    partition: Partition;
}
/**
 * @param spender Address spending tokens
 * @param value Value associated to approval
 */
interface ChangeApprovalParams extends TxParams {
    spender: string;
    value: BigNumber;
}
/**
 * @param newOwner Address to transfer ownership to
 */
interface TransferOwnershipParams extends TxParams {
    newOwner: string;
}
/**
 * @param moduleName name of module
 */
interface ModuleNameParams {
    moduleName: ModuleName;
}
/**
 * @param tokenContract Address of the ERC20Basic compliance token
 * @param value Amount of POLY to withdraw
 */
interface WithdrawERC20Params extends TxParams {
    tokenContract: string;
    value: BigNumber;
}
/**
 * @param module Module address
 * @param change Change in allowance
 * @param increase True if budget has to be increased, false if decrease
 */
interface ChangeModuleBudgetParams extends TxParams {
    module: string;
    change: BigNumber;
    increase: boolean;
}
/**
 * @param newTokenDetails New token details
 */
interface UpdateTokenDetailsParams extends TxParams {
    newTokenDetails: string;
}
/**
 * @param granularity Granularity level of the token
 */
interface ChangeGranularityParams extends TxParams {
    granularity: BigNumber;
}
/**
 * @param name new name of the token
 */
interface ChangeNameParams extends TxParams {
    name: string;
}
/**
 * @param checkpointId Checkpoint ID to query as of
 */
interface CheckpointIdParams {
    checkpointId: number;
}
/**
 * @param start Position of investor to start iteration from
 * @param end Position of investor to stop iteration at
 */
interface GetInvestorsSubsetAtParams extends CheckpointIdParams {
    start: number;
    end: number;
}
/**
 * @param start Position of investor to start iteration from
 * @param end Position of investor to stop iteration at
 */
interface IterateInvestorsParams {
    start: number;
    end: number;
}
/**
 * @param to receiver of transfer
 * @param value value of transfer
 * @param data data to indicate validation
 */
interface TransferWithDataParams extends TxParams {
    to: string;
    value: BigNumber;
    data: string;
}
/**
 * @param from sender of transfer
 * @param to receiver of transfer
 * @param value value of transfer
 * @param data data to indicate validation
 */
interface TransferFromWithDataParams extends TxParams {
    from: string;
    to: string;
    value: BigNumber;
    data: string;
}
/**
 * @param investor The account that will receive the created tokens (account should be whitelisted or KYCed).
 * @param value The amount of tokens need to be issued
 * @param data The `bytes data` allows arbitrary data to be submitted alongside the transfer.
 */
interface IssueParams extends TxParams {
    investor: string;
    value: BigNumber;
    data?: string;
}
/**
 * @param partition The partition to allocate the increase in balance
 */
interface IssueByPartitionParams extends IssueParams {
    partition: Partition;
}
/**
 * @param investors A list of addresses to whom the minted tokens will be dilivered
 * @param values A list of number of tokens get minted and transfer to corresponding address of the investor from tokenHolders[] list
 */
interface IssueMultiParams extends TxParams {
    investors: string[];
    values: BigNumber[];
}
/**
 * @param delegateAddress address of delegate
 * @param moduleAddress address of PermissionManager module
 * @param permission the permissions
 */
interface CheckPermissionParams {
    delegateAddress: string;
    moduleAddress: string;
    permission: Perm;
}
/**
 * @param value The amount of tokens need to be redeemed
 * @param data The `bytes data` it can be used in the token contract to authenticate the redemption.
 */
interface RedeemParams extends TxParams {
    value: BigNumber;
    data: string;
}
/**
 * @param partition The partition to allocate the decrease in balance
 */
interface RedeemByPartitionParams extends RedeemParams {
    partition: Partition;
}
/**
 * @param tokenHolder The token holder whose balance should be decreased
 * @param operatorData Additional data attached to the transfer of tokens by the operator
 */
interface OperatorRedeemByPartitionParams extends RedeemByPartitionParams {
    tokenHolder: string;
    operatorData: string;
}
/**
 * @param from The account whose tokens gets redeemed.
 * @param value The amount of tokens need to be redeemed
 * @param data The `bytes data` it can be used in the token contract to authenticate the redemption.
 */
interface RedeemFromParams extends TxParams {
    from: string;
    value: BigNumber;
    data: string;
}
/**
 * @param investor Investor to query balance for
 * @param checkpointId Checkpoint ID to query as of
 */
interface BalanceOfAtParams {
    investor: string;
    checkpointId: number;
}
/**
 * @param partition Partition which differentiate the tokens.
 * @param tokenHolder Whom balance need to queried
 */
interface BalanceOfByPartitionParams {
    partition: Partition;
    tokenHolder: string;
}
/**
 * @param partition The partition from which to transfer tokens
 * @param to The address to which to transfer tokens to
 * @param value The amount of tokens to transfer from `partition`
 * @param data Additional data attached to the transfer of tokens
 */
interface TransferByPartitionParams extends TxParams {
    partition: Partition;
    to: string;
    value: BigNumber;
    data: string;
}
/**
 * @param operator An address which is being authorised.
 */
interface AuthorizeOperatorParams extends TxParams {
    operator: string;
}
/**
 * @param partition The partition to which the operator is authorised
 */
interface AuthorizeOperatorByPartitionParams extends AuthorizeOperatorParams {
    partition: Partition;
}
/**
 * @param operator An address which is being de-authorised
 */
interface RevokeOperatorParams extends TxParams {
    operator: string;
}
/**
 * @param partition The partition to which the operator is de-authorised
 */
interface RevokeOperatorByPartitionParams extends RevokeOperatorParams {
    partition: Partition;
}
/**
 * @param from The address from which to transfer tokens from
 * @param operatorData Additional data attached to the transfer of tokens by the operator
 */
interface OperatorTransferByPartitionParams extends TransferByPartitionParams {
    from: string;
    operatorData: string;
}
/**
 * @param controller address of the controller
 */
interface SetControllerParams extends TxParams {
    controller: string;
}
/**
 * @param signature calldata
 */
interface DisableControllerParams extends TxParams {
    signature: string;
}
/**
 * @param from Address The address which you want to send tokens from
 * @param to Address The address which you want to transfer to
 * @param value the amount of tokens to be transferred
 * @param data data to validate the transfer. (It is not used in this reference implementation
 * because use of `data` parameter is implementation specific).
 * @param operatorData data attached to the transfer by controller to emit in event. (It is more like a reason string
 * for calling this function (aka force transfer) which provides the transparency on-chain).
 */
interface ControllerTransferParams extends TxParams {
    from: string;
    to: string;
    value: BigNumber;
    data: string;
    operatorData: string;
}
/**
 * @param from The account whose tokens will be redeemed.
 * @param value uint256 the amount of tokens need to be redeemed.
 * @param data data to validate the transfer. (It is not used in this reference implementation
 * because use of `data` parameter is implementation specific).
 * @param operatorData data attached to the transfer by controller to emit in event. (It is more like a reason string
 * for calling this function (aka force transfer) which provides the transparency on-chain).
 */
interface ControllerRedeemParams extends TxParams {
    from: string;
    value: BigNumber;
    data: string;
    operatorData: string;
}
/**
 * @param moduleName is the address of the module factory to be added
 * @param address Address of the module
 * @param archived whether to add the module as an archived module
 * @param maxCost max amount of POLY willing to pay to module. (WIP)
 * @param budget max amount of ongoing POLY willing to assign to the module.
 * @param label is the label of the module
 * @param data is data packed into bytes used to further configure the module (See STO usage)
 */
interface AddModuleParams extends TxParams {
    moduleName: ModuleName;
    address: string;
    archived: boolean;
    maxCost?: BigNumber;
    budget?: BigNumber;
    label?: string;
    data?: CountTransferManagerData | PercentageTransferManagerData | DividendCheckpointData | CappedSTOData | USDTieredSTOData | VestingEscrowWalletData;
}
/**
 * @param moduleName is the address of the module factory to be added
 * @param data is data packed into bytes used to further configure the module (here no data)
 */
interface AddNoDataModuleParams extends AddModuleParams {
    moduleName: ModuleName.GeneralPermissionManager | ModuleName.GeneralTransferManager | ModuleName.ManualApprovalTransferManager | ModuleName.VolumeRestrictionTM | ModuleName.LockUpTransferManager | ModuleName.BlacklistTransferManager;
    data?: undefined;
}
interface AddVestingEscrowWalletParams extends AddModuleParams {
    moduleName: ModuleName.VestingEscrowWallet;
    data: VestingEscrowWalletData;
}
interface AddCountTransferManagerParams extends AddModuleParams {
    moduleName: ModuleName.CountTransferManager;
    data: CountTransferManagerData;
}
interface AddPercentageTransferManagerParams extends AddModuleParams {
    moduleName: ModuleName.PercentageTransferManager;
    data: PercentageTransferManagerData;
}
interface AddDividendCheckpointParams extends AddModuleParams {
    moduleName: ModuleName.EtherDividendCheckpoint | ModuleName.ERC20DividendCheckpoint;
    data: DividendCheckpointData;
}
interface AddCappedSTOParams extends AddModuleParams {
    moduleName: ModuleName.CappedSTO;
    data: CappedSTOData;
}
interface AddUSDTieredSTOParams extends AddModuleParams {
    moduleName: ModuleName.UsdTieredSTO;
    data: USDTieredSTOData;
}
interface CountTransferManagerData {
    maxHolderCount: number;
}
interface VestingEscrowWalletData {
    treasuryWallet: string;
}
interface PercentageTransferManagerData {
    maxHolderPercentage: BigNumber;
    allowPrimaryIssuance: boolean;
}
interface DividendCheckpointData {
    wallet: string;
}
interface CappedSTOData {
    startTime: Date;
    endTime: Date;
    cap: BigNumber;
    rate: BigNumber;
    /**
     * In the smart contracts, this parameter is a single-element array.
     * It has been abstracted and simplified here
     */
    fundRaiseType: CappedSTOFundRaiseType;
    fundsReceiver: string;
}
interface USDTieredSTOData {
    startTime: Date;
    endTime: Date;
    ratePerTier: BigNumber[];
    ratePerTierDiscountPoly: BigNumber[];
    tokensPerTierTotal: BigNumber[];
    tokensPerTierDiscountPoly: BigNumber[];
    nonAccreditedLimitUSD: BigNumber;
    minimumInvestmentUSD: BigNumber;
    fundRaiseTypes: FundRaiseType[];
    wallet: string;
    treasuryWallet: string;
    usdTokens: string[];
}
interface AddModuleInterface {
    (params: AddCountTransferManagerParams): Promise<PolyResponse>;
    (params: AddPercentageTransferManagerParams): Promise<PolyResponse>;
    (params: AddDividendCheckpointParams): Promise<PolyResponse>;
    (params: AddCappedSTOParams): Promise<PolyResponse>;
    (params: AddUSDTieredSTOParams): Promise<PolyResponse>;
    (params: AddNoDataModuleParams): Promise<PolyResponse>;
    (params: AddVestingEscrowWalletParams): Promise<PolyResponse>;
}
interface ModuleData {
    /** Module name */
    name: string;
    /** Module address */
    address: string;
    /** Module factory address */
    factoryAddress: string;
    /** Whether module is archived */
    archived: boolean;
    /** Modules types */
    types: number[];
    /** Module label */
    label: string;
}
interface DocumentData {
    documentUri: string;
    documentHash: string;
    documentTime: Date;
}
interface CanTransferFromData {
    /** Status Code */
    statusCode: TransferStatusCode;
    /** Reason Code */
    reasonCode: string;
}
interface CanTransferByPartitionData extends CanTransferFromData {
    /** Partition */
    partition: Partition;
}
/**
 * This class includes the functionality related to interacting with the SecurityToken contract.
 */
export default class SecurityTokenWrapper extends ERC20TokenWrapper {
    protected contract: Promise<ISecurityTokenContract>;
    protected contractFactory: ContractFactory;
    protected featureRegistryContract: () => Promise<FeatureRegistryContract>;
    protected moduleFactoryContract: (address: string) => Promise<ModuleFactoryContract>;
    protected polyTokenContract: () => Promise<PolyTokenContract>;
    protected moduleRegistryContract: () => Promise<ModuleRegistryContract>;
    /**
     * Instantiate SecurityTokenWrapper
     * @param web3Wrapper Web3Wrapper instance to use
     * @param contract
     */
    constructor(web3Wrapper: Web3Wrapper, contract: Promise<ISecurityTokenContract>, contractFactory: ContractFactory);
    /**
     * Value of current checkpoint
     * @return current checkpoint Id
     */
    currentCheckpointId: () => Promise<BigNumber>;
    /**
     * Determines whether `operator` is an operator for all partitions of `tokenHolder`
     * @return Whether the `operator` is an operator for all partitions of `tokenHolder`
     */
    isOperator: (params: IsOperatorParams) => Promise<boolean>;
    /**
     * Determines whether `operator` is an operator for a specified partition of `tokenHolder`
     * @return Whether the `operator` is an operator for a specified partition of `tokenHolder`
     */
    isOperatorForPartition: (params: IsOperatorForPartitionParams) => Promise<boolean>;
    /**
     * Return all partitions
     * @return List of partitions
     */
    partitionsOf: (params: PartitionsOfParams) => Promise<Partition[]>;
    /**
     * Datastore address
     * @return address
     */
    dataStore: () => Promise<string>;
    /**
     * Granular level of the token
     * @return granularity
     */
    granularity: () => Promise<BigNumber>;
    /**
     * Controller
     * @return controller address
     */
    controller: () => Promise<string>;
    /**
     * Decrease Allowance
     */
    decreaseAllowance: (params: ChangeApprovalParams) => Promise<PolyResponse>;
    /**
     * Get polyToken
     * @return address of polyToken
     */
    polyToken: () => Promise<string>;
    /**
     * Get polymathRegistry
     * @return address of registry
     */
    polymathRegistry: () => Promise<string>;
    /**
     * Used to permanently halt controller actions
     * @return boolean
     */
    controllerDisabled: () => Promise<boolean>;
    /**
     * Owner address
     * @return address
     */
    owner: () => Promise<string>;
    /**
     * A security token issuer can specify that issuance has finished for the token
     * (i.e. no new tokens can be minted or issued).
     * If a token returns FALSE for `isIssuable()` then it MUST always return FALSE in the future.
     * If a token returns FALSE for `isIssuable()` then it MUST never allow additional tokens to be issued.
     * @return bool `true` signifies the minting is allowed. While `false` denotes the end of minting
     */
    isIssuable: () => Promise<boolean>;
    /**
     * Check if msg sender is owner
     * @return true if `msg.sender` is the owner of the contract.
     */
    isOwner: () => Promise<boolean>;
    /**
     * In order to provide transparency over whether `controllerTransfer` / `controllerRedeem` are useable
     * or not `isControllable` function will be used.
     * If `isControllable` returns `false` then it always return `false` and
     * `controllerTransfer` / `controllerRedeem` will always revert.
     * @return bool `true` when controller address is non-zero otherwise return `false`.
     */
    isControllable: () => Promise<boolean>;
    /**
     * Get moduleRegistry
     * @return address of moduleRegistry
     */
    moduleRegistry: () => Promise<string>;
    /**
     * Get securityTokenRegistry
     * @return address of securityTokenRegistry
     */
    securityTokenRegistry: () => Promise<string>;
    /**
     * Get tokenDetails
     * @return off chain data details of token
     */
    tokenDetails: () => Promise<string>;
    /**
     * Increase Allowance
     */
    increaseAllowance: (params: ChangeApprovalParams) => Promise<PolyResponse>;
    /**
     * Check variable used to temporarily halt all transactions
     * @return boolean
     */
    transfersFrozen: () => Promise<boolean>;
    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     */
    transferOwnership: (params: TransferOwnershipParams) => Promise<PolyResponse>;
    /**
     * Update ST from registry
     */
    updateFromRegistry: (params: TxParams) => Promise<PolyResponse>;
    /**
     * Archives a module attached to the SecurityToken
     */
    archiveModule: (params: ModuleAddressTxParams) => Promise<PolyResponse>;
    /**
     * Unarchives a module attached to the SecurityToken
     */
    unarchiveModule: (params: ModuleAddressTxParams) => Promise<PolyResponse>;
    /**
     * Removes a module attached to the SecurityToken
     */
    removeModule: (params: ModuleAddressTxParams) => Promise<PolyResponse>;
    /**
     * Returns module list for a module name
     * @return address List of modules with this name
     */
    getModulesByName: (params: ModuleNameParams) => Promise<string[]>;
    /**
     * Allows the owner to withdraw unspent POLY stored by them on the ST or any ERC20 token.
     * Owner can transfer POLY to the ST which will be used to pay for modules that require a POLY fee.
     */
    withdrawERC20: (params: WithdrawERC20Params) => Promise<PolyResponse>;
    /**
     * Allows owner to increase/decrease POLY approval of one of the modules
     */
    changeModuleBudget: (params: ChangeModuleBudgetParams) => Promise<PolyResponse>;
    /**
     * Changes the tokenDetails
     */
    updateTokenDetails: (params: UpdateTokenDetailsParams) => Promise<PolyResponse>;
    /**
     * Allows the owner to change token granularity
     */
    changeGranularity: (params: ChangeGranularityParams) => Promise<PolyResponse>;
    /**
     * Allows owner to change token name
     */
    changeName: (params: ChangeNameParams) => Promise<PolyResponse>;
    /**
     * Allows to change the treasury wallet address
     */
    changeTreasuryWallet: (params: ChangeTreasuryWalletParams) => Promise<PolyResponse>;
    /**
     * Allows owner to change data store
     */
    changeDataStore: (params: DataStoreAddressParams) => Promise<PolyResponse>;
    /**
     * Returns an array of investors
     * @return list of addresses
     */
    getInvestors: () => Promise<string[]>;
    /**
     * Returns an array of investors at a given checkpoint
     * @return list of investors
     */
    getInvestorsAt: (params: CheckpointIdParams) => Promise<string[]>;
    /**
     * Returns an array of investors with non zero balance at a given checkpoint
     * @return list of investors
     */
    getInvestorsSubsetAt: (params: GetInvestorsSubsetAtParams) => Promise<string[]>;
    /**
     * Generates subset of investors
     * @return list of investors
     */
    iterateInvestors: (params: IterateInvestorsParams) => Promise<string[]>;
    /**
     * Gets the investor count
     */
    getInvestorCount: () => Promise<number>;
    /**
     * Number of investors with non-zero balance
     * @return number of holders
     */
    holderCount: () => Promise<number>;
    /**
     * Freezes all the transfers
     */
    freezeTransfers: (params: TxParams) => Promise<PolyResponse>;
    /**
     * Un-Freezes all the transfers
     */
    unfreezeTransfers: (params: TxParams) => Promise<PolyResponse>;
    /**
     * Overloaded version of the transfer function
     * @return bool success
     */
    transferWithData: (params: TransferWithDataParams) => Promise<PolyResponse>;
    /**
     * Overloaded version of the transferFrom function
     * @return bool success
     */
    transferFromWithData: (params: TransferFromWithDataParams) => Promise<PolyResponse>;
    /**
     * Permanently freeze issuance of this security token.
     * It MUST NOT be possible to increase `totalSupply` after this function is called.
     */
    freezeIssuance: (params: FreezeIssuanceParams) => Promise<PolyResponse>;
    /**
     * This function must be called to increase the total supply (Corresponds to mint function of ERC20).
     * It is only be called by the token issuer or the operator defined by the issuer. ERC1594 doesn't have
     * have the any logic related to operator but its superset ERC1400 have the operator logic and this function
     * is allowed to call by the operator.
     */
    issue: (params: IssueParams) => Promise<PolyResponse>;
    /**
     * Increases totalSupply and the corresponding amount of the specified owners partition
     */
    issueByPartition: (params: IssueByPartitionParams) => Promise<PolyResponse>;
    /**
     * issue new tokens and assigns them to the target _tokenHolder.
     * @return success
     */
    issueMulti: (params: IssueMultiParams) => Promise<PolyResponse>;
    /**
     * Validate permissions with PermissionManager if it exists, If no Permission return false
     * Note that IModule withPerm will allow ST owner all permissions anyway
     * this allows individual modules to override this logic if needed (to not allow ST owner all permissions)
     * @return success
     */
    checkPermission: (params: CheckPermissionParams) => Promise<boolean>;
    /**
     * This function redeem an amount of the token of a msg.sender. For doing so msg.sender may incentivize
     * using different ways that could be implemented with in the `redeem` function definition. But those implementations
     * are out of the scope of the ERC1594.
     */
    redeem: (params: RedeemParams) => Promise<PolyResponse>;
    /**
     * Decreases totalSupply and the corresponding amount of the specified partition of msg.sender
     */
    redeemByPartition: (params: RedeemByPartitionParams) => Promise<PolyResponse>;
    /**
     * Decreases totalSupply and the corresponding amount of the specified partition of tokenHolder
     * This function can only be called by the authorised operator.
     * @param partition The partition to allocate the decrease in balance.
     * @param tokenHolder The token holder whose balance should be decreased
     * @param value The amount by which to decrease the balance
     * @param data Additional data attached to the burning of tokens
     * @param operatorData Additional data attached to the transfer of tokens by the operator
     */
    operatorRedeemByPartition: (params: OperatorRedeemByPartitionParams) => Promise<PolyResponse>;
    /**
     * This function redeem an amount of the token of a msg.sender. For doing so msg.sender may incentivize
     * using different ways that could be implemented with in the `redeem` function definition. But those implementations
     * are out of the scope of the ERC1594.
     * It is analogy to `transferFrom`
     */
    redeemFrom: (params: RedeemFromParams) => Promise<PolyResponse>;
    /**
     * Creates a checkpoint that can be used to query historical balances / totalSupply
     */
    createCheckpoint: (params: TxParams) => Promise<PolyResponse>;
    /**
     * Gets list of times that checkpoints were created
     * @return List of checkpoint dates
     */
    getCheckpointTimes: () => Promise<Date[]>;
    /**
     * Queries totalSupply at a specified checkpoint
     */
    totalSupplyAt: (params: CheckpointIdParams) => Promise<BigNumber>;
    /**
     * Queries balance at a specified checkpoint
     * @return balance amount
     */
    balanceOfAt: (params: BalanceOfAtParams) => Promise<BigNumber>;
    /**
     * Get the balance according to the provided partitions
     * @return balance amount
     */
    balanceOfByPartition: (params: BalanceOfByPartitionParams) => Promise<BigNumber>;
    /**
     * Transfers the ownership of tokens from a specified partition from one address to another address
     * @return The partition to which the transferred tokens were allocated for the to address
     */
    transferByPartition: (params: TransferByPartitionParams) => Promise<PolyResponse>;
    /**
     * Authorises an operator for all partitions of `msg.sender`.
     * NB - Allowing investors to authorize an investor to be an operator of all partitions
     * but it doesn't mean we operator is allowed to transfer the LOCKED partition values.
     * Logic for this restriction is written in `operatorTransferByPartition()` function.
     */
    authorizeOperator: (params: AuthorizeOperatorParams) => Promise<PolyResponse>;
    /**
     * Revokes authorisation of an operator previously given for all partitions of `msg.sender`.
     * NB - Allowing investors to authorize an investor to be an operator of all partitions
     * but it doesn't mean we operator is allowed to transfer the LOCKED partition values.
     * Logic for this restriction is written in `operatorTransferByPartition()` function.
     */
    revokeOperator: (params: AuthorizeOperatorParams) => Promise<PolyResponse>;
    /**
     * Authorises an operator for a given partition of `msg.sender`
     */
    authorizeOperatorByPartition: (params: AuthorizeOperatorByPartitionParams) => Promise<PolyResponse>;
    /**
     * Revokes authorisation of an operator previously given for a specified partition of `msg.sender`
     */
    revokeOperatorByPartition: (params: RevokeOperatorByPartitionParams) => Promise<PolyResponse>;
    /**
     * Transfers the ownership of tokens from a specified partition from one address to another address
     * @return The partition to which the transferred tokens were allocated for the to address
     */
    operatorTransferByPartition: (params: OperatorTransferByPartitionParams) => Promise<PolyResponse>;
    /**
     * Used by the issuer to set the controller addresses
     */
    setController: (params: SetControllerParams) => Promise<PolyResponse>;
    /**
     * Used by the issuer to permanently disable controller functionality
     * enabled via feature switch "disableControllerAllowed"
     */
    disableController: (params: DisableControllerParams) => Promise<PolyResponse>;
    /**
     * This function allows an authorised address to transfer tokens between any two token holders.
     * The transfer must still respect the balances of the token holders (so the transfer must be for at most
     * `balanceOf(_from)` tokens) and potentially also need to respect other transfer restrictions.
     * This function can only be executed by the `controller` address.
     */
    controllerTransfer: (params: ControllerTransferParams) => Promise<PolyResponse>;
    /**
     * This function allows an authorised address to redeem tokens for any token holder.
     * The redemption must still respect the balances of the token holder (so the redemption must be for at most
     * `balanceOf(tokenHolder)` tokens) and potentially also need to respect other transfer restrictions.
     * This function can only be executed by the `controller` address.
     */
    controllerRedeem: (params: ControllerRedeemParams) => Promise<PolyResponse>;
    /**
     * Used to get the version of the securityToken
     */
    getVersion: () => Promise<BigNumber[]>;
    /**
     * Returns a list of modules that match the provided module type
     * @return address[] list of modules with this type
     */
    getModulesByType: (params: ModuleTypeParams) => Promise<string[]>;
    /**
     * Use to return the global treasury wallet
     */
    getTreasuryWallet: () => Promise<string>;
    /**
     * Function used to attach a module to the security token
     *  E.G.: On deployment (through the STR) ST gets a TransferManager module attached to it
     * to control restrictions on transfers.
     * You are allowed to add a new moduleType if:
     * - there is no existing module of that type yet added
     * - the last member of the module list is replacable
     */
    addModule: AddModuleInterface;
    /**
     * Attaches a module to the SecurityToken
     * E.G.: On deployment (through the STR) ST gets a TransferManager module attached to it
     * to control restrictions on transfers.
     */
    addModuleWithLabel: AddModuleInterface;
    /**
     * Upgrades a module attached to the SecurityToken
     */
    upgradeModule: (params: ModuleAddressTxParams) => Promise<PolyResponse>;
    /**
     * Upgrades security token
     */
    upgradeToken: (params: TxParams) => Promise<PolyResponse>;
    /**
     * Get module
     * @return Returns the data associated to a module
     */
    getModule: (params: ModuleAddressParams) => Promise<ModuleData>;
    private getTransferStatusCode;
    /**
     * Validates if can transfer
     * @return statusCode, reasonCode
     */
    canTransfer: (params: CanTransferParams) => Promise<CanTransferFromData>;
    /**
     * Validates if can transfer from
     * @return statusCode, reasonCode
     */
    canTransferFrom: (params: CanTransferFromParams) => Promise<CanTransferFromData>;
    /**
     * Validates if can transfer with partition
     * @return statusCode, reasonCode, partition
     */
    canTransferByPartition: (params: CanTransferByPartitionParams) => Promise<CanTransferByPartitionData>;
    /**
     * Used to attach a new document to the contract, or update the URI or hash of an existing attached document
     * Can only be executed by the owner of the contract.
     */
    setDocument: (params: SetDocumentParams) => Promise<PolyResponse>;
    /**
     * Used to remove an existing document from the contract by giving the name of the document.
     * Can only be executed by the owner of the contract.
     */
    removeDocument: (params: DocumentParams) => Promise<PolyResponse>;
    /**
     * Get the document
     * @return Returns the data associated to a module
     */
    getDocument: (params: DocumentParams) => Promise<DocumentData>;
    /**
     * Used to retrieve a full list of documents attached to the smart contract.
     * @return List of all documents names present in the contract.
     */
    getAllDocuments: () => Promise<string[]>;
    /**
     * Subscribe to an event type emitted by the contract.
     * @return Subscription token used later to unsubscribe
     */
    subscribeAsync: SecurityTokenSubscribeAsyncParams;
    /**
     * Gets historical logs without creating a subscription
     * @return Array of logs that match the parameters
     */
    getLogsAsync: GetSecurityTokenLogsAsyncParams;
    private checkModuleExists;
    private checkIsArchived;
    private checkIsNotArchived;
    private checkModuleStructAddressIsNotZero;
    private checkModuleStructAddressIsEmpty;
    private checkIsControllable;
    private checkBalanceFromGreaterThanValue;
    private checkModuleCostBelowMaxCost;
    private checkOnlyOwner;
    private checkMsgSenderIsController;
    private checkUseModuleVerified;
    private checkForRegisteredModule;
    private isCompatibleModule;
    private cappedSTOAssertions;
    private usdTieredSTOAssertions;
    private addModuleRequirementsAndGetData;
}
export {};
//# sourceMappingURL=security_token_wrapper.d.ts.map