import React, { useState } from 'react';
import Nav from './Lesson1-nav/Nav';
import VideoPlayer from 'react-video-js-player'
import hej from '../../videos/hej.mov'
import './page1.css'
const Page1 = () => {
    const [show, Setshow] = useState(false);
    const [button, setbutton] = useState(false)
    const VideoSrc = hej;

    return (
        <div>
            <Nav />
            <div className='page-1'>
                <h1 className='py-4'>Your first Swedish words! Click To Listen</h1>
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
                <div className='mt-3'>
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
                    button ? <button className='continue-button btn-lg'

                    ><a className='continue-btn-style' href="#page-2">Continue</a></button> : null
                }
            </div>
        </div>
    );
};

export default Page1;