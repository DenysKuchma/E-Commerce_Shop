import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
import client from "../../../utils/client";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css"
import { GET_CATEGORYS, setCategotysAC } from "../reducers/categoryReducer";
import { GET_CATEGORY } from "../../../gql";


function* getCategory(action) {
    try {
        const res = yield call(() => client.query({
            query: GET_CATEGORY,
            variables: {
                query: JSON.stringify([
                    { }, 
                    {
                        limit: [action.payload.limit],
                        skip: [action.payload.skip]
                    },
                ])
            }
        }));
        yield put(setCategotysAC({data: res.data.CategoryFind}));
        yield call(toast.success, `LOADED CATEGORIES`)
    } catch (error) {
        yield call(toast.warn, "ERROR WITH GETTING CATEGORIES");
    }
}

export function* categorySaga(){
    yield takeEvery(GET_CATEGORYS, getCategory)
}