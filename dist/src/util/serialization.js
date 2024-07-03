"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseData = parseData;
function parseData(data, castKeysToCamelCase, transformValues) {
    const entries = Object.entries(data);
    for (const entry of entries) {
        if (castKeysToCamelCase) {
            if (entry[0] === entry[0].toUpperCase()) {
                entry[0] = entry[0].toLowerCase();
            }
            else {
                entry[0] = entry[0].charAt(0).toLowerCase() + entry[0].slice(1);
            }
        }
        const callback = transformValues[entry[0]];
        if (typeof callback === "function") {
            entry[1] = callback(entry[1]);
        }
    }
    return Object.fromEntries(entries);
}
