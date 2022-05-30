import React from 'react';
import Option from './Option';

function QuizQuestion(props) { 
    return (
                <div className="quiz--question">
                    <h1 className="question">{props.item.question}</h1>
                    <Option options={props.item.options} id={props.item.id} />
                </div>
    )
}

export default QuizQuestion;