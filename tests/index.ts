import { buildAuth, getUserProfile } from "../src";

const main = async () => {
    const auth = buildAuth("Gamedroit", "f7Y1ZspkoEMKsoc7sO2JdUrfjhpFM6Zu");
    const result = await getUserProfile(auth, "Tiduz");

    if (!result.ok) {
        console.error(result.error);
        return;
    }

    console.log(result.profile);
}

main();