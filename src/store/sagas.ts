import {all, fork} from 'redux-saga/effects';
import {userSaga} from "./sagas/user";

export function* rootSaga() {
    yield all([
        fork(userSaga),
    ]);
}
export default rootSaga;
