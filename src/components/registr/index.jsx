import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTokenLoginAC } from '../redux/reducers/userReducer'
import styles from './registr.module.css'
import { toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css"

const Registr = () => {
    const [repeatPassword, setRepeatPassword] = useState('');
    const [userInfo, setUserInfo] = useState({
        login: '',
        password: ''
    })
    const dispatch = useDispatch();
    const handleUpdateUserName = (event) => {
        setUserInfo(prevState => ({...prevState, login: event.target.value}));
    }
    
    const handleUpdateUserPassword = (event) => {
        setUserInfo(prevState => ({...prevState, password: event.target.value}));
    }
    const handleUpdateRepeatPassword = (value) => {
        setRepeatPassword(value);
    }
    const handleRegister = () => {
        if (userInfo.password !== repeatPassword) {
            toast.error("Passwords do not match!", {
                position: "top-right",
                autoClose: 2000,
            });
            return;
        }
        dispatch(getTokenLoginAC(userInfo));
    }


    return (
        <div className={styles.registr_container}>
            <h2>Register</h2>
            <form>
                <div className={styles.input_group}>
                    <label>Login</label>
                    <input type="text" placeholder="Enter your login" value={userInfo.login} onChange={handleUpdateUserName} />
                </div>
                <div className={styles.input_group}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" value={userInfo.password} onChange={handleUpdateUserPassword}/>
                </div>
                <div className={styles.input_group}>
                    <label>Repeat password</label>
                    <input type="password" placeholder="Repeat your password" value={repeatPassword} onChange={(e) => handleUpdateRepeatPassword(e.target.value)}/>
                </div>
                <button type="button" onClick={handleRegister}>Register</button>
            </form>
        </div>
    )
}

export default Registr