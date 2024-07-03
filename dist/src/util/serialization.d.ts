export declare function parseData<T extends object>(data: T, castKeysToCamelCase: boolean, transformValues: {
    [K in keyof T]: (value: T[K]) => any;
}): {
    [k: string]: any;
};
