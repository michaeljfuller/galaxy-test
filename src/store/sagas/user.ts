import {call, put, takeLatest, getContext} from 'redux-saga/effects';
import type {PayloadAction} from "@reduxjs/toolkit";

import {signIn, SignInPayload, signInError, signOut, signOutError, setUser} from "../slices/user";
import type {SagaContext} from "../sagaContexts";

function* signInWorker(action: PayloadAction<SignInPayload>) {
    try {
        const api: SagaContext<"auth"> = yield getContext("auth");

        // @ts-ignore
        const user: any = yield call(
            [api, api.signIn],
            action.payload.email, action.payload.password
        );

        yield put(setUser(user));
    } catch (e) {
        yield put(signInError(e));
    }
}
function* signOutWorker() {
    try {
        const api: SagaContext<"auth"> = yield getContext("auth");

        // @ts-ignore
        yield call([api, api.signOut]);

        yield put(setUser(undefined));
    } catch (e) {
        yield put(signOutError(e));
    }
}

export default function* userSaga() {
    yield takeLatest(signIn.type, signInWorker);
    yield takeLatest(signOut.type, signOutWorker);
}
