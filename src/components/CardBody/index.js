import React from 'react';
import './style.css'

export default function CardBody(props) {
    return (
        <div className='CardBody card'>
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{props.card.title}</h5>
                <p class="card-text">{props.card.body}</p>
                <a href="#" class="btn btn-primary">{props.card.link}</a>
            </div>
        </div>
    )
}