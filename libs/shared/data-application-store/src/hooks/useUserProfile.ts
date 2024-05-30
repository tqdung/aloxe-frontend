import { useApplicationStore } from "../lib";

export const useUserProfile = () => {
    const auth = useApplicationStore(store => store.auth);
    return auth;
};