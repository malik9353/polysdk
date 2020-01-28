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
const lodash_1 = require("lodash");
const events_1 = require("events");
const v4_1 = __importDefault(require("uuid/v4"));
const PostTransactionResolver_1 = require("../PostTransactionResolver");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
const Entity_1 = require("./Entity");
const utils_1 = require("../utils");
var Event;
(function (Event) {
    Event["StatusChange"] = "StatusChange";
})(Event || (Event = {}));
// TODO @RafaelVidaurre: Cleanup code
const mapValuesDeep = (obj, fn) => lodash_1.mapValues(obj, (val, key) => (lodash_1.isPlainObject(val) ? mapValuesDeep(val, fn) : fn(val, key, obj)));
// TODO @monitz87: Make properties private where appliccable
class PolyTransaction extends Entity_1.Entity {
    constructor(transaction, transactionQueue) {
        super();
        this.status = types_1.TransactionStatus.Idle;
        this.postResolver = new PostTransactionResolver_1.PostTransactionResolver();
        this.onStatusChange = (listener) => {
            this.emitter.on(Event.StatusChange, listener);
            return () => {
                this.emitter.removeListener(Event.StatusChange, listener);
            };
        };
        this.resolve = () => { };
        this.reject = () => { };
        this.updateStatus = (status) => {
            this.status = status;
            /* eslint-disable default-case */
            switch (status) {
                case types_1.TransactionStatus.Unapproved: {
                    this.emitter.emit(Event.StatusChange, this);
                    return;
                }
                case types_1.TransactionStatus.Running: {
                    this.emitter.emit(Event.StatusChange, this);
                    return;
                }
                case types_1.TransactionStatus.Succeeded: {
                    this.emitter.emit(Event.StatusChange, this);
                    return;
                }
                case types_1.TransactionStatus.Failed: {
                    this.emitter.emit(Event.StatusChange, this, this.error);
                    return;
                }
                case types_1.TransactionStatus.Rejected: {
                    this.emitter.emit(Event.StatusChange, this);
                }
            }
            /* eslint-enable default-case */
        };
        if (transaction.postTransactionResolver) {
            this.postResolver = transaction.postTransactionResolver;
        }
        this.emitter = new events_1.EventEmitter();
        this.tag = transaction.tag || types_1.PolyTransactionTag.Any;
        this.method = transaction.method;
        this.args = transaction.args;
        this.transactionQueue = transactionQueue;
        this.promise = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
        this.uid = PolyTransaction.generateId();
    }
    static generateId() {
        return utils_1.serialize('transaction', {
            random: v4_1.default(),
        });
    }
    toPojo() {
        const { uid, status, tag, receipt, error, txHash, transactionQueue, args } = this;
        const transactionQueueUid = transactionQueue.uid;
        // do not expose arguments that haven't been resolved
        // TODO @monitz87: type this correctly
        const filteredArgs = lodash_1.pickBy(args, arg => !PostTransactionResolver_1.isPostTransactionResolver(arg));
        return {
            uid,
            transactionQueueUid,
            status,
            tag,
            txHash,
            receipt,
            error,
            /**
             * NOTE @monitz87: we intentionally expose the args as any for the end user
             * until we figure out how to type this properly
             */
            args: filteredArgs,
        };
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const receipt = yield this.internalRun();
                this.receipt = receipt;
                this.updateStatus(types_1.TransactionStatus.Succeeded);
                this.resolve(receipt);
            }
            catch (err) {
                if (err.code === types_1.ErrorCode.TransactionRejectedByUser) {
                    this.updateStatus(types_1.TransactionStatus.Rejected);
                }
                else {
                    this.updateStatus(types_1.TransactionStatus.Failed);
                }
                this.reject(err);
            }
            yield this.promise;
        });
    }
    internalRun() {
        return __awaiter(this, void 0, void 0, function* () {
            this.updateStatus(types_1.TransactionStatus.Unapproved);
            const unwrappedArgs = this.unwrapArgs(this.args);
            const polyResponse = yield this.method(unwrappedArgs);
            // Set the Transaction as Running once it is approved by the user
            this.txHash = polyResponse.txHash;
            this.updateStatus(types_1.TransactionStatus.Running);
            let result;
            try {
                result = yield polyResponse.receiptAsync;
            }
            catch (err) {
                // Wrap with PolymathError
                if (err.message.indexOf('MetaMask Tx Signature') > -1) {
                    this.error = new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.TransactionRejectedByUser,
                    });
                }
                else {
                    this.error = new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.FatalError,
                        message: err.message,
                    });
                }
                throw this.error;
            }
            yield this.postResolver.run(result);
            return result;
        });
    }
    unwrapArg(arg) {
        if (PostTransactionResolver_1.isPostTransactionResolver(arg)) {
            return arg.result;
        }
        return arg;
    }
    /**
     * Picks all post-transaction resolvers and unwraps their values
     */
    unwrapArgs(args) {
        return lodash_1.mapValues(args, (arg) => {
            return lodash_1.isPlainObject(arg)
                ? mapValuesDeep(arg, (val) => {
                    return this.unwrapArg(val);
                })
                : this.unwrapArg(arg);
        });
    }
    _refresh(_params) { }
}
exports.PolyTransaction = PolyTransaction;
//# sourceMappingURL=PolyTransaction.js.map