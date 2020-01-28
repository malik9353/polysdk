"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Wallet_1 = require("./Wallet");
const factories_1 = require("./entities/factories");
/**
 * Context in which the SDK is being used
 *
 * - Holds the current instance of the contract wrappers
 * - Holds the current wallet
 * - Holds the factories that create and cache entities
 */
class Context {
    constructor(params) {
        const { contractWrappers } = params;
        this.contractWrappers = contractWrappers;
        this.currentWallet = new Wallet_1.Wallet({ address: () => contractWrappers.getAccount() });
        this.factories = {
            securityTokenFactory: new factories_1.SecurityTokenFactory(this),
            securityTokenReservationFactory: new factories_1.SecurityTokenReservationFactory(this),
            erc20TokenBalanceFactory: new factories_1.Erc20TokenBalanceFactory(this),
            investmentFactory: new factories_1.InvestmentFactory(this),
            cappedStoFactory: new factories_1.CappedStoFactory(this),
            usdTieredStoFactory: new factories_1.UsdTieredStoFactory(this),
            dividendDistributionFactory: new factories_1.DividendDistributionFactory(this),
            checkpointFactory: new factories_1.CheckpointFactory(this),
            erc20DividendsManagerFactory: new factories_1.Erc20DividendsManagerFactory(this),
            ethDividendsManagerFactory: new factories_1.EthDividendsManagerFactory(this),
            shareholderFactory: new factories_1.ShareholderFactory(this),
            taxWithholdingFactory: new factories_1.TaxWithholdingFactory(this),
        };
    }
}
exports.Context = Context;
//# sourceMappingURL=Context.js.map