import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './exercise5.css'
import Nav from '../Lesson1-nav/Nav';

import { Link } from 'react-router-dom';

import VideoPlayer from 'react-video-js-player'
import { ProgressBar } from 'react-bootstrap';
import { FormControl, MenuItem, Select } from '@mui/material';
import ReactPlayer from 'react-player';
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
    borderRadius: '5%',
    fontWeight: '700'

};
const options = [
    { name: "jag", id: 1 },
    { name: "vi", id: 2 },
    { name: "de", id: 3 },

];
const Exercise5 = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [val, setVal] = useState();
    const jagHandle = (e) => {
        e.preventDefault();
        let value = e.target.value;
        if (value !== 'jag') {
            alert('wrong answer')
            e.target.value = ''
        }

    }
    const vi = (e) => {
        e.preventDefault();
        let value = e.target.value;
        if (value !== 'vi') {
            alert('wrong answer!')
            e.target.value = ''
        }

    }
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <div className="d-flex">
                <Nav />
                <ProgressBar striped variant='warning' now={90}></ProgressBar>
                <p className='mt-1 mx-2' >5/6</p>
            </div>
            <div className='exercise-5'>
                <h1 className='pt-4'>Myra Granberg</h1>
                <div className='video'>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=aVNuoeh0Ovw'
                        height='180px'
                        width='550px'
                        controls
                    />
                </div>

                <h4 className='mt-5 pt-4'>Fill in the gaps with the correct subject pronouns</h4>

                <div className='text-area d-flex  '>
                    <div className='blank-area px-3'>


                        <Select
                            sx={{ height: 10, border: 'none' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}

                            onChange={handleChange}
                        >
                            <MenuItem value={0}>--select--</MenuItem>
                            <MenuItem value={10}>jag</MenuItem>
                            <MenuItem value={20}>de</MenuItem>
                            <MenuItem value={30}>vi</MenuItem>
                        </Select>
                        ska älska dig tills mitt hjärta går under
                        Uti alla stunder, blixtar och dunder
                        Lova mig att <input onBlur={vi} type="text" /> räknar sekunder
                        Åh, baby, <input onBlur={jagHandle} type="text" /> är alltid med dig
                        Älska dig tills mitt hjärta går under
                        Uti alla stunder, med blixtar och dunder
                        Lova mig att <input onBlur={vi} type="text" /> räknar sekunder
                        För, baby, <input onBlur={jagHandle} type="text" /> är alltid med dig


                    </div>
                    <div className='horizontal-divider'>

                    </div>
                    <div className='english-area px-3'>
                        I will love you until my heart gives in,
                        Throughout every moment, with lightning and thunder
                        Promise me we'll count the seconds
                        Ah, baby, I am always with you
                        Love you until my heart gives in,
                        Throughout every moment, with lightning and thunder
                        Promise me we'll count the seconds
                        Because, baby, I am always with you
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

                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Jag ska älska dig tills mitt hjärta går under <br />
                                    Uti alla stunder, med blixtar och dunder <br />
                                    Lova mig att vi räknar sekunder <br />
                                    Åh, baby, jag är alltid med dig <br />
                                    Älska dig tills mitt hjärta går under <br />
                                    Uti alla stunder, med blixtar och dunder <br />
                                    Lova mig att vi räknar sekunder <br />
                                    För, baby, jag är alltid med dig


                                </Typography>
                            </Box>
                        </Modal>


                    </div>




                    <div className='continue'>
                        <button className='continue-button  btn-lg'>
                            <Link className='btn-style' to='/e6'>Continue</Link>
                        </button>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Exercise5;