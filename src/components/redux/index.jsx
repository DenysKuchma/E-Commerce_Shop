import { applyMiddleware, compose, createStore } from "redux"
import { rootReducer } from "./reducers"
import { createLogger } from "redux-logger";

const getStore = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                createLogger({ collapsed: true})
            )
        )
    )

    return store
}



export default getStore