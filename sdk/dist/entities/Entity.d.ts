export declare abstract class Entity<Params> {
    abstract uid: string;
    abstract toPojo(): any;
    abstract _refresh(params: Partial<Params>): void;
}
//# sourceMappingURL=Entity.d.ts.map