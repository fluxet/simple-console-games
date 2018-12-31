import driver from '..';
import getRandomNumber from '../utils';

const maxNumber = 100;
const task = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const makeQuestion = () => {
  const question = getRandomNumber(maxNumber);
  const visible = `${question}`;
  const solution = isEven(question) ? 'yes' : 'no';
  return {
    visible,
    solution,
  };
};

export default () => driver(task, makeQuestion);
