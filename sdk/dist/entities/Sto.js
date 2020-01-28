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
const Entity_1 = require("./Entity");
const utils_1 = require("../utils");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
const procedures_1 = require("../procedures");
function isUniqueIdentifiers(identifiers) {
    const { securityTokenId, stoType, address } = identifiers;
    return typeof securityTokenId === 'string' && typeof address === 'string' && types_1.isStoType(stoType);
}
class Sto extends Entity_1.Entity {
    constructor(params, context) {
        super();
        this.pause = () => __awaiter(this, void 0, void 0, function* () {
            const { address: stoAddress, stoType, securityTokenSymbol: symbol } = this;
            const procedure = new procedures_1.PauseSto({ stoAddress, stoType, symbol }, this.context);
            return procedure.prepare();
        });
        const { address, securityTokenSymbol, securityTokenId, stoType, fundraiseTypes, startTime, endTime, raisedAmount, soldTokensAmount, investorAmount, investments, paused, capReached, } = params;
        this.address = address;
        this.securityTokenSymbol = securityTokenSymbol;
        this.securityTokenId = securityTokenId;
        this.stoType = stoType;
        this.startTime = startTime;
        this.endTime = endTime;
        this.raisedAmount = raisedAmount;
        this.soldTokensAmount = soldTokensAmount;
        this.investorAmount = investorAmount;
        this.investments = investments;
        this.fundraiseTypes = fundraiseTypes;
        this.paused = paused;
        this.capReached = capReached;
        this.context = context;
    }
    static unserialize(serialized) {
        const unserialized = utils_1.unserialize(serialized);
        if (!isUniqueIdentifiers(unserialized)) {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InvalidUuid,
                message: 'Wrong STO ID format.',
            });
        }
        return unserialized;
    }
    toPojo() {
        const { uid, securityTokenId, securityTokenSymbol, fundraiseTypes, raisedAmount, soldTokensAmount, investorAmount, investments, startTime, endTime, } = this;
        return {
            uid,
            securityTokenId,
            securityTokenSymbol,
            fundraiseTypes,
            raisedAmount,
            soldTokensAmount,
            investorAmount,
            startTime,
            endTime,
            investments: investments.map(investment => investment.toPojo()),
        };
    }
    _refresh(params) {
        const { securityTokenSymbol, startTime, endTime, fundraiseTypes, raisedAmount, soldTokensAmount, investorAmount, investments, paused, capReached, } = params;
        if (securityTokenSymbol) {
            this.securityTokenSymbol = securityTokenSymbol;
        }
        if (startTime) {
            this.startTime = startTime;
        }
        if (endTime) {
            this.endTime = endTime;
        }
        if (fundraiseTypes) {
            this.fundraiseTypes = fundraiseTypes;
        }
        if (raisedAmount) {
            this.raisedAmount = raisedAmount;
        }
        if (soldTokensAmount) {
            this.soldTokensAmount = soldTokensAmount;
        }
        if (investorAmount) {
            this.investorAmount = investorAmount;
        }
        if (investments) {
            this.investments = investments;
        }
        if (paused !== undefined) {
            this.paused = paused;
        }
        if (capReached !== undefined) {
            this.capReached = capReached;
        }
    }
}
exports.Sto = Sto;
//# sourceMappingURL=Sto.js.map