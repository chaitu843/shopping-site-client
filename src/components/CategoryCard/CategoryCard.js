import React from 'react'

import './CategoryCard.scss';

function CategoryCard({ imgName, descBackgroundColor, backgroundColor, descrption: { heading, catchLine, category }, imgOrder }) {
    const imageDir = `assets`;
    return (
        <div className="category-card-container" style = {{
            backgroundColor: backgroundColor,
        }
        }>
            <div className="card-details">
                <div className="card-image-container" style={{
                    order: imgOrder,
                    backgroundImage: `url(${imageDir}/${imgName})`,
                    backgroundSize: 'cover'
                }}>
                </div>
                <div className="card-desc" style = {{
                    backgroundColor: descBackgroundColor
                }}>
                    <div className="wrapper">
                        <span className="heading">{heading}</span>
                        <span className="catchLine">{catchLine}</span>
                        <hr />
                        <span className="category">{category}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard