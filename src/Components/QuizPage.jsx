import React, {useState} from 'react';
import './Main.css'
import data from './FetchData'
import QuizQuestion from './QuizQuestion';

function QuizPage() {
    const quizComp = data.map((item, index) => {
        return (
            <QuizQuestion
             item={item}
             key={index}
              />
        )
    })

    return(
        <div className='quiz--container'> 
            {/* <QuizQuestion /> */}
            <div className="question--container">
            {quizComp}
            </div>
            <div className="top--circle"></div>
            <div className="bottom--circle"></div>
        </div>
    )
}

export default QuizPage