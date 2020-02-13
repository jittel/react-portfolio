import React from 'react';
import CardBody from '../CardBody';
import './style.css';

export default function Card(props) {

    return (
        <div className='Card col-3'>
            <CardBody card={props.card}/>
        </div>
    )
}