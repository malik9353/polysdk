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
const procedures_1 = require("../procedures");
const PolymathError_1 = require("../PolymathError");
const types_1 = require("../types");
function isUniqueIdentifiers(identifiers) {
    const { symbol } = identifiers;
    return typeof symbol === 'string';
}
class SecurityTokenReservation extends Entity_1.Entity {
    constructor(params, context) {
        super();
        /**
         * Creates a security token with the reserved symbol
         *
         * @param name name of the security token
         * @param detailsUrl URL containing information about the security
         * @param divisible whether the token should be divisible or not
         * @param treasuryWallet address of a wallet to be used to store tokens for some operations (defaults to)
         */
        this.createSecurityToken = (args) => __awaiter(this, void 0, void 0, function* () {
            const procedure = new procedures_1.CreateSecurityToken(Object.assign({ symbol: this.symbol }, args), this.context);
            return procedure.prepare();
        });
        /**
         * Returns true if the Security Token associated to this reservation has already been launched
         */
        this.isLaunched = () => __awaiter(this, void 0, void 0, function* () {
            const { context, symbol } = this;
            return context.contractWrappers.securityTokenRegistry.isTokenLaunched({ ticker: symbol });
        });
        const { symbol, expiry, reservedAt, securityTokenAddress, ownerAddress } = params;
        this.symbol = symbol;
        this.context = context;
        this.expiry = expiry;
        this.reservedAt = reservedAt;
        this.ownerAddress = ownerAddress;
        this.securityTokenAddress = securityTokenAddress;
        this.uid = SecurityTokenReservation.generateId({ symbol });
    }
    static generateId({ symbol }) {
        return utils_1.serialize('securityTokenReservation', {
            symbol,
        });
    }
    static unserialize(serialized) {
        const unserialized = utils_1.unserialize(serialized);
        if (!isUniqueIdentifiers(unserialized)) {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.InvalidUuid,
                message: 'Wrong Security Token Reservation ID format.',
            });
        }
        return unserialized;
    }
    toPojo() {
        const { uid, symbol, expiry, securityTokenAddress, reservedAt, ownerAddress } = this;
        return { uid, symbol, expiry, securityTokenAddress, reservedAt, ownerAddress };
    }
    _refresh(params) {
        const { expiry, securityTokenAddress, reservedAt, ownerAddress } = params;
        if (expiry) {
            this.expiry = expiry;
        }
        if (securityTokenAddress) {
            this.securityTokenAddress = securityTokenAddress;
        }
        if (reservedAt) {
            this.reservedAt = reservedAt;
        }
        if (ownerAddress) {
            this.ownerAddress = ownerAddress;
        }
    }
}
exports.SecurityTokenReservation = SecurityTokenReservation;
//# sourceMappingURL=SecurityTokenReservation.js.map