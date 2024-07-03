export type Authorization = Readonly<{
    username: string,
    key: string
}>

export function buildAuth(username: string, key: string): Authorization {
    if (typeof username !== "string" || typeof key !== "string") {
        throw 'buildAuthorization() requires the username and key to be a string.'
    }
    
    return Object.freeze({
        username,
        key
    });
}