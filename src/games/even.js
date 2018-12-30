import { getRandomNumber, maxNumber } from '..';

const showTaskEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log(' ');
};
const isEven = number => number % 2 === 0;

const makeQuestionEven = () => getRandomNumber(maxNumber);
const showQuestionEven = question => `Question: ${question}`;
const makeSolutionEven = question => (isEven(question) ? 'yes' : 'no');

export {
  showTaskEven,
  makeQuestionEven,
  showQuestionEven,
  makeSolutionEven,
};
