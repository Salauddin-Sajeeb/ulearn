import React, { useState } from 'react';
import Nav from './Lesson1-nav/Nav';
import VideoPlayer from 'react-video-js-player'
import hej from '../../videos/hej.mov'
import './page1.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'
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
                    <VideoPlayer
                        src={VideoSrc}
                        width="350"
                        height="250"
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
                        !button ? <button onClick={() => {
                            Setshow(true)
                            setbutton(true)
                        }} className='hej-button '>1<span className='px-5'>Hej</span></button> : null
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