import React from 'react'
import { Link } from 'react-router-dom';
import navNavigation from '../../utils/mainMenu';
import  styles  from './header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/reducers/userReducer';

const Header = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.user.login);
    const logout = () => {
        dispatch(logoutUser()); 
    }
    return (
        <header className={styles.header}>
            <div className='container'>
                <nav className={styles.nav}>
                    <button className={styles.menu_btn}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={styles.menu}>
                    {navNavigation.map((item, index) => 
                        <li key={index} className={styles.menu__list}>
                            <Link to={item.path} className={styles.menu__link}>
                                {item.name}
                            </Link>
                        </li>)}
                    </ul>
                    <Link to='/' className={styles.logo}>
                        <img src="images/logo.svg" alt="#"/>
                    </Link>
                    <div className={styles.menu__left_item}>
                    {userLogin !== '' ? (
                            <>
                                <div>Hey, {userLogin}</div>
                                <button onClick={logout}>Logout</button>
                            </>
                        ) : (
                            <Link to='/login' className={styles.login}>
                                <div>LOGIN</div>
                            </Link>
                        )}
                        <Link to='/' className={`${styles.backet} ${styles.backet__on}`}>
                            <img src="images/backet.svg" alt="#"/>
                            <span className={styles.backet__info}>0</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header