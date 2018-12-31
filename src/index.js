import readline from 'readline-sync';

const attempts = 3;

export default (task, makeQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  console.log(' ');
  const userName = readline.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(' ');

  const iter = (count) => {
    if (count === attempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const question = makeQuestion();
    console.log(`Question: ${question.visible}`);
    const userAnswer = readline.question('Your answer: ');

    if (userAnswer === `${question.solution}`) {
      console.log('Correct!');
      iter(count + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.solution}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  iter(0);
};
