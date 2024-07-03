export function parseData<T extends object>(data: T, castKeysToCamelCase: boolean, transformValues: {[K in keyof T]: (value: T[K]) => any}) {
    const entries = Object.entries(data);

    for (const entry of entries) {
        if (castKeysToCamelCase) {
            if (entry[0] === entry[0].toUpperCase()) {
                entry[0] = entry[0].toLowerCase();
            } else {
                entry[0] = entry[0].charAt(0).toLowerCase() + entry[0].slice(1);
            }
        }

        const callback = (transformValues as any)[entry[0]] as (value: any) => any;

        if (typeof callback === "function") {
            entry[1] = callback(entry[1]);
        }
    }

    return Object.fromEntries(entries);
}