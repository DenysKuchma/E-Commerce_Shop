import React, { useState } from 'react'
import styles from './home.module.css';

const HomePage = () => {
    const [activeContent, setActiveContent] = useState('content-1');
    const [isVideoModalOpen, setVideoModalOpen] = useState(false);

    const handleTabClick = (contentId) => {
        setActiveContent(contentId);
    };

    const handleVideoOpen = () => {
        setVideoModalOpen(true);
    };

    const handleVideoClose = () => {
        setVideoModalOpen(false);
    };

    return (
        <>
            <section className={styles.top}>
                <div className="container" >
                <h1 className={styles.home_title}>Future product</h1>
                    <h1 className={styles.title}>Meta Quest 2</h1>
                    <p className={styles.subtitel}>Get an Elite Strap free</p>
                    <p className={styles.top__text}>For a limited time only, 
                    save $59.99 USD. Offer ends 1/19/23
                    </p>
                    <button className={styles.buy_btn}>
                    <span className={styles.buy_btn__text}>In future</span>
                    <span className={styles.buy_btn__price}>399,99 USD</span>
                    </button>
                    <p className={styles.buy__text}>Meta Quest 2 is for ages 13+</p>
                </div>
            </section>
            <section className={styles.features}>
            <div className="container">
                <div className={styles.features__titles}>
                    <h2 className={styles.features__title + " " + ["section-title"]}>PRODUCT FEATURES</h2>
                    <p className={styles.features__text}>Easy to set up and safe to use</p>
                </div>
                <div className={styles.tabs}>
                    <div className={styles.tabs__btn}>
                        <button className={`${styles.tabs__btn_item} ${activeContent === 'content-1' ? styles['tabs__btn_item--active'] : ''}`} onClick={() => handleTabClick('content-1')}>
                            01 Graphics
                        </button>
                        <button className={`${styles.tabs__btn_item} ${activeContent === 'content-2' ? styles['tabs__btn_item--active'] : ''}`} onClick={() => handleTabClick('content-2')}>
                            02 Controls
                        </button>
                        <button className={`${styles.tabs__btn_item} ${activeContent === 'content-3' ? styles['tabs__btn_item--active'] : ''}`} onClick={() => handleTabClick('content-3')}>
                            03 Processor
                        </button>
                        <button className={`${styles.tabs__btn_item} ${activeContent === 'content-4' ? styles['tabs__btn_item--active'] : ''}`} onClick={() => handleTabClick('content-4')}>
                            04 Set up your play area
                        </button>
                        <button className={`${styles.tabs__btn_item} ${activeContent === 'content-5' ? styles['tabs__btn_item--active'] : ''}`} onClick={() => handleTabClick('content-5')}>
                            05 Guardian activity
                        </button>
                        <button className={`${styles.tabs__btn_item} ${activeContent === 'content-6' ? styles['tabs__btn_item--active'] : ''}`} onClick={() => handleTabClick('content-6')}>
                            06 Headset casting
                        </button>
                    </div>
                    <div className={styles.tabs__content}>
                        <div className={`${styles['tabs__content-item']} ${activeContent === 'content-1' ? styles['tabs__content-item--active'] : ''}`} id="content-1">
                            <img className={styles.tabs__content__img} src="images/content.jpg" alt="" />
                            <div className={styles.tabs__content__box}>
                                <h3>Graphics</h3>
                                <p>
                                    With 1832 x 1920 pixels per eye,
                                    everything from multiplayer games
                                    and productivity apps to 360° videos
                                    look beyond incredible
                                </p>
                            </div>
                            {isVideoModalOpen && (
                                <div className={styles.videoModal}>
                                    <div className={styles.videoModalContent}>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/jfKfPfyJRdk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                        <button className={styles.videoModalClose} onClick={handleVideoClose}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className={styles.video}>
                                <button className={styles.video__btn} onClick={handleVideoOpen}>
                                    <img src="images/Play.svg" alt="Play video" />
                                </button>
                                <span>Watch the video</span>
                            </div>
                        </div>
                        <div className={`${styles['tabs__content-item']} ${activeContent === 'content-2' ? styles['tabs__content-item--active'] : ''}`} id="content-2">
                            <img className={styles.tabs__content__img} src="images/content.jpg" alt="" />
                            <div className={styles.tabs__content__box}>
                                <h3>Graphics</h3>
                                <p>
                                    With 1832 x 1920 pixels per eye,
                                    everything from multiplayer games
                                    and productivity apps to 360° videos
                                    look beyond incredible
                                </p>
                            </div>
                            {isVideoModalOpen && (
                                <div className={styles.videoModal}>
                                    <div className={styles.videoModalContent}>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/jfKfPfyJRdk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                        <button className={styles.videoModalClose} onClick={handleVideoClose}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className={styles.video}>
                                <button className={styles.video__btn} onClick={handleVideoOpen}>
                                    <img src="images/Play.svg" alt="Play video" />
                                </button>
                                <span>Watch the video</span>
                            </div>
                        </div>
                        <div className={`${styles['tabs__content-item']} ${activeContent === 'content-3' ? styles['tabs__content-item--active'] : ''}`} id="content-3">
                            <img className={styles.tabs__content__img} src="images/content.jpg" alt="" />
                            <div className={styles.tabs__content__box}>
                                <h3>Graphics</h3>
                                <p>
                                    With 1832 x 1920 pixels per eye,
                                    everything from multiplayer games
                                    and productivity apps to 360° videos
                                    look beyond incredible
                                </p>
                            </div>
                            {isVideoModalOpen && (
                                <div className={styles.videoModal}>
                                    <div className={styles.videoModalContent}>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/jfKfPfyJRdk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                        <button className={styles.videoModalClose} onClick={handleVideoClose}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className={styles.video}>
                                <button className={styles.video__btn} onClick={handleVideoOpen}>
                                    <img src="images/Play.svg" alt="Play video" />
                                </button>
                                <span>Watch the video</span>
                            </div>
                        </div>
                        <div className={`${styles['tabs__content-item']} ${activeContent === 'content-4' ? styles['tabs__content-item--active'] : ''}`} id="content-4">
                            <img className={styles.tabs__content__img} src="images/content.jpg" alt="" />
                            <div className={styles.tabs__content__box}>
                                <h3>Graphics</h3>
                                <p>
                                    With 1832 x 1920 pixels per eye,
                                    everything from multiplayer games
                                    and productivity apps to 360° videos
                                    look beyond incredible
                                </p>
                            </div>
                            {isVideoModalOpen && (
                                <div className={styles.videoModal}>
                                    <div className={styles.videoModalContent}>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/jfKfPfyJRdk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                        <button className={styles.videoModalClose} onClick={handleVideoClose}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className={styles.video}>
                                <button className={styles.video__btn} onClick={handleVideoOpen}>
                                    <img src="images/Play.svg" alt="Play video" />
                                </button>
                                <span>Watch the video</span>
                            </div>
                        </div>
                        <div className={`${styles['tabs__content-item']} ${activeContent === 'content-5' ? styles['tabs__content-item--active'] : ''}`} id="content-5">
                            <img className={styles.tabs__content__img} src="images/content.jpg" alt="" />
                            <div className={styles.tabs__content__box}>
                                <h3>Graphics</h3>
                                <p>
                                    With 1832 x 1920 pixels per eye,
                                    everything from multiplayer games
                                    and productivity apps to 360° videos
                                    look beyond incredible
                                </p>
                            </div>
                            {isVideoModalOpen && (
                                <div className={styles.videoModal}>
                                    <div className={styles.videoModalContent}>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/jfKfPfyJRdk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                        <button className={styles.videoModalClose} onClick={handleVideoClose}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className={styles.video}>
                                <button className={styles.video__btn} onClick={handleVideoOpen}>
                                    <img src="images/Play.svg" alt="Play video" />
                                </button>
                                <span>Watch the video</span>
                            </div>
                        </div>
                        <div className={`${styles['tabs__content-item']} ${activeContent === 'content-6' ? styles['tabs__content-item--active'] : ''}`} id="content-6">
                            <img className={styles.tabs__content__img} src="images/content.jpg" alt="" />
                            <div className={styles.tabs__content__box}>
                                <h3>Graphics</h3>
                                <p>
                                    With 1832 x 1920 pixels per eye,
                                    everything from multiplayer games
                                    and productivity apps to 360° videos
                                    look beyond incredible
                                </p>
                            </div>
                            {isVideoModalOpen && (
                                <div className={styles.videoModal}>
                                    <div className={styles.videoModalContent}>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/jfKfPfyJRdk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                        <button className={styles.videoModalClose} onClick={handleVideoClose}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className={styles.video}>
                                <button className={styles.video__btn} onClick={handleVideoOpen}>
                                    <img src="images/Play.svg" alt="Play video" />
                                </button>
                                <span>Watch the video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default HomePage