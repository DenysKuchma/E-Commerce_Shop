export const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'
export const SET_ONE_PRODUCT = 'SET_ONE_PRODUCT'

const defaultState = {
    data: [],
}

export default function oneProductReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ONE_PRODUCT:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}

export const getOneProductsAC = (productId) => ({
    type: GET_ONE_PRODUCT,
    payload: {
        productId,
    }
})

export const setOneProductsAC = ({data}) => ({
    type: SET_ONE_PRODUCT,
    payload: {
        data
    }
})
