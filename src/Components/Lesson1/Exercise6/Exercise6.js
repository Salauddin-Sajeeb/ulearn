import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Nav from '../Lesson1-nav/Nav';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './exercise6.css'
import ReactAudioPlayer from 'react-audio-player';
import audio from '../../../audios/hej_c.mp3'
import { Link } from 'react-router-dom';
import Useauth from '../../../Hooks/Useauth';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fbc556',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,


};
const Exercise6 = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { handlePercent, finishLession1 } = Useauth()

    return (
        <div>
            <div className="d-flex">
                <Nav />
                <ProgressBar striped variant='warning' now={95}></ProgressBar>
                <p className='mt-1 mx-2' >6/6</p>
            </div>
            <div className='page-6'>
                <h1 className='pt-2'>Basic Conversation-hej!</h1>
                <h6>Fill in the gaps for the following conversation!</h6>
                <div className='audio-sec d-flex'>
                    <button className='audio-button'>
                        <ReactAudioPlayer
                            src={audio}
                            autoPlay
                            controls
                        />
                    </button>
                    <img className='img-fluid image mx-5' src="https://i.ibb.co/27cLJbh/Whats-App-Image-2022-02-09-at-1-07-25-PM.jpg" alt=""></img>
                </div>

                <div className='conversation '>
                    <div className='guy d-flex'>
                        <img className='guy-img' src="https://i.ibb.co/HD1Ym9w/guy.png" alt="" />

                        <p className='mt-4 paragraph '>hejsan!kull att see! <br />
                            Hey! Great to see you!</p>
                    </div>
                    <div className="d-flex girl">
                        <p className='mt-4 paragraph '><input type="text" /> , hur mår du?  <br />
                            Hello, how are you?</p>
                        <img className='guy-img' src="https://i.ibb.co/D8BHLmV/girl.png" alt="" />
                    </div>
                    <div className='guy d-flex'>
                        <img className='guy-img' src="https://i.ibb.co/HD1Ym9w/guy.png" alt="" />

                        <p className='mt-4 paragraph'>Jo <input type="text" /> , det är bara bra <br />
                            I'm well, thanks</p>
                    </div>
                </div>
                <div className='hint-area d-flex '>
                    <div className='solution pt-3'>
                        <Button className='bg-warning text-dark py-2' onClick={handleOpen}>Show Solution</Button>
                        <Modal

                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"

                        >
                            <Box sx={style}>

                                <Typography id="modal-modal-description" >
                                    The Numbers represent the position of the spaces <br />
                                    1.hej <br /> 2.Tack

                                </Typography>
                            </Box>
                        </Modal>


                    </div>




                    <div className='continue'>
                        <button onClick={() => {
                            handlePercent()
                            finishLession1()
                        }
                        } className='continue-button  btn-lg'>
                            <Link className='btn-style' to='/'>Continue</Link>
                        </button>
                    </div>

                </div>


            </div>


        </div >
    );
};

export default Exercise6;