"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
const lodash_1 = require("lodash");
const Procedure_1 = require("./Procedure");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
const entities_1 = require("../entities");
class RevokeKyc extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.CreateErc20DividendDistribution;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { symbol, shareholderAddresses } = this.args;
            const { contractWrappers, factories } = this.context;
            if (shareholderAddresses.length === 0) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: 'You must provide at least one shareholder address to revoke KYC for',
                });
            }
            try {
                yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            const securityToken = yield factories.securityTokenFactory.fetch(entities_1.SecurityToken.generateId({ symbol }));
            const shareholders = yield securityToken.shareholders.getShareholders();
            const currentNonRevokedShareholderAddresses = shareholders
                .filter(shareholder => !shareholder.isRevoked())
                .map(({ address }) => address);
            const diff = lodash_1.difference(shareholderAddresses, currentNonRevokedShareholderAddresses);
            if (diff.length) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `"${diff.join(', ')}" already revoked`,
                });
            }
            const gtmModule = (yield contractWrappers.getAttachedModules({
                moduleName: contract_wrappers_1.ModuleName.GeneralTransferManager,
                symbol,
            }, { unarchived: true }))[0];
            if (!gtmModule) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FatalError,
                    message: `General Transfer Manager for token "${symbol}" isn't enabled. Please report this issue to the Polymath team`,
                });
            }
            const canSendAfter = [];
            const canReceiveAfter = [];
            const expiryTime = [];
            shareholderAddresses.forEach(_address => {
                canSendAfter.push(new Date(0));
                canReceiveAfter.push(new Date(0));
                expiryTime.push(new Date(0));
            });
            const securityTokenId = entities_1.SecurityToken.generateId({ symbol });
            let revokedShareholders;
            revokedShareholders = yield this.addTransaction(gtmModule.modifyKYCDataMulti, {
                tag: types_1.PolyTransactionTag.ModifyKycDataMulti,
                resolver: () => __awaiter(this, void 0, void 0, function* () {
                    const refreshingShareholders = shareholderAddresses.map(shareholder => {
                        return factories.shareholderFactory.refresh(entities_1.Shareholder.generateId({
                            securityTokenId,
                            address: shareholder,
                        }));
                    });
                    yield Promise.all(refreshingShareholders);
                    const fetchingShareholders = shareholderAddresses.map(shareholder => {
                        return factories.shareholderFactory.fetch(entities_1.Shareholder.generateId({
                            securityTokenId,
                            address: shareholder,
                        }));
                    });
                    return Promise.all(fetchingShareholders);
                }),
            })({
                investors: shareholderAddresses,
                canSendAfter,
                canReceiveAfter,
                expiryTime,
            });
            return revokedShareholders;
        });
    }
}
exports.RevokeKyc = RevokeKyc;
//# sourceMappingURL=RevokeKyc.js.map