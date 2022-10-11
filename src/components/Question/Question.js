import React from 'react';

const Question = ({ singleQuestion, index }) => {
    const { id, question, options } = singleQuestion;
    return (
        <div className='bg-info my-2 p-3 rounded'>
            <h3><span className='bg-light p-1 rounded me-2'>Question-{index + 1}:</span>{question.replace(/(<([^>]+)>)/ig, '')}</h3>
            {
                options.map((option, index) => <div key={index}>
                    <label><input type="radio" name={id} id={index} /> {option}</label>
                </div>)
            }
        </div>
    );
};

export default Question;