const greeting = () => {
  const userName = require('readline-sync').question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};

export default greeting;
