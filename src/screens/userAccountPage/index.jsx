import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoAC, getUserOrdersAC } from '../../components/redux/reducers/userReducer';
import styles from './userAccountPage.module.css';

const UserAccountPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const { token, login, password, userInfo, orders  } = useSelector(state => state.user);

    useEffect(() => {
        if (token && login) {
            dispatch(getUserInfoAC(login));
            dispatch(getUserOrdersAC(login));
        }
    }, [dispatch, token, login]);

    const getImageURL = (url) => url.startsWith('http') ? url : `http://shop-roles.node.ed.asmer.org.ua/${url}`;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    console.log(orders)
    const renderOrders = () => {
        if (!Array.isArray(orders)) {
            return <p>No orders available.</p>;
        }
    
        return orders.map(order => {
            if (!Array.isArray(order.orderGoods)) {
                return (
                    <div key={order._id} className={styles.orderCard}>
                        <h4 className={styles.orderTitle}>Order ID: {order._id}</h4>
                        <p className={styles.orderDate}>Date: {new Date(Number(order.createdAt)).toLocaleString()}</p>
                        <p>No goods available for this order.</p>
                    </div>
                );
            }
    
            return (
                <div key={order._id} className={styles.orderCard}>
                    <h4 className={styles.orderTitle}>Order ID: {order._id}</h4>
                    <p className={styles.orderDate}>Date: {new Date(Number(order.createdAt)).toLocaleString()}</p>
                    {order.orderGoods.map((item, index) => (
                        <div key={index} className={styles.orderItem}>
                            <p className={styles.itemName}>Product: {item.good?.name ?? 'Product name not available'}</p>
                            <p className={styles.itemCount}>Quantity: {item.count}</p>
                            <p className={styles.itemPrice}>Price per item: ${item.price}</p>
                            <p className={styles.itemTotal}>Total: ${item.total}</p>
                        </div>
                    ))}
                    <p className={styles.orderTotal}>Order Total: ${order.total}</p>
                </div>
            );
        });
    };
    
    return (
        <div className={styles.accountContainer}>
            <h2 className={styles.title}>My Account</h2>
            <div className={styles.infoSection}>
                <div className={styles.infoRow}>
                    <p className={styles.label}>Login:</p>
                    <p className={styles.value}>{userInfo?.login || login}</p>
                </div>
                <div className={styles.infoRow}>
                    <p className={styles.label}>Nick:</p>
                    <p className={styles.value}>{userInfo?.nick || 'No Nickname'}</p>
                </div>
                <div className={styles.infoRow}>
                    <p className={styles.label}>Password:</p>
                    <p className={styles.value_password}>
                        {showPassword ? password : '••••'}
                        <button onClick={togglePasswordVisibility} className={styles.button_password}>
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </p>
                </div>
                <div className={styles.infoRow}>
                    <p className={styles.label}>Avatar:</p>
                    {userInfo?.avatar?.url ? (
                        <img
                            src={getImageURL(userInfo.avatar.url)}
                            alt="User Avatar"
                            className={`${styles.avatar} ${styles.avatarImage}`}
                        />
                    ) : (
                        <p className={styles.value}>[No Avatar]</p>
                    )}
                </div>
                <div className={styles.infoRow_orders}>
                <h2 className={styles.title}>My Orders</h2>
                    <div className={styles.allOrders}>
                        {renderOrders()}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default UserAccountPage;
