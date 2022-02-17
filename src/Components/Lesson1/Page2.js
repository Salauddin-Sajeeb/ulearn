import React from 'react';
import { useState } from 'react/cjs/react.development';
import VideoPlayer from 'react-video-js-player'
import Nav from './Lesson1-nav/Nav';
import Goodbye from '../../videos/hej_då.mov'
import './page2.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom';
const Page2 = () => {

    const [show, Setshow] = useState(false);
    const [button, setbutton] = useState(false)
    const VideoSrc = Goodbye;
    return (
        <div className=''>
            <div className='d-flex'>
                <Nav />
                <ProgressBar className='progress' striped variant='warning' now={10} />
                <p className='mx-3 mt-1'>1/6</p>
            </div>
            <div className='page-2'>
                <h1 className='py-4'>Your first Swedish words! Click To Listen</h1>
                <div className='hej-audio'>
                    <VideoPlayer
                        src={VideoSrc}
                        width="350"
                        height="250"
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
                    <h4> Goodbye </h4>
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
                        }} className='hejda-button '>2<span className='px-5'>Hej då </span></button> : null
                    }
                </div>
                {
                    button ? <button className='continue-button btn-lg' onClick={() => { }}

                    >
                        <Link className='continue-btn-style' to='/e1p3'>Contimue</Link>
                    </button> : null
                }
            </div>
        </div>
    );
};

export default Page2;