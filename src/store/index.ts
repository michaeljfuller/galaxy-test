import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./sagas";
import sagaContexts from "./sagaContexts";

import userReducer from './slices/user';
import notificationsReducer from './slices/notifications';

const sagaMiddleware = createSagaMiddleware({ context: sagaContexts });

export const index = configureStore({
    reducer: {
        user: userReducer,
        notifications: notificationsReducer,
    },
    middleware: [
        ...getDefaultMiddleware(),
        sagaMiddleware,
    ],
    devTools: true,
});
export default index;

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
