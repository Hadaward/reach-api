import { buildAuth, getUserProfile } from "../src";

const main = async () => {
    const auth = buildAuth("yourname", "yourkey");
    const result = await getUserProfile(auth, "Tiduz");

    if (!result.ok) {
        console.error(result.error);
        return;
    }

    console.log(result.profile);
}

main();