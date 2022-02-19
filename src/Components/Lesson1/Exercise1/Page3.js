import React, { useState } from 'react';
import './page3.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '../Lesson1-nav/Nav';
import ReactPlayer from 'react-player';

const Page3 = () => {
    const [show, Setshow] = useState(false);
    const [button, setbutton] = useState(false)

    return (
        <div>
            <div className='d-flex'>
                <Nav />
                <ProgressBar className='progress' variant='warning' now={15} />
                <p className='mx-3 mt-1'>1 / 6</p>
            </div>


            <div className='page-1'>
                <h1 className='py-4'>Your first Swedish words! Click to listen</h1>
                <div className='hej-audio'>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=h8UFY79FiAY"
                        height='250px'
                        controls
                        autoplay
                    />
                </div>
                <div className='god-morgon'>
                    {
                        show ? <h4>God morgon</h4> : null
                    }
                </div>
                <div className='divider'>

                </div>
                <div className='mt-1'>
                    <h4>Good morning</h4>
                </div>

            </div>
            <div className='continue'>
                <div className='pt-3'>
                    {
                        !button ? <motion.button

                        whileTap={{ scale: 1.3, background: "#51E179" }}
                        onClick={() => {
                            setTimeout(function () {
                                setbutton(true)
                            }, 2000);
                            Setshow(true)

                        }} className='hej-button '>3<span className='px-5'>God morgon</span></motion.button> : null
                    }
                </div>
                {
                    button ? <button className='continue-button btn-lg '

                    ><Link className='continue-btn-style' to='/e1p4'>CONTINUE</Link></button> : null
                }
            </div>
        </div>
    );
};

export default Page3;