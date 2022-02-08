import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import VideoPlayer from 'react-video-js-player'
import Nav from '../Lesson1-nav/Nav';
import { Button } from '@mui/material';
import { ProgressBar } from 'react-bootstrap';
import part1 from "../../../videos/part1_s.mov"
import './exercise4.css'
import { Link } from 'react-router-dom';
const Exercise4 = () => {
    const VideoSrc = part1;
    const [open, setOpen] = React.useState(false);
    const [jag, setJug] = React.useState('jag')
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const jagHandle = (e) => {
        e.preventDefault();
        let value = e.target.value;
        if (value === 'jag') {

        }
        else {
            alert('wrong answer!')
            e.target.value = '';
        }
    }
    const vi = (e) => {
        e.preventDefault();
        let value = e.target.value;
        if (value === 'vi') {

        }
        else {
            alert('wrong answer!')
            e.target.value = '';
        }
    }



    return (
        <div>
            <div className="d-flex">
                <Nav />
                <ProgressBar variant='warning' now={65}></ProgressBar>
                <p className='mt-1 mx-2' >4/6</p>
            </div>
            <div className='exercise-5'>
                <h1 className='py-4'>Myra Granberg</h1>
                <div className='video'>
                    <VideoPlayer
                        src={VideoSrc}
                        width="450"
                        height="100"
                    />
                </div>

                <h4 className='my-2 pb-4'>Fill in the gaps with the correct subject pronouns</h4>

                <div className='text-area d-flex '>
                    <div className='blank-area px-3'>
                        Baby, <input type="text" /> får säga vad <input type="text" /> vill,
                        Ingenting som <input type="text" /> ska tänka på
                        Skrik till hela världen "<input type="text" /> är min",
                        Inget annat kommer spela roll
                        <input type="text" /> har varandra, alltid tillsammans,
                        <input type="text" /> vet jag går ingenstans
                        Baby, <input type="text" /> får säga vad de vill,
                        Ingenting som <input type="text" /> ska tänka på

                        Håll min hand, snart så är <input type="text" /> långt bort
                        Allting kommer lösa sig och
                        I din famn, gör <input type="text" /> vad som helst för dig



                    </div>
                    <div className='horizontal-divider'>

                    </div>
                    <div className='english-area px-3'>
                        Baby they can say whatever they want,
                        Nothing you should think about
                        Scream to the whole world that “you are mine”,
                        Nothing else will matter
                        We have each other, always together
                        You know I'm not going nowhere
                        Baby, they can say whatever they want,
                        Nothing we should think about.


                        Take my hand, soon they are far away,
                        Everything will turn out alright and
                        in your arms, I will do anything for you

                    </div>

                </div>
                <div className='button-sec'>
                    <div>
                        <button className='btn btn-secondary mx-5 px-5 '>jag</button>
                        <button className='btn btn-secondary mx-5 px-5'>de</button>
                        <button className='btn btn-secondary mx-5 px-5'>hon</button>
                        <button className='btn btn-secondary mx-5 px-5'>vi</button>
                        <button className='btn btn-secondary mx-5 px-5'>de</button>
                    </div>
                </div>
                <div className='hint-area d-flex'>
                    <div className='solution pt-3'>
                        <button onClick={handleClickOpen} className='btn btn-warning px-5'>Show Solution</button>
                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >

                            <DialogContent>
                                <DialogContentText sx={{ fontWeight: '500' }}>
                                    Baby, de får säga vad de vill,
                                    Ingenting som du ska tänka på
                                    Skrik till hela världen "Du är min",
                                    Inget annat kommer spela roll
                                    Vi har varandra, alltid tillsammans,
                                    Du vet jag går ingenstans
                                    Baby, de får säga vad de vill,
                                    Ingenting som vi ska tänka på

                                    Håll min hand, snart så är de långt bort
                                    Allting kommer lösa sig och
                                    I din famn, gör jag vad som helst för dig



                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    Close X
                                </Button>
                            </DialogActions>
                        </Dialog>


                    </div>

                    <div className='continue-section'>
                        <button className='continue-button  btn-lg'>
                            <Link className='btn-style' to='/e5'>Continue</Link>
                        </button>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default Exercise4;