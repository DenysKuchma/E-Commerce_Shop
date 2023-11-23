import React, { useState } from 'react';
import Login from '../../components/login';
import Registr from '../../components/registr';
import styles from './authPage.module.css';

const AuthPage = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = () => {
        setIsLoginForm(prevState => !prevState);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.auth_container}>
                <div className={`${styles.form_container} ${isLoginForm ? '' : styles.flipped}`}>
                    <div className={`${styles.login_page} ${isLoginForm ? '' : styles.inactive}`}>
                        <Login />
                    </div>
                    <div className={`${styles.registration_page} ${isLoginForm ? styles.inactive : ''}`}>
                        <Registr />
                    </div>
                </div>
            </div>
            <button onClick={toggleForm} className={styles.toggle_button}>
                {isLoginForm ? 'Switch to Registration' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default AuthPage;
