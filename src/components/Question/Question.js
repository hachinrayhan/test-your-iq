import React from 'react';

const Question = ({ singleQuestion }) => {
    const { id, question, options } = singleQuestion;
    return (
        <div>
            <h3>Question: {question.replace(/(<([^>]+)>)/ig, '')}</h3>
            {
                options.map((option, index) => <div key={index}>
                    <input type="radio" name={id} id={index} />
                    <label htmlFor={index}>{option}</label>
                </div>)
            }
        </div>
    );
};

export default Question;