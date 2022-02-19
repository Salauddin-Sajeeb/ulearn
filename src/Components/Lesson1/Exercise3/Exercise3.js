import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../Lesson1-nav/Nav';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Exercise3.css'
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('first singular', 'I', 'jag'),
    createData('second singular', 'you', 'du'),
    createData('third singular', 'he', 'han'),
    createData('', 'she', 'hon'),
    createData('', 'it', 'den (en-form)'),
    createData('', '', 'ett (ett-form)'),
    createData('first plural', 'we', 'vi'),
    createData('second plural', 'You', 'ni'),
    createData('third plural', 'they', 'de')
];

const Exercise3 = () => {

    return (
        <div>
            <div className='d-flex'>
                <Nav />
                <ProgressBar striped variant='warning' now={65} />
                <p className='mx-2 pt-1'>3/6</p>
            </div>

            <div className='exercise-3 pt-3'>
                <h2>Subject pronouns</h2>
                <h4 className='my-3'>Learning Swedish subject pronouns displayed in the table below is vital to the language</h4>
                <div className="table-container">
                    <div className='table-section'>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, minHeight: 350 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 700 }}>Person</TableCell>
                                        <TableCell sx={{ fontWeight: 700 }} align="right">English</TableCell>
                                        <TableCell sx={{ fontWeight: 700 }} align="right">Swedish</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                </div>
            </div>
            <div className='continue-section'>
                <button className='continue-btn  btn-lg'>
                    <Link className='btn-style' to='/e3p1'>CONTINUE</Link>
                </button>
            </div>

        </div>
    );
};

export default Exercise3;