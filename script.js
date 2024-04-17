'use strict';

// const message = document.querySelector('.message');
// message.textContent = "😉 Correct Number!";

// document.querySelector('.number').textContent  = 13;
// document.querySelector('.score').textContent = 10;

// const guess = document.querySelector('.guess').value =23;
// console.log(guess);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');

  if (!guess) {
    displayMessage('😏 No number!');

    //  when player wins
  } else if (guess === secretNumber) {
    displayMessage('👌Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '😒 Too High!' : '😢 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('😂 You lost the game ');
    }
  }
  //  when guess is too high
  // } else if (guess !== secretNumber) {
  //   if (score > 1) {

  //     document.querySelector('.message').textContent = guess > secretNumber ?'😒 Too High!': "😢 Too Low!";
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😂 You lost the game ';
  //   }

  //   //  when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😢 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '😂 You lost the game ';
  //   }
  // }
});

//  again part
const again = document.querySelector('.again');
again.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = 'black';

  document.querySelector('.number').style.width = '15rem';
});
