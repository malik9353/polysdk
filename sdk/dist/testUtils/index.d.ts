/// <reference types="jest" />
import { PolyResponse } from '@polymathnetwork/contract-wrappers';
import { PostTransactionResolver } from '../PostTransactionResolver';
interface MockEthereumBrowserArgs {
    support?: 'legacy' | 'modern';
    options?: {
        networkId: number;
        loaded: boolean;
    };
}
export declare function mockEthereumBrowser({ support, options, }: MockEthereumBrowserArgs): {
    restore: () => void;
    load: () => void;
};
declare class MockPolyResponse extends PolyResponse {
    resolve: () => void;
    reject: (err: any) => void;
    constructor(args: {
        txHash: string;
    });
}
export declare class MockedContract {
    autoResolve: boolean;
    errorMsg?: string;
    fakeTxOnePolyResponse: MockPolyResponse;
    fakeTxTwoPolyResponse: MockPolyResponse;
    failureTxPolyResponse: MockPolyResponse;
    fakeTxOne: jest.Mock<Promise<MockPolyResponse>, []>;
    fakeTxTwo: jest.Mock<Promise<MockPolyResponse>, []>;
    failureTx: jest.Mock<Promise<MockPolyResponse>, []>;
    constructor({ autoResolve, errorMsg, txHashes, }?: {
        autoResolve?: boolean;
        errorMsg?: string;
        txHashes?: [] | [string] | [string, string] | [string, string, string];
    });
}
export declare const getMockTransactionSpec: (method: (args: any) => Promise<any>, args: any, resolver?: () => Promise<void>) => {
    method: (args: any) => Promise<any>;
    args: any;
    postTransactionResolver: PostTransactionResolver<void>;
};
export {};
//# sourceMappingURL=index.d.ts.map