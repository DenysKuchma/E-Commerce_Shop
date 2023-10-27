import React from 'react'
import styles from './contactUs.module.css'

const ContactUsPage = () => {
    return (
        <section className={styles.contacts}>
            <div className="container">
                <h2 className={styles.contacts__title}>Get news and updates</h2>
                <div className={styles.contacts__inner}>
                    <div className={styles.contacts__form}>
                        <form className={styles.form}>
                            <input className={styles.form__input} placeholder="E-mail" />
                            <button className={styles.form__btn} type="submit">GO</button>
                        </form>
                        <p className={styles.contacts__text}>
                            By signing up you agree to receive updates and marketing messages (e.g. email, social, etc.) from Meta about Meta’s existing and future products and services.
                            <br /> You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link included in our messages.
                            <br /> Your subscription is subject to the Terms and Privacy Policy.
                        </p>
                    </div>
                    <a href="mailto:den.kuchma@gmail.com" className={styles.contacts__email}>oculusshop@gmail.com</a>
                </div>
            </div>
        </section>
    )
}

export default ContactUsPage