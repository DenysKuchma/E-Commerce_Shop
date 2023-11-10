import { all } from "redux-saga/effects";
import { userSaga } from "./userSaga";
import { productsSaga } from "./productsSaga";
import { categorySaga } from "./categorySaga";
import { allProductsSaga } from "./allProductSaga";
import { oneProductSaga } from "./oneProductSaga";

export function* rootSaga() {
    yield all([userSaga(), productsSaga(), categorySaga(), allProductsSaga(), oneProductSaga()])
}