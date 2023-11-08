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
                    { category: action.payload.categoryId },
                    {
                        limit: action.payload.limit,
                        skip: action.payload.skip
                    }
                ])
            }
        }))

        yield put(setProductsAC(res.data.CategoryFindOne.goods, action.payload.categoryId));
        yield call(toast.success, `LOADED ${res.data.CategoryFindOne.goods.length} SECRET ITEMS`);
    } catch (error) {
        yield call(toast.warn, "ERROR WITH GETTING GOODS");
    }
}

export function* productsSaga() {
    yield takeEvery(GET_PRODUCTS, getProducts);
}