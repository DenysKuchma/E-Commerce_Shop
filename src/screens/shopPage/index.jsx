import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShopCards from '../../components/shopCard'
import styles from './shop.module.css'


const ShopPage = () => {

    const isToken = useSelector(store => store.user.token)

    return (
        <>

        <section className={styles.accessories}>
            <div className="container">
                

                <h2 className={styles.accessories__title + " " + ["section-title"]}>SHOP</h2>
                <p className={styles.accessories__text}>ONLY FOR REGISTR USERS</p>
                <div className={styles.accessories__items}> 
                {isToken ? (
                    <ShopCards/>
                ) : (
                    <Link to="/login" className={styles.accessories__item_btn}>Go to Login</Link>
                )}
                </div>
            </div>
        </section>
        </>
    )
}

export default ShopPage