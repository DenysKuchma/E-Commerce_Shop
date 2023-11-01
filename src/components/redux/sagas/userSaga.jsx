import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import client from "../../../utils/client";
import { GET_TOKEN } from "../../../gql";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css"
import { GET_USER_TOKEN, setUserTokenAC } from "../reducers/userReducer";


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

export function* userSaga(){
    yield takeEvery(GET_USER_TOKEN, getToken)
}