function rollAttack(numRolls, resultsDiv) {
  console.log("Attack roll function called!");
  let tableBody = resultsDiv.querySelector('tbody'); 
  tableBody.innerHTML = ''; 

  for (let i = 0; i < numRolls; i++) {
      let roll = Math.floor(Math.random() * 20) + 1; 
      let attackResult = roll + 9; 

      let row = document.createElement('tr');
      let rollCell = document.createElement('td');
      let resultCell = document.createElement('td');

      rollCell.textContent = `Roll ${i + 1}: ${roll} + 9`; 
      resultCell.textContent = attackResult; 

      row.appendChild(rollCell);
      row.appendChild(resultCell);

      tableBody.appendChild(row);
  }
}

function rollAttackAdvantage(numRolls, resultsDiv) {
  console.log("Attack roll with Advantage function called!");
  let tableBody = resultsDiv.querySelector('tbody'); 
  tableBody.innerHTML = ''; 

  for (let i = 0; i < numRolls; i++) {
      let roll1 = Math.floor(Math.random() * 20) + 1; 
      let roll2 = Math.floor(Math.random() * 20) + 1;
      let attackResult = Math.max(roll1, roll2) + 9; 

      let row = document.createElement('tr');
      let rollsCell = document.createElement('td');
      let resultCell = document.createElement('td');

      rollsCell.textContent = `Roll ${i + 1}: ${roll1}, ${roll2} + 9`; 
      resultCell.textContent = attackResult; 

      row.appendChild(rollsCell);
      row.appendChild(resultCell);

      tableBody.appendChild(row);
  }
}

function rollAttackDisadvantage(numRolls, resultsDiv) {
  console.log("Attack roll with Disadvantage function called!");
  let tableBody = resultsDiv.querySelector('tbody'); 
  tableBody.innerHTML = ''; 

  for (let i = 0; i < numRolls; i++) {
      let roll1 = Math.floor(Math.random() * 20) + 1; 
      let roll2 = Math.floor(Math.random() * 20) + 1;
      let attackResult = Math.min(roll1, roll2) + 9; 

      let row = document.createElement('tr');
      let rollsCell = document.createElement('td');
      let resultCell = document.createElement('td');

      rollsCell.textContent = `Roll ${i + 1}: ${roll1}, ${roll2} + 9`; 
      resultCell.textContent = attackResult; 

      row.appendChild(rollsCell);
      row.appendChild(resultCell);

      tableBody.appendChild(row);
  }
}

function rollDamage(numRolls, resultsDiv) {
  console.log("Damage roll function called!");

  let tableBody = resultsDiv.querySelector('tbody'); 
  tableBody.innerHTML = '';

  let totalDamage = 0;
  for (let i = 0; i < numRolls; i++) {
      let roll = Math.floor(Math.random() * 10) + 1; 
      let damage = roll + 5;
      totalDamage += damage;

      let row = document.createElement('tr');
      let rollCell = document.createElement('td');
      let damageCell = document.createElement('td');


      rollCell.textContent = `Roll ${i + 1}: ${roll} + 5`; 
      damageCell.textContent = damage; 

      row.appendChild(rollCell);
      row.appendChild(damageCell);

      tableBody.appendChild(row);
  }

  let totalRow = document.createElement('tr');
  let totalLabelCell = document.createElement('td');
  let totalDamageCell = document.createElement('td');
  totalLabelCell.textContent = 'Total Damage:';
  totalDamageCell.textContent = totalDamage;
  totalRow.appendChild(totalLabelCell); 
  totalRow.appendChild(totalDamageCell);
  tableBody.appendChild(totalRow);
}

function rollDamageExtraD6(numRolls, resultsDiv) {
  console.log("Damage roll + d6 function called!");

  let tableBody = resultsDiv.querySelector('tbody'); 
  tableBody.innerHTML = ''; 

  let totalDamage = 0;
  for (let i = 0; i < numRolls; i++) {
      let roll = Math.floor(Math.random() * 10) + 1; 
      let extraRoll = Math.floor(Math.random() * 6) + 1; 
      let damage = roll + 5 + extraRoll; 
      totalDamage += damage;

      let row = document.createElement('tr');
      let rollCell = document.createElement('td');
      let damageCell = document.createElement('td');

      rollCell.textContent = `Roll ${i + 1}: ${roll} + 5 + ${extraRoll}`; 
      damageCell.textContent = damage; 

      row.appendChild(rollCell);
      row.appendChild(damageCell);

      tableBody.appendChild(row);
  }

  let totalRow = document.createElement('tr');
  let totalLabelCell = document.createElement('td');
  let totalDamageCell = document.createElement('td');
  totalLabelCell.textContent = 'Total Damage:';
  totalDamageCell.textContent = totalDamage;
  totalRow.appendChild(totalLabelCell); 
  totalRow.appendChild(totalDamageCell);
  tableBody.appendChild(totalRow);
}

const rollButtons = document.querySelectorAll('.roll-button');
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');


rollButtons.forEach(button => {
  button.addEventListener('click', () => {
      const type = button.dataset.type;
      const numRolls = button.parentNode.querySelector('.num-rolls').textContent;
      const resultsDiv = button.parentNode.querySelector('.results');

      switch (type) {
          case 'attack':
              rollAttack(numRolls, resultsDiv);
              break;
          case 'attack-adv':
              rollAttackAdvantage(numRolls, resultsDiv);
              break;
          case 'attack-dis':
              rollAttackDisadvantage(numRolls, resultsDiv);
              break;
          case 'damage':
              rollDamage(numRolls, resultsDiv);
              break;
          case 'damage-extra': 
              rollDamageExtraD6(numRolls, resultsDiv);
              break;
      }
  });
});
  
  plusButtons.forEach(button => {
    button.addEventListener('click', () => {
      let numRollsSpan = button.parentNode.querySelector('.num-rolls');
      let currentRolls = parseInt(numRollsSpan.textContent);
      numRollsSpan.textContent = currentRolls + 1;
    });
  });
  
  minusButtons.forEach(button => {
    button.addEventListener('click', () => {
      let numRollsSpan = button.parentNode.querySelector('.num-rolls');
      let currentRolls = parseInt(numRollsSpan.textContent);
      numRollsSpan.textContent = Math.max(1, currentRolls - 1); // Prevent going below 1
    });
  });

  document.getElementById('clear-all-results').addEventListener('click', () => {
    // Select all the results tables
    const resultsTables = document.querySelectorAll('.results table tbody');
  
    // Clear the content of each table body
    resultsTables.forEach(tableBody => tableBody.innerHTML = ''); 
  });
  