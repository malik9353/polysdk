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
const SubModule_1 = require("./SubModule");
const procedures_1 = require("../../procedures");
class Transfers extends SubModule_1.SubModule {
    constructor() {
        super(...arguments);
        /**
         * Set the address of the Security Token's Controller. The controller may perform forced transfers
         */
        this.modifyController = (args) => __awaiter(this, void 0, void 0, function* () {
            const { controller } = args;
            const { symbol } = this.securityToken;
            const procedure = new procedures_1.SetController({ symbol, controller }, this.context);
            return procedure.prepare();
        });
        /**
         * Perform a forced transfer of tokens from one address to another. You must be the
         * Security Token's controller to do this
         *
         * @param amount amount of tokens to be transferred
         * @param from address from which to transfer tokens
         * @param to address that will receive the tokens
         * @param reason optional message to describe why the transfer occurred
         * @param data optional data used to validate the transfer
         */
        this.controllerTransfer = (args) => __awaiter(this, void 0, void 0, function* () {
            const { amount, from, to, reason = '', data = '' } = args;
            const { symbol } = this.securityToken;
            const procedure = new procedures_1.ControllerTransfer({ symbol, amount, from, to, log: reason, data }, this.context);
            return procedure.prepare();
        });
    }
}
exports.Transfers = Transfers;
//# sourceMappingURL=Transfers.js.map