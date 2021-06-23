import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
    current?: User;
    signingIn: boolean;
    signingInAs?: SignInPayload;
    signInError?: Error;
    signingOut: boolean;
    signOutError?: Error;
}
const initialState: UserState = {
    current: undefined,
    signingIn: false,
    signingOut: false,
};

export interface SignInPayload {
    email: string;
    password: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {

        signIn: (state, action: PayloadAction<SignInPayload>) => {
            state.signingIn = true;
            state.signingInAs = action.payload;
            state.signInError = undefined;
        },
        signInError: (state, action: PayloadAction<Error>) => {
            state.signingIn = false;
            state.signingInAs = undefined;
            state.signInError = action.payload;
        },

        signOut: (state) => {
            state.signingOut = true;
            state.signOutError = undefined;
        },
        signOutError: (state, action: PayloadAction<Error>) => {
            state.signingOut = false;
            state.signOutError = action.payload;
        },

        setUser: (state, action: PayloadAction<User|undefined>) => {
            state.current = action.payload || undefined;
            state.signingIn = false;
            state.signingInAs = undefined;
            state.signingOut = false;
        },

    },

});

// Action creators are generated for each case reducer function
export const {
    signIn, signInError,
    signOut, signOutError,
    setUser
} = userSlice.actions;
export default userSlice.reducer;
