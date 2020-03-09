import React from 'react';
import './style.css'

export default function CardBody(props) {
    return (
        <div className='CardBody card'>
            <img src={props.card.image} class="card-img-top" alt="pic"></img>
            <div class="card-body">
                <h5 class="card-title">{props.card.title}</h5>
                <p class="card-text">{props.card.body}</p>
                <a href={props.card.link} class="btn btn-primary" target="_blank">{props.card.button}</a>
            </div>
        </div>
    )
}