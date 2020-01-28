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
const types_1 = require("../types");
const TransactionQueue_1 = require("../entities/TransactionQueue");
const PostTransactionResolver_1 = require("../PostTransactionResolver");
const PolymathError_1 = require("../PolymathError");
// NOTE @RafaelVidaurre: We could add a preparation state cache to avoid repeated transactions and bad validations
class Procedure {
    constructor(args, context) {
        this.type = types_1.ProcedureType.UnnamedProcedure;
        this.transactions = [];
        this.fees = [];
        /**
         * Mandatory method that builds a list of transactions that will be
         * run
         */
        this.prepare = () => __awaiter(this, void 0, void 0, function* () {
            const returnValue = yield this.prepareTransactions();
            const totalFees = this.fees.reduce(({ usd, poly }, { usd: newUsd, poly: newPoly }) => {
                const polySum = poly.plus(newPoly);
                let usdSum;
                if (usd === null && newUsd === null) {
                    usdSum = null;
                }
                else {
                    usdSum = (usd || new contract_wrappers_1.BigNumber(0)).plus(newUsd || new contract_wrappers_1.BigNumber(0));
                }
                return {
                    usd: usdSum,
                    poly: polySum,
                };
            }, { usd: null, poly: new contract_wrappers_1.BigNumber(0) });
            const transactionQueue = new TransactionQueue_1.TransactionQueue(this.transactions, totalFees, returnValue, this.args, this.type);
            return transactionQueue;
        });
        /**
         * Appends a Procedure into the TransactionQueue's queue. This defines
         * what will be run by the TransactionQueue when it is started.
         *
         * @param Proc A Procedure that will be run in the Procedure's TransactionQueue
         *
         * @returns whichever value is returned by the Procedure
         */
        this.addProcedure = (Proc) => {
            return (args) => __awaiter(this, void 0, void 0, function* () {
                const operation = new Proc(args, this.context);
                let returnValue;
                try {
                    returnValue = yield operation.prepareTransactions();
                }
                catch (err) {
                    // Only throw if this is a validation error, otherwise it will have
                    // already propagated on the outside
                    if (err.code === types_1.ErrorCode.ProcedureValidationError) {
                        throw err;
                    }
                    else if (!(err instanceof PolymathError_1.PolymathError)) {
                        throw new PolymathError_1.PolymathError({
                            code: types_1.ErrorCode.FatalError,
                            message: err.message,
                        });
                    }
                }
                const { transactions, fees } = operation;
                this.fees = [...this.fees, ...fees];
                this.transactions = [...this.transactions, ...transactions];
                return returnValue;
            });
        };
        /**
         * Appends a method into the TransactionQueue's queue. This defines
         * what will be run by the TransactionQueue when it is started.
         *
         * @param method A method that will be run in the Procedure's TransactionQueue
         * @param options.tag An optional tag for SDK users to identify this transaction, this
         * can be used for doing things such as mapping descriptions to tags in the UI
         * @param options.fee Value in POLY of the transaction (defaults to 0)
         * @param options.resolver An asynchronous callback used to provide runtime data after
         * the added transaction has finished successfully
         *
         * @returns a PostTransactionResolver that resolves to the value returned by the resolver function, or undefined if no resolver function was passed
         */
        this.addTransaction = (method, { tag, fees, resolver = (() => { }), } = {}) => {
            return (args) => __awaiter(this, void 0, void 0, function* () {
                const postTransactionResolver = new PostTransactionResolver_1.PostTransactionResolver(resolver);
                if (fees) {
                    this.fees.push(fees);
                }
                const transaction = {
                    method,
                    args,
                    postTransactionResolver,
                    tag,
                };
                this.transactions.push(transaction);
                return postTransactionResolver;
            });
        };
        this.args = args;
        this.context = context;
    }
}
exports.Procedure = Procedure;
//# sourceMappingURL=Procedure.js.map