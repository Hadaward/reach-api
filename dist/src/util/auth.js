"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAuth = buildAuth;
function buildAuth(username, key) {
    if (typeof username !== "string" || typeof key !== "string") {
        throw 'buildAuthorization() requires the username and key to be a string.';
    }
    return Object.freeze({
        username,
        key
    });
}
