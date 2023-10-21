import React, { useState } from 'react'
import styles from './login.module.css'
import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { setUserTokenAndLogin } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import { GET_TOKEN } from '../../utils/gql';
import  { useNavigate } from 'react-router-dom'


const Login = () => {
    const [ fetchAuth, { data } ] = useLazyQuery(GET_TOKEN);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
            login: '',
            password: ''
    })

    useEffect(() => {
        if(data?.login){
            dispatch(setUserTokenAndLogin(data.login, userInfo.login))
            setTimeout(() => navigate('/'), 1000)
        }
    }, [data, userInfo.login, dispatch, navigate]);

    const handleUpdateLogin = (e) => {
        setUserInfo( {...userInfo, login: e.target.value})
    }

    const handleUpdatePassword = (e) => {
        setUserInfo( {...userInfo, password: e.target.value})
    }

    const hadleGetToken = () => {
        fetchAuth({
            variables: {login: userInfo.login, password: userInfo.password}
        })
    }



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

export default Login