import React, { useState } from 'react';
import './page3.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'
import Nav from '../Lesson1-nav/Nav';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const Page5 = () => {
    const [show, Setshow] = useState(false);
    const [button, setbutton] = useState(false)

    return (
        <div>
            <div className='d-flex'>
                <Nav />
                <ProgressBar className='progress' variant='warning' now={25} />
                <p className='mx-3 mt-1'>1/6</p>
            </div>


            <div className='page-1'>
                <h1 className='py-4'>Your first Swedish words! Click  To Listen</h1>
                <div className='hej-audio'>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=3cBB-E2EtCw"
                        height='260px'
                        width='500px'
                        controls
                        autoPlay
                    />
                </div>
                <div className='god-morgon'>
                    {
                        show ? <h4 className=''>God kväll</h4> : null
                    }
                </div>
                <div className='divider'>

                </div>
                <div className='mt-1'>
                    <h4>Good evening </h4>
                </div>

            </div>
            <div className='continue'>
                <div className='pt-3'>
                    {
                        !button ? <motion.button
                            whileTap={{ scale: 1.3, background: "green" }} onClick={() => {
                                setTimeout(function () {
                                    setbutton(true)
                                }, 2000);
                                Setshow(true)
                            }} className='hej-button'>5<span className='px-5'>God kväll</span></motion.button> : null
                    }
                </div>
                {
                    button ? <button className='continue-button btn-lg '

                    ><Link className='continue-btn-style' to='/e1p6'>Continue</Link></button> : null
                }
            </div>
        </div>
    );
};

export default Page5;