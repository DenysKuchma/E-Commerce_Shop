
import { GET_ALL_GOODS } from "../../../gql";
import { GET_ALL_PRODUCTS, setAllProductsAC } from "../reducers/allProductReducer";
import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import client from "../../../utils/client";

function* getAllProducts(action) {
    try {
        const res = yield call(() => client.query({
            query: GET_ALL_GOODS,
            variables: {
            query: JSON.stringify([
                {},
                {
                limit: [action.payload.limit],
                skip: [action.payload.skip]
                },
    
            ])
            }
        }))
        yield put(setAllProductsAC({ data: res.data.GoodFind }));
    } catch (error) {
        toast.error('ERROR WITH GETTING ITEMS', {
            position: "top-right",
            autoClose: 2000,
        });
    }
}

export function* allProductsSaga(){
    yield takeEvery(GET_ALL_PRODUCTS, getAllProducts)
}