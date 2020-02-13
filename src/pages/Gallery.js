import React, {useState, useEffect} from 'react';
import Card from '../components/Card'
import API from '../utils/API'

export default function Gallery() {

    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'title',
            body: 'blah blah blah',
            link: 'www.google.com'
        },
        {
            id: 2,
            title: 'different',
            body: 'woop woop woop',
            link: 'www.google.com'
        }
    ]);
  

    return (
        <div>
            <h1>portfolio cards</h1>
            <div class='row'>
                <Card  card={cards[0]}/>
                <Card  card={cards[1]}/>
                {/* <Card  card={cards}/> */}
            </div>
            <div class='row'>
                {/* <Card  cards={cards}/>
                <Card  cards={cards}/>
                <Card  cards={cards}/> */}
            </div>
        </div>
    )
}