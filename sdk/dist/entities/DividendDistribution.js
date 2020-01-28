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
const procedures_1 = require("../procedures");
const PolymathError_1 = require("../PolymathError");
function isUniqueIdentifiers(identifiers) {
    const { securityTokenId, checkpointId, dividendType, index } = identifiers;
    return (typeof securityTokenId === 'string' &&
        typeof checkpointId === 'string' &&
        typeof index === 'number' &&
        types_1.isDividendType(dividendType));
}
class DividendDistribution extends Entity_1.Entity {
    constructor(params, context) {
        super();
        /**
         * Push payment for this dividend distribution
         */
        this.pushPayment = () => __awaiter(this, void 0, void 0, function* () {
            const { securityTokenSymbol: symbol, dividendType, index: dividendIndex } = this;
            const procedure = new procedures_1.PushDividendPayment({
                symbol,
                dividendType,
                dividendIndex,
            }, this.context);
            return procedure.prepare();
        });
        /**
         * Withdraw collected taxes from this dividend distribution
         */
        this.withdrawTaxes = () => __awaiter(this, void 0, void 0, function* () {
            const { securityTokenSymbol: symbol, dividendType, index: dividendIndex } = this;
            const procedure = new procedures_1.WithdrawTaxes({
                symbol,
                dividendType,
                dividendIndex,
            }, this.context);
            return procedure.prepare();
        });
        const { index, checkpointId, dividendType, securityTokenSymbol, securityTokenId, created, maturity, expiry, amount, claimedAmount, totalSupply, reclaimed, totalWithheld, totalWithheldWithdrawn, shareholders, name, currency, } = params;
        this.index = index;
        this.checkpointId = checkpointId;
        this.dividendType = dividendType;
        this.securityTokenSymbol = securityTokenSymbol;
        this.securityTokenId = securityTokenId;
        this.created = created;
        this.maturity = maturity;
        this.expiry = expiry;
        this.amount = amount;
        this.claimedAmount = claimedAmount;
        this.totalSupply = totalSupply;
        this.reclaimed = reclaimed;
        this.totalWithheld = totalWithheld;
        this.totalWithheldWithdrawn = totalWithheldWithdrawn;
        this.name = name;
        this.shareholders = shareholders;
        this.currency = currency;
        this.context = context;
        this.uid = DividendDistribution.generateId({
            securityTokenId,
            dividendType,
            index,
        });
    }
    static generateId({ securityTokenId, dividendType, index }) {
        return utils_1.serialize('dividend', {
            securityTokenId,
            dividendType,
            index,
        });
    }
    static unserialize(serialized) {
        const unserialized = utils_1.unserialize(serialized);
        if (!isUniqueIdentifiers(unserialized)) {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InvalidUuid,
                message: 'Wrong Dividend Distribution ID format.',
            });
        }
        return unserialized;
    }
    toPojo() {
        const { uid, index, checkpointId, dividendType, securityTokenSymbol, securityTokenId, created, maturity, expiry, amount, claimedAmount, totalSupply, reclaimed, totalWithheld, totalWithheldWithdrawn, shareholders, name, currency, } = this;
        return {
            uid,
            index,
            checkpointId,
            dividendType,
            securityTokenSymbol,
            securityTokenId,
            created,
            maturity,
            expiry,
            amount,
            claimedAmount,
            totalSupply,
            reclaimed,
            totalWithheld,
            totalWithheldWithdrawn,
            shareholders,
            name,
            currency,
        };
    }
    _refresh(params) {
        const { securityTokenSymbol, checkpointId, created, maturity, expiry, amount, claimedAmount, totalSupply, reclaimed, totalWithheld, totalWithheldWithdrawn, shareholders, name, currency, } = params;
        if (securityTokenSymbol) {
            this.securityTokenSymbol = securityTokenSymbol;
        }
        if (checkpointId) {
            this.checkpointId = checkpointId;
        }
        if (created) {
            this.created = created;
        }
        if (maturity) {
            this.maturity = maturity;
        }
        if (expiry) {
            this.expiry = expiry;
        }
        if (amount) {
            this.amount = amount;
        }
        if (claimedAmount) {
            this.claimedAmount = claimedAmount;
        }
        if (totalSupply) {
            this.totalSupply = totalSupply;
        }
        if (reclaimed !== undefined) {
            this.reclaimed = reclaimed;
        }
        if (totalWithheld) {
            this.totalWithheld = totalWithheld;
        }
        if (totalWithheldWithdrawn) {
            this.totalWithheldWithdrawn = totalWithheldWithdrawn;
        }
        if (shareholders) {
            this.shareholders = shareholders;
        }
        if (name) {
            this.name = name;
        }
        if (currency) {
            this.currency = currency;
        }
    }
}
exports.DividendDistribution = DividendDistribution;
//# sourceMappingURL=DividendDistribution.js.map