import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="brand-name">
            <a href='/tisma_commerce'>Tisma Commerce</a>
            </div>
            
            <div className='menu'>
            <a href='/shop'>Shop</a>
            <a href='/product'>Product</a>
            <a href='/contact'>Contact</a>
            </div>
            
        </div>
    );
};

export default Header;