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
const SubModule_1 = require("./SubModule");
const types_1 = require("../../types");
const procedures_1 = require("../../procedures");
const Checkpoint_1 = require("../Checkpoint");
const PolymathError_1 = require("../../PolymathError");
const DividendDistribution_1 = require("../DividendDistribution");
const DividendsManager_1 = require("../DividendsManager");
const Erc20DividendsManager_1 = require("../Erc20DividendsManager");
const EthDividendsManager_1 = require("../EthDividendsManager");
const TaxWithholding_1 = require("../TaxWithholding");
class Dividends extends SubModule_1.SubModule {
    constructor() {
        super(...arguments);
        /**
         * Enable dividend functionalities (ERC20, ETH or both)
         *
         * @param storageWalletAddress wallet that will receive reclaimed dividends and withheld taxes
         * @param types array containing the types of dividends to enable (will enable both if not present)
         */
        this.enable = (args) => __awaiter(this, void 0, void 0, function* () {
            const { symbol } = this.securityToken;
            const procedure = new procedures_1.EnableDividendManagers(Object.assign({ symbol }, args), this.context);
            return procedure.prepare();
        });
        /**
         * Distribute dividends in POLY
         *
         * @param checkpointId uuid of the checkpoint to use as reference for the distribution
         * @param maturityDate date from which dividends can be paid/collected
         * @param expiryDate date up to which dividends can be paid/collected
         * @param amount amount to be distributed
         * @param name human readable name of the distribution
         * @param excludedAddresses shareholder addresses that will be excluded from the distribution (optional)
         * @param taxWithholdings array that specifies how much to withhold from each shareholder for tax purposes
         * @param taxWithholdings[].address shareholder address
         * @param taxWithholdings[].percentage tax percentage to be withheld
         */
        this.createPolyDistribution = (args) => __awaiter(this, void 0, void 0, function* () {
            const { context, securityToken } = this;
            const polyAddress = yield context.contractWrappers.polyToken.address();
            const { checkpointId } = args, rest = __rest(args, ["checkpointId"]);
            const { symbol } = securityToken;
            const { index: checkpointIndex } = Checkpoint_1.Checkpoint.unserialize(checkpointId);
            const procedure = new procedures_1.CreateErc20DividendDistribution(Object.assign({ erc20Address: polyAddress, symbol,
                checkpointIndex }, rest), context);
            return procedure.prepare();
        });
        /**
         * Distribute dividends in a specified ERC20 token
         *
         * @param checkpointId uuid of the checkpoint to use as reference for the distribution
         * @param maturityDate date from which dividends can be paid/collected
         * @param expiryDate date up to which dividends can be paid/collected
         * @param erc20Address address of the ERC20 token that will be used as currency
         * @param amount amount to be distributed
         * @param name human readable name of the distribution
         * @param excludedAddresses shareholder addresses that will be excluded from the distribution (optional)
         * @param taxWithholdings array that specifies how much to withhold from each shareholder for tax purposes
         * @param taxWithholdings[].address shareholder address
         * @param taxWithholdings[].percentage tax percentage to be withheld
         */
        this.createErc20Distribution = (args) => __awaiter(this, void 0, void 0, function* () {
            const { context, securityToken } = this;
            const { checkpointId } = args, rest = __rest(args, ["checkpointId"]);
            const { symbol } = securityToken;
            const { index: checkpointIndex } = Checkpoint_1.Checkpoint.unserialize(checkpointId);
            const procedure = new procedures_1.CreateErc20DividendDistribution(Object.assign({ symbol,
                checkpointIndex }, rest), context);
            return procedure.prepare();
        });
        /**
         * Distribute dividends in ETH
         *
         * @param checkpointId uuid of the checkpoint to use as reference for the distribution
         * @param maturityDate date from which dividends can be paid/collected
         * @param expiryDate date up to which dividends can be paid/collected
         * @param amount amount to be distributed
         * @param name human readable name of the distribution
         * @param excludedAddresses shareholder addresses that will be excluded from the distribution (optional)
         * @param taxWithholdings array that specifies how much to withhold from each shareholder for tax purposes
         * @param taxWithholdings[].address shareholder address
         * @param taxWithholdings[].percentage tax percentage to be withheld
         */
        this.createEthDistribution = (args) => __awaiter(this, void 0, void 0, function* () {
            const { context, securityToken } = this;
            const { checkpointId } = args, rest = __rest(args, ["checkpointId"]);
            const { symbol } = securityToken;
            const { index: checkpointIndex } = Checkpoint_1.Checkpoint.unserialize(checkpointId);
            const procedure = new procedures_1.CreateEtherDividendDistribution(Object.assign({ symbol,
                checkpointIndex }, rest), context);
            return procedure.prepare();
        });
        /**
         * Set default tax withtholding list for a type of dividends
         *
         * @param dividendType type of dividends for which to modify the tax withholding list
         * @param taxWithholdings array that specifies how much to withhold from each shareholder for tax purposes
         * @param taxWithholdings[].address shareholder address
         * @param taxWithholdings[].percentage tax percentage to be withheld
         */
        this.modifyTaxWithholdingList = (args) => __awaiter(this, void 0, void 0, function* () {
            const { taxWithholdings } = args, rest = __rest(args, ["taxWithholdings"]);
            const { symbol } = this.securityToken;
            const shareholderAddresses = [];
            const percentages = [];
            taxWithholdings.forEach(({ address, percentage }) => {
                shareholderAddresses.push(address);
                percentages.push(percentage);
            });
            const procedure = new procedures_1.UpdateDividendsTaxWithholdingList(Object.assign({ symbol,
                shareholderAddresses,
                percentages }, rest), this.context);
            return procedure.prepare();
        });
        /**
         * Change dividends manager storage wallet address
         *
         * @param dividendType type of dividends for which to modify the storage wallet
         * @param address new storage wallet address
         */
        this.modifyStorageWallet = (args) => __awaiter(this, void 0, void 0, function* () {
            const { symbol } = this.securityToken;
            const procedure = new procedures_1.SetDividendsWallet(Object.assign({ symbol }, args), this.context);
            return procedure.prepare();
        });
        /**
         * Retrieve a list of investor addresses and their corresponding tax withholding
         * percentages
         */
        this.getTaxWithholdingList = (args) => __awaiter(this, void 0, void 0, function* () {
            const { contractWrappers: { tokenFactory, getAttachedModules }, factories, } = this.context;
            const { dividendType } = args;
            const { symbol, uid: securityTokenId } = this.securityToken;
            let securityToken;
            try {
                securityToken = yield tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            let dividendsModule;
            if (dividendType === types_1.DividendType.Erc20) {
                [dividendsModule] = yield getAttachedModules({ symbol, moduleName: contract_wrappers_1.ModuleName.ERC20DividendCheckpoint }, { unarchived: true });
            }
            else if (dividendType === types_1.DividendType.Eth) {
                [dividendsModule] = yield getAttachedModules({ symbol, moduleName: contract_wrappers_1.ModuleName.EtherDividendCheckpoint }, { unarchived: true });
            }
            if (!dividendsModule) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: "Dividends of the specified type haven't been enabled. Did you forget to call dividends.enable() on your Security Token?",
                });
            }
            const checkpointIndex = yield securityToken.currentCheckpointId();
            const checkpointData = yield dividendsModule.getCheckpointData({
                checkpointId: checkpointIndex.toNumber(),
            });
            return checkpointData.map(({ investor, withheld }) => factories.taxWithholdingFactory.create(TaxWithholding_1.TaxWithholding.generateId({
                shareholderAddress: investor,
                securityTokenId,
                dividendType,
            }), {
                percentage: withheld.toNumber(),
                securityTokenSymbol: symbol,
            }));
        });
        /**
         * Retrieve all dividend distributions at a certain checkpoint
         *
         * @param checkpointId UUID of the checkpoint
         */
        this.getDistributions = (args, opts) => __awaiter(this, void 0, void 0, function* () {
            const { contractWrappers, factories } = this.context;
            const { checkpointId } = args;
            const { symbol, uid: securityTokenId } = this.securityToken;
            const { index: checkpointIndex } = Checkpoint_1.Checkpoint.unserialize(checkpointId);
            let dividendTypes;
            if (opts) {
                ({ dividendTypes } = opts);
            }
            const checkpointDividends = yield contractWrappers.getAllDividends({
                securityTokenSymbol: symbol,
                checkpointId: checkpointIndex,
                dividendTypes,
            });
            const dividends = checkpointDividends.map((_a) => {
                var { index, dividendType } = _a, dividend = __rest(_a, ["index", "dividendType"]);
                return factories.dividendDistributionFactory.create(DividendDistribution_1.DividendDistribution.generateId({ securityTokenId, dividendType, index }), Object.assign({}, dividend, { checkpointId, securityTokenSymbol: symbol }));
            });
            return dividends;
        });
        /**
         * Retrieve a particular dividend distribution by type and index or UUID
         *
         * @param dividendType type of the dividend distribution
         * @param dividendIndex index of the dividend distribution
         */
        this.getDistribution = (args) => __awaiter(this, void 0, void 0, function* () {
            let dividendType;
            let dividendIndex;
            let uid;
            // fetch by UUID
            if (typeof args === 'string') {
                uid = args;
            }
            else {
                ({ dividendType, dividendIndex } = args);
                const { securityToken: { uid: securityTokenId }, } = this;
                uid = DividendDistribution_1.DividendDistribution.generateId({
                    securityTokenId,
                    dividendType,
                    index: dividendIndex,
                });
            }
            return this.context.factories.dividendDistributionFactory.fetch(uid);
        });
        /**
         * Retrieve a Dividends Manager related to the Security Token by UUID or type.
         *
         * @throws if dividends of that type haven't been enabled
         *
         * @param dividendType type of manager
         */
        this.getManager = (args) => __awaiter(this, void 0, void 0, function* () {
            const { factories } = this.context;
            let dividendType;
            let uid;
            // fetch by UUID
            if (typeof args === 'string') {
                ({ dividendType } = DividendsManager_1.DividendsManager.unserialize(args));
            }
            else {
                ({ dividendType } = args);
            }
            const { uid: securityTokenId } = this.securityToken;
            switch (dividendType) {
                case types_1.DividendType.Erc20: {
                    uid = Erc20DividendsManager_1.Erc20DividendsManager.generateId({ securityTokenId, dividendType });
                    return factories.erc20DividendsManagerFactory.fetch(uid);
                }
                case types_1.DividendType.Eth: {
                    uid = EthDividendsManager_1.EthDividendsManager.generateId({ securityTokenId, dividendType });
                    return factories.ethDividendsManagerFactory.fetch(uid);
                }
                default: {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.FetcherValidationError,
                        message: 'Invalid dividend type. Must be "Erc20" or "Eth".',
                    });
                }
            }
        });
    }
}
exports.Dividends = Dividends;
//# sourceMappingURL=Dividends.js.map