import React, { useState, useEffect } from 'react'

import './ProductCatalogue.scss';

import productData from '../../../public/data/products.json';
import ProductCard from '../../components/ProductCard/ProductCard.js';

function ProductCatalogue({match}) {
    const [products, setProducts] = useState(productData);
    console.log(match);
    return (
        <div className="products-catalogue-page">
            <div className="heading">{match.params.category.toUpperCase()}</div>
            <div className="catalogue">
                {
                    products ?
                        products.map(product => <ProductCard key={product.id} product={product} />)
                        : null
                }
                {
                    products ?
                        products.map(product => <ProductCard key={product.id} product={product} />)
                        : null
                }
                {
                    products ?
                        products.map(product => <ProductCard key={product.id} product={product} />)
                        : null
                }
            </div>
        </div>
    )
}

export default ProductCatalogue;

// using hooks 
// use useEffect hook as componentDidMount() and get products data from server

// implement pagination for every 30 results and do the logic on server-side;