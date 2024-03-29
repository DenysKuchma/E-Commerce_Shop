export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const SEND_ORDER = 'SEND_ORDER';
export const CLEAR_CART = 'CLEAR_CART';

const defaultState = {
    items: [], 
};

export default function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const idToAdd = action.payload.item._id;
            const existingItem = state.items.find((item) => item._id === idToAdd);
            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                    totalPrice: (existingItem.quantity + 1) * existingItem.price,
                };

                const updatedItems = state.items.map((item) =>
                    item._id === idToAdd ? updatedItem : item
                );

                return {
                    ...state,
                    items: updatedItems,
                };
            } else {
                const newItem = { ...action.payload.item, quantity: 1, totalPrice: action.payload.item.price };
                return {
                    ...state,
                    items: [...state.items, newItem],
                };
            }
        case REMOVE_FROM_CART:
            const idToRemove = action.payload.id;
            const updatedItems = state.items.map((item) => {
                if (item._id === idToRemove) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.price };
                    } else {
                        return null; 
                    }
                } else {
                    return item;
                }
            }).filter(Boolean);
            return {
                ...state,
                items: updatedItems,
            };
        case UPDATE_QUANTITY:
            const { id, quantity } = action.payload;
            const updatedItem = state.items.map(item => {
                if (item._id === id) {
                    const newQuantity = item.quantity + quantity;
                    if (newQuantity >= 0) {
                        const newTotalPrice = newQuantity * item.price;
                        return { ...item, quantity: newQuantity, totalPrice: newTotalPrice };
                    } else {
                        return { ...item, quantity: 0, totalPrice: 0 };
                    }
                }
                return item;
            });
            const filteredItems = updatedItem.filter(item => item.quantity > 0); 
            return {
                ...state,
                items: filteredItems,
            }; 
        case CLEAR_CART:
            return {
                ...state,
                items: [] 
            };  
        default:
            return state;
    }
}

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: {
        item,
    },
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: {
        id,
    },
});


export const updateQuantity = (id, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: {
        id,
        quantity,
    },
});

export const sendOrder = (data) => ({
    type: SEND_ORDER,
    payload: {
        data
    },
});

export const clearCart = () => ({
    type: CLEAR_CART
});