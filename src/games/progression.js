import driver from '..';
import getRandomNumber from '../utils';

const maxNumber = 100;
const task = 'What number is missing in the progression?';

const getPrg = (first, inc, size) => {
  const iter = (count, acc) => {
    if (count === size) {
      return acc;
    }
    acc.push(first + inc * count);
    return iter(count + 1, acc);
  };
  return iter(0, []);
};

const makeQuestion = () => {
  const progressionSize = 10;
  const maxIncrement = 10;
  const firstElement = getRandomNumber(maxNumber);
  const hiddenElementIndex = getRandomNumber(progressionSize - 1);
  const increment = getRandomNumber(maxIncrement);

  const arrPrg = getPrg(firstElement, increment, progressionSize);
  const hideElem = (elem, index) => ((index === hiddenElementIndex) ? '..' : elem);
  const arrToStr = (acc, elem) => `${acc} ${elem}`;
  const arrVisible = arrPrg.map(hideElem).reduce(arrToStr, '');

  const visible = `${arrVisible}`;
  const solution = arrPrg[hiddenElementIndex];
  return {
    visible,
    solution,
  };
};

export default () => driver(task, makeQuestion);
