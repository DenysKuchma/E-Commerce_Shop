import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import client from "../../../utils/client";
import { GET_ONE_GOOD } from "../../../gql";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css"
import { GET_ONE_PRODUCT, setOneProductsAC } from "../reducers/oneProductReducer";


function* getOneProduct(action) {
    try {
        console.log(action.payload.productId)
        const res = yield call(() => client.query({
            query: GET_ONE_GOOD,
            variables: {
                query: JSON.stringify([
                    { "_id": action.payload.productId},

                ])
            }
        }))
        console.log(res)
        yield put(setOneProductsAC({data: res.data.GoodFindOne}));
        yield call(toast.success, `LOADED GOOD`);
    } catch (error) {
        yield call(toast.warn, "ERROR WITH GETTING GOOD");
    }
}

export function* oneProductSaga() {
    yield takeEvery(GET_ONE_PRODUCT, getOneProduct);
}