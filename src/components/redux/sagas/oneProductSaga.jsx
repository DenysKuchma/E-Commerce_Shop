import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import client from "../../../utils/client";
import { GET_ONE_GOOD } from "../../../gql";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css"
import { GET_ONE_PRODUCT, setOneProductsAC } from "../reducers/oneProductReducer";


function* getOneProduct(action) {
    try {
        const res = yield call(() => client.query({
            query: GET_ONE_GOOD,
            variables: {
                query: JSON.stringify([
                    { "_id": action.payload.productId},
                    {}
                ])
            }
        }))

        yield put(setOneProductsAC({data: res.data.GoodFindOne}));
        toast.success(`LOADED GOOD`, {
            position: "top-right",
            autoClose: 2000,
        });
    } catch (error) {
        toast.warn("ERROR WITH GETTING GOOD", {
            position: "top-right",
            autoClose: 2000,
        });
    }
}

export function* oneProductSaga() {
    yield takeEvery(GET_ONE_PRODUCT, getOneProduct);
}