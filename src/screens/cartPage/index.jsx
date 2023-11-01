import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../../components/redux/reducers/cartReducer';
import styles from './cartPage.module.css'

const CartPage = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(store => store.cart.items)

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };
    const handleRemoveOneFromCart = (id) => {
        dispatch(updateQuantity(id, -1));
    };

    const handleAddOneToCart = (id) => {
        dispatch(updateQuantity(id, 1));
    };
    const getTotalPrice = () => {
        return cartProducts.reduce((total, item) => total + item.totalPrice, 0);
    };

    return (
        <div className="container">
            {cartProducts.length === 0 ? (
                <div className={styles.empty}>
                    <h2 >Your cart is empty</h2>
                    <Link to='/shop' className={styles.login}>
                        <p>GO TO SHOPING</p>
                    </Link>
                </div>
            ) : (      
                <>       
                    {cartProducts.length > 0 && cartProducts.map((item, index) => (
                        <div key={index} className={styles.cartItem}>
                            <div className={styles.itemInfo}>
                                <h3 className={styles.accessories__item_title}>{item.name}</h3>
                                <p className={styles.accessories__item_price}>${item.price} USD</p>
                                <div className={styles.quantity}>
                                    Quantity: {item.quantity}
                                    <button onClick={() => handleRemoveOneFromCart(item._id)}>-</button>
                                    <button onClick={() => handleAddOneToCart(item._id)}>+</button>
                                </div>
                            </div>
                            <div className={styles.left_conteiner}>
                                <div className={styles.total}>Total: ${item.totalPrice} USD</div>
                                <div className={styles.actions}>
                                    <button onClick={() => handleRemoveFromCart(item._id)}>Удалить</button>
                                </div>
                            </div>
            
                        </div>
                    ))}
                    {cartProducts.length > 0 && (
                        <div className={styles.totalPrice}>
                            <p>Total Price: ${getTotalPrice()}</p>
                        </div>
                    )}
                </>   
            )}
    </div>
    );
};


export default CartPage