"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contract_wrappers_1 = require("@polymathnetwork/contract-wrappers");
const subproviders_1 = require("@0x/subproviders");
const bluebird_1 = __importDefault(require("bluebird"));
const phin_1 = __importDefault(require("phin"));
const lodash_1 = require("lodash");
const Context_1 = require("./Context");
const browserUtils_1 = require("./browserUtils");
const types_1 = require("./types");
const entities_1 = require("./entities");
const procedures_1 = require("./procedures");
const PolymathError_1 = require("./PolymathError");
const PolymathBase_1 = require("./PolymathBase");
class Polymath {
    constructor() {
        this.isUnsupported = false;
        this.isConnected = false;
        this.polymathRegistryAddress = '';
        this.context = {};
        this.connect = ({ polymathRegistryAddress, providerUrl, privateKey, speed = types_1.TransactionSpeed.Fast, }) => __awaiter(this, void 0, void 0, function* () {
            let provider;
            const providerEngine = new subproviders_1.Web3ProviderEngine();
            const injectedProvider = yield browserUtils_1.getInjectedProvider();
            if (providerUrl && privateKey) {
                providerEngine.addProvider(new subproviders_1.PrivateKeyWalletSubprovider(privateKey));
                providerEngine.addProvider(new subproviders_1.RedundantSubprovider([new subproviders_1.RPCSubprovider(providerUrl)]));
                providerEngine.start();
                provider = providerEngine;
            }
            else if (injectedProvider) {
                provider = injectedProvider;
            }
            else {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.FatalError,
                    message: "You must supply a provider URL and private key to the connect method if you're not using Polymath SDK in a browser environment",
                });
            }
            const slowDefaultGasPrice = new contract_wrappers_1.BigNumber(10).exponentiatedBy(9);
            let contractWrappers = new PolymathBase_1.PolymathBase({
                provider,
                polymathRegistryAddress,
            });
            const isTestnet = yield contractWrappers.isTestnet();
            const defaultGasPrice = yield this.getGasPrice({
                provider,
                isTestnet,
                defaultPrice: slowDefaultGasPrice,
                speed,
            });
            contractWrappers = new PolymathBase_1.PolymathBase({
                provider,
                polymathRegistryAddress,
                defaultGasPrice,
            });
            this.context = new Context_1.Context({
                contractWrappers,
            });
            this.isConnected = true;
            return this;
        });
        /**
         * Reserve a Security Token
         *
         * @param symbol Security Token symbol
         * @param owner address that will own the reservation (optional, use this if you want to reserve a token on behalf of someone else)
         */
        this.reserveSecurityToken = (args) => __awaiter(this, void 0, void 0, function* () {
            const procedure = new procedures_1.ReserveSecurityToken(args, this.context);
            const transactionQueue = yield procedure.prepare();
            return transactionQueue;
        });
        /**
         * Retrieve all Security Token Reservations currently owned by an issuer. This includes
         * Security Tokens that have already been launched
         *
         * @param owner issuer's address (defaults to current address)
         */
        this.getSecurityTokenReservations = (args) => __awaiter(this, void 0, void 0, function* () {
            const { context: { currentWallet, contractWrappers }, } = this;
            let owner;
            if (args) {
                ({ owner } = args);
            }
            else {
                owner = yield currentWallet.address();
            }
            const symbols = yield contractWrappers.securityTokenRegistry.getTickersByOwner({ owner });
            const reservations = yield bluebird_1.default.map(symbols, symbol => {
                return bluebird_1.default.resolve(this.getSecurityTokenReservation({ symbol })).catch(PolymathError_1.PolymathError, err => {
                    if (err.code === types_1.ErrorCode.FetcherValidationError) {
                        return undefined;
                    }
                    throw err;
                });
            });
            return lodash_1.compact(reservations);
        });
        /**
         * Retrieve a Security Token Reservation by symbol or UUID
         *
         * @param symbol Security Token symbol
         */
        this.getSecurityTokenReservation = (args) => __awaiter(this, void 0, void 0, function* () {
            let uid;
            // fetch by UUID
            if (typeof args === 'string') {
                uid = args;
            }
            else {
                uid = entities_1.SecurityToken.generateId(args);
            }
            return this.context.factories.securityTokenReservationFactory.fetch(uid);
        });
        /**
         * Retrieve all launched Security Tokens related to a wallet.
         * This includes tokens owned by the wallet and tokens for which the wallet holds some role
         *
         * @param walletAddress defaults to current address
         */
        this.getSecurityTokens = (args) => __awaiter(this, void 0, void 0, function* () {
            const { context: { currentWallet, contractWrappers }, } = this;
            let walletAddress;
            if (args) {
                ({ walletAddress } = args);
            }
            else {
                walletAddress = yield currentWallet.address();
            }
            const [ownedAddresses, delegatedAddresses] = yield Promise.all([
                contractWrappers.securityTokenRegistry.getTokensByOwner({ owner: walletAddress }),
                contractWrappers.securityTokenRegistry.getTokensByDelegate(walletAddress),
            ]);
            return bluebird_1.default.map(lodash_1.union(ownedAddresses, delegatedAddresses), address => {
                return this.getSecurityToken({ address });
            });
        });
        /**
         * Retrieve a security token by symbol, address or UUID
         */
        this.getSecurityToken = (args) => __awaiter(this, void 0, void 0, function* () {
            let uid;
            const isAddressArgs = (a) => {
                return typeof a.address === 'string';
            };
            // fetch by UUID
            if (typeof args === 'string') {
                uid = args;
            }
            else if (isAddressArgs(args)) {
                const { address } = args;
                try {
                    const securityToken = yield this.context.contractWrappers.tokenFactory.getSecurityTokenInstanceFromAddress(address);
                    const symbol = yield securityToken.symbol();
                    uid = entities_1.SecurityToken.generateId({ symbol });
                }
                catch (err) {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.FetcherValidationError,
                        message: `There is no Security Token with address ${address}`,
                    });
                }
            }
            else {
                uid = entities_1.SecurityToken.generateId(args);
            }
            return this.context.factories.securityTokenFactory.fetch(uid);
        });
        /**
         * Check if a token symbol (ticker) is available for reservation
         *
         * @param symbol security token symbol for which to check availability
         */
        this.isSymbolAvailable = (args) => __awaiter(this, void 0, void 0, function* () {
            const { symbol } = args;
            return this.context.contractWrappers.securityTokenRegistry.tickerAvailable({ ticker: symbol });
        });
        /**
         * Check if a token follows the ERC20 standard
         *
         * @param address address of the token contract
         */
        this.isValidErc20 = (args) => __awaiter(this, void 0, void 0, function* () {
            const { address } = args;
            const erc20Token = yield this.context.contractWrappers.tokenFactory.getERC20TokenInstanceFromAddress(address);
            yield erc20Token.isValidContract();
        });
        /**
         * Get the balance of ETH in a wallet
         *
         * @param walletAddress wallet to check for balance
         */
        this.getEthBalance = (args) => __awaiter(this, void 0, void 0, function* () {
            const { walletAddress } = args;
            return this.context.contractWrappers.getBalance({ address: walletAddress });
        });
        /**
         * Get the balance of a specific ERC20 token in a wallet
         *
         * @param tokenAddress address of the ERC20 token
         * @param walletAddress wallet to check for balance
         */
        this.getErc20TokenBalance = (args) => __awaiter(this, void 0, void 0, function* () {
            let uid;
            // fetch by UUID
            if (typeof args === 'string') {
                uid = args;
            }
            else {
                uid = entities_1.Erc20TokenBalance.generateId(args);
            }
            return this.context.factories.erc20TokenBalanceFactory.fetch(uid);
        });
        /**
         * Get the current version of the Polymath Protocol
         *
         * @returns version string (i.e. 3.0.0)
         */
        this.getLatestProtocolVersion = () => __awaiter(this, void 0, void 0, function* () {
            const version = yield this.context.contractWrappers.securityTokenRegistry.getLatestProtocolVersion();
            return version.map(vNum => vNum.toNumber()).join('.');
        });
        /**
         * Get the address of the POLY token
         */
        this.getPolyTokenAddress = () => __awaiter(this, void 0, void 0, function* () {
            const { contractWrappers } = this.context;
            return contractWrappers.polyToken.address();
        });
        /**
         * Returns the wallet address of the current user
         */
        this.getCurrentAddress = () => __awaiter(this, void 0, void 0, function* () {
            const { currentWallet } = this.context;
            return currentWallet.address();
        });
        /**
         * Obtains a recommended default gas price based on the desired transaction speed
         *
         * On mainnet, the gas price is fetched from ethgasstation.info (most reliable)\
         * On testnets (or if ethgasstation is unavailable), the gas price is fetched from the network itself via eth_gasPrice\
         * If everything else fails, we use a base default of 1 GWEI
         *
         * On the last two cases, the obtained price is multiplied by a factor depending on the speed:\
         * Slow = x1\
         * Medium = x2\
         * Fast = x3\
         * Fastest = x5
         */
        this.getGasPrice = ({ provider, isTestnet, defaultPrice, speed, }) => __awaiter(this, void 0, void 0, function* () {
            if (!isTestnet) {
                try {
                    const gasResponse = yield phin_1.default({
                        url: 'https://ethgasstation.info/json/ethgasAPI.json',
                        parse: 'json',
                    });
                    const body = gasResponse.body;
                    let gasPrice = body.fast;
                    switch (speed) {
                        case types_1.TransactionSpeed.Slow: {
                            gasPrice = body.safeLow;
                            break;
                        }
                        case types_1.TransactionSpeed.Medium: {
                            gasPrice = body.average;
                            break;
                        }
                        case types_1.TransactionSpeed.Fast: {
                            break;
                        }
                        case types_1.TransactionSpeed.Fastest: {
                            gasPrice = body.fastest;
                            break;
                        }
                        default: {
                            throw new PolymathError_1.PolymathError({
                                code: types_1.ErrorCode.FatalError,
                                message: 'Invalid transaction speed parameter',
                            });
                        }
                    }
                    return new contract_wrappers_1.BigNumber(gasPrice).multipliedBy(new contract_wrappers_1.BigNumber(10).exponentiatedBy(8));
                }
                catch (err) {
                    // Do nothing, fall back to asking the network
                }
            }
            const networkGasPrice = yield new Promise((resolve, reject) => {
                try {
                    provider.sendAsync({
                        jsonrpc: '2.0',
                        id: new Date().getTime(),
                        params: [],
                        method: 'eth_gasPrice',
                    }, (err, resp) => {
                        if (err) {
                            reject(err);
                        }
                        else if (!resp) {
                            resolve(defaultPrice);
                        }
                        else {
                            const price = parseInt(resp.result, 16);
                            resolve(new contract_wrappers_1.BigNumber(price));
                        }
                    });
                }
                catch (err) {
                    resolve(defaultPrice);
                }
            });
            return calculateGasPrice(speed, networkGasPrice);
        });
    }
}
exports.Polymath = Polymath;
const calculateGasPrice = (speed, basePrice) => {
    let result = basePrice;
    switch (speed) {
        case types_1.TransactionSpeed.Slow: {
            break;
        }
        case types_1.TransactionSpeed.Medium: {
            result = basePrice.multipliedBy(2);
            break;
        }
        case types_1.TransactionSpeed.Fast: {
            result = basePrice.multipliedBy(3);
            break;
        }
        case types_1.TransactionSpeed.Fastest: {
            result = basePrice.multipliedBy(5);
            break;
        }
        default: {
            throw new PolymathError_1.PolymathError({
                code: types_1.ErrorCode.FatalError,
                message: 'Invalid transaction speed parameter',
            });
        }
    }
    return result;
};
//# sourceMappingURL=Polymath.js.map