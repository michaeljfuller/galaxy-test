import {call, put, takeLatest, getContext} from 'redux-saga/effects';

import {signIn, SignInPayload, signInError, signOut, signOutError, setUser} from "../slices/user";
import type {SagaContext} from "../sagaContexts";
import type {PayloadAction} from "@reduxjs/toolkit";

function* signInWorker(action: PayloadAction<SignInPayload>) {
    try {
        const auth: SagaContext<"auth"> = yield getContext("auth");

        // @ts-ignore
        const user: any = yield call(
            auth.signIn.bind(auth),
            action.payload.email, action.payload.password
        );

        yield put(setUser(user));
    } catch (e) {
        yield put(signInError(e));
    }
}
function* signOutWorker() {
    try {
        const auth: SagaContext<"auth"> = yield getContext("auth");

        // @ts-ignore
        yield call(
            auth.signOut.bind(auth),
        );

        yield put(setUser(undefined));
    } catch (e) {
        yield put(signOutError(e));
    }
}

export function* userSaga() {
    yield takeLatest(signIn.type, signInWorker);
    yield takeLatest(signOut.type, signOutWorker);
}
