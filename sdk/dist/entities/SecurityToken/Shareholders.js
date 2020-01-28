"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
const types_1 = require("../../types");
const procedures_1 = require("../../procedures");
const SubModule_1 = require("./SubModule");
const Checkpoint_1 = require("../Checkpoint");
const PolymathError_1 = require("../../PolymathError");
const DividendDistribution_1 = require("../DividendDistribution");
const Shareholder_1 = require("../Shareholder");
class Shareholders extends SubModule_1.SubModule {
    constructor() {
        super(...arguments);
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
        this.modifyData = (args) => __awaiter(this, void 0, void 0, function* () {
            const procedure = new procedures_1.ModifyShareholderData(Object.assign({ symbol: this.securityToken.symbol }, args), this.context);
            return procedure.prepare();
        });
        /**
         * Revokes KYC for a group of shareholder addresses. Supplied addresses must have valid KYC
         *
         * @param shareholderAddresses array of shareholder addresses
         */
        this.revokeKyc = (args) => __awaiter(this, void 0, void 0, function* () {
            const procedure = new procedures_1.RevokeKyc(Object.assign({ symbol: this.securityToken.symbol }, args), this.context);
            return procedure.prepare();
        });
        /**
         * Create a snapshot of the balances of every shareholder at the current date
         */
        this.createCheckpoint = () => __awaiter(this, void 0, void 0, function* () {
            const { context, securityToken } = this;
            const { symbol } = securityToken;
            const procedure = new procedures_1.CreateCheckpoint({
                symbol,
            }, context);
            return procedure.prepare();
        });
        /**
         * Retrieve list of checkpoints and their corresponding dividend distributions of every type
         */
        this.getCheckpoints = () => __awaiter(this, void 0, void 0, function* () {
            const { contractWrappers, factories } = this.context;
            const { symbol, uid } = this.securityToken;
            let securityToken;
            try {
                securityToken = yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            const allDividends = yield contractWrappers.getAllDividends({
                securityTokenSymbol: symbol,
            });
            const checkpoints = yield contractWrappers.getCheckpoints({ securityToken });
            return checkpoints.map((_a) => {
                var { index } = _a, checkpoint = __rest(_a, ["index"]);
                const checkpointId = Checkpoint_1.Checkpoint.generateId({ securityTokenId: uid, index });
                const checkpointDividends = allDividends.filter(dividend => dividend.checkpointId === index);
                const dividendDistributions = checkpointDividends.map((_a) => {
                    var { dividendType } = _a, distribution = __rest(_a, ["dividendType"]);
                    return factories.dividendDistributionFactory.create(DividendDistribution_1.DividendDistribution.generateId({
                        securityTokenId: uid,
                        dividendType,
                        index,
                    }), Object.assign({}, distribution, { checkpointId, securityTokenSymbol: symbol }));
                });
                return factories.checkpointFactory.create(checkpointId, Object.assign({}, checkpoint, { dividendDistributions, securityTokenSymbol: symbol }));
            });
        });
        /**
         * Retrieve a checkpoint from the security token by index or UUID
         *
         * @param checkpointIndex index of the checkpoint within the Security Token
         */
        this.getCheckpoint = (args) => __awaiter(this, void 0, void 0, function* () {
            const { factories } = this.context;
            const { uid: securityTokenId } = this.securityToken;
            let uid;
            // fetch by UUID
            if (typeof args === 'string') {
                uid = args;
            }
            else {
                uid = Checkpoint_1.Checkpoint.generateId({ index: args.checkpointIndex, securityTokenId });
            }
            return factories.checkpointFactory.fetch(uid);
        });
        /**
         * Get data for all shareholders associated to the Security Token
         */
        this.getShareholders = () => __awaiter(this, void 0, void 0, function* () {
            const { contractWrappers, factories } = this.context;
            const { symbol: securityTokenSymbol, uid: securityTokenId } = this.securityToken;
            let securityToken;
            try {
                securityToken = yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(securityTokenSymbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `There is no Security Token with symbol ${securityTokenSymbol}`,
                });
            }
            const generalTransferManager = (yield contractWrappers.getAttachedModules({ moduleName: contract_wrappers_1.ModuleName.GeneralTransferManager, symbol: securityTokenSymbol }, { unarchived: true }))[0];
            const [allKycData, allFlags] = yield Promise.all([
                generalTransferManager.getAllKYCData(),
                generalTransferManager.getAllInvestorFlags(),
            ]);
            const shareholders = [];
            const balances = yield Promise.all(allKycData.map(({ investor }) => securityToken.balanceOf({ owner: investor })));
            for (let i = 0; i < allKycData.length; ++i) {
                const { investor: address, canSendAfter, canReceiveAfter, expiryTime } = allKycData[i];
                const { isAccredited, canNotBuyFromSTO } = allFlags[i];
                const balance = balances[i];
                const shareholder = factories.shareholderFactory.create(Shareholder_1.Shareholder.generateId({ securityTokenId, address }), {
                    balance,
                    canSendAfter,
                    canReceiveAfter,
                    kycExpiry: expiryTime,
                    isAccredited,
                    canBuyFromSto: !canNotBuyFromSTO,
                    securityTokenSymbol,
                });
                if (!shareholder.isRevoked() || shareholder.balance.isGreaterThan(0)) {
                    shareholders.push(shareholder);
                }
            }
            return shareholders;
        });
    }
}
exports.Shareholders = Shareholders;
//# sourceMappingURL=Shareholders.js.map