import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/reducers/cartReducer';
import { getProductsAC } from '../redux/reducers/productReducer'
import styles from './shopCard.module.css'

const ShopCards = ({ id: categoryId }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const products = useSelector(store => store.products.data)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goToProductPage = (productId) => {
        navigate(`/shop/product/${productId}`);
    };

    useEffect(() => {
        dispatch(getProductsAC(categoryId));
    }, [categoryId, dispatch]);

    const filteredProducts = searchTerm
        ? products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : products;

    const getImageURL= (url) => 'http://shop-roles.node.ed.asmer.org.ua/' + url

    const handleAddToCart = (item) => dispatch(addToCart(item));


    return (
        <>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Пошук товарів..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
            </div>
            {filteredProducts.length > 0 ? filteredProducts.map((item, index) => (
                <div key={index} className={styles.card__item}>
                    <img className={styles.card__item_img} src={getImageURL(item.images[0].url)} alt={item.name} onClick={() => goToProductPage(item._id)} />
                    <h3 className={styles.card__item_title} onClick={() => goToProductPage(item._id)}>{item.name}</h3>
                    <p className={styles.card__item_price}>${item.price} USD</p>
                    <button className={styles.card__item_btn} onClick={() => handleAddToCart(item)}>BUY NOW</button>
                    <button className={styles.card__item_btn_two} onClick={() => goToProductPage(item._id)}>DETAILS</button>
                </div>
            )) : <p>No products found.</p>}
        </>
    )
}

export default ShopCards