'use strict';

let random = Math.trunc(Math.random() * 99) + 1;
let times = 0;
let best = 0;
let guess = 0;
// best = Number(document.querySelector('.best').value);
// console.log(best, typeof best);
// console.log(random);
const displayMessage = function (message) {
  document.querySelector('.hint').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const temp = Number(document.querySelector('.guess').value);
  //沒有.value會回傳NaN 即使typeof顯示number

  //防止輸入重複的數字也算次數
  if (guess !== temp) {
    times++;
    document.querySelector('.times').textContent = times;
    guess = temp;

    if (guess == random) {
      displayMessage('Correct!');
      document.querySelector('.goal').textContent = random;
      document.querySelector('.goal').style.width = '14rem';
      document.querySelector('body').style.backgroundColor = '#00A600';
      document.querySelector('.hint').style.color = '#fff';

      if (best == 0) {
        best = times;
        document.querySelector('.best').textContent = best;
      }
      if (best > times) {
        best = times;
        document.querySelector('.best').textContent = best;
      }
    } else if (guess > random) {
      displayMessage('Too high!');
      document.querySelector('.hint').style.color = '#F75000';
    } else if (guess < random) {
      displayMessage('Too low!');
      document.querySelector('.hint').style.color = '#F75000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  times = 0;
  document.querySelector('.times').textContent = times;
  random = Math.trunc(Math.random() * 30) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.goal').textContent = '?';
  document.querySelector('.goal').style.width = '8rem';
  document.querySelector('body').style.backgroundColor = '#272727';
  document.querySelector('.guess').value = '';
  document.querySelector('.hint').style.color = '#fff';
  console.log(random);
});
