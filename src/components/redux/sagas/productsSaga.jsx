import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import client from "../../../utils/client";
import { GET_GOODS } from "../../../gql";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css"
import { GET_PRODUCTS, setProductsAC } from "../reducers/productReducer";


function* getProducts(action) {
    try {
        const res = yield call(() => client.query({
            query: GET_GOODS,
            variables: {
                query: JSON.stringify([
                    { "_id": action.payload.categoryId },
                    {},
                ])
            }
        }))
        console.log(res)
        yield put(setProductsAC({data: res.data.CategoryFindOne.goods}));
        yield call(toast.success, `LOADED ${res.data.CategoryFindOne.goods.length} GOODS`);
    } catch (error) {
        yield call(toast.warn, "ERROR WITH GETTING GOODS");
    }
}

export function* productsSaga() {
    yield takeEvery(GET_PRODUCTS, getProducts);
}