import React from 'react'
import styles from './games.module.css'
const Game = () => {
    return (
        <section className={styles.game}>
            <div className="container">
                <div className={styles.game__title + " " + ["section-title"]} >GAMES</div>
                <div className={styles.game__inner}>
                    <div className={styles.game__descr}>
                        <p className={styles.game__descr_title}>
                            It's all fun and games
                        </p>
                        <p className={styles.game__descr_text}>
                            Discover new adventures, master epic challenges, or revisit classic moments in your favorite games and experiences
                        </p>
                        <a href="#" className={styles.game__link}>SEE ALL GAMES</a>
                    </div>
                    <div className={styles.game__item}>
                        <img className={styles.game__item_img} src="images/game-1.jpg" alt="" />
                        <h3 className={styles.game__item_title}>Blade & Sorcery: Nomad</h3>
                        <p className={styles.game__item_text}>Step into a medieval fantasy sandbox that uses physics to serve up some of the most realistic combat in VR</p>
                        <a href="" className={styles.game__item_link}>see more</a>
                    </div>
                    <div className={styles.game__item}>
                        <img className={styles.game__item_img} src="images/game-2.jpg" alt="" />
                        <h3 className={styles.game__item_title}>Population: One</h3>
                        <p className={styles.game__item_text}>Climb anything. Fight everywhere. Experience battle royale only possible in VR</p>
                        <a href="" className={styles.game__item_link}>see more</a>
                    </div>
                    <div className={styles.game__item}>
                        <img className={styles.game__item_img} src="images/game-3.jpg" alt="" />
                        <h3 className={styles.game__itemtTitle}>Supernatural</h3>
                        <p className={styles.game__item_text}>Box, Flow, Meditate, and Stretch with real coaches in stunning destinations from around the world. Enjoy new workouts every day.</p>
                        <a href="" className={styles.game__item_link}>see more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Game