import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NotificationsState {
    latest: UserNotification[];
    fetchingLatest: boolean;
    fetchLatestError?: string;
}
const initialState: NotificationsState = {
    latest: [],
    fetchingLatest: false,
};

export default createSlice({
    name: 'notifications',
    initialState,

    reducers: {

        fetchLatest: (state) => {
            state.fetchingLatest = true;
            state.fetchLatestError = undefined;
        },
        fetchLatestError: (state, action: PayloadAction<string>) => {
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
