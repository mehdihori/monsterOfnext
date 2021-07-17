/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './card-list.style.css'
import Card from '../card/card-componnent';
;

const CartList = (props: any) => {
    console.log(props)
    return (
       
        <div className="card-list">

            
            
            {props.Monsters.map((monster:any)=>(

            <Card key={monster.id} monster={monster}  />  

))}
            
        </div>
    );
}

export default CartList;
