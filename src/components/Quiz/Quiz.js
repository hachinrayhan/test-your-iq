import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const { name, total, questions } = quiz;
    return (
        <div>
            <div className='bg-success p-2'>
                <h1>Quiz on {name}</h1>
                <h3>Total Questions: {total}</h3>
            </div>
            <div className='container'>
                {
                    questions.map(singleQuestion => <Question key={singleQuestion.id} singleQuestion={singleQuestion}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;