import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Useauth from '../../Hooks/Useauth';
import './HomeContainer.css'
const HomeContainer = () => {
    const { percent, lession1 } = Useauth()
    return (
        <div className='home-container mt-3'>

            <div className="d-flex">
                <img className='memoji mx-5 img-fluid' src="https://i.ibb.co/NKX2fMH/memoji.png" alt="" />
                <div className=''>
                    <h1 className='text-start mt-3'>Hej!</h1>
                    <h3 className='d-flex'><span className='mx-2'>You have completed</span><b> {percent}% </b> &nbsp;of the course</h3>
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

                    <motion.button
                        className='button'
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link className='button-details' to='/e1p1'>
                            <h4><b>Lesson 1 : greetings & subject pronouns</b></h4>
                            <h5 className='ml-2'>Here you will learn : </h5>
                            <ul>
                                <li>how to greet people</li>
                                <li>subject pronouns</li>
                            </ul>
                        </Link>

                    </motion.button>

                    <motion.button
                        className='button-2'
                        whileHover={{ scale: 1.1 }}
                        disabled={!lession1 ? true : false}
                    >

                        <h4>Lesson 2 : greetings & subject pronouns</h4>
                        <h6 className='ml-2'>Here you will learn : </h6>
                        <ul>
                            <li>how to greet people</li>
                            <li>subject pronouns</li>
                        </ul>

                    </motion.button>


                </div>

            </div>
        </div>
    );
};


export default HomeContainer;