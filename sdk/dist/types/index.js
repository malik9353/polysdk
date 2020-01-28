"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
exports.Currency = contract_wrappers_1.FundRaiseType;
exports.CappedStoCurrency = contract_wrappers_1.CappedSTOFundRaiseType;
const lodash_1 = require("lodash");
var DividendType;
(function (DividendType) {
    DividendType["Erc20"] = "Erc20";
    DividendType["Eth"] = "Eth";
})(DividendType = exports.DividendType || (exports.DividendType = {}));
function isDividendType(type) {
    return typeof type === 'string' && (type === DividendType.Erc20 || type === DividendType.Eth);
}
exports.isDividendType = isDividendType;
var StoType;
(function (StoType) {
    StoType["Capped"] = "Capped";
    StoType["UsdTiered"] = "UsdTiered";
})(StoType = exports.StoType || (exports.StoType = {}));
function isStoType(type) {
    return typeof type === 'string' && (type === StoType.UsdTiered || type === StoType.Capped);
}
exports.isStoType = isStoType;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["IncompatibleBrowser"] = "IncompatibleBrowser";
    ErrorCode["NonBrowserEnvironment"] = "NonBrowserEnvironment";
    ErrorCode["MetamaskNotInstalled"] = "MetamaskNotInstalled";
    ErrorCode["UserDeniedAccess"] = "UserDeniedAccess";
    ErrorCode["WalletIsLocked"] = "WalletIsLocked";
    ErrorCode["ProcedureValidationError"] = "ProcedureValidationError";
    ErrorCode["FetcherValidationError"] = "FetcherValidationError";
    ErrorCode["TransactionRejectedByUser"] = "TransactionRejectedByUser";
    ErrorCode["TransactionReverted"] = "TransactionReverted";
    ErrorCode["FatalError"] = "FatalError";
    ErrorCode["UnexpectedReturnData"] = "UnexpectedReturnData";
    ErrorCode["UnexpectedEventLogs"] = "UnexpectedEventLogs";
    ErrorCode["InvalidUuid"] = "InvalidUuid";
    ErrorCode["InvalidAddress"] = "InvalidAddress";
    ErrorCode["InsufficientBalance"] = "InsufficientBalance";
    ErrorCode["InexistentModule"] = "InexistentModule";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ProcedureType;
(function (ProcedureType) {
    ProcedureType["UnnamedProcedure"] = "UnnamedProcedure";
    ProcedureType["ApproveErc20"] = "ApproveErc20";
    ProcedureType["TransferErc20"] = "TransferErc20";
    ProcedureType["CreateCheckpoint"] = "CreateCheckpoint";
    ProcedureType["EnableDividendManagers"] = "EnableDividendManagers";
    ProcedureType["EnableGeneralPermissionManager"] = "EnableGeneralPermissionManager";
    ProcedureType["LaunchCappedSto"] = "LaunchCappedSto";
    ProcedureType["LaunchUsdTieredSto"] = "LaunchUsdTieredSto";
    ProcedureType["CreateErc20DividendDistribution"] = "CreateErc20DividendDistribution";
    ProcedureType["CreateEtherDividendDistribution"] = "CreateEtherDividendDistribution";
    ProcedureType["CreateSecurityToken"] = "CreateSecurityToken";
    ProcedureType["ReclaimFunds"] = "ReclaimFunds";
    ProcedureType["ReserveSecurityToken"] = "ReserveSecurityToken";
    ProcedureType["WithdrawTaxes"] = "WithdrawTaxes";
    ProcedureType["UpdateDividendsTaxWithholdingList"] = "UpdateDividendsTaxWithholdingList";
    ProcedureType["SetDividendsWallet"] = "SetDividendsWallet";
    ProcedureType["PushDividendPayment"] = "PushDividendPayment";
    ProcedureType["ChangeDelegatePermission"] = "ChangeDelegatePermission";
    ProcedureType["ControllerTransfer"] = "ControllerTransfer";
    ProcedureType["PauseSto"] = "PauseSto";
    ProcedureType["SetController"] = "SetController";
    ProcedureType["ModifyShareholderData"] = "ModifyShareholderData";
    ProcedureType["RevokeKyc"] = "RevokeKyc";
})(ProcedureType = exports.ProcedureType || (exports.ProcedureType = {}));
var PolyTransactionTag;
(function (PolyTransactionTag) {
    PolyTransactionTag["Any"] = "Any";
    PolyTransactionTag["GetTokens"] = "GetTokens";
    PolyTransactionTag["ApproveErc20"] = "ApproveErc20";
    PolyTransactionTag["TransferErc20"] = "TransferErc20";
    PolyTransactionTag["ReserveSecurityToken"] = "ReserveSecurityToken";
    PolyTransactionTag["CreateSecurityToken"] = "CreateSecurityToken";
    PolyTransactionTag["CreateCheckpoint"] = "CreateCheckpoint";
    PolyTransactionTag["CreateErc20DividendDistribution"] = "CreateErc20DividendDistribution";
    PolyTransactionTag["CreateEtherDividendDistribution"] = "CreateEtherDividendDistribution";
    PolyTransactionTag["SetErc20TaxWithholding"] = "SetErc20TaxWithholding";
    PolyTransactionTag["SetEtherTaxWithholding"] = "SetEtherTaxWithholding";
    PolyTransactionTag["EnableDividends"] = "EnableDividends";
    PolyTransactionTag["EnableCappedSto"] = "EnableCappedSto";
    PolyTransactionTag["EnableUsdTieredSto"] = "EnableUsdTieredSto";
    PolyTransactionTag["EnableGeneralPermissionManager"] = "EnableGeneralPermissionManager";
    PolyTransactionTag["ReclaimDividendFunds"] = "ReclaimDividendFunds";
    PolyTransactionTag["WithdrawTaxWithholdings"] = "WithdrawTaxWithholdings";
    PolyTransactionTag["PushDividendPayment"] = "PushDividendPayment";
    PolyTransactionTag["SetDividendsWallet"] = "SetDividendsWallet";
    PolyTransactionTag["ChangeDelegatePermission"] = "ChangeDelegatePermission";
    PolyTransactionTag["ControllerTransfer"] = "ControllerTransfer";
    PolyTransactionTag["PauseSto"] = "PauseSto";
    PolyTransactionTag["SetController"] = "SetController";
    PolyTransactionTag["ModifyKycDataMulti"] = "ModifyKycDataMulti";
    PolyTransactionTag["ModifyInvestorFlagMulti"] = "ModifyInvestorFlagMulti";
})(PolyTransactionTag = exports.PolyTransactionTag || (exports.PolyTransactionTag = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Idle"] = "Idle";
    TransactionStatus["Unapproved"] = "Unapproved";
    TransactionStatus["Running"] = "Running";
    TransactionStatus["Rejected"] = "Rejected";
    TransactionStatus["Succeeded"] = "Succeeded";
    TransactionStatus["Failed"] = "Failed";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var TransactionQueueStatus;
(function (TransactionQueueStatus) {
    TransactionQueueStatus["Idle"] = "Idle";
    TransactionQueueStatus["Running"] = "Running";
    TransactionQueueStatus["Failed"] = "Failed";
    TransactionQueueStatus["Succeeded"] = "Succeeded";
})(TransactionQueueStatus = exports.TransactionQueueStatus || (exports.TransactionQueueStatus = {}));
var PermissibleOperation;
(function (PermissibleOperation) {
    // MODULE_COMPONENT_OP
    PermissibleOperation["ModifyShareholderData"] = "GTM_WHITELIST_UPDATE";
})(PermissibleOperation = exports.PermissibleOperation || (exports.PermissibleOperation = {}));
function isPojo(pojo) {
    if (!pojo) {
        return false;
    }
    const props = Object.getOwnPropertyNames(pojo);
    return (props.every(prop => {
        return typeof pojo[prop] !== 'function';
    }) && lodash_1.isPlainObject(pojo));
}
exports.isPojo = isPojo;
var TransactionSpeed;
(function (TransactionSpeed) {
    TransactionSpeed["Slow"] = "slow";
    TransactionSpeed["Medium"] = "medium";
    TransactionSpeed["Fast"] = "fast";
    TransactionSpeed["Fastest"] = "fastest";
})(TransactionSpeed = exports.TransactionSpeed || (exports.TransactionSpeed = {}));
//# sourceMappingURL=index.js.map