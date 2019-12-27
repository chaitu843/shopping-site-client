import React from 'react';

import './ProductCard.scss';

function ProductCard() {
    return (
        <div className = "product-card">
            <div className = "product-image-container">
                <img src="/assets/product.png" className = "product-image"/>
            </div>
            <div className = "product-desc">
                <span className = "product-title">SLIM FIT CHINOS</span>
                <span className = "product-price">$14.99</span>
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
