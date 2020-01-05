import React from 'react'
import CategoryCard from '../components/CategoryCard/CategoryCard';

function LandingPage() {

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

    const sportsDescription = {
        heading: 'FAST AND FURIOUS',
        catchLine: 'BE FIT AND READY',
        category: 'Shop Sports'
    }
    return (
        <div className="landing-page">
            <CategoryCard descBackgroundColor = "#FAE9E3" backgroundColor = "#F5F3F2" descrption = {womenDescrption} imgName = 'women.jpg' linkUrl = '/women' shopCTA = 'SHOP WOMEN' />
            <CategoryCard imgOrder = "2" descBackgroundColor = "#A3C7BD" backgroundColor = "#D3E4DF" descrption = {menDescription} imgName = 'Men.jpg' linkUrl = '/men' shopCTA = 'SHOP MEN' />
            <CategoryCard descBackgroundColor = "#eac5fa" backgroundColor = "#F5F3F2" descrption = {sportsDescription} imgName = 'sports.jpg' linkUrl = '/sports' shopCTA = 'SHOP SPORTS' />
        </div>
    )
}

export default LandingPage;
