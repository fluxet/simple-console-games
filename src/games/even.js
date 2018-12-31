import driver from '..';
import getRandomNumber from '../utils';

const maxNumber = 100;
const task = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const makeGameParameters = () => {
  const questionNumber = getRandomNumber(maxNumber);
  const question = `${questionNumber}`;
  const solution = isEven(questionNumber) ? 'yes' : 'no';
  return {
    question,
    solution,
  };
};

export default () => driver(task, makeGameParameters);
