import { Wallet } from './Wallet';
import { PolymathBase } from './PolymathBase';
import { SecurityTokenFactory, SecurityTokenReservationFactory, Erc20TokenBalanceFactory, InvestmentFactory, CappedStoFactory, UsdTieredStoFactory, DividendDistributionFactory, CheckpointFactory, Erc20DividendsManagerFactory, EthDividendsManagerFactory, ShareholderFactory, TaxWithholdingFactory } from './entities/factories';
interface ConstructorParams {
    contractWrappers: PolymathBase;
}
interface Factories {
    securityTokenFactory: SecurityTokenFactory;
    securityTokenReservationFactory: SecurityTokenReservationFactory;
    erc20TokenBalanceFactory: Erc20TokenBalanceFactory;
    investmentFactory: InvestmentFactory;
    cappedStoFactory: CappedStoFactory;
    usdTieredStoFactory: UsdTieredStoFactory;
    dividendDistributionFactory: DividendDistributionFactory;
    checkpointFactory: CheckpointFactory;
    erc20DividendsManagerFactory: Erc20DividendsManagerFactory;
    ethDividendsManagerFactory: EthDividendsManagerFactory;
    shareholderFactory: ShareholderFactory;
    taxWithholdingFactory: TaxWithholdingFactory;
}
/**
 * Context in which the SDK is being used
 *
 * - Holds the current instance of the contract wrappers
 * - Holds the current wallet
 * - Holds the factories that create and cache entities
 */
export declare class Context {
    contractWrappers: PolymathBase;
    currentWallet: Wallet;
    factories: Factories;
    constructor(params: ConstructorParams);
}
export {};
//# sourceMappingURL=Context.d.ts.map