"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.ErrorMessagesPerCode = {
    [types_1.ErrorCode.IncompatibleBrowser]: 'The browser being used is not compatible with Ethereum',
    [types_1.ErrorCode.WalletIsLocked]: 'The wallet is locked, if Metamask extension is being used, the user needs to unlock it first',
    [types_1.ErrorCode.UserDeniedAccess]: 'The user denied access',
    [types_1.ErrorCode.TransactionRejectedByUser]: 'The user rejected the transaction',
    [types_1.ErrorCode.UnexpectedReturnData]: 'The data returned by the smart contract has an unexpected format. Please report this issue to the Polymath team',
    [types_1.ErrorCode.InvalidAddress]: 'Invalid Address',
    [types_1.ErrorCode.NonBrowserEnvironment]: 'Attempted to call a browser utility in a non-browser environment',
    [types_1.ErrorCode.MetamaskNotInstalled]: 'You must install the Metamask browser extension if attempting to use Polymath SDK from the browser',
};
class PolymathError extends Error {
    constructor({ message, code }) {
        super(message || exports.ErrorMessagesPerCode[code] || `Unknown error, code: ${code}`);
        // eslint:disable-next-line
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Object.setPrototypeOf(this, PolymathError);
        this.code = code;
    }
}
exports.PolymathError = PolymathError;
//# sourceMappingURL=PolymathError.js.map