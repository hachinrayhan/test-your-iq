import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData().data;
    console.log(quiz);
    const { name, total, questions } = quiz;
    return (
        <div>
            <h1>Quiz on {name}</h1>
            <h3>Total Questions: {total}</h3>
        </div>
    );
};

export default Quiz;