import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const checkAnswer = (value, correctAnswer) => {
    if (value === correctAnswer) {
        toast('Correct!');
    }
    else {
        toast('Incorrect!');
    }
    return (
        <div>
            <ToastContainer />
        </div>
    );
}

export { checkAnswer };