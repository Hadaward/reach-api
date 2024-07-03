import { Authorization } from "./auth";
export type ErrorInfo = {
    status: number;
    code: string;
    title: string;
};
export type ReachError = {
    message: string;
    errors: ErrorInfo[];
};
export type RequestResult<T> = Readonly<{
    ok: true;
    value: T;
} | {
    ok: false;
    error: ReachError;
}>;
export declare function request<T>(authorization: Authorization, gateway: string, options?: RequestInit): Promise<RequestResult<T>>;
