import { BigNumber } from '@polymathnetwork/contract-wrappers';
import { Entity } from './Entity';
import { StoType, Currency } from '../types';
import { Investment } from './Investment';
import { Context } from '../Context';
export interface UniqueIdentifiers {
    securityTokenId: string;
    stoType: StoType;
    address: string;
}
export interface Params {
    securityTokenSymbol: string;
    startTime: Date;
    endTime: Date;
    fundraiseTypes: Currency[];
    raisedAmount: BigNumber;
    soldTokensAmount: BigNumber;
    investorAmount: number;
    investments: Investment[];
    paused: boolean;
    capReached: boolean;
}
export declare abstract class Sto<P> extends Entity<P> {
    abstract uid: string;
    address: string;
    securityTokenSymbol: string;
    securityTokenId: string;
    stoType: StoType;
    startTime: Date;
    endTime: Date;
    raisedAmount: BigNumber;
    soldTokensAmount: BigNumber;
    investorAmount: number;
    investments: Investment[];
    fundraiseTypes: Currency[];
    paused: boolean;
    capReached: boolean;
    protected context: Context;
    static unserialize(serialized: string): UniqueIdentifiers;
    constructor(params: Params & UniqueIdentifiers, context: Context);
    pause: () => Promise<import("./TransactionQueue").TransactionQueue<import("../types").PauseStoProcedureArgs, void>>;
    toPojo(): {
        uid: string;
        securityTokenId: string;
        securityTokenSymbol: string;
        fundraiseTypes: Currency[];
        raisedAmount: BigNumber;
        soldTokensAmount: BigNumber;
        investorAmount: number;
        startTime: Date;
        endTime: Date;
        investments: {
            uid: string;
            securityTokenId: string;
            securityTokenSymbol: string;
            stoId: string;
            address: string;
            index: number;
            tokenAmount: BigNumber;
            investedFunds: BigNumber;
        }[];
    };
    _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=Sto.d.ts.map