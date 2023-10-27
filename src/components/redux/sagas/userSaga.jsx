import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import client from "../../../utils/client";
import { GET_GOODS, GET_TOKEN } from "../../../gql";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css"
import { GET_USER_TOKEN, setUserTokenAC } from "../reducers/userReducer";
import { GET_PRODUCTS, setProductsAC } from "../reducers/productReducer";



function* getToken(action){
    const res = yield call(() => client.query({
        query: GET_TOKEN,
        variables: {
            ...action.payload
        }
    }))
    if (res.data.login) {
        yield put(setUserTokenAC(res.data.login, action.payload.login, action.payload.password));
        toast.success("Login success", {
            position: "top-right",
            autoClose: 2000,
        })
        
    } else {
        toast.error("Login failed. Please check your credentials", {
            position: "top-right",
            autoClose: 5000,
        })
    }
}

function* getProducts(action) {
    try {
        const res = yield call(() => client.query({
            query: GET_GOODS,
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
        yield put(setProductsAC({ data: res.data.GoodFind }));
        yield call(toast.success, `LOADED ${res.data.GoodFind.length} SECRET ITEMS`);
    } catch (error) {
        yield call(toast.warn, "ERROR WITH GETTING GOODS");
    }
}

export function* userSaga(){
    yield takeEvery(GET_USER_TOKEN, getToken)
    yield takeEvery(GET_PRODUCTS, getProducts)
}