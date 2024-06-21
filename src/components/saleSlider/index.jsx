import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSaleProductsAC } from '../redux/reducers/productReducer';
import { Slide } from "react-slideshow-image";
import "../../../node_modules/react-slideshow-image/dist/styles.css";
import styles from "./saleSlider.module.css";
import { useNavigate } from 'react-router-dom';

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
};

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    width: '100%', 
    height: '400px' 
};

const SaleSlider = ({ saleCategoryId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const saleProducts = useSelector(store => store.products.saleData);
    const isSaleProductsLoaded = saleProducts.length > 0; 

    useEffect(() => {
        if (saleCategoryId && !isSaleProductsLoaded) {
            dispatch(getSaleProductsAC(saleCategoryId));
        }
    }, [saleCategoryId, dispatch, isSaleProductsLoaded]);

    const goToProductPage = (productId) => {
        navigate(`/shop/product/${productId}`);
    };

    if (!isSaleProductsLoaded) {
        return <div>Loading Sale Products...</div>;
    }
    const slideImages = saleProducts.map(product => ({
        url: 'https://cors-anywhere.herokuapp.com/http://shop-roles.node.ed.asmer.org.ua/' + product.images[0].url,
        caption: product.name,
        id: product._id
    }));
    
    return (
        <>
            <h2 className={styles.title}>Sale</h2>
            <div className="slide-container" style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}>
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} onClick={() => goToProductPage(slideImage.id)}>
                                <span style={spanStyle}>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))} 
                </Slide>
            </div>
        </>
    );
};

export default SaleSlider;
