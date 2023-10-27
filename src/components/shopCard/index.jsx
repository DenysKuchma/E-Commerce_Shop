import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductsAC } from '../redux/reducers/productReducer'
import styles from './shopCard.module.css'

const ShopCards = () => {
    const products = useSelector(store => store.products.data)
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getProductsAC())
    }, [])

    const getImageURL= (arr) => {
        let randomIMG = 0
        if(arr.length > 0){
            randomIMG = Math.floor(Math.random() * arr.length)
        }
        return  'http://shop-roles.node.ed.asmer.org.ua/' + arr[randomIMG].url 
        
    }
    
    return (
        <>        
            {products.length > 0 && products?.map((item, index) => 
                <div key={index} className={styles.accessories__item}>
                        <img className={styles.accessories__item_img} src={getImageURL(item.images)} alt="" />
                        <h3 className={styles.accessories__item_title}>{item.name}</h3>
                        <p className={styles.accessories__item_text}>{item.description}</p>
                        <p className={styles.accessories__item_price}>${item.price} USD</p>
                        <button className={styles.accessories__item_btn}>BUY NOW</button>
                </div>
                )}

        </>

    )
}

export default ShopCards