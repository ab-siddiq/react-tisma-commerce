import React, { useState } from 'react';
import "./Product.css"
const Product = (props) => {
    const { id, title, price, description,image } = props.product;
    
    return (
        <div className='product'>
            <img className='product-image' src={image} alt={title} />
            <p>Name: {title.slice(0,15)}</p>
            <p>Product code: {id}</p>
            <p>Price: {price}</p>
            <p>Description: {description.slice(0,20)}</p>
            <button className='add-cart' onClick={()=>props.handleAddToCart(props.product)}>Add To Cart</button>
        </div>
    );
};

export default Product;