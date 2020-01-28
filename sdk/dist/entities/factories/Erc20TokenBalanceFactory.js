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
const Factory_1 = require("./Factory");
const Erc20TokenBalance_1 = require("../Erc20TokenBalance");
class Erc20TokenBalanceFactory extends Factory_1.Factory {
    constructor(context) {
        super(Erc20TokenBalance_1.Erc20TokenBalance, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { tokenAddress, walletAddress } = Erc20TokenBalance_1.Erc20TokenBalance.unserialize(uid);
            const token = yield this.context.contractWrappers.tokenFactory.getERC20TokenInstanceFromAddress(tokenAddress);
            const [symbol, balance] = yield Promise.all([
                token.symbol(),
                token.balanceOf({ owner: walletAddress }),
            ]);
            return { tokenSymbol: symbol, balance };
        });
    }
}
exports.Erc20TokenBalanceFactory = Erc20TokenBalanceFactory;
//# sourceMappingURL=Erc20TokenBalanceFactory.js.map