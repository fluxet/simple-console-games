import { getRandomNumber, maxNumber, driver } from '..';

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

const showTaskCalc = () => {
  console.log('What is the result of the expression?');
  console.log(' ');
};

const makeQuestionCalc = () => ({
  arg1: getRandomNumber(maxNumber),
  arg2: getRandomNumber(maxNumber),
  cmd: getRandomNumber(Object.keys(cmdIndicator).length - 1),
});

const showQuestionCalc = question => `Question: ${question.arg1} ${cmdIndicator[question.cmd]} ${question.arg2}`;
const makeSolutionCalc = question => cmdTranslator[question.cmd](question.arg1, question.arg2);

const runGameCalc = () => {
  driver(showTaskCalc, makeQuestionCalc, showQuestionCalc, makeSolutionCalc);
};

export default runGameCalc;
