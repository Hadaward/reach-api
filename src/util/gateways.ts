export const BASE_URL = "https://retroachievements.org/";
export const BASE_API_URL = `${BASE_URL}API/`;

export const USER_PROFILE = (username: string) => `${BASE_API_URL}API_GetUserProfile.php?u=${username}`;