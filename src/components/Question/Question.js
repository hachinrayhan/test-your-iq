import React from 'react';
import { checkAnswer, showAnswer } from '../../utilities/functions';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Question.css'

const Question = ({ singleQuestion, index }) => {
    const { id, question, options, correctAnswer } = singleQuestion;
    return (
        <div className='bg-info my-2 p-4 rounded question'>
            <div>
                <EyeIcon onClick={() => showAnswer(correctAnswer)} className='icon' />
            </div>
            <h3><span className='bg-light p-1 rounded me-2'>Question-{index + 1}:</span>{question.replace(/(<([^>]+)>)/ig, '')}</h3>
            {
                options.map((option, index) => <div key={index}>
                    <label><input onClick={(e) => checkAnswer(e.target.value, correctAnswer)} type="radio" name={id} id={index} value={option} /> {option}</label>
                </div>)
            }
        </div>
    );
};

export default Question;