let guests = 0;
let tables = 0;

function nextStep1() {
  guests = parseInt(document.getElementById('guestsInput').value);
  if (!guests || guests <= 0) {
    alert("Please enter a valid number of guests.");
    return;
  }
  document.getElementById('step1').style.display = "none";
  document.getElementById('step2').style.display = "block";
}

function nextStep2() {
  tables = parseInt(document.getElementById('tablesInput').value);
  if (!tables || tables <= 0 || tables > guests) {
    alert("Please enter a valid number of tables (less than or equal to guests).");
    return;
  }

  const base = Math.floor(guests / tables);
  let extra = guests % tables;
  let tableSizes = [];

  for (let i = 0; i < tables; i++) {
    tableSizes.push(base + (extra > 0 ? 1 : 0));
    if (extra > 0) extra--;
  }

  const sizeCount = {};
  tableSizes.forEach(size => {
    sizeCount[size] = (sizeCount[size] || 0) + 1;
  });

  let resultStr = `Your ${guests} guests will be seated as follows: `;
  const breakdown = Object.entries(sizeCount).map(([size, count]) => `${count} table${count > 1 ? 's' : ''} of ${size}`);
  resultStr += breakdown.join(', ') + '.';

  document.getElementById('step2').style.display = "none";
  document.getElementById('step3').style.display = "block";
  document.getElementById('result').innerText = resultStr;
}
