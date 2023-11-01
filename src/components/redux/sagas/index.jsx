import { all } from "redux-saga/effects";
import { userSaga } from "./userSaga";
import { productsSaga } from "./productsSaga";

export function* rootSaga() {
    yield all([userSaga(), productsSaga()])
}