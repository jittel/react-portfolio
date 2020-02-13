import React, {useState, useEffect} from 'react';
import Card from '../components/Card'
import API from '../utils/API'

export default function Gallery() {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        API.getAllCards().then(res => {
            setCards(res.data)
        })
    }, [])

    return (
        <div>
            <h1>portfolio cards</h1>
            <div class='row'>
                <Card  cards={cards}/>
                <Card  cards={cards}/>
                <Card  cards={cards}/>
            </div>
            <div class='row'>
                <Card  cards={cards}/>
                <Card  cards={cards}/>
                <Card  cards={cards}/>
            </div>
        </div>
    )
}