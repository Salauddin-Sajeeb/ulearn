import React, { useState } from 'react';
import './quiz.css';
import Datas from './Data';
import { Link } from 'react-router-dom';
const Quiz = () => {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [bgColor, setbgcolor] = useState('')
    const [currentImg, setCurrentImg] = useState(0)
    const images = [
        'https://i.ibb.co/ZHpVN5D/hej.png', 'https://i.ibb.co/8K9fwMF/hejda.png', 'https://i.ibb.co/xmkktZf/god-m.png', ' https://i.ibb.co/Jsndnjz/god-d.png',
        'https://i.ibb.co/StFg776/god-k.png', 'https://i.ibb.co/8jqs5yd/tack.png'
    ]

    const switchImg = () => {
        if (currentImg < images.length - 1) { setCurrentImg(currentImg + 1) }
        else {
            setCurrentImg(false)
        }
    }
    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
            setbgcolor({ bgColor: 'green' })
        }

        if (currentQuestion + 1 < Datas.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    /* Resets the game back to default */
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
        setCurrentImg(0)
    };

    return (
        <div>

            {/* 2. Current Score  */}


            {/* 3. Show results or show the question game  */}
            {showResults ? (
                /* 4. Final Results */
                <div className="final-results pt-5">

                    <h2>
                        You scored {score}/{Datas.length}
                    </h2>
                    {
                        score < 4 ?
                            <img className='img-result img-fluid' src='https://i.ibb.co/R4vsyJp/retry.png'></img>
                            :
                            <img className='img-result img-fluid' src="https://i.ibb.co/gm1wrmM/well-done.png" alt="" srcset="" />

                    }

                    <div>
                        <button className='continue-button btn-lg '

                        ><Link className='continue-btn-style' to='/e3'>CONTINUE</Link></button>
                    </div>
                </div>
            ) : (

                /* 5. Question Card  */
                <div>
                    <h1 className='py-1'>Match the correct translations for the images</h1>
                    <img className='img-quiz' src={images[currentImg]} alt="" />
                    <div className="question-card">
                        {/* Current Question  */}
                        {/* <h2>
                            Question: {currentQuestion + 1} out of {Datas.length}
                        </h2> */}


                        {/* List of possible answers  */}
                        <div className='option-quiz'>
                            {
                                Datas[currentQuestion].options.map((option) => {
                                    return (
                                        <button
                                            style={{ backgroundColor: bgColor }}
                                            key={option.id}
                                            onClick={() => {

                                                setTimeout(function () {
                                                    optionClicked(option.isCorrect)
                                                }, 1000);
                                                setTimeout(function () {
                                                    switchImg()
                                                }, 1000);
                                            }} className='btn btn-warning text-dark button-option mx-5 px-5'> {option.text}</button>
                                    )
                                }
                                )
                            }
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
