import React from 'react';
import Page3 from '../Lesson1/Exercise1/Page3';
import Page1 from '../Lesson1/Page1';
import Page2 from '../Lesson1/Page2';
import './test.css'
const Test = () => {
    return (
        <div className='d-flex test'>
            <section className='page1' id='page1'>
                <Page1 />
            </section>
            <section id='page2'>
                <Page2 />
            </section>
            <Page3 />

        </div>
    );
};

export default Test;