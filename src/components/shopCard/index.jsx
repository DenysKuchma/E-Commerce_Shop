import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/reducers/cartReducer';
import { getProductsAC } from '../redux/reducers/productReducer'
import styles from './shopCard.module.css'

const ShopCards = () => {
    const products = useSelector(store => store.products.data)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductsAC())
    }, [])

    const getImageURL= (url) => 'http://shop-roles.node.ed.asmer.org.ua/' + url

    const handleAddToCart = (item) => dispatch(addToCart(item));


    return (
        <>        
            {products.length > 0 && products?.map((item, index) => 
                <div key={index} className={styles.accessories__item}>
                        <img className={styles.accessories__item_img} src={getImageURL(item.images[0].url)} alt="oops" />
                        <h3 className={styles.accessories__item_title}>{item.name}</h3>
                        <p className={styles.accessories__item_text}>{item.description}</p>
                        <p className={styles.accessories__item_price}>${item.price} USD</p>
                        <button className={styles.accessories__item_btn} onClick={() => handleAddToCart(item)}>BUY NOW</button>
                </div>
                )}
        </>

    )
}

export default ShopCards