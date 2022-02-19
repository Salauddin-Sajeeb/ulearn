import React from 'react';
import { useState } from 'react/cjs/react.development';
import VideoPlayer from 'react-video-js-player'
import Nav from './Lesson1-nav/Nav';
import './page2.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
const Page2 = () => {

    const [show, Setshow] = useState(false);
    const [button, setbutton] = useState(false)

    return (
        <div className=''>
            <div className='d-flex'>
                <Nav />
                <ProgressBar className='progress' striped variant='warning' now={10} />
                <p className='mx-3 mt-1'>1 / 6</p>
            </div>
            <div className='page-2'>
                <h1 className='py-4'>Your first Swedish words! Click to listen</h1>
                <div className='hejda-audio'>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=A5yth-HyCr8"
                        height='250px'
                        controls
                        autoplay
                    />
                </div>
                <div className='hejda'>
                    {
                        show ? <h4>Hej då </h4> : null
                    }
                </div>
                <div className='divider'>

                </div>
                <div className='mt-1'>
                    <h4>Goodbye

                    </h4>
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

                        }} className='hejda-button '>2<span className='px-5'>Hej då </span></motion.button> : null
                    }
                </div>
                {
                    button ? <button className='continue-button btn-lg' onClick={() => { }}

                    >
                        <Link className='continue-btn-style' to='/e1p3'>CONTINUE</Link>
                    </button> : null
                }
            </div>
        </div>
    );
};

export default Page2;