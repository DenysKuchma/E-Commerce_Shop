// import { rootReducer } from "./reducers"
// import createSagaMiddleware from "@redux-saga/core";
// import { rootSaga } from "./sagas"
// import { configureStore } from "@reduxjs/toolkit";


// const getStore = () => {
//     const sagaMiddlware = createSagaMiddleware();

//     const store = configureStore({
//         reducer: rootReducer,
//         // products: productReucer,
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddlware),
//     })
    
//     sagaMiddlware.run(rootSaga)

//     return store
// }



// export default getStore


import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';


const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: combineReducers({
        user: userReducer,
        products: productReducer,
        }),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    });

    sagaMiddleware.run(rootSaga)
    return store
}

export default getStore
