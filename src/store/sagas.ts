import {all, fork} from 'redux-saga/effects';
import user from "./sagas/user";
import notifications from "./sagas/notifications";

export function* rootSaga() {
    yield all([
        fork(user),
        fork(notifications),
    ]);
}
export default rootSaga;
