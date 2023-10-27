import React, { useEffect, useState } from 'react'
import styles from './login.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTokenAC } from '../../components/redux/reducers/userReducer';




const LoginPage = () => {

    const navigation = useNavigate();
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
            login: '',
            password: ''
    })

    const handleUpdateLogin = (e) => {
        setUserInfo( {...userInfo, login: e.target.value})
    }

    const handleUpdatePassword = (e) => {
        setUserInfo( {...userInfo, password: e.target.value})
    }

    const hadleGetToken = () => {
        dispatch(getTokenAC(userInfo))
    }
    useEffect(() => {
        if (user.token) {
            navigation('/');
        }
    }, [user.token, navigation]);





    return (
        <div className={styles.login_container}>
            <h2>Login</h2>
            <form>
                <div className={styles.input_group}>
                    <label>Login</label>
                    <input type="text" name="login" placeholder="Enter your login" value={userInfo.login} onChange={handleUpdateLogin} />
                </div>
                <div className={styles.input_group}>
                    <label>Password</label>
                    <input type="password"  placeholder="Enter your password" value={userInfo.password} onChange={handleUpdatePassword}/>
                </div>
                <button onClick={hadleGetToken} type="button">Login</button>
            </form>
        </div>
    );
}

export default LoginPage