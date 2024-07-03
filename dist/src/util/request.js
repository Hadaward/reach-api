"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = request;
async function request(authorization, gateway, options) {
    const url = new URL(gateway);
    url.searchParams.append("z", authorization.username);
    url.searchParams.append("y", authorization.key);
    const response = await fetch(url, options);
    if (!response.ok) {
        return Object.freeze({
            ok: false,
            error: await response.json()
        });
    }
    return Object.freeze({
        ok: true,
        value: await response.json()
    });
}
