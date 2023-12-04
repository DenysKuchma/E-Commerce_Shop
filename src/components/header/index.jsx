import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import navNavigation from '../../utils/mainMenu';
import  styles  from './header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutUserAC } from '../redux/reducers/userReducer';
import classNames from 'classnames';

const Header = () => {
    const cartProducts = useSelector((store) => store.cart.items);
    const isAuthorized = useSelector(state => state.user.authorized);
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const userLogin = useSelector((store) => store.user.login)
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const getTotalItemCount = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };
    const totalItemCount = getTotalItemCount(cartProducts);

    const logout = () => {
        dispatch(logoutUserAC()); 
    }


    return (
        <header className={styles.header}>
            <div className='container'>
                <nav className={styles.nav}>
                    <button className={styles.menu_btn} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={classNames(styles.menu, { [styles['burger-menu-visible']]: menuOpen })}>
                        {navNavigation.map((item, index) => 
                            <li key={index} className={styles.menu__list}>
                                <Link to={item.path} className={styles.menu__link}>
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <Link to='/' className={styles.logo}>
                        <img src="images/logo.svg" alt="#"/>
                    </Link>
                    <div className={styles.menu__left_item}>
                    {isAuthorized ? (
                            <>
                                <Link to='/account' className={styles.account_button}>
                                    <p>{userLogin}</p>
                                    <p>My account</p>
                                </Link>
                                <button onClick={logout}>Logout</button>
                            </>
                        ) : (
                            <Link to='/auth' className={styles.account_button}>
                                <div>LOGIN</div>
                            </Link>
                        )}
                        <Link to='/cart' className={`${styles.backet} ${styles.backet__on}`}>
                            <img src="images/backet.svg" alt="#"/>
                            <span className={styles.backet__info}>{totalItemCount}</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header