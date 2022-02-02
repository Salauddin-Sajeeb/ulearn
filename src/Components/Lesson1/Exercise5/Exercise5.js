import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './exercise5.css'
import Nav from '../Lesson1-nav/Nav';
import { Button } from '@mui/material';

const Exercise5 = () => {

    const [open, setOpen] = React.useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const jag = (e) => {
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
            <Nav />
            <div className='exercise-5'>
                <h1 className='py-4'>Myra Granberg</h1>
                <div className='myra-video'>

                </div>

                <h4 className='my-3 pb-4'>Fill in the gaps with the correct subject pronouns</h4>

                <div className='text-area d-flex '>
                    <div className='blank-area px-3'>
                        <input onBlur={jag} type="text" /> ska älska dig tills mitt hjärta går under
                        Uti alla stunder, blixtar och dunder
                        Lova mig att <input onBlur={vi} type="text" /> räknar sekunder
                        Åh, baby, <input onBlur={jag} type="text" /> är alltid med dig
                        Älska dig tills mitt hjärta går under
                        Uti alla stunder, med blixtar och dunder
                        Lova mig att <input onBlur={vi} type="text" /> räknar sekunder
                        För, baby, <input onBlur={jag} alert="successfully done" type="text" /> är alltid med dig


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
                <div className='hint-area d-flex pt-3'>
                    <div className='solution'>
                        <button onClick={handleClickOpen} className='btn btn-warning px-5'>Show Solution</button>
                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >

                            <DialogContent>
                                <DialogContentText sx={{ fontWeight: '500' }}>
                                    Jag ska älska dig tills mitt hjärta går under
                                    Uti alla stunder, med blixtar och dunder
                                    Lova mig att vi räknar sekunder
                                    Åh, baby, jag är alltid med dig
                                    Älska dig tills mitt hjärta går under
                                    Uti alla stunder, med blixtar och dunder
                                    Lova mig att vi räknar sekunder
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
                        <button className='btn btn-warning px-5'>Continue</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Exercise5;