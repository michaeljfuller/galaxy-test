import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';

export const index = configureStore({
    reducer: {
        user: userReducer,
    },
    devTools: true,
});
export default index;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
