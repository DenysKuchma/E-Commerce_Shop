import { toast } from "react-toastify";
import { call, select, takeEvery, put } from "redux-saga/effects";
import { SEND_USER_ORDER } from "../../../gql";
import client from "../../../utils/client";
import { clearCart, SEND_ORDER } from "../reducers/cartReducer";


export const orderDataUpdate = (data = []) => { 
    return data.map(({quantity, _id}) => ({good: {_id}, count: Number(quantity) })) 
}


function* sendOrder(action) { 
    try {
    const token = yield select(state=>state.user.token) 
    const  {data}  = action.payload; 
    console.log(orderDataUpdate(data))
    yield call(() => 
        client.mutate({ 
            mutation: SEND_USER_ORDER, 
            variables: { goods: orderDataUpdate(data) }, 
            context: { 
            headers: { 
                'Content-Type': 'application/json', 
                Authorization: `Bearer ${token}`, 
                } 
            } 
        }));  
        toast.success("ORDER SEND", {
            position: "top-right",
            autoClose: 5000,
        })
        yield put(clearCart());
    } catch (error) {
        toast.error('ERROR WITH SEND ORDER', {
            position: "top-right",
            autoClose: 2000,
        });
    }
}

export function* sendOrderSaga() {
    yield takeEvery(SEND_ORDER, sendOrder);
}