import React from 'react';
import './CartItem.css';
const CartItem = (props) => {
    const { item } = props;
    return (
        <div className='cart-item'>          
            <img src={item.image} alt={item.title} />        
            <p className='title'>{item.title.slice(0,15)}</p>        
            <p>{item.price}</p>   
            <button>delete</button>
        </div>
    );
};

export default CartItem;