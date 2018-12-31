import driver from '..';
import getRandomNumber from '../utils';

const maxNumber = 1000;
const minDivisor = 2;
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (count) => {
    if (count > num / 2) {
      return true;
    }
    if (num % count === 0) {
      return false;
    }
    return iter(count + 1);
  };
  return iter(minDivisor);
};

const makeGameParameters = () => {
  const questionNumber = getRandomNumber(maxNumber);
  const question = `${questionNumber}`;
  const solution = isPrime(questionNumber) ? 'yes' : 'no';

  return {
    question,
    solution,
  };
};

export default () => driver(task, makeGameParameters);
