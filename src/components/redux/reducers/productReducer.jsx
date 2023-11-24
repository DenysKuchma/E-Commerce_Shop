export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const GET_SALE_PRODUCTS = 'GET_SALE_PRODUCTS'
export const SET_SALE_PRODUCTS = 'SET_SALE_PRODUCTS'

const defaultState = {
    data: [],
    saleData: [],
}

export default function productReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                data: action.payload.data
            }
        case SET_SALE_PRODUCTS:
            return{
                ...state,
                saleData: action.payload.saleData,
                isSaleDataLoaded: true
            }
        default:
            return state
    }
}

export const getProductsAC = (categoryId) => ({
    type: GET_PRODUCTS,
    payload: {
        categoryId,
    }
})

export const setProductsAC = ({data}) => ({
    type: SET_PRODUCTS,
    payload: {
        data
    }
})
export const getSaleProductsAC = (categoryId) => ({
    type: GET_SALE_PRODUCTS,
    payload: {
        categoryId,
    }
})

export const setSaleProductsAC = ({saleData}) => ({
    type: SET_SALE_PRODUCTS,
    payload: {
        saleData
    }
})

