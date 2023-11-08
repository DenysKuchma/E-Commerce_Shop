import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategotysAC } from '../redux/reducers/categoryReducer';
import styles from './categories.module.css';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const categories = useSelector((store) => store.category.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCategotysAC());
    }, []);

    if (!categories) {
        return null;
    }

    const filteredCategories = categories.filter((item) => item.image.url !== null);

    const getImageURL = (url) => 'http://shop-roles.node.ed.asmer.org.ua/' + url;

    return (
        <div className={styles.categoriesContainer}>
            {filteredCategories.length > 0 && filteredCategories?.map((item, index) => (
            <div key={index} className={styles.categoriesCard}>
                <img
                    className={styles.categoriesCardImage}
                    src={getImageURL(item.image.url)}
                    alt="Category"
                />
                <h3 className={styles.categoriesCardTitle}>{item.name}</h3>
                <button className={styles.categoriesCardButton} onClick={() => navigate(`/shop/${item._id}`, { state: { categoryId: item._id } })}>Перейти</button>
            </div>
            ))}

            
        </div>
    );
};

export default Categories;
