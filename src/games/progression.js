import { getRandomNumber, maxNumber, driver } from '..';

const progressionSize = 10;

const showTaskPrg = () => {
  console.log('What number is missing in the progression?');
  console.log(' ');
};

const makeQuestionPrg = () => {
  const firstElement = getRandomNumber(maxNumber);
  const indexHide = getRandomNumber(progressionSize - 1);
  const increment = getRandomNumber(maxNumber);

  const arr = [firstElement];
  for (let i = 1; i < progressionSize; i += 1) {
    arr.push(arr[i - 1] + increment);
  }
  const question = {
    arr,
    indexHide,
  };
  return question;
};

const showQuestionPrg = (question) => {
  const hideElem = (elem, index) => ((index === question.indexHide) ? '..' : elem);
  const arrToStr = (acc, elem) => `${acc} ${elem}`;

  const arrVisible = question.arr.map(hideElem).reduce(arrToStr, '');
  return `Question: ${arrVisible}`;
};
const makeSolutionPrg = question => (question.arr[question.indexHide]);

const runGameProgression = () => {
  driver(showTaskPrg, makeQuestionPrg, showQuestionPrg, makeSolutionPrg);
};

export default runGameProgression;
