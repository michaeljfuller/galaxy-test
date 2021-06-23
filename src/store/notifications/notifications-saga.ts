import {call, put, takeLatest, getContext} from 'redux-saga/effects';

import {fetchLatest, fetchLatestError, setLatest} from "./notifications-actions";
import type {SagaContext} from "../sagaContexts";
import {errorMessage} from "../../utils/error-utils";

function* fetchLatestWorker() {
    try {
        const api: SagaContext<"notifications"> = yield getContext("notifications");

        // @ts-ignore
        const notifications: any = yield call([api, api.fetchLatest]);

        yield put(setLatest(notifications));
    } catch (e) {
        yield put(fetchLatestError(errorMessage(e)));
    }
}

export default function* notificationsSaga() {
    yield takeLatest(fetchLatest.type, fetchLatestWorker);
}
