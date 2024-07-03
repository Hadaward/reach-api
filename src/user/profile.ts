import { Authorization, ReachError, request } from "../util";
import { BASE_URL, USER_PROFILE } from "../util/gateways";

import { Temporal } from "temporal-polyfill";
import { parseData } from "../util/serialization";

export type UserProfile = Readonly<{
    user: string,
    userPic: URL,
    memberSince: Temporal.PlainDateTime,
    richPresenceMsg: string,
    lastGameId: number,
    contribCount: number,
    contribYield: number,
    totalPoints: number,
    totalSoftcorePoints: number,
    totalTruePoints: number,
    permissions: number,
    untracked: boolean,
    id: number,
    userWallActive: boolean,
    motto: string
}>;

export type GetUserProfileResult = Readonly<{
    ok: true,
    profile: UserProfile
} | {
    ok: false,
    error: ReachError
}>;

export async function getUserProfile(auth: Authorization, username: string): Promise<GetUserProfileResult> {
    const result = await request<object>(auth, USER_PROFILE(username));

    if (!result.ok) {
        return result;
    }

    const data = parseData(result.value, true, {
        untracked: Boolean,
        userPic: (path: string) => new URL(path, BASE_URL),
        memberSince: (date: string) => Temporal.PlainDateTime.from(date.replace(" ", "T"))
    }) as UserProfile;

    return {
        ok: true,
        profile: Object.freeze(data)
    }
}