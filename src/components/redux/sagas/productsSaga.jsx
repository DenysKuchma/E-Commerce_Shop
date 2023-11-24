import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import client from "../../../utils/client";
import { GET_GOODS } from "../../../gql";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css"
import { GET_PRODUCTS, GET_SALE_PRODUCTS, setProductsAC, setSaleProductsAC } from "../reducers/productReducer";


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

        yield put(setProductsAC({data: res.data.CategoryFindOne.goods}));
        toast.success(`LOADED ${res.data.CategoryFindOne.goods.length} GOODS`, {
            position: "top-right",
            autoClose: 2000,
        })
    } catch (error) {
        toast.warn("ERROR WITH GETTING GOODS", {
            position: "top-right",
            autoClose: 2000,
        })
    }
}
function* getSaleProducts(action) {
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
        yield put(setSaleProductsAC({saleData: res.data.CategoryFindOne.goods}));
    } catch (error) {
        toast.warn("ERROR WITH GETTING GOODS", {
            position: "top-right",
            autoClose: 2000,
        })
    }
}
export function* productsSaga() {
    yield takeEvery(GET_PRODUCTS, getProducts);
    yield takeEvery(GET_SALE_PRODUCTS, getSaleProducts)
}