import React, { useState } from 'react';
import './page3.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'
import hej from '../../../videos/tack.mov'
import VideoPlayer from 'react-video-js-player'
import Nav from '../Lesson1-nav/Nav';

const Page6 = () => {
    const [show, Setshow] = useState(false);
    const [button, setbutton] = useState(false)

    const VideoSrc = hej;
    const delay = e => {
        e.preventDefault()
        setTimeout(() => {

        }, 2000);
    }
    return (
        <div>
            <div className='d-flex'>
                <Nav />
                <ProgressBar className='progress' variant='warning' now={30} />
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
                        show ? <h4 className=''>Tach</h4> : null
                    }
                </div>
                <div className='divider'>

                </div>
                <div className='mt-1'>
                    <h4>Thank You </h4>
                </div>

            </div>
            <div className='continue'>
                <div className='pt-3'>
                    {
                        !button ? <button onClick={() => {
                            setTimeout(function () {
                                setbutton(true)
                            }, 2000);

                            Setshow(true)
                        }} className='hej-button '>6<span className='px-5'>Tach</span></button> : null
                    }
                </div>
                {
                    button ? <button className='continue-button btn-lg '

                    ><Link className='continue-btn-style' to='/e2p1'>Continue</Link></button> : null
                }
            </div>
        </div>
    );
};

export default Page6;