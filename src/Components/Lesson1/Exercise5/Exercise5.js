import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './exercise5.css'
import Nav from '../Lesson1-nav/Nav';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
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

const Exercise5 = () => {
    const [solution, setSolution] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [wrong1, setWrong1] = useState(false)
    const [wrong2, setWrong2] = useState(false)
    const [wrong3, setWrong3] = useState(false)
    const [wrong4, setWrong4] = useState(false)
    const [wrong5, setWrong5] = useState(false)
    const [score, setScore] = useState(0)
    const [result, SetResult] = useState(false)

    const [inputVal, setInputVal] = useState({
        input1: "",
        input2: "",
        input3: '',
        input4: '',
        input5: ''
    })
    const expectedVal = {
        expVal1: "jag",
        expVal2: "vi",
        expVal3: "jag",
        expVal4: "vi",
        expVal5: "jag",
    }
    const verifyResult = () => {
        if (inputVal.input1 === "" || inputVal.input2 === "" || inputVal.input3 === "" || inputVal.input4 === "" || inputVal.input5 === "")

            alert('please fill in inputs first ')
        else
            SetResult(true)
    }


    return (
        <div>
            <div className="d-flex">
                <Nav />
                <ProgressBar striped variant='warning' now={90}></ProgressBar>
                <p className='mt-1 mx-2' >5/6</p>
            </div>

            {result ? (
                /* 4. Final Results */
                <div className="final-results pt-5 ">

                    <h2>
                        You Scored {score}/5
                    </h2>
                    {
                        score < 4 ?
                            <img className='img-result img-fluid' src='https://i.ibb.co/R4vsyJp/retry.png'></img>
                            :
                            <img className='img-result img-fluid' src="https://i.ibb.co/gm1wrmM/well-done.png" alt="" />

                    }
                </div>

            ) : (<div className='exercise-5'>
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


                        <input type='text' style={{ background: wrong1 ? "red" : null }}

                            name='input1'
                            value={inputVal.input1}
                            onChange={(e) => {

                                setInputVal({ ...inputVal, input1: e.target.value })
                                if (inputVal.input1 === expectedVal.expVal1) {
                                    setWrong1(false)
                                    setScore(score + 1)
                                    console.log(score)
                                }
                                else
                                    setWrong1(true)
                            }}

                        />
                        ska älska dig tills mitt hjärta går under
                        Uti alla stunder, blixtar och dunder
                        Lova mig att  <input type='text' style={{ background: wrong2 ? "red" : null }}

                            name='input2'
                            value={inputVal.input2}
                            onChange={(e) => {
                                setInputVal({ ...inputVal, input2: e.target.value })
                                if (inputVal.input2 === expectedVal.expVal2) {
                                    setWrong2(false)
                                    setScore(score + 1)
                                    console.log(score)
                                }
                                else
                                    setWrong2(true)
                            }}

                        /> räknar sekunder
                        Åh, baby, <input type='text' style={{ background: wrong3 ? "red" : null }}

                            name='input3'
                            value={inputVal.input3}
                            onChange={(e) => {
                                setInputVal({ ...inputVal, input3: e.target.value })
                                if (inputVal.input3 === expectedVal.expVal3) {
                                    setWrong3(false)
                                    setScore(score + 1)
                                    console.log(score)

                                }
                                else
                                    setWrong3(true)
                            }}

                        />  är alltid med dig
                        Älska dig tills mitt hjärta går under
                        Uti alla stunder, med blixtar och dunder
                        Lova mig att <input type='text' style={{ background: wrong4 ? "red" : null }}

                            name='input4'
                            value={inputVal.input4}
                            onChange={(e) => {
                                setInputVal({ ...inputVal, input4: e.target.value })
                                if (inputVal.input4 === expectedVal.expVal4) {
                                    setWrong4(false)
                                    setScore(score + 1)
                                    console.log(score)
                                }
                                else
                                    setWrong4(true)
                            }}

                        />  räknar sekunder
                        För, baby, <input type='text' style={{ background: wrong5 ? "red" : null }}

                            name='input5'
                            value={inputVal.input5}
                            onChange={(e) => {
                                setInputVal({ ...inputVal, input5: e.target.value })
                                if (inputVal.input5 === expectedVal.expVal5) {
                                    setWrong5(false)
                                    setScore(score + 1)
                                    console.log(score)

                                }
                                else
                                    setWrong5(true)

                            }}

                        />  är alltid med dig


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
                        <Button disabled={solution} className='bg-warning text-dark py-2' onClick={() => {
                            handleOpen()
                            setSolution(true)
                        }}>Show Solution</Button>
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
                        <button onClick={verifyResult} className='continue-button  btn-lg'>
                            NEXT
                        </button>
                    </div>
                </div>

            </div>)}
            {
                result ?
                    <div className='continue mt-3 ex5-result next'>
                        <button className='continue-button btn-lg bg-warning '

                        ><Link className='continue-btn-style' to='/e3'>CONTINUE</Link></button>
                    </div> : null
            }
        </div>

    );
};

export default Exercise5;
