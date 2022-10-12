import React from 'react';
import { checkAnswer } from '../../utilities/functions';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Question = ({ singleQuestion, index }) => {
    const { id, question, options, correctAnswer } = singleQuestion;
    return (
        <div className='bg-info my-2 p-3 rounded'>
            <div>
                <BeakerIcon className="h-6 w-6 text-blue-500" />
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