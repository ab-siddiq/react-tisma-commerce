import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import RandomItem from '../RandomItem/RandomItem';
import './Cart.css'

const Cart = ({ cart }) => {
    const [randomItem, setRandomItem] = useState(0);
    const selectRandom = item => {
        const keys = Object.keys(item);
        let randomKey = 0;
        randomKey = keys[Math.floor(Math.random() * keys.length)];
        setRandomItem(randomKey);
    }
    return (
        <div className='cart'>
            <div className='cart-items'>
                {cart.map(item => <CartItem key={item.id} item={item}></CartItem>)}
                <div className="button-area">
                    <button onClick={() => selectRandom(cart)}>Choose 1 Fro Me</button>
                    <button>Choose Again</button>
                </div>
                <RandomItem key={cart.id} cart={cart[randomItem]}></RandomItem>
            </div>
            {/* {cart.map(item=><CartItem item={item}></CartItem>)} */}
        </div>
    );
};

export default Cart;