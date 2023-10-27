import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './errorPage.module.css'

export default function ErrorPage() {


    return (
        <div className={styles.error_page} id="error-page">
            <div className={styles.error_page__content}>
                <h1 className={styles.error_page__title}>404 - Page Not Found</h1>
                <p className={styles.error_page__description}>The page you are looking for might have been removed or doesn't exist. Let's go back to the <Link to="/">Home page</Link>.</p>
            </div>
        </div>
    );
}
