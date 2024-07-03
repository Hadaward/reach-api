"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_PROFILE = exports.BASE_API_URL = exports.BASE_URL = void 0;
exports.BASE_URL = "https://retroachievements.org/";
exports.BASE_API_URL = `${exports.BASE_URL}API/`;
const USER_PROFILE = (username) => `${exports.BASE_API_URL}API_GetUserProfile.php?u=${username}`;
exports.USER_PROFILE = USER_PROFILE;
