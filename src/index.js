import readline from 'readline-sync';

const attempts = 3;

export default (task, makeGameParameters) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readline.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  const iter = (count) => {
    if (count === attempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { question, solution } = makeGameParameters();
    console.log(`Question: ${question}`);
    const userAnswer = readline.question('Your answer: ');

    if (userAnswer === `${solution}`) {
      console.log('Correct!');
      iter(count + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${solution}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  iter(0);
};
