"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = getUserProfile;
const util_1 = require("../util");
const gateways_1 = require("../util/gateways");
const temporal_polyfill_1 = require("temporal-polyfill");
const serialization_1 = require("../util/serialization");
async function getUserProfile(auth, username) {
    const result = await (0, util_1.request)(auth, (0, gateways_1.USER_PROFILE)(username));
    if (!result.ok) {
        return result;
    }
    const data = (0, serialization_1.parseData)(result.value, true, {
        untracked: Boolean,
        userPic: (path) => new URL(path, gateways_1.BASE_URL),
        memberSince: (date) => temporal_polyfill_1.Temporal.PlainDateTime.from(date.replace(" ", "T"))
    });
    return {
        ok: true,
        profile: Object.freeze(data)
    };
}
