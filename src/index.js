import readline from 'readline-sync';
import {
  showTaskEven,
  makeQuestionEven,
  showQuestionEven,
  makeSolutionEven,
} from './games/even';
import {
  showTaskCalc,
  makeQuestionCalc,
  showQuestionCalc,
  makeSolutionCalc,
} from './games/calc';

const attempts = 3;
const maxNumber = 100;

const getRandomNumber = max => Math.floor(Math.random() * (max + 1));

const driver = (showTask, makeQuestion, showQuestion, makeSolution) => {
  console.log('Welcome to the Brain Games!');
  showTask();
  const userName = readline.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(' ');

  const iter = (count) => {
    if (count === attempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const question = makeQuestion();
    console.log(showQuestion(question));
    const rightAnswer = `${makeSolution(question)}`;
    const userAnswer = readline.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      iter(count + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  iter(0);
};

const runGameEven = () => {
  driver(showTaskEven, makeQuestionEven, showQuestionEven, makeSolutionEven);
};
const runGameCalc = () => {
  driver(showTaskCalc, makeQuestionCalc, showQuestionCalc, makeSolutionCalc);
};

export {
  runGameEven,
  runGameCalc,
  getRandomNumber,
  maxNumber,
};
