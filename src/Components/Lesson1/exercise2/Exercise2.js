import React from 'react';
import Nav from '../Lesson1-nav/Nav';
import './Exercise2.css'
const Exercise2 = () => {
    return (
        <div>
            <Nav />
            <div className='exercise-2'>
                <h2 className='pt-3'>Choose the currect Pronouns</h2>
                <div className='video-section mt-4'>

                </div>

                <div className='button-section'>
                    <div>
                        <button className='btn btn-primary mx-5 px-5'>Hello</button>
                        <button className='btn btn-primary mx-5 px-5'>Hello</button>
                        <button className='btn btn-primary mx-5 px-5'>Hello</button>
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn-primary mx-5 px-5'> Hello</button>
                        <button className='btn btn-primary mx-5 px-5'>Hello</button>
                        <button className='btn btn-primary mx-5 px-5'>Hello</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise2;