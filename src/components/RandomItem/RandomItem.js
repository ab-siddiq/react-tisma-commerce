import React from 'react';
import './RandomItem.css';
const RandomItem = ({ cart }) => {
    let randItemPrice, randItemImage, randItemName;
    if (cart === undefined) {
        randItemPrice = null;
         randItemImage = null;
         randItemName = null;
    } else {
         randItemPrice = cart.price;
         randItemImage = cart.image;
         randItemName = cart.title;
    }
    return (
        
        <div>
            <div className='random-item'>          
            <img src={randItemImage} alt={randItemName} />        
            <p className='title'>{randItemName}</p>        
            <p>{randItemPrice}</p>   
        </div>
        </div>
    );
};

export default RandomItem;