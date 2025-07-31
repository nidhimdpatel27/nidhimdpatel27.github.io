let balance = 0;

const die1Img = document.getElementById('die1');
const die2Img = document.getElementById('die2');
const outcomeText = document.getElementById('outcome');
const balanceText = document.getElementById('balance');
const rollBtn = document.getElementById('roll-btn');
const numRollsInput = document.getElementById('numRolls');
const dateSpan = document.getElementById('date');

dateSpan.textContent = new Date().toLocaleDateString();

function rollDice() {
  let rolls = parseInt(numRollsInput.value);

  if (isNaN(rolls) || rolls < 1) {
    alert('Please enter a valid number of rolls (minimum 1).');
    return;
  }

  if (rolls > 50) {
    alert('Please enter a number less than or equal to 50.');
    return;
  }

  let fullOutcome = '';

  for (let i = 1; i <= rolls; i++) {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const sum = die1 + die2;

    die1Img.src = `dice${die1}.png`;
    die2Img.src = `dice${die2}.png`;
    die1Img.alt = `Die shows ${die1}`;
    die2Img.alt = `Die shows ${die2}`;

    if (sum >= 9) {
      balance += 5;
      fullOutcome += `Roll ${i}: You rolled ${die1} + ${die2} = ${sum}. You win $5!<br>`;
    } else if (sum <= 5) {
      balance -= 5;
      fullOutcome += `Roll ${i}: You rolled ${die1} + ${die2} = ${sum}. I win $5!<br>`;
    } else {
      fullOutcome += `Roll ${i}: You rolled ${die1} + ${die2} = ${sum}. No money won or lost.<br>`;
    }
  }

  outcomeText.innerHTML = fullOutcome;
  balanceText.textContent = `Your Balance: $${balance}`;

  if (balance <= 0) {
    alert("You're out of money! But you can keep playing.");
    // Button and input remain enabled for continuous play
  }
}

rollBtn.addEventListener('click', rollDice);
