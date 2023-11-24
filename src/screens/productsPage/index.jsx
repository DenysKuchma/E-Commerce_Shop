import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCategotysAC } from '../../components/redux/reducers/categoryReducer';
import SaleSlider from '../../components/saleSlider';
import ShopCards from '../../components/shopCard';
import styles from './productsPage.module.css';

const ProductsPage = () => {
    const location = useLocation();
    const categoryId = location.state?.categoryId;
    const [currentCategory, setCurrentCategory] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector((store) => store.category.data);
    useEffect(() => {
        dispatch(getCategotysAC());
    }, [dispatch]);

    useEffect(() => {
        if (categories && categoryId) {
            const currentCategory = categories.find((item) => item._id === categoryId);
            setCurrentCategory(currentCategory);
        }
    }, [categoryId, categories]);

    if (!Array.isArray(categories)) {
        return <div>Loading...</div>; 
    }


    const saleCategory = categories.find(category => category.name === 'Sale');
    const saleCategoryId = saleCategory ? saleCategory._id : null;

    if (!categories) {
        return null;
    }

    const filteredCategories = categories.filter((item) => item.image.url !== null);

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.side}>
                    <h2>Another category</h2>
                    {filteredCategories.length > 0 && filteredCategories.map((item, index) => (
                        <ul key={index}>
                            <li>
                                <button
                                    className={styles.categoriesCardButton}
                                    onClick={() => navigate(`/shop/category/${item._id}`, { state: { categoryId: item._id } })}
                                    style={{ color: item._id === currentCategory?._id ? 'red' : 'black' }}>
                                    {item._id === currentCategory?._id ? item.name + " - Current Category" : item.name}
                                </button>
                            </li>
                        </ul>
                    ))}
                        <button 
                            className={`${styles.categoriesCardButton} ${styles.allProducts}`}
                            onClick={() => navigate(`/shop/allproducts`)}>
                                All products
                        </button>
                </div>
                <div className={styles.main_card_page}>
                    <div className={styles.slider}>
                        {saleCategoryId ? <SaleSlider saleCategoryId={saleCategoryId} /> : <div>Loading...</div>}
                    </div>
                    <h2 className={styles.title}> {currentCategory ? currentCategory.name : 'Loading...'}</h2> 
                    <div className={styles.card}>
                        <ShopCards id={categoryId} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
