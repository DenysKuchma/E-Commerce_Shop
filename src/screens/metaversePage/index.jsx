import React from 'react'
import styles from './metaverse.module.css'

const MetavercePage = () => {
    return (
        <>
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