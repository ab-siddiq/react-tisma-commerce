import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
    // console.log(products);
    const handleAddToCart = product => {
        let newCart = [];
        if (newCart.length > 4) {
            setCart(4);
        }
        else {
            newCart = [...cart, product];
            setCart(newCart);
        }
    }

    const handleRemoveCart = () => {
        setCart([]);
    }

  
    return (
        <div className="shop">
            <div className='card'>
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
                <Cart key={cart} cart={cart} handleRemoveCart={handleRemoveCart} ></Cart>
           
        </div>
        
    );
   
};
export default ( Shop );