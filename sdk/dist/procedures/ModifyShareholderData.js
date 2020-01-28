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
const { dateToBigNumber } = contract_wrappers_1.conversionUtils;
class ModifyShareholderData extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.CreateErc20DividendDistribution;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { symbol, shareholderData } = this.args;
            const { contractWrappers, factories } = this.context;
            if (shareholderData.some(({ canReceiveAfter, canSendAfter, kycExpiry }) => [canReceiveAfter, canSendAfter, kycExpiry].some(date => date.getTime() === 0))) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: "Cannot set dates to epoch. If you're trying to revoke a shareholder's KYC, use .revokeKyc()",
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
            const investors = [];
            const canSendAfter = [];
            const canReceiveAfter = [];
            const expiryTime = [];
            const investorsForFlags = [];
            const flag = [];
            const value = [];
            shareholderData.forEach(({ address, canSendAfter: sendDate, canReceiveAfter: receiveDate, kycExpiry, isAccredited, canBuyFromSto, }) => {
                const thisShareholder = shareholders.find(({ address: shareholderAddress }) => shareholderAddress === address);
                if (!thisShareholder ||
                    !dateToBigNumber(thisShareholder.canSendAfter).eq(dateToBigNumber(sendDate)) ||
                    !dateToBigNumber(thisShareholder.canReceiveAfter).eq(dateToBigNumber(receiveDate)) ||
                    !dateToBigNumber(thisShareholder.kycExpiry).eq(dateToBigNumber(kycExpiry))) {
                    investors.push(address);
                    canSendAfter.push(sendDate);
                    canReceiveAfter.push(receiveDate);
                    expiryTime.push(kycExpiry);
                }
                // Only update flags that will actually change
                // one shareholder entry per modified flag
                // we will sometimes have the same shareholder twice in the array
                if (!thisShareholder || thisShareholder.isAccredited !== isAccredited) {
                    investorsForFlags.push(address);
                    flag.push(contract_wrappers_1.FlagsType.IsAccredited);
                    value.push(isAccredited);
                }
                if (!thisShareholder || thisShareholder.canBuyFromSto !== canBuyFromSto) {
                    investorsForFlags.push(address);
                    flag.push(contract_wrappers_1.FlagsType.CanNotBuyFromSto);
                    value.push(!canBuyFromSto); // negated since the contract flag represents the opposite
                }
            });
            const uniqueInvestorsForFlags = lodash_1.uniq(investorsForFlags);
            const allAffectedShareholders = lodash_1.uniq([...investors, ...uniqueInvestorsForFlags]);
            const securityTokenId = entities_1.SecurityToken.generateId({ symbol });
            let newShareholders;
            if (investors.length > 0) {
                newShareholders = yield this.addTransaction(gtmModule.modifyKYCDataMulti, {
                    tag: types_1.PolyTransactionTag.ModifyKycDataMulti,
                    resolver: () => __awaiter(this, void 0, void 0, function* () {
                        const refreshingShareholders = investors.map(investor => {
                            return factories.shareholderFactory.refresh(entities_1.Shareholder.generateId({
                                securityTokenId,
                                address: investor,
                            }));
                        });
                        yield Promise.all(refreshingShareholders);
                        if (investorsForFlags.length === 0) {
                            const fetchingShareholders = allAffectedShareholders.map(shareholder => {
                                return factories.shareholderFactory.fetch(entities_1.Shareholder.generateId({
                                    securityTokenId,
                                    address: shareholder,
                                }));
                            });
                            return Promise.all(fetchingShareholders);
                        }
                        return [];
                    }),
                })({
                    investors,
                    canSendAfter,
                    canReceiveAfter,
                    expiryTime,
                });
            }
            if (investorsForFlags.length > 0) {
                newShareholders = yield this.addTransaction(gtmModule.modifyInvestorFlagMulti, {
                    tag: types_1.PolyTransactionTag.ModifyInvestorFlagMulti,
                    resolver: () => __awaiter(this, void 0, void 0, function* () {
                        // Only consider one occurence of each investor address
                        const refreshingShareholders = uniqueInvestorsForFlags.map(investor => {
                            return factories.shareholderFactory.refresh(entities_1.Shareholder.generateId({
                                securityTokenId,
                                address: investor,
                            }));
                        });
                        yield Promise.all(refreshingShareholders);
                        const fetchingShareholders = allAffectedShareholders.map(shareholder => {
                            return factories.shareholderFactory.fetch(entities_1.Shareholder.generateId({
                                securityTokenId,
                                address: shareholder,
                            }));
                        });
                        return Promise.all(fetchingShareholders);
                    }),
                })({
                    investors: investorsForFlags,
                    flag,
                    value,
                });
            }
            if (!newShareholders) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: 'Modify shareholder data failed: Nothing to modify',
                });
            }
            return newShareholders;
        });
    }
}
exports.ModifyShareholderData = ModifyShareholderData;
//# sourceMappingURL=ModifyShareholderData.js.map