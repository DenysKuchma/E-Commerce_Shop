import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoAC } from '../../components/redux/reducers/userReducer';
import styles from './userAccountPage.module.css';

const UserAccountPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const { token, login, password, userInfo } = useSelector(state => state.user);

    useEffect(() => {
        if (token && login) {
            dispatch(getUserInfoAC(login));
        }
    }, [dispatch, token, login]);

    const getImageURL = (url) => url.startsWith('http') ? url : `http://shop-roles.node.ed.asmer.org.ua/${url}`;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
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
            </div>
        </div>
    );
}

export default UserAccountPage;
