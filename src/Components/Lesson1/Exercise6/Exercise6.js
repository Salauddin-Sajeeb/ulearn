import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Nav from '../Lesson1-nav/Nav';
import './exercise6.css'
import ReactAudioPlayer from 'react-audio-player';
import audio from '../../../audios/hej_c.mp3'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Exercise6 = () => {
    const [open, setOpen] = React.useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className="d-flex">
                <Nav />
                <ProgressBar variant='warning' now={100}></ProgressBar>
                <p className='mt-1 mx-2' >6/6</p>
            </div>
            <div className='page-6'>
                <h1 className='pt-2'>Basic Conversation-hej!</h1>
                <h6>Fill in the gaps for the following conversation!</h6>
                <div className='audio-sec'>
                    <button className='audio-button'>
                        <ReactAudioPlayer
                            src={audio}
                            autoPlay
                            controls
                        />
                        <img className='img-fluid image' src="https://i.ibb.co/VBHkXb5/audio.png" alt=""></img>
                    </button>
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
                        <button onClick={handleClickOpen} className='btn btn-warning px-5'>Show Solution</button>
                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >

                            <DialogContent>
                                <DialogContentText sx={{ fontWeight: '500', height: '200px' }}>
                                    Jag ska älska dig tills mitt hjärta går under <br />
                                    Uti alla stunder, med blixtar och dunder <br />
                                    Lova mig att vi räknar sekunder <br />
                                    Åh, baby, jag är alltid med dig <br />
                                    Älska dig tills mitt hjärta går under <br />
                                    Uti alla stunder, med blixtar och dunder <br />
                                    Lova mig att vi räknar sekunder <br />
                                    För, baby, jag är alltid med dig

                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    Close X
                                </Button>
                            </DialogActions>
                        </Dialog>


                    </div>




                    <div className='continue'>
                        <button className='continue-button  btn-lg'>
                            <Link className='btn-style' to='/e6'>Continue</Link>
                        </button>
                    </div>

                </div>


            </div>


        </div >
    );
};

export default Exercise6;