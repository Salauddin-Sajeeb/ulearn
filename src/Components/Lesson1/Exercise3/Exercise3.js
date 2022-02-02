import React from 'react';
import Nav from '../Lesson1-nav/Nav';
import './Exercise3.css'
const Exercise3 = () => {

    return (
        <div>
            <Nav />
            <div className='exercise-3 pt-3'>
                <h2>Subject Pronouns</h2>
                <h5 className='mt-3'>Learning Swedish subject pronouns displayed in the table below is vital to the language</h5>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Person</th>
                            <th scope="col">English</th>
                            <th scope="col">Swedish</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>

                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>

                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Exercise3;