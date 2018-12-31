import driver from '..';
import getRandomNumber from '../utils';

const maxNumber = 100;
const progressionSize = 10;
const maxIncrement = 10;
const task = 'What number is missing in the progression?';

const generateProgression = (first, inc, size) => {
  const iter = (count, acc) => {
    if (count === size) {
      return acc;
    }
    acc.push(first + inc * count);
    return iter(count + 1, acc);
  };
  return iter(0, []);
};

const makeGameParameters = () => {
  const firstElement = getRandomNumber(maxNumber);
  const hiddenElementIndex = getRandomNumber(progressionSize - 1);
  const increment = getRandomNumber(maxIncrement);

  const progression = generateProgression(firstElement, increment, progressionSize);
  const hideElem = (elem, index) => ((index === hiddenElementIndex) ? '..' : elem);
  const arrquestion = progression.map(hideElem).join(' ');

  const question = `${arrquestion}`;
  const solution = progression[hiddenElementIndex];
  return {
    question,
    solution,
  };
};

export default () => driver(task, makeGameParameters);
