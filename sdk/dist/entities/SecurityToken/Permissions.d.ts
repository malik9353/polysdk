import { SubModule } from './SubModule';
import { PermissibleOperation } from '../../types';
export declare class Permissions extends SubModule {
    /**
     * Enable permissions features. This allows you to add delegate addresses
     * that can perform certain operations on your security token
     */
    enable: () => Promise<import("..").TransactionQueue<import("../../types").EnableGeneralPermissionManagerProcedureArgs, void>>;
    /**
     * Grant or revoke a permission to a delegate address
     *
     * @param delegate delegate address
     * @param op operation for which to modify permission
     * @param isGranted whether to grant or revoke the permission
     * @param details description of the delegate (defaults to empty string, is ignored if the delegate already exists)
     */
    changeDelegatePermission: (args: {
        delegate: string;
        op: PermissibleOperation;
        isGranted: boolean;
        details?: string | undefined;
    }) => Promise<import("..").TransactionQueue<import("../../types").ChangeDelegatePermissionProcedureArgs, void>>;
}
//# sourceMappingURL=Permissions.d.ts.map