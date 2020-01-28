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
const lodash_1 = require("lodash");
const SubModule_1 = require("./SubModule");
const types_1 = require("../../types");
const procedures_1 = require("../../procedures");
const __1 = require("..");
const PolymathError_1 = require("../../PolymathError");
class Offerings extends SubModule_1.SubModule {
    constructor() {
        super(...arguments);
        /**
         * Launch a Capped STO
         *
         * @param startDate date when the STO should start
         * @param endDate date when the STO should end
         * @param tokensOnSale amount of tokens to be sold
         * @param rate amount of tokens an investor can purchase per unit of currency spent
         * @param currency currency in which the funds will be raised (ETH or POLY)
         * @param storageWallet wallet address that will receive the funds that are being raised
         *
         */
        this.launchCappedSto = (args) => __awaiter(this, void 0, void 0, function* () {
            const { context, securityToken } = this;
            const { symbol } = securityToken;
            const procedure = new procedures_1.LaunchCappedSto(Object.assign({ symbol }, args), context);
            return procedure.prepare();
        });
        /**
         * Launch a USD Tiered STO
         *
         * @param startDate date when the STO should start
         * @param endDate date when the STO should end
         * @param tiers tier information
         * @param tiers[].tokensOnSale amount of tokens to be sold on that tier
         * @param tiers[].price price of each token on that tier in USD
         * @param tiers[].tokensWithDiscount amount of tokens to be sold on that tier at a discount if paid in POLY (must be less than tokensOnSale, defaults to 0)
         * @param tiers[].discountedPrice price of discounted tokens on that tier (defaults to 0)
         * @param nonAccreditedInvestmentLimit maximum investment for non-accredited investors
         * @param minimumInvestment minimum investment amount
         * @param currencies array of currencies in which the funds will be raised (ETH, POLY, StableCoin)
         * @param storageWallet wallet address that will receive the funds that are being raised
         * @param treasuryWallet wallet address that will receive unsold tokens when the end date is reached
         * @param usdTokenAddresses array of USD stable coins that the offering supports
         *
         */
        this.launchUsdTieredSto = (args) => __awaiter(this, void 0, void 0, function* () {
            const { context, securityToken } = this;
            const { symbol } = securityToken;
            const procedure = new procedures_1.LaunchUsdTieredSto(Object.assign({ symbol }, args), context);
            return procedure.prepare();
        });
        /**
         * Retrieve an STO by type and address or UUID
         *
         * @param stoType type of the STO (Capped or USDTiered)
         * @param address address of the STO contract
         */
        this.getSto = (args) => __awaiter(this, void 0, void 0, function* () {
            let stoType;
            let address;
            // fetch by UUID
            if (typeof args === 'string') {
                ({ stoType, address } = __1.Sto.unserialize(args));
            }
            else {
                ({ stoType, address } = args);
            }
            const { context: { factories }, securityToken: { uid }, } = this;
            if (stoType === types_1.StoType.Capped) {
                return factories.cappedStoFactory.fetch(__1.CappedSto.generateId({ securityTokenId: uid, stoType, address }));
            }
            else if (stoType === types_1.StoType.UsdTiered) {
                return factories.usdTieredStoFactory.fetch(__1.UsdTieredSto.generateId({ securityTokenId: uid, stoType, address }));
            }
            else {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FetcherValidationError,
                    message: `Invalid STO type "${stoType}"`,
                });
            }
        });
        /**
         * Retrieve all STOs attached to a security token
         *
         * @param stoTypes array of types of STOs to fetch (optional, defaults to both)
         */
        this.getStos = (opts = {
            stoTypes: [types_1.StoType.Capped, types_1.StoType.UsdTiered],
        }) => __awaiter(this, void 0, void 0, function* () {
            const { contractWrappers, factories } = this.context;
            const { symbol: securityTokenSymbol, uid } = this.securityToken;
            const { stoTypes } = opts;
            let stos = [];
            if (lodash_1.includes(stoTypes, types_1.StoType.Capped)) {
                const fetchedModules = yield contractWrappers.getAttachedModules({ symbol: securityTokenSymbol, moduleName: contract_wrappers_1.ModuleName.CappedSTO }, { unarchived: true });
                const addresses = yield Promise.all(fetchedModules.map(module => module.address()));
                stos = stos.concat(addresses.map(address => factories.cappedStoFactory.fetch(__1.CappedSto.generateId({ address, stoType: types_1.StoType.Capped, securityTokenId: uid }))));
            }
            if (lodash_1.includes(stoTypes, types_1.StoType.UsdTiered)) {
                const fetchedModules = yield contractWrappers.getAttachedModules({ symbol: securityTokenSymbol, moduleName: contract_wrappers_1.ModuleName.UsdTieredSTO }, { unarchived: true });
                const addresses = yield Promise.all(fetchedModules.map(module => module.address()));
                stos = stos.concat(addresses.map(address => factories.usdTieredStoFactory.fetch(__1.UsdTieredSto.generateId({ address, stoType: types_1.StoType.Capped, securityTokenId: uid }))));
            }
            return Promise.all(stos);
        });
    }
}
exports.Offerings = Offerings;
//# sourceMappingURL=Offerings.js.map