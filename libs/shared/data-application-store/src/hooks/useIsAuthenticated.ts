import { useApplicationStore } from "../lib";

export const useIsAuthenticated = () => {
    const auth = useApplicationStore(store => store.auth);
    return !!auth;
};