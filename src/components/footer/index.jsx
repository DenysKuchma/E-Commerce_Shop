import React from 'react';
import { Link } from 'react-router-dom';
import navNavigation from '../../utils/mainMenu';
import styles from './footer.module.css';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                    {navNavigation.map((item, index) => 
                        <li key={index} className={styles.menu__list}>
                            <Link to={item.path} className={styles.menu__link}>
                                {item.name}
                            </Link>
                        </li>)}
                    </ul>
                    <Link to='/' className={styles.logo}>
                        <img src="images/logo.svg" alt=""/>
                    </Link>
                    <div  className={styles.social}>
                        <li className={styles.social__item}>
                            <Link to='/' className={styles.social__link}>
                            <img src="images/yt.svg" alt=""/>
                            </Link>
                        </li>
                        <li className={styles.social__item}>
                            <Link to='/' className={styles.social__link}>
                            <img src="images/fs.svg" alt=""/>
                            </Link>
                        </li>
                        <li className={styles.social__item}>
                            <Link to='/' className={styles.social__link}>
                            <img src="images/inst.svg" alt=""/>
                            </Link>
                        </li>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer