/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import CartList from '../card-list/Cart-list.comonent';
import './card-component.style.css'

const Card = (props:any) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
            <h1>{props.monster.name} </h1>

        </div>
    );
}

export default Card;
