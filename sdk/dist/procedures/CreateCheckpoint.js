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
const utils_1 = require("../utils");
const entities_1 = require("../entities");
class CreateCheckpoint extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.CreateCheckpoint;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { args, context } = this;
            const { symbol } = args;
            const { contractWrappers, factories } = context;
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
            const checkpoint = yield this.addTransaction(securityToken.createCheckpoint, {
                tag: types_1.PolyTransactionTag.CreateCheckpoint,
                resolver: (receipt) => __awaiter(this, void 0, void 0, function* () {
                    const { logs } = receipt;
                    const [event] = utils_1.findEvents({ logs, eventName: contract_wrappers_1.SecurityTokenEvents.CheckpointCreated });
                    if (event) {
                        const { args: eventArgs } = event;
                        const { _checkpointId } = eventArgs;
                        return factories.checkpointFactory.fetch(entities_1.Checkpoint.generateId({
                            securityTokenId: entities_1.SecurityToken.generateId({ symbol }),
                            index: _checkpointId.toNumber(),
                        }));
                    }
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.UnexpectedEventLogs,
                        message: "The Checkpoint was successfully created but the corresponding event wasn't fired. Please report this issue to the Polymath team.",
                    });
                }),
            })({});
            return checkpoint;
        });
    }
}
exports.CreateCheckpoint = CreateCheckpoint;
//# sourceMappingURL=CreateCheckpoint.js.map