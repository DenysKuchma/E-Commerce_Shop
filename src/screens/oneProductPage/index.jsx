import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../components/redux/reducers/cartReducer';
import { getOneProductsAC } from '../../components/redux/reducers/oneProductReducer';
import styles from './oneProductPage.module.css';

const OneProductPage = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(store => store.oneProduct.data);
    const [selectedImage, setSelectedImage] = useState(0); 

    useEffect(() => {
        dispatch(getOneProductsAC(productId));
    }, [productId, dispatch]); 

    const getImageURL = url => 'http://shop-roles.node.ed.asmer.org.ua/' + url;

    const handleAddToCart = item => dispatch(addToCart(item));

    const changeImage = index => { 
        setSelectedImage(index);
    };


    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.card__container}>
            <div className={styles.imageGallery}>
                {product.images && product.images.length > 0 && (
                    <img
                        className={styles.card__image}
                        src={getImageURL(product.images[selectedImage].url)}
                        alt="Product"
                    />
                )}
                <div className={styles.thumbnailContainer}>
                    {product.images && product.images.length > 0 && product.images.map((image, index) => (
                        <img
                            key={index}
                            className={`${styles.thumbnail} ${index === selectedImage ? styles.selected : ''}`}
                            src={getImageURL(image.url)}
                            alt="Thumbnail"
                            onClick={() => changeImage(index)}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.card__details}>
                <div className={styles.card__title_conteiner}>
                    <h3 className={styles.card__title}>{product.name}</h3>
                </div>
                <div className={styles.card__description_conteiner}>
                    <p className={styles.card__description}>{product.description}</p>
                </div>
                <div className={styles.card__buy_conteiner}>
                    <p className={styles.card__price}>${product.price} USD</p>
                    <button className={styles.card__button} onClick={() => handleAddToCart(product)}>
                        BUY NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OneProductPage;
