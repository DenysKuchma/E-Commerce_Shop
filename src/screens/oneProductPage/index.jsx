import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../components/redux/reducers/cartReducer';
import { getOneProductsAC } from '../../components/redux/reducers/oneProductReducer';
import styles from './oneProductPage.module.css'

const OneProductPage = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(store => store.oneProduct.data)


    useEffect(() => {
        dispatch(getOneProductsAC(productId));
    }, []);

    const getImageURL= (url) => 'http://shop-roles.node.ed.asmer.org.ua/' + url

    const handleAddToCart = (item) => dispatch(addToCart(item));

    return (
        <>        
            {product.length > 0 && product?.map((item, index) => 
                <div key={index} className={styles.accessories__item}>
                        <img className={styles.accessories__item_img} src={getImageURL(item.images[0].url)} alt="oops" />
                        <h3 className={styles.accessories__item_title} >{item.name} </h3>
                        <p className={styles.accessories__item_price}>${item.price} USD</p>
                        <button className={styles.accessories__item_btn} onClick={() => handleAddToCart(item)}>BUY NOW</button>
                </div>
            )}
        </>
    )
}

export default OneProductPage