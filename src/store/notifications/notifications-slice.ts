import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NotificationsState {
    latest: UserNotification[];
    fetchingLatest: boolean;
    fetchLatestError?: Error;
}
const initialState: NotificationsState = {
    latest: [],
    fetchingLatest: false,
};

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,

    reducers: {

        fetchLatest: (state) => {
            state.fetchingLatest = true;
            state.fetchLatestError = undefined;
        },
        fetchLatestError: (state, action: PayloadAction<Error>) => {
            state.fetchingLatest = false;
            state.fetchLatestError = action.payload;
        },

        setLatest: (state, action: PayloadAction<UserNotification[]>) => {
            state.latest = [...action.payload];
            state.fetchingLatest = false;
            state.fetchLatestError = undefined;
        },

    },

});

// Action creators are generated for each case reducer function
export const {
    fetchLatest, fetchLatestError, setLatest,
} = notificationsSlice.actions;
export default notificationsSlice.reducer;
