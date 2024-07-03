import { Authorization } from "./auth";

export type ErrorInfo = {
    status: number,
    code: string,
    title: string
}

export type ReachError = {
    message: string,
    errors: ErrorInfo[]
};

export type RequestResult<T> = Readonly<{
    ok: true,
    value: T
} | {
    ok: false,
    error: ReachError
}>

export async function request<T>(authorization: Authorization, gateway: string, options?: RequestInit): Promise<RequestResult<T>> {
    const url = new URL(gateway);
    url.searchParams.append("z", authorization.username);
    url.searchParams.append("y", authorization.key);

    const response = await fetch(url, options);
    
    if (!response.ok) {
        return Object.freeze({
            ok: false,
            error: await response.json() as ReachError
        });
    }

    return Object.freeze({
        ok: true,
        value: await response.json() as T
    });
}