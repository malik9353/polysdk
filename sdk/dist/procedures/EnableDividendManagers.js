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
const bluebird_1 = __importDefault(require("bluebird"));
const Procedure_1 = require("./Procedure");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
class EnableDividendManagers extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.EnableDividendManagers;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { symbol, storageWalletAddress, types = [types_1.DividendType.Erc20, types_1.DividendType.Eth], } = this.args;
            const { contractWrappers } = this.context;
            let securityToken;
            try {
                securityToken = yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            const tokenAddress = yield securityToken.address();
            const moduleNames = {
                [types_1.DividendType.Erc20]: contract_wrappers_1.ModuleName.ERC20DividendCheckpoint,
                [types_1.DividendType.Eth]: contract_wrappers_1.ModuleName.EtherDividendCheckpoint,
            };
            yield bluebird_1.default.each(types, (type) => __awaiter(this, void 0, void 0, function* () {
                const moduleName = moduleNames[type];
                const moduleAddress = yield contractWrappers.getModuleFactoryAddress({
                    tokenAddress,
                    moduleName,
                });
                yield this.addTransaction(securityToken.addModuleWithLabel, {
                    tag: types_1.PolyTransactionTag.EnableDividends,
                })({
                    moduleName,
                    address: moduleAddress,
                    data: { wallet: storageWalletAddress },
                    archived: false,
                });
            }));
        });
    }
}
exports.EnableDividendManagers = EnableDividendManagers;
//# sourceMappingURL=EnableDividendManagers.js.map