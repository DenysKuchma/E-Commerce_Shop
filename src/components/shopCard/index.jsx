import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/reducers/cartReducer';
import { getProductsAC } from '../redux/reducers/productReducer'
import styles from './shopCard.module.css'

const ShopCards = ({ id: categoryId }) => {
    const products = useSelector(store => store.products.data)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goToProductPage = (productId) => {
        navigate(`/shop/product/${productId}`);
    };

    useEffect(() => {
        dispatch(getProductsAC(categoryId));
    }, [categoryId]);

    const getImageURL= (url) => 'http://shop-roles.node.ed.asmer.org.ua/' + url

    const handleAddToCart = (item) => dispatch(addToCart(item));


    return (
        <>        
            {products.length > 0 && products?.map((item, index) => 
                <div key={index} className={styles.accessories__item}>
                    <img className={styles.accessories__item_img} src={getImageURL(item.images[0].url)} alt="oops" onClick={() => goToProductPage(item._id)}/>
                    <h3 className={styles.accessories__item_title} onClick={() => goToProductPage(item._id)}>{item.name} </h3>
                    <p className={styles.accessories__item_price}>${item.price} USD</p>
                    <button className={styles.accessories__item_btn} onClick={() => handleAddToCart(item)}>BUY NOW</button>
                    <button className={styles.accessories__item_btn_two} onClick={() => goToProductPage(item._id)}>DETAILS</button>
                </div>
            )}
        </>

    )
}

export default ShopCards