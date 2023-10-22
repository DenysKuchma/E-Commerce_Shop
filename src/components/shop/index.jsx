import React from 'react'
import styles from './shop.module.css'
const Shop = () => {
    return (
        <>
        <div className={styles.buy}>
            <p className={styles.buy__bg}>OCULUS</p>
            <img src="images/oculus.png" alt="" className={styles.buy__img}/>
            <button className={styles.buy__btn}>
                <span className={styles.buy__btn__text}>BUY NOW</span>
                <span className={styles.buy__btn__price}>399,99 USD</span>
            </button>
            <p className={styles.buy__text}>Meta Quest 2 is for ages 13+</p>
        </div>
        <section className={styles.accessories}>
            <div className="container">
                <h2 className={styles.accessories__title + " " + ["section-title"]}>ACCESSORIES</h2>
                <p className={styles.accessories__text}>Personalize every experience</p>
                <div className={styles.accessories__items}>
                    <div className={styles.accessories__item}>
                        <img className={styles.accessories__item_img} src="images/acc1.jpg" alt="" />
                        <h3 className={styles.accessories__item_title}>Meta Quest 2 Carrying Case</h3>
                        <p className={styles.accessories__item_text}>Protect your system–at home or away.</p>
                        <p className={styles.accessories__item_price}>$59.99 USD</p>
                        <button className={styles.accessories__item_btn}>BUY NOW</button>
                    </div>
                    <div className={styles.accessories__item}>
                        <img className={styles.accessories__item_img} src="images/acc2.jpg" alt="" />
                        <h3 className={styles.accessories__item_title}>Link Cable</h3>
                        <p className={styles.accessories__item_text}>Harness the power of your PC with this premium fiber-optic cable.</p>
                        <p className={styles.accessories__item_price}>$79.99 USD</p>
                        <button className={styles.accessories__item_btn}>BUY NOW</button>
                    </div>
                    <div className={styles.accessories__item}>
                        <img className={styles.accessories__item_img} src="images/acc3.jpg" alt="" />
                        <h3 className={styles.accessories__item_title}>Meta Quest 2 Active Pack</h3>
                        <p className={styles.accessories__item_text}>A wipeable facial interface, wrist straps, and knuckle straps.</p>
                        <p className={styles.accessories__item_price}>$69.99 USD</p>
                        <button className={styles.accessories__item_btn}>BUY NOW</button>
                    </div>
                    <div className={styles.accessories__item}>
                        <img className={styles.accessories__item_img} src="images/acc4.jpg" alt="" />
                        <h3 className={styles.accessories__item_title}>Meta Quest Gift Cards</h3>
                        <p className={styles.accessories__item_text}>Redeemable on 350+ games and apps.</p>
                        <p className={styles.accessories__item_price}>$15-50 USD</p>
                        <button className={styles.accessories__item_btn}>BUY NOW</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Shop