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
const Procedure_1 = require("./Procedure");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
const entities_1 = require("../entities");
/**
 * Procedure to transfer funds of an ERC20 token. If no token address is specified, it defaults to POLY
 */
class TransferErc20 extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.TransferErc20;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { amount, receiver, tokenAddress } = this.args;
            const { contractWrappers, currentWallet, factories } = this.context;
            const ownerAddress = yield currentWallet.address();
            const { polyToken, securityTokenRegistry } = contractWrappers;
            let token;
            if (tokenAddress) {
                const isSecurityToken = yield securityTokenRegistry.isSecurityToken({
                    securityTokenAddress: tokenAddress,
                });
                if (isSecurityToken) {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.ProcedureValidationError,
                        message: "This address belongs to a Security Token. To transfer Security Tokens, use the functions in the Security Token's transfers namespace",
                    });
                }
                try {
                    token = yield contractWrappers.getERC20TokenWrapper({ address: tokenAddress });
                }
                catch (err) {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.ProcedureValidationError,
                        message: 'The supplied address does not correspond to an ERC20 token',
                    });
                }
            }
            else {
                token = polyToken;
            }
            const balance = yield token.balanceOf({ owner: ownerAddress });
            const address = yield token.address();
            const polyTokenAddress = yield polyToken.address();
            const isTestnet = yield contractWrappers.isTestnet();
            if (balance.lt(amount)) {
                if (isTestnet && address.toUpperCase() === polyTokenAddress.toUpperCase()) {
                    yield this.addTransaction(contractWrappers.getPolyTokens, {
                        tag: types_1.PolyTransactionTag.GetTokens,
                    })({
                        amount: amount.minus(balance).decimalPlaces(0, contract_wrappers_1.BigNumber.ROUND_HALF_UP),
                        address: ownerAddress,
                    });
                }
                else {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.ProcedureValidationError,
                        message: 'Not enough funds',
                    });
                }
            }
            yield this.addTransaction(token.transfer, {
                tag: types_1.PolyTransactionTag.TransferErc20,
                resolver: (_receipt) => __awaiter(this, void 0, void 0, function* () {
                    return factories.erc20TokenBalanceFactory.refresh(entities_1.Erc20TokenBalance.generateId({ tokenAddress: address, walletAddress: receiver }));
                }),
            })({ to: receiver, value: amount });
        });
    }
}
exports.TransferErc20 = TransferErc20;
//# sourceMappingURL=TransferErc20.js.map