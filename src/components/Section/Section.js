import React from 'react'

import './Section.scss';

import ProductCard from '../ProductCard/ProductCard';

import products from '../../../public/data/products.json';

function Section(props) {

    const {
        name,
        heading,
    } = props;

    return (
        <div className="section" id={name}>
            <div className="section-heading">
                {heading}
            </div>
            <div className="catalogue-container">
                {
                    products.length ?
                        products.map(product => <ProductCard key={product.id} product={product} />)
                        : null
                }

                <div className = "see-more">
                    <div className = "right-arrow">&rarr;</div>
                </div>
            </div>
        </div>
    )
}

export default Section

// Make a fetch request for every section name and get corresponding products 
// Also keep a check for products and render a loader if needed.