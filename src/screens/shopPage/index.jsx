import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../../components/categories'
import styles from './shop.module.css'


const ShopPage = () => {
    const dispatch = useDispatch()
    const isToken = useSelector(store => store.user.token)



    return (
        <>

        <section className={styles.shop}>
            <div className="container">
                

                <h2 className={styles.shop__title + " " + ["section-title"]}>SHOP</h2>
                <p className={styles.shop__text}>CHOOSE A CATEGORY</p>
                {/* <div className={styles.shop__items}> 
                {isToken ? (
                    <ShopCards/>
                ) : (
                    <>
                    <Link to="/login" className={styles.accessories__item_btn}>Go to Login</Link>

                    
                    </>
                )}

                </div> */}
                <Categories />
            </div>
        </section>
        </>
    )
}

export default ShopPage