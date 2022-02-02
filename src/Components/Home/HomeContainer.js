import React from 'react';
import { Link } from 'react-router-dom';
import './HomeContainer.css'
const HomeContainer = () => {
    return (
        <div className='home-container mt-3'>

            <div className="d-flex">
                <img className='memoji mx-5 img-fluid' src="https://i.ibb.co/NKX2fMH/memoji.png" alt="" />
                <div className=''>
                    <h1 className='text-start mt-3'>Hej!</h1>
                    <h3>You have Completed 0% of the course</h3>
                </div>
            </div>

            <div className="lesson d-flex">
                <div>
                    <div className="ellipse">

                    </div>
                    <div className="ellipse-1">

                    </div>
                    <div className='line-1'></div>
                    <div className="ellipse">

                    </div>
                    <div className="ellipse-1">

                    </div>
                    <div className='line-1'></div>
                </div>
                <div className='lessons-input'>
                    <button className='button'>
                        <Link className='button-details' to='/lesson1'>
                            <h4>Lesson 1 : Grettings & Subject Pronouns</h4>
                            <h5 className='ml-2'>Here You will learn : </h5>
                            <ul>
                                <li>How to Greet People</li>
                                <li>About Subject pronouns</li>
                            </ul>
                        </Link>
                    </button>
                    <button className='button-2'>
                        <h4>Lesson 1 : Grettings & Subject Pronouns</h4>
                        <h6 className='ml-2'>Here You will learn : </h6>
                        <ul>
                            <li>How to Greet People</li>
                            <li>About Subject pronouns</li>
                        </ul>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default HomeContainer;