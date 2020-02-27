import React from 'react';
import {withRouter} from 'react-router-dom';

import './ProductCard.scss';

function ProductCard({history, product}) {
    const {
        name,
        id,
        imgPath,
        price
    } = product;

    return (
        <div className = "product-card">
            <div className = "product-image-container">
                <img src={imgPath} className = "product-image"/>
            </div>
            <div className = "product-desc">
    <span className = "product-title">{name}</span>
    <span className = "product-price">{price}</span>
            </div>
            <div className = "view-details" onClick = {
                () => {}
            }>
                <span onClick = {() => history.push(`/products/product/${product.id}`)}>View Details</span>
            </div>
        </div>
    )
}

export default withRouter(ProductCard);
