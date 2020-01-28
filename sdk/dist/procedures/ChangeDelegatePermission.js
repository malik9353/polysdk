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
const Procedure_1 = require("./Procedure");
const types_1 = require("../types");
const PolymathError_1 = require("../PolymathError");
class ChangeDelegatePermission extends Procedure_1.Procedure {
    constructor() {
        super(...arguments);
        this.type = types_1.ProcedureType.ChangeDelegatePermission;
    }
    prepareTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const { symbol, op, isGranted, details = '' } = this.args;
            const delegate = contract_wrappers_1.conversionUtils.checksumAddress(this.args.delegate);
            const { contractWrappers } = this.context;
            let moduleAddress;
            let perm;
            try {
                yield contractWrappers.tokenFactory.getSecurityTokenInstanceFromTicker(symbol);
            }
            catch (err) {
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: `There is no Security Token with symbol ${symbol}`,
                });
            }
            // @TODO remon-nashid refactor into a map(op => {module, perm}).
            switch (op) {
                case types_1.PermissibleOperation.ModifyShareholderData: {
                    perm = contract_wrappers_1.Perm.Admin;
                    const attachedModule = (yield contractWrappers.getAttachedModules({ moduleName: contract_wrappers_1.ModuleName.GeneralTransferManager, symbol }, { unarchived: true }))[0];
                    if (!attachedModule) {
                        // GTM is supposedly attached to all tokens by default. If we reach this line
                        // then something very wrong is happening.
                        throw new PolymathError_1.PolymathError({
                            code: types_1.ErrorCode.FatalError,
                            message: `General Transfer Manager for token "${symbol}" isn't enabled. Please report this issue to the Polymath team`,
                        });
                    }
                    moduleAddress = yield attachedModule.address();
                    break;
                }
                default: {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.ProcedureValidationError,
                        message: `Unkown operation "${op}"`,
                    });
                }
            }
            const permissionModule = (yield contractWrappers.getAttachedModules({ moduleName: contract_wrappers_1.ModuleName.GeneralPermissionManager, symbol }, { unarchived: true }))[0];
            if (!permissionModule)
                throw new PolymathError_1.PolymathError({
                    code: types_1.ErrorCode.ProcedureValidationError,
                    message: "Permissions haven't been enabled. Please call permissions.enable() on your Security Token.",
                });
            const delegates = yield permissionModule.getAllDelegates();
            const exists = delegates.filter(element => element === delegate).length > 0;
            // In the following block we attempt to:
            // * Find whether the delegate address is already present. Otherwise add them.
            // * Find whether current delegate permission equals provided one. Otherwise change permissions.
            if (exists) {
                const permittedDelegates = yield permissionModule.getAllDelegatesWithPerm({
                    module: moduleAddress,
                    perm,
                });
                const permitted = !!permittedDelegates.find(element => element === delegate);
                // Upcoming permission equals existing one.
                if (permitted === isGranted) {
                    throw new PolymathError_1.PolymathError({
                        code: types_1.ErrorCode.ProcedureValidationError,
                        message: `Delegate's permission is already set to ${isGranted}.`,
                    });
                }
            }
            else {
                // Delegate not found. Add them here.
                yield this.addTransaction(permissionModule.addDelegate, {
                    tag: types_1.PolyTransactionTag.ChangeDelegatePermission,
                })({ delegate, details });
            }
            // Change delegate permission
            yield this.addTransaction(permissionModule.changePermission, {
                tag: types_1.PolyTransactionTag.ChangeDelegatePermission,
            })({ delegate, module: moduleAddress, perm, valid: isGranted });
        });
    }
}
exports.ChangeDelegatePermission = ChangeDelegatePermission;
//# sourceMappingURL=ChangeDelegatePermission.js.map