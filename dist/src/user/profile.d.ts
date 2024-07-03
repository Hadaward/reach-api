import { Authorization, ReachError } from "../util";
import { Temporal } from "temporal-polyfill";
export type UserProfile = Readonly<{
    user: string;
    userPic: URL;
    memberSince: Temporal.PlainDateTime;
    richPresenceMsg: string;
    lastGameId: number;
    contribCount: number;
    contribYield: number;
    totalPoints: number;
    totalSoftcorePoints: number;
    totalTruePoints: number;
    permissions: number;
    untracked: boolean;
    id: number;
    userWallActive: boolean;
    motto: string;
}>;
export type GetUserProfileResult = Readonly<{
    ok: true;
    profile: UserProfile;
} | {
    ok: false;
    error: ReachError;
}>;
export declare function getUserProfile(auth: Authorization, username: string): Promise<GetUserProfileResult>;
