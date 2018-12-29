import readline from 'readline-sync';

const attempts = 3;
const maxNumber = 100;

const showHeader = () => {
  console.log('Welcome to the Brain Games!');
};

const showTask1 = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log(' ');
};

const isEven = number => number % 2 === 0;

const askEven = () => {
  const userName = readline.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(' ');

  const iter = (count) => {
    if (count === attempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const question = Math.floor(Math.random() * (maxNumber + 1));
    console.log(`Question: ${question}`);

    const rightAnswer = isEven(question) ? 'yes' : 'no';
    const userAnswer = readline.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      iter(count + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    }
  };
  iter(0);
};

const runGame1 = () => {
  showHeader();
  showTask1();
  askEven();
};

export { runGame1, showHeader };
