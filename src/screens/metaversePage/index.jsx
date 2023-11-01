import React from 'react'
import styles from './metaverse.module.css'

const MetavercePage = () => {
    return (
        <>
            <div className={styles.buy}>
                <p className={styles.buy__bg}>OCULUS</p>
                <img src="images/oculus.png" alt="" className={styles.buy__img}/>
                <button className={styles.buy__btn}>
                    <span className={styles.buy__btn__text}>In future</span>
                    <span className={styles.buy__btn__price}>399,99 USD</span>
                </button>
                <p className={styles.buy__text}>Meta Quest 2 is for ages 13+</p>

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
                                <button className={styles.accessories__item_btn}>In future</button>
                            </div>
                            <div className={styles.accessories__item}>
                                <img className={styles.accessories__item_img} src="images/acc2.jpg" alt="" />
                                <h3 className={styles.accessories__item_title}>Link Cable</h3>
                                <p className={styles.accessories__item_text}>Harness the power of your PC with this premium fiber-optic cable.</p>
                                <p className={styles.accessories__item_price}>$79.99 USD</p>
                                <button className={styles.accessories__item_btn}>In future</button>
                            </div>
                            <div className={styles.accessories__item}>
                                <img className={styles.accessories__item_img} src="images/acc3.jpg" alt="" />
                                <h3 className={styles.accessories__item_title}>Meta Quest 2 Active Pack</h3>
                                <p className={styles.accessories__item_text}>A wipeable facial interface, wrist straps, and knuckle straps.</p>
                                <p className={styles.accessories__item_price}>$69.99 USD</p>
                                <button className={styles.accessories__item_btn}>In future</button>
                            </div>
                            <div className={styles.accessories__item}>
                                <img className={styles.accessories__item_img} src="images/acc4.jpg" alt="" />
                                <h3 className={styles.accessories__item_title}>Meta Quest Gift Cards</h3>
                                <p className={styles.accessories__item_text}>Redeemable on 350+ games and apps.</p>
                                <p className={styles.accessories__item_price}>$15-50 USD</p>
                                <button className={styles.accessories__item_btn}>In future</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className={styles.equipment}>
            <div className="container">
                <h2 className={styles.equipment_title + " " + ["section-title"]}>IN THE BOX</h2>
                <div className={styles.equipment_box}>
                    <div className={`${styles.equipment_box_item} ${styles.equipment_box_item_one}`}>
                        <img src="images/eq1.jpg" alt="" className={styles.equipment_box_img} />
                        <p className={styles.equipment_box_text}>VR Headset</p>
                    </div>
                    <div className={styles.equipment_box_item}>
                        <img src="images/eq2.jpg" alt="" className={styles.equipment_box_img} />
                        <p className={styles.equipment_box_text}>Two Touch Controllers & AA Batteries</p>
                    </div>
                    <div className={styles.equipment_box_item}>
                        <p className={styles.equipment_box_title}>What's included</p>
                    </div>
                    <div className={styles.equipment_box_item}>
                        <img src="images/eq3.jpg" alt="" className={styles.equipment_box_img} />
                        <p className={styles.equipment_box_text}>Two Touch Controllers & AA Batteries</p>
                    </div>
                    <div className={styles.equipment_box_item}>
                        <img src="images/eq4.jpg" alt="" className={styles.equipment_box_img} />
                        <p className={styles.equipment_box_text}>Glasses Spacer</p>
                    </div>
                </div>
            </div>
        </section>
        <div className={styles.promo}>
            <div className="container">
                <div className={styles.promo__inner}>
                    <button className={styles.promo__btn}>GO</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MetavercePage