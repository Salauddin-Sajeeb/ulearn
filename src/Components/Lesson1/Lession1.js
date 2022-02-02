import React from 'react';
import Exercise2 from './exercise2/Exercise2';
import Exercise3 from './Exercise3/Exercise3';
import Exercise5 from './Exercise5/Exercise5';
import Page1 from './Page1';
import './page1.css'
import Page2 from './Page2';


const Lession1 = () => {

    return (
        <div className='lession-1'>

            <Page1 />
            <section id='page-2'>
                <Page2 />
            </section>
            <Exercise2 />
            <Exercise3 />

            <Exercise5 />

        </div>
    );
};

export default Lession1;