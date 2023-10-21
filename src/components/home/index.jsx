import React from 'react'
import styles from './home.module.css';

const Home = () => {
    return (
        <section className={styles.top}>
            <div className="container" >
                <h1 className={styles.title}>Meta Quest 2</h1>
                <p className={styles.subtitel}>Get an Elite Strap free</p>
                <p className={styles.top__text}>For a limited time only, 
                save $59.99 USD. Offer ends 1/19/23
                </p>
                <button className={styles.buy_btn}>
                <span className={styles.buy_btn__text}>BUY NOW</span>
                <span className={styles.buy_btn__price}>399,99 USD</span>
                </button>
                <p className={styles.buy__text}>Meta Quest 2 is for ages 13+</p>
            </div>
        </section>
    )
}

export default Home