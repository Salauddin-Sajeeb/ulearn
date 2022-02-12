import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../Lesson1-nav/Nav';

const Exercise2e = () => {
    return (
        <div>
            <div className='d-flex'>
                <Nav />
                <ProgressBar striped variant='warning' now={55} />
                <p className='mx-2 pt-1'>2/6</p>
            </div>
            <div className='exercise-2'>
                <h2 className='pt-3'>Choose the currect Pronouns</h2>
                <div className='video-section mt-4'>

                </div>

                <div className='button-section'>
                    <div>
                        <button className='btn btn-secondary mx-5 px-5'>Hello</button>
                        <button className='btn btn-secondary mx-5 px-5'>Hello</button>
                        <button className='btn btn-secondary mx-5 px-5'>Hello</button>
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn-secondary mx-5 px-5'> Hello</button>
                        <button className='btn btn-secondary mx-5 px-5'>Hello</button>
                        <button className='btn btn-secondary mx-5 px-5'>Hello</button>
                    </div>
                </div>
                <div className='continue-section'>
                    <button className='continue-btn  btn-lg'>
                        <Link className='btn-style' to='/e2p6'>Continue</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Exercise2e;