import {useContext} from "react";
import {AuthContext, AuthProvider} from "../services/auth/AuthContext";

export default function useAuth(): AuthProvider {
    const auth = useContext(AuthContext);
    if (!auth) throw Error("No AuthContext.Provider");
    return auth;
}
