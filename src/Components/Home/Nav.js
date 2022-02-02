import React from 'react';
import './nav.css'
const Nav = () => {
    return (
        <div className='container mt-2 '>
            <img className='logo' src="https://i.ibb.co/qJG3vwd/logo.png" alt="" />
            <div className='header mt-4'>
                <div className='d-flex ml-5'>
                    <a className='text-warning  home h4' href="#">Home</a>
                    <a className='text-dark  home h4' href="#">Songs</a>
                    <a className='text-dark  home h4' href="#">Culture</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;