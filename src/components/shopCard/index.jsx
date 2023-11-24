import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/reducers/cartReducer';
import { getProductsAC } from '../redux/reducers/productReducer'
import styles from './shopCard.module.css'

const ShopCards = ({ id: categoryId }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('default');
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
    
    const sortProducts = (products, sortType) => {
        switch (sortType) {
            case 'priceHighToLow':
                return [...products].sort((a, b) => b.price - a.price);
            case 'priceLowToHigh':
                return [...products].sort((a, b) => a.price - b.price);
            case 'alphabetical':
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            default:
                return products;
        }
    }
    const sortedProducts = sortProducts(filteredProducts, sortType);
    const getImageURL= (url) => 'http://shop-roles.node.ed.asmer.org.ua/' + url
    const handleAddToCart = (item) => dispatch(addToCart(item));


    return (
        <>
            <div className={styles.searchContainer}>
                <div className={styles.sortContainer}>
                    <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="alphabetical">Alphabetical</option>
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="Пошук товарів..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
            </div>
            {sortedProducts.length > 0 ? sortedProducts.map((item, index) => (
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