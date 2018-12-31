import driver from '..';
import getRandomNumber from '../utils';

const maxNumber = 100;
const task = 'Find the greatest common divisor of given numbers.';

const gcd = (arg1, arg2) => {
  const minArg = Math.min(arg1, arg2);

  const iter = (counter) => {
    if (counter <= 1) {
      return 1;
    }
    const isDivisor = ((arg1 % counter === 0) && (arg2 % counter === 0));
    if (isDivisor) {
      return counter;
    }
    return iter(counter - 1);
  };
  return iter(minArg);
};

const makeQuestion = () => {
  const arg1 = getRandomNumber(maxNumber);
  const arg2 = getRandomNumber(maxNumber);
  const visible = `${arg1} ${arg2}`;
  const solution = gcd(arg1, arg2);
  return {
    visible,
    solution,
  };
};

export default () => driver(task, makeQuestion);
