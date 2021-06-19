import {createContext} from "react";
import type {AuthProvider} from "./AuthProvider";

export type {AuthProvider} from "./AuthProvider";

export const AuthContext = createContext<AuthProvider|undefined>(undefined);
export default AuthContext;
