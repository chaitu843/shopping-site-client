import React from 'react'
import Section from '../components/Section/Section'

import sections from '../../public/data/homePage.json';

function HomePage() {

    return (
        <div className = "home-page">
            {
                sections.map(section => <Section key = {section.id} {...section}/>)
            }
        </div>
    )
}

export default HomePage
