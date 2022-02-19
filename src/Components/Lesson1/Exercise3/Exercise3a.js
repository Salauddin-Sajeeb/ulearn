import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../Lesson1-nav/Nav';
import audio1 from '../../../audios/audios-exercise3/audio_1.m4a'
import audio2 from '../../../audios/audios-exercise3/audio_2.m4a'
import audio3 from '../../../audios/audios-exercise3/audio_3.m4a'
import audio4 from '../../../audios/audios-exercise3/audio_4.m4a'
import './Exercise3.css'
const data = [
    {
        "id": 1,
        "audio": audio1,
        "text1": 'jag pratar inte sevenska',
        "text2": 'I do not speak Swedish'
    },
    {
        "id": 2,
        "audio": audio2,
        "text1": 'Kan du hjälpa mig?  ',
        "text2": 'Can you help me?)'
    },
    {
        "id": 3,
        "audio": audio3,
        "text1": 'CHan älskar Afrobeat musik  ',
        "text2": 'He loves Afrobeat music '
    },
    {
        "id": 4,
        "audio": audio4,
        "text1": 'Hon bor i Sverige',
        "text2": 'She lives in Sweden'
    },



]
const Exercise3a = () => {
    return (
        <div>
            <div className="d-flex">
                <Nav />
                <ProgressBar striped variant='warning' now={70}></ProgressBar>
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
                            <div className='mt-5 mx-5 background pt-2'>
                                <p>{items.text1}</p>
                                <p>{items.text2}</p>
                            </div>
                        </div>
                    </li>)
                }
            </div>

            <div className='continue-section'>
                <button className='continue-btn  btn-lg'>
                    <Link className='btn-style' to='/e3p2'>Continue</Link>
                </button>
            </div>

        </div>
    );
};

export default Exercise3a;
