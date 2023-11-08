import { all } from "redux-saga/effects";
import { userSaga } from "./userSaga";
import { productsSaga } from "./productsSaga";
import { categorySaga } from "./categorySaga";

export function* rootSaga() {
    yield all([userSaga(), productsSaga(), categorySaga()])
}