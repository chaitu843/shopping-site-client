import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

function Section(props) {

    const {
        props,
        heading,
        products
    } = props;
    return (
        <div className="section" id={name}>
            <div className="section-heading">
                {heading}
            </div>
            <div className="catalogue-container">
                {
                    products.map(product => <ProductCard key = {product.id} product = {product}/>)
                }
            </div>
        </div>
    )
}

export default Section
