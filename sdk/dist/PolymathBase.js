"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
const lodash_1 = require("lodash");
const bluebird_1 = __importDefault(require("bluebird"));
const semver_1 = __importDefault(require("semver"));
const PolymathError_1 = require("./PolymathError");
const types_1 = require("./types");
class PolymathBase extends contract_wrappers_1.PolymathAPI {
    constructor() {
        super(...arguments);
        this.getModuleFactoryAddress = ({ moduleName, tokenAddress, }) => __awaiter(this, void 0, void 0, function* () {
            const moduleTypes = {
                [contract_wrappers_1.ModuleName.CappedSTO]: contract_wrappers_1.ModuleType.STO,
                [contract_wrappers_1.ModuleName.UsdTieredSTO]: contract_wrappers_1.ModuleType.STO,
                [contract_wrappers_1.ModuleName.GeneralTransferManager]: contract_wrappers_1.ModuleType.TransferManager,
                [contract_wrappers_1.ModuleName.CountTransferManager]: contract_wrappers_1.ModuleType.TransferManager,
                [contract_wrappers_1.ModuleName.PercentageTransferManager]: contract_wrappers_1.ModuleType.TransferManager,
                [contract_wrappers_1.ModuleName.ManualApprovalTransferManager]: contract_wrappers_1.ModuleType.TransferManager,
                [contract_wrappers_1.ModuleName.BlacklistTransferManager]: contract_wrappers_1.ModuleType.TransferManager,
                [contract_wrappers_1.ModuleName.LockUpTransferManager]: contract_wrappers_1.ModuleType.TransferManager,
                [contract_wrappers_1.ModuleName.VolumeRestrictionTM]: contract_wrappers_1.ModuleType.TransferManager,
                [contract_wrappers_1.ModuleName.ERC20DividendCheckpoint]: contract_wrappers_1.ModuleType.Dividends,
                [contract_wrappers_1.ModuleName.EtherDividendCheckpoint]: contract_wrappers_1.ModuleType.Dividends,
                [contract_wrappers_1.ModuleName.GeneralPermissionManager]: contract_wrappers_1.ModuleType.PermissionManager,
                [contract_wrappers_1.ModuleName.VestingEscrowWallet]: contract_wrappers_1.ModuleType.Wallet,
            };
            const availableModules = yield this.moduleRegistry.getModulesByTypeAndToken({
                securityToken: tokenAddress,
                moduleType: moduleTypes[moduleName],
            });
            let address = null;
            let latestVersion = '0.0.0';
            // Get latest version of the module factory
            for (const moduleAddress of availableModules) {
                const moduleFactory = yield this.moduleFactory.getModuleFactory(moduleAddress);
                const name = yield moduleFactory.name();
                if (moduleName.localeCompare(name) === 0) {
                    const version = yield moduleFactory.version();
                    if (semver_1.default.gte(version, latestVersion)) {
                        latestVersion = version;
                        address = moduleAddress;
                    }
                }
            }
            if (address !== null) {
                return address;
            }
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InexistentModule,
                message: `Module factory for "${moduleName}" was not found.`,
            });
        });
        this.getAttachedModules = ({ symbol, moduleName }, opts) => __awaiter(this, void 0, void 0, function* () {
            const { tokenFactory, moduleFactory } = this;
            const securityToken = yield tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            const moduleAddresses = yield securityToken.getModulesByName({ moduleName });
            let filteredModuleAddresses;
            if (opts && opts.unarchived) {
                // only return unarchived modules
                filteredModuleAddresses = yield bluebird_1.default.filter(moduleAddresses, (moduleAddress) => __awaiter(this, void 0, void 0, function* () {
                    const { archived } = yield securityToken.getModule({ moduleAddress });
                    return !archived;
                }));
            }
            else {
                filteredModuleAddresses = moduleAddresses;
            }
            const { getModuleInstance } = moduleFactory;
            // This has to be done this way because of typescript limitations
            let wrappedModules;
            switch (moduleName) {
                case contract_wrappers_1.ModuleName.GeneralPermissionManager: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                case contract_wrappers_1.ModuleName.CountTransferManager: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                case contract_wrappers_1.ModuleName.GeneralTransferManager: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                case contract_wrappers_1.ModuleName.ManualApprovalTransferManager: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                case contract_wrappers_1.ModuleName.PercentageTransferManager: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                case contract_wrappers_1.ModuleName.VolumeRestrictionTM: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                case contract_wrappers_1.ModuleName.CappedSTO: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                case contract_wrappers_1.ModuleName.UsdTieredSTO: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                case contract_wrappers_1.ModuleName.ERC20DividendCheckpoint: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                case contract_wrappers_1.ModuleName.EtherDividendCheckpoint: {
                    wrappedModules = yield bluebird_1.default.map(filteredModuleAddresses, moduleAddress => getModuleInstance({
                        address: moduleAddress,
                        name: moduleName,
                    }));
                    return wrappedModules;
                }
                default: {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.InexistentModule,
                        message: `There is no module with name ${moduleName}`,
                    });
                }
            }
        });
        this.getCheckpoint = ({ checkpointId, securityToken, }) => __awaiter(this, void 0, void 0, function* () {
            const checkpointTimes = yield securityToken.getCheckpointTimes();
            return this.getCheckpointData({
                checkpointId,
                time: checkpointTimes[checkpointId - 1],
                securityToken,
            });
        });
        this.getCheckpoints = ({ securityToken }) => __awaiter(this, void 0, void 0, function* () {
            const checkpointTimes = yield securityToken.getCheckpointTimes();
            const checkpoints = yield bluebird_1.default.map(checkpointTimes, (time, index) => this.getCheckpointData({
                checkpointId: index + 1,
                time,
                securityToken,
            }));
            return checkpoints.sort((a, b) => {
                return a.index - b.index;
            });
        });
        this.getCheckpointData = ({ checkpointId, time, securityToken, }) => __awaiter(this, void 0, void 0, function* () {
            const totalSupply = yield securityToken.totalSupplyAt({ checkpointId });
            const shareholderAddresses = yield securityToken.getInvestorsAt({ checkpointId });
            const shareholderBalances = yield bluebird_1.default.map(shareholderAddresses, (shareholderAddress) => __awaiter(this, void 0, void 0, function* () {
                const balance = yield securityToken.balanceOfAt({
                    checkpointId,
                    investor: shareholderAddress,
                });
                return {
                    balance,
                    address: shareholderAddress,
                };
            }));
            return {
                index: checkpointId,
                totalSupply,
                shareholderBalances,
                createdAt: time,
            };
        });
        this.getDividend = ({ dividendIndex, dividendsModule, }) => __awaiter(this, void 0, void 0, function* () {
            let symbol;
            let dividendType;
            if (dividendsModule instanceof contract_wrappers_1.ERC20DividendCheckpoint) {
                const tokenAddress = yield dividendsModule.dividendTokens({ dividendIndex });
                const token = yield this.tokenFactory.getERC20TokenInstanceFromAddress(tokenAddress);
                symbol = yield token.symbol();
                dividendType = types_1.DividendType.Erc20;
            }
            else {
                symbol = 'ETH';
                dividendType = types_1.DividendType.Eth;
            }
            const dividend = yield dividendsModule.dividends({ dividendIndex });
            const dividendProgressList = yield dividendsModule.getDividendProgress({ dividendIndex });
            const shareholders = dividendProgressList.map(({ investor, claimed, excluded, withheld, amount, balance }) => ({
                address: investor,
                paymentReceived: claimed,
                excluded,
                withheldTax: withheld,
                amountReceived: amount,
                balance,
            }));
            const { checkpointId, created, maturity, expiry, amount, claimedAmount, totalSupply, reclaimed, totalWithheld, totalWithheldWithdrawn, name, } = dividend;
            return {
                index: dividendIndex,
                checkpointId,
                dividendType,
                created,
                maturity,
                expiry,
                amount,
                claimedAmount,
                totalSupply,
                reclaimed,
                totalWithheld,
                totalWithheldWithdrawn,
                name,
                currency: symbol,
                shareholders,
            };
        });
        this.getDividendsByCheckpoint = ({ checkpointId, dividendsModule, }) => __awaiter(this, void 0, void 0, function* () {
            const dividendIndexes = yield dividendsModule.getDividendIndex({ checkpointId });
            const dividends = yield bluebird_1.default.map(dividendIndexes, dividendIndex => this.getDividend({ dividendIndex, dividendsModule }));
            return dividends.sort((a, b) => a.index - b.index);
        });
        this.getDividends = ({ dividendsModule, }) => __awaiter(this, void 0, void 0, function* () {
            const stAddress = yield dividendsModule.securityToken();
            const securityToken = yield this.tokenFactory.getSecurityTokenInstanceFromAddress(stAddress);
            const currentCheckpointIndex = yield securityToken.currentCheckpointId();
            const checkpointIndexes = lodash_1.range(1, currentCheckpointIndex.toNumber() + 1);
            const dividends = yield bluebird_1.default.map(checkpointIndexes, checkpointId => this.getDividendsByCheckpoint({ checkpointId, dividendsModule }));
            return lodash_1.flatten(dividends).sort((a, b) => a.index - b.index);
        });
        /**
         * Auxiliary function to fetch all dividend distributions
         */
        this.getAllDividends = ({ securityTokenSymbol, checkpointId, dividendTypes = [types_1.DividendType.Erc20, types_1.DividendType.Eth], }) => __awaiter(this, void 0, void 0, function* () {
            const dividends = [];
            if (lodash_1.includes(dividendTypes, types_1.DividendType.Erc20)) {
                const erc20Module = (yield this.getAttachedModules({
                    moduleName: contract_wrappers_1.ModuleName.ERC20DividendCheckpoint,
                    symbol: securityTokenSymbol,
                }, { unarchived: true }))[0];
                if (erc20Module) {
                    const erc20Dividends = yield (checkpointId !== undefined
                        ? this.getDividendsByCheckpoint({
                            checkpointId,
                            dividendsModule: erc20Module,
                        })
                        : this.getDividends({ dividendsModule: erc20Module }));
                    dividends.push(...erc20Dividends);
                }
            }
            if (lodash_1.includes(dividendTypes, types_1.DividendType.Eth)) {
                const etherModule = (yield this.getAttachedModules({
                    moduleName: contract_wrappers_1.ModuleName.EtherDividendCheckpoint,
                    symbol: securityTokenSymbol,
                }, { unarchived: true }))[0];
                if (etherModule) {
                    const etherDividends = yield (checkpointId !== undefined
                        ? this.getDividendsByCheckpoint({
                            checkpointId,
                            dividendsModule: etherModule,
                        })
                        : this.getDividends({ dividendsModule: etherModule }));
                    dividends.push(...etherDividends);
                }
            }
            return dividends;
        });
    }
}
exports.PolymathBase = PolymathBase;
//# sourceMappingURL=PolymathBase.js.map