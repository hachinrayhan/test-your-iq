import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const checkAnswer = (value, correctAnswer) => {
    if (value === correctAnswer) {
        toast.success('Correct', {
            position: 'top-right'
        });
    }
    else {
        toast.success('Incorrect', {
            position: 'top-right'
        });
    }
};

const showAnswer = correctAnswer => {
    toast(`Correct Answer: ${correctAnswer}`, {
        position: 'top-right'
    });
}

export { checkAnswer, showAnswer };