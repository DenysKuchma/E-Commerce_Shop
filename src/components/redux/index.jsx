import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';


const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: combineReducers({
        user: userReducer,
        products: productReducer,
        cart: cartReducer,
        }),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    });

    sagaMiddleware.run(rootSaga)
    return store
}

export default getStore
