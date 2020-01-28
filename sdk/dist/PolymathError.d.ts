import { ErrorCode } from './types';
export declare const ErrorMessagesPerCode: {
    [errorCode: string]: string;
};
export declare class PolymathError extends Error {
    code: ErrorCode;
    constructor({ message, code }: {
        message?: string;
        code: ErrorCode;
    });
}
//# sourceMappingURL=PolymathError.d.ts.map