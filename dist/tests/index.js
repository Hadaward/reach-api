"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const main = async () => {
    const auth = (0, src_1.buildAuth)("Gamedroit", "f7Y1ZspkoEMKsoc7sO2JdUrfjhpFM6Zu");
    const result = await (0, src_1.getUserProfile)(auth, "Tiduz");
    if (!result.ok) {
        console.error(result.error);
        return;
    }
    console.log(result.profile);
};
main();
