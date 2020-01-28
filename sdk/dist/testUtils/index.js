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
const PostTransactionResolver_1 = require("../PostTransactionResolver");
const originalWindow = Object.assign({}, window);
function mockEthereumBrowser({ support = 'modern', options = {
    networkId: 1,
    loaded: true,
}, }) {
    const { networkId, loaded } = options;
    if (support === 'modern') {
        window = Object.assign(window, {
            ethereum: {
                networkVersion: loaded ? `${networkId}` : undefined,
            },
        });
    }
    if (support === 'legacy') {
        window = Object.assign(window, {
            web3: {
                version: networkId,
            },
        });
    }
    return {
        restore: () => {
            window = originalWindow;
        },
        load: () => {
            if (support === 'modern') {
                window.ethereum.networkVersion = `${networkId}`;
            }
            if (support === 'legacy') {
                window.web3.version = `${networkId}`;
            }
        },
    };
}
exports.mockEthereumBrowser = mockEthereumBrowser;
class MockPolyResponse extends contract_wrappers_1.PolyResponse {
    constructor(args) {
        const { txHash } = args;
        const values = {
            from: 'from',
            to: 'to',
            status: '0',
            cumulativeGasUsed: 0,
            gasUsed: 0,
            contractAddress: 'contractAddress',
            logs: [],
            logIndex: null,
            transactionIndex: 1,
            transactionHash: txHash,
            blockHash: 'blockHash',
            blockNumber: 1,
            address: 'address',
            data: 'data',
            topics: ['topic1'],
        };
        super(txHash, Promise.resolve(values));
        this.resolve = () => { };
        this.reject = () => { };
        const promise = new Promise((resolve, reject) => {
            this.resolve = () => resolve(values);
            this.reject = err => reject(err);
        });
        this.receiptAsync = promise;
    }
}
class MockedContract {
    constructor({ autoResolve = true, errorMsg, txHashes = [], } = {}) {
        this.fakeTxOne = jest.fn(() => __awaiter(this, void 0, void 0, function* () {
            if (this.autoResolve) {
                this.fakeTxOnePolyResponse.resolve();
            }
            return this.fakeTxOnePolyResponse;
        }));
        this.fakeTxTwo = jest.fn(() => __awaiter(this, void 0, void 0, function* () {
            if (this.autoResolve) {
                this.fakeTxTwoPolyResponse.resolve();
            }
            return this.fakeTxTwoPolyResponse;
        }));
        this.failureTx = jest.fn(() => __awaiter(this, void 0, void 0, function* () {
            if (this.autoResolve) {
                this.failureTxPolyResponse.reject(new Error(this.errorMsg || 'Test Error'));
            }
            return this.failureTxPolyResponse;
        }));
        this.autoResolve = autoResolve;
        this.errorMsg = errorMsg;
        this.fakeTxOnePolyResponse = new MockPolyResponse({ txHash: txHashes[0] || '0x1' });
        this.fakeTxTwoPolyResponse = new MockPolyResponse({ txHash: txHashes[1] || '0x2' });
        this.failureTxPolyResponse = new MockPolyResponse({ txHash: txHashes[2] || '0x3' });
    }
}
exports.MockedContract = MockedContract;
exports.getMockTransactionSpec = (method, args, resolver = () => __awaiter(this, void 0, void 0, function* () { })) => ({
    method,
    args,
    postTransactionResolver: new PostTransactionResolver_1.PostTransactionResolver(resolver),
});
//# sourceMappingURL=index.js.map