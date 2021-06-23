import {call, put, takeLatest, getContext} from 'redux-saga/effects';

import {fetchLatest, fetchLatestError, setLatest} from "../slices/notifications";
import type {SagaContext} from "../sagaContexts";

function* fetchLatestWorker() {
    try {
        const api: SagaContext<"notifications"> = yield getContext("notifications");

        // @ts-ignore
        const notifications: any = yield call([api, api.fetchLatest]);

        yield put(setLatest(notifications));
    } catch (e) {
        yield put(fetchLatestError(e));
    }
}

export default function* notificationsSaga() {
    yield takeLatest(fetchLatest.type, fetchLatestWorker);
}
