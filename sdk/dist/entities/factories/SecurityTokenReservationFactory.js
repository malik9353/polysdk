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
const PolymathError_1 = require("../../PolymathError");
const types_1 = require("../../types");
const SecurityTokenReservation_1 = require("../SecurityTokenReservation");
class SecurityTokenReservationFactory extends Factory_1.Factory {
    constructor(context) {
        super(SecurityTokenReservation_1.SecurityTokenReservation, context);
        this.generateProperties = (uid) => __awaiter(this, void 0, void 0, function* () {
            const { symbol } = SecurityTokenReservation_1.SecurityTokenReservation.unserialize(uid);
            const { contractWrappers: { securityTokenRegistry, tokenFactory }, } = this.context;
            const { status, expiryDate, owner, registrationDate, } = yield securityTokenRegistry.getTickerDetails({ ticker: symbol });
            if (registrationDate.getTime() === 0 || expiryDate < new Date()) {
                // reservation never created or expired
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `There is no reservation for token symbol ${symbol} or it has expired`,
                });
            }
            let securityTokenAddress;
            if (status) {
                // token has been launched
                const securityToken = yield tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
                securityTokenAddress = yield securityToken.address();
            }
            return {
                expiry: expiryDate,
                reservedAt: registrationDate,
                ownerAddress: owner,
                securityTokenAddress,
            };
        });
    }
}
exports.SecurityTokenReservationFactory = SecurityTokenReservationFactory;
//# sourceMappingURL=SecurityTokenReservationFactory.js.map