import React from 'react';

const RandomItem = ({ cart }) => {
    let randItemPrice, randItemImage, randItemName;
    if (cart === undefined) {
        
    } else {
         randItemPrice = cart.price;
         randItemImage = cart.imge;
         randItemName = cart.title;
    }
    return (
        <div>
            <div className='random-item'>          
            <img src={randItemImage} alt={randItemName} />        
            <p className='title'>{randItemName.slice(0,15)}</p>        
            <p>{randItemPrice}</p>   
            <button>delete</button>
        </div>
        </div>
    );
};

export default RandomItem;