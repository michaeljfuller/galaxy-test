import slice from "./user-slice";

export type {
    SignInPayload
} from "./user-slice";

export const {
    signIn, signInError,
    signOut, signOutError,
    setUser
} = slice.actions;
