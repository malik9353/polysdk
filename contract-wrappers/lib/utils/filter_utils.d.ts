import { FilterObject, EventAbi, LogEntry } from '@polymathnetwork/abi-wrappers';
import { BlockRange, ContractEvents, IndexedFilterValues } from '../types';
declare const filterUtils: {
    generateUUID(): string;
    getFilter(address: string, eventName: ContractEvents, indexFilterValues: IndexedFilterValues, abi: import("ethereum-types").AbiDefinition[], blockRange?: BlockRange | undefined): FilterObject;
    getEventSignatureFromAbiByName(eventAbi: EventAbi): string;
    getTopicsForIndexedArgs(abi: EventAbi, indexFilterValues: IndexedFilterValues): (string | null)[];
    matchesFilter(log: LogEntry, filter: FilterObject): boolean;
    doesMatchTopics(logTopics: string[], filterTopics: (string | string[] | null)[]): boolean;
    matchesTopic(logTopic: string, filterTopic: string | string[] | null): boolean;
};
export default filterUtils;
//# sourceMappingURL=filter_utils.d.ts.map