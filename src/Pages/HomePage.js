import React from 'react'
import CategoryCard from '../components/CategoryCard/CategoryCard';

function HomePage() {

    const womenDescrption = {
        heading: 'SULTRY AND SMART',
        catchLine: 'HOT SPRING LOOKS',
        category: 'Shop Women'
    }

    const menDescription = {
        heading: 'ELEGANT AND SLICK',
        catchLine: 'GET READY FOR SUMMER',
        category: 'Shop Men'
    }
    return (
        <div className="home-page">
            <CategoryCard descBackgroundColor = "#FAE9E3" backgroundColor = "#F5F3F2" descrption = {womenDescrption} imgName = 'women.jpg' linkUrl = '/women' />
            <CategoryCard imgOrder = "2" descBackgroundColor = "#A3C7BD" backgroundColor = "#D3E4DF" descrption = {menDescription} imgName = 'Men.jpg' linkUrl = '/men' />
        </div>
    )
}

export default HomePage;
