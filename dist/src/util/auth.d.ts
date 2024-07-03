export type Authorization = Readonly<{
    username: string;
    key: string;
}>;
export declare function buildAuth(username: string, key: string): Authorization;
