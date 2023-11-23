import React from 'react'
import Categories from '../../components/categories'
import styles from './shop.module.css'


const ShopPage = () => {

    return (
        <>
            <section className={styles.shop}>
                <div className="container">
                    <h2 className={styles.shop__title + " " + ["section-title"]}>SHOP</h2>
                    <p className={styles.shop__text}>CHOOSE A CATEGORY</p>
                    <Categories />
                </div>
            </section>
        </>
    )
}

export default ShopPage