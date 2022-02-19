import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../Lesson1-nav/Nav';
import audio5 from '../../../audios/audios-exercise3/audio_5.m4a'
import audio6 from '../../../audios/audios-exercise3/audio_6.m4a'
import audio7 from '../../../audios/audios-exercise3/audio_7.m4a'
import audio8 from '../../../audios/audios-exercise3/audio_8.m4a'
import './Exercise3.css'
import ReactAudioPlayer from 'react-audio-player';
const data = [
    {
        "id": 1,
        "audio": audio5,
        "text1": 'jag pratar inte sevenska',
        "text2": 'I do not speak Swedish'
    },
    {
        "id": 2,
        "audio": audio6,
        "text1": 'Kan du hjälpa mig?  ',
        "text2": 'Can you help me?)'
    },
    {
        "id": 3,
        "audio": audio7,
        "text1": 'CHan älskar Afrobeat musik  ',
        "text2": 'He loves Afrobeat music '
    },
    {
        "id": 4,
        "audio": audio8,
        "text1": 'Hon bor i Sverige',
        "text2": 'She lives in Sweden'
    },



]
const Exercise3b = () => {
    return (
        <div>
            <div className="d-flex">
                <Nav />
                <ProgressBar striped variant='warning' now={75}></ProgressBar>
                <p className='mt-1 mx-2' >3/6</p>
            </div>
            <div className='exercise-3 pt-3'>
                {
                    data.map(items => <li className='list' key={items.id}>
                        <div className='d-flex'>
                            <ReactAudioPlayer
                                className='mt-5'
                                src={items.audio}
                                controls
                            />
                            <div className='mt-4 mx-5 background pt-2'>
                                <p>{items.text1}</p>
                                <p>{items.text2}</p>
                            </div>
                        </div>
                    </li>)
                }
            </div>

            <div className='continue-section'>
                <button className='continue-btn  btn-lg'>
                    <Link className='btn-style' to='/e4'>Continue</Link>
                </button>
            </div>
        </div>
    );
};

export default Exercise3b;