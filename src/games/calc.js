import driver from '..';
import getRandomNumber from '../utils';

const maxNumber = 100;
const task = 'What is the result of the expression?';
const cmdIndicator = {
  0: '+',
  1: '-',
  2: '*',
};
const cmdTranslator = {
  0: (a, b) => a + b,
  1: (a, b) => a - b,
  2: (a, b) => a * b,
};

const makeGameParameters = () => {
  const arg1 = getRandomNumber(maxNumber);
  const arg2 = getRandomNumber(maxNumber);
  const cmd = getRandomNumber(Object.keys(cmdIndicator).length - 1);

  const question = `${arg1} ${cmdIndicator[cmd]} ${arg2}`;
  const solution = cmdTranslator[cmd](arg1, arg2);
  return {
    question,
    solution,
  };
};

export default () => driver(task, makeGameParameters);
