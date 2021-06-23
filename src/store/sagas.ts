import {all, fork} from 'redux-saga/effects';
import user from "./user/user-saga";
import notifications from "./notifications/notifications-saga";

export function* rootSaga() {
    yield all([
        fork(user),
        fork(notifications),
    ]);
}
export default rootSaga;
