import React, { useCallback, useEffect, useState } from 'react';
import styles from './allProductsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAC } from '../../components/redux/reducers/allProductReducer';
import { addToCart } from '../../components/redux/reducers/cartReducer';
import { useNavigate } from 'react-router-dom';

const AllProdutsPage = () => {
    const allProducts = useSelector(store => store.allProducts.data);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 12;
    const navigate = useNavigate();

    const goToProductPage = (productId) => {
        navigate(`/shop/product/${productId}`);
    };

    const getImageURL = (url) => 'http://shop-roles.node.ed.asmer.org.ua/' + url;
    const handleAddToCart = (item) => dispatch(addToCart(item));

    const updateProducts = useCallback((page) => {
        dispatch(getAllProductsAC(6, (page - 1) * 6));
    }, [dispatch]); 

    useEffect(() => {
        updateProducts(currentPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage, updateProducts]);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    if (!allProducts) {
        return null;
    }

    const filteredAllProducts = allProducts.filter((item) => item.images && item.images[0] && item.images[0].url !== null);

    return (
        <div className={styles.wrapper}>
            {filteredAllProducts?.length > 0 && filteredAllProducts?.map((item, index) =>
                <div key={index} className={styles.card__item}>
                    <img className={styles.card__item_img} src={getImageURL(item.images[0].url)} alt="oops" onClick={() => goToProductPage(item._id)} />
                    <h3 className={styles.card__item_title} onClick={() => goToProductPage(item._id)}>{item.name}</h3>
                    <p className={styles.card__item_price}>${item.price} USD</p>
                    <button className={styles.card__item_btn} onClick={() => handleAddToCart(item)}>BUY NOW</button>
                    <button className={styles.card__item_btn_two} onClick={() => goToProductPage(item._id)}>DETAILS</button>
                </div>
            )}

        <div className={styles.pagination}>
                <button onClick={goToFirstPage}>{'<<'}</button>
                <button onClick={goToPrevPage} disabled={currentPage === 1}>{'<'}</button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => goToPage(index + 1)}
                        className={currentPage === index + 1 ? `${styles.active} ${styles.paginationButton}` : styles.paginationButton}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>{'>'}</button>
                <button onClick={goToLastPage}>{'>>'}</button>
            </div>
        </div>
    );
};

export default AllProdutsPage;
