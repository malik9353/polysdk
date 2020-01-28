import { Context } from '../../Context';
import { Entity } from '../Entity';
import { Shareholders } from './Shareholders';
import { Dividends } from './Dividends';
import { Offerings } from './Offerings';
import { Permissions } from './Permissions';
import { Transfers } from './Transfers';
export interface UniqueIdentifiers {
    symbol: string;
}
export interface Params {
    name: string;
    address: string;
    owner: string;
}
export declare const unserialize: (serialized: string) => UniqueIdentifiers;
export declare class SecurityToken extends Entity<Params> {
    static generateId({ symbol }: UniqueIdentifiers): string;
    static unserialize: (serialized: string) => UniqueIdentifiers;
    uid: string;
    symbol: string;
    name: string;
    owner: string;
    address: string;
    shareholders: Shareholders;
    dividends: Dividends;
    offerings: Offerings;
    permissions: Permissions;
    transfers: Transfers;
    constructor(params: Params & UniqueIdentifiers, context: Context);
    toPojo(): {
        uid: string;
        symbol: string;
        name: string;
        address: string;
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=SecurityToken.d.ts.map