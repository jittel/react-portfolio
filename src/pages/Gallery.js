import React, { useState, useEffect } from 'react';
import Card from '../components/Card'
import tj from '../Pictures/trade-jack.png'
import viv from '../Pictures/vivere.png'
import weather from '../Pictures/weather-app.png'
import mosh from '../Pictures/mosh.png'
import './style.css'



export default function Gallery() {

    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Trade Jack',
            body: 'a reverse bidding application for work',
            link: 'https://trade-jack.herokuapp.com',
            image: tj,
            button: 'Click Me!'
        },
        {
            id: 2,
            title: 'Vivere',
            body: 'plan your night on food and drink based on your current location',
            link: 'https://gregreneris.github.io/Project1/',
            image: viv,
            button: 'Click Me!'
        },
        {
            id: 3,
            title: 'Weather App',
            body: 'gives you a one day and five day forecast',
            link: 'https://jittel.github.io/weather-app/',
            image: weather,
            button: 'Click Me!'
        },
        {
            id: 4,
            title: 'Mosh',
            body: 'Local musician social networking app',
            link: 'https://mosh-app.herokuapp.com/',
            image: mosh,
            button: 'Click Me!'
        }
    ]);


    return (
        <div>
            <div class='row'>
                <Card card={cards[0]} />
                <Card card={cards[1]} />
                <Card card={cards[2]} />
                <Card card={cards[3]} />
            </div>
        </div>
    )
}