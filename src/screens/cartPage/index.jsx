import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, sendOrder, updateQuantity } from '../../components/redux/reducers/cartReducer';
import styles from './cartPage.module.css'

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartProducts = useSelector(store => store.cart.items);
    const token = useSelector(state => state.user.token);
    
    const checkToken = () => {
        if (!token) {
            navigate('/auth');
        }
        dispatch(sendOrder(cartProducts));
    };

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
                                <Link to={`/shop/product/${item._id}`}>
                                    <h3 className={styles.card__item}>{item.name}</h3>
                                </Link>
                                <p className={styles.card__itemprice}>${item.price} USD</p>
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
                    <div className={styles.conteiner_bottom}>
                        <div> 
                            <button className={styles.order_button} onClick={checkToken}>Send Order</button>
                        </div>
                        <div>
                            {cartProducts.length > 0 && (
                            <div className={styles.totalPrice}>
                                <p>Total Price: ${getTotalPrice()}</p>
                            </div>
                            )}
                        </div>
                    </div>

                </>   
            )}
    </div>
    );
};


export default CartPage