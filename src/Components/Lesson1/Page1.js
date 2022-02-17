import React, { useState } from 'react';
import Nav from './Lesson1-nav/Nav';
import VideoPlayer from 'react-video-js-player'
import hej from '../../videos/hej.mov'
import './page1.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player'
const Page1 = () => {

    const [show, Setshow] = useState(false);
    const [button, setbutton] = useState(false)
    const VideoSrc = hej;

    return (
        <div>
            <div className='d-flex'>
                <Nav />
                <ProgressBar className='progress' variant='warning' now={5} />
                <p className='mx-3 mt-1'>1/6</p>
            </div>


            <div className='page-1'>
                <h1 className='py-4'>Your first Swedish words! Click  To Listen</h1>
                <div className='hej-audio'>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=aK3aUW08YGw"
                        height='250px'
                        controls
                        autoplay
                    />
                </div>
                <div className='hej'>
                    {
                        show ? <h4>Hej</h4> : null
                    }
                </div>
                <div className='divider'>

                </div>
                <div className='mt-1'>
                    <h4>Hello</h4>
                </div>

            </div>
            <div className='continue'>
                <div className='pt-3'>
                    {
                        !button ? <motion.button

                            whileTap={{ scale: 1.3, background: "green" }}
                            onClick={() => {
                                setTimeout(function () {
                                    setbutton(true)
                                }, 2000);
                                Setshow(true)

                            }} className='hej-button'>1<span className='px-5'>Hej</span></motion.button> : null
                    }
                </div>
                {
                    button ? <button className='continue-button btn-lg '

                    ><Link className='continue-btn-style' to='/e1p2'>Continue</Link></button> : null
                }
            </div>
        </div>
    );
};

export default Page1;