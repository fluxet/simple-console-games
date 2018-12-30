import { getRandomNumber, maxNumber, driver } from '..';

const gcd = (arg1, arg2) => {
  const minArg = (arg1 < arg2) ? arg1 : arg2;

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

const showTaskGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log(' ');
};

const makeQuestionGcd = () => ({
  arg1: getRandomNumber(maxNumber),
  arg2: getRandomNumber(maxNumber),
});

const showQuestionGcd = question => `Question: ${question.arg1} ${question.arg2}`;
const makeSolutionGcd = question => gcd(question.arg1, question.arg2);

const runGameGcd = () => {
  driver(showTaskGcd, makeQuestionGcd, showQuestionGcd, makeSolutionGcd);
};

export default runGameGcd;
