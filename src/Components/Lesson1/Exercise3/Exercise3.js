import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from '../Lesson1-nav/Nav';
import './Exercise3.css'
const Exercise3 = () => {

    return (
        <div>
            <div className='d-flex'>
                <Nav />
                <ProgressBar variant='warning' now={40} />
                <p className='mx-2 pt-1'>3/6</p>
            </div>
            <div className='exercise-3 pt-3'>
                <h2>Subject Pronouns</h2>
                <h4 className='mt-3'>Learning Swedish subject pronouns displayed in the table below is vital to the language</h4>
                <div className="table-container">
                    <div className='table-section'>
                        <table className="table mt-3 table-bordered border-dark text-dark">
                            <thead>
                                <tr>
                                    <th className='thead' scope="col">Person</th>
                                    <th className='thead' scope="col">English</th>
                                    <th className='thead' scope="col">Swedish</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>first Singular</td>
                                    <td>I</td>
                                    <td>jag</td>
                                </tr>
                                <tr>

                                    <td>second singular</td>
                                    <td>you</td>
                                    <td>du</td>
                                </tr>

                            </tbody>
                            <tbody>
                                <tr>
                                    <td rowSpan={3}>third singular</td>
                                    <td>he</td>
                                    <td>han</td>
                                </tr>
                                <tr>
                                    <td>she</td>
                                    <td>hon</td>
                                </tr>
                                <tr>
                                    <td>
                                        it
                                    </td>
                                    <td>
                                        den(en-form)/ett(ett-form)
                                    </td>
                                </tr>

                            </tbody>
                            <tbody>
                                <tr>
                                    <td>first plural</td>
                                    <td>we</td>
                                    <td>vi</td>
                                </tr>
                                <tr><td>second plural</td>
                                    <td>you</td>
                                    <td>ni</td></tr>
                                <tr> <td>third plural</td>
                                    <td>they</td>
                                    <td>de</td></tr>



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='continue-section'>
                <button className='continue-btn  btn-lg'>
                    <Link className='btn-style' to='/e4'>Continue</Link>
                </button>
            </div>

        </div>
    );
};

export default Exercise3;