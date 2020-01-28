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
const PolymathError_1 = require("./PolymathError");
const types_1 = require("./types");
const utils_1 = require("./utils");
var BrowserSupport;
(function (BrowserSupport) {
    BrowserSupport["NoMetamask"] = "NoMetamask";
    BrowserSupport["MetamaskLegacy"] = "MetamaskLegacy";
    BrowserSupport["MetamaskModern"] = "MetamaskModern";
    BrowserSupport["None"] = "None";
})(BrowserSupport = exports.BrowserSupport || (exports.BrowserSupport = {}));
/**
 * Returns the browser support for Ethereum
 */
function getBrowserSupport() {
    const isClient = typeof window !== 'undefined';
    if (!isClient) {
        return BrowserSupport.None;
    }
    const win = window;
    if (win.ethereum) {
        return BrowserSupport.MetamaskModern;
    }
    if (win.web3) {
        return BrowserSupport.MetamaskLegacy;
    }
    return BrowserSupport.NoMetamask;
}
exports.getBrowserSupport = getBrowserSupport;
/* eslint-disable @typescript-eslint/no-unused-vars */
function isModern(obj) {
    return getBrowserSupport() === BrowserSupport.MetamaskModern;
}
function isLegacy(obj) {
    return getBrowserSupport() === BrowserSupport.MetamaskLegacy;
}
function isUnsupported(obj) {
    return getBrowserSupport() === BrowserSupport.NoMetamask;
}
/* eslint-enable @typescript-eslint/no-unused-vars */
function getInjectedProvider() {
    return __awaiter(this, void 0, void 0, function* () {
        const isClient = typeof window !== 'undefined';
        if (!isClient) {
            return undefined;
        }
        const win = window;
        if (isModern(win)) {
            const injectedProvider = win.ethereum;
            try {
                yield injectedProvider.enable();
                return injectedProvider;
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({ code: types_1.ErrorCode.UserDeniedAccess });
            }
        }
        else if (isLegacy(win)) {
            const injectedWeb3 = win.web3;
            const web3Provider = injectedWeb3.currentProvider;
            return web3Provider;
        }
        else {
            throw new PolymathError_1.PolymathError({ code: types_1.ErrorCode.MetamaskNotInstalled });
        }
    });
}
exports.getInjectedProvider = getInjectedProvider;
function getWeb3() {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = yield getInjectedProvider();
        if (!provider) {
            throw new PolymathError_1.PolymathError({ code: types_1.ErrorCode.NonBrowserEnvironment });
        }
        return new contract_wrappers_1.Web3Wrapper(provider);
    });
}
exports.getWeb3 = getWeb3;
/**
 * Returns the current networkId provided by the browser
 */
function getNetworkId() {
    return __awaiter(this, void 0, void 0, function* () {
        const win = window;
        if (!win) {
            throw new PolymathError_1.PolymathError({ code: types_1.ErrorCode.NonBrowserEnvironment });
        }
        let rawNetworkId;
        if (isModern(win)) {
            rawNetworkId = win.ethereum.networkVersion;
        }
        else if (isLegacy(win)) {
            rawNetworkId = win.web3.version.network;
        }
        else {
            return null;
        }
        if (rawNetworkId === 'loading' || !rawNetworkId) {
            yield utils_1.delay(50);
            return getNetworkId();
        }
        return parseInt(rawNetworkId, 10);
    });
}
exports.getNetworkId = getNetworkId;
function getCurrentAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        const win = window;
        const web3 = yield getWeb3();
        const accounts = yield web3.getAvailableAddressesAsync();
        if (!win) {
            throw new PolymathError_1.PolymathError({ code: types_1.ErrorCode.NonBrowserEnvironment });
        }
        if (isModern(win)) {
            // Special check for Metamask to know if it is locked or not
            const metamask = win.ethereum._metamask;
            if (metamask) {
                const isApproved = yield metamask.isApproved();
                if (isApproved && !accounts.length) {
                    throw new PolymathError_1.PolymathError({ code: types_1.ErrorCode.WalletIsLocked });
                }
            }
        }
        else if (isUnsupported(win)) {
            throw new PolymathError_1.PolymathError({ code: types_1.ErrorCode.IncompatibleBrowser });
        }
        return accounts[0];
    });
}
exports.getCurrentAddress = getCurrentAddress;
/**
 * Runs the callback anytime the wallet address changes in the browser
 *
 * @param cb callback that receives the new address and the previous one
 *
 * @returns an unsubscribe function
 */
function onAddressChange(cb) {
    if (isUnsupported(window)) {
        // eslint-disable-next-line no-console
        console.warn('"onAddressChange" Was called, but the current browser does not support Ethereum.');
        return () => { };
    }
    let previousAddress;
    const checkAddress = () => __awaiter(this, void 0, void 0, function* () {
        const newAddress = yield getCurrentAddress();
        if (previousAddress !== newAddress) {
            previousAddress = newAddress;
            cb(newAddress, previousAddress);
        }
    });
    const interval = setInterval(checkAddress, 1000);
    const unsubscribe = () => {
        clearInterval(interval);
    };
    return unsubscribe;
}
exports.onAddressChange = onAddressChange;
/**
 * Runs the callback anytime the current network changes in the browser
 *
 * @param cb callback that receives the new network id and the previous one
 *
 * @returns an unsubscribe function
 */
function onNetworkChange(cb) {
    if (isUnsupported(window)) {
        // eslint-disable-next-line no-console
        console.warn('"onNetworkChange" Was called, but the current browser does not support Ethereum.');
        return () => { };
    }
    let previousNetwork;
    const checkNetwork = () => __awaiter(this, void 0, void 0, function* () {
        const newNetwork = yield getNetworkId();
        if (previousNetwork !== newNetwork) {
            previousNetwork = newNetwork;
            cb(newNetwork, previousNetwork);
        }
    });
    const interval = setInterval(checkNetwork, 1000);
    const unsubscribe = () => {
        clearInterval(interval);
    };
    return unsubscribe;
}
exports.onNetworkChange = onNetworkChange;
//# sourceMappingURL=browserUtils.js.map