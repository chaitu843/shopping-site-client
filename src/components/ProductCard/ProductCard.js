import React from 'react';

import './ProductCard.scss';

function ProductCard({product}) {
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
                <span>View Details</span>
            </div>
        </div>
    )
}

export default ProductCard
