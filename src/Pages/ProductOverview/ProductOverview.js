import React from 'react'

function ProductOverview() {
    return (
        <div className = "product-overview">
            <div className = "product-image"></div>
            <div className = "product-desc">
                <span className = "product-name"></span>
                <span className = "product-price"></span>
            </div>
        </div>
    )
}

export default ProductOverview;

// After styling, more options that needed to be added to productDesc are :
//  Choose your size, colors, multiple images, Add to Cart;
