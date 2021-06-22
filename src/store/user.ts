import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
    current?: User;
}
const initialState: UserState = {
    current: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {

        setUser: (state, action: PayloadAction<User>) => {
            state.current = action.payload || undefined;
        },

        removeUser: (state) => {
            state.current = undefined;
        },

    },

})

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
