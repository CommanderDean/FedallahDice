function rollAttack(numRolls, resultsDiv, diceCategory) {
  console.log("Attack roll function called!");

  let tableBody = resultsDiv.querySelector('tbody'); 
  tableBody.innerHTML = '';  

  for (let i = 0; i < numRolls; i++) {
      let roll = Math.floor(Math.random() * 20) + 1; 
      let attackResult = roll + 9; 

      let row = document.createElement('tr');

      // Create cells 
      let rollCell = document.createElement('td');
      let workingCell = document.createElement('td'); // Cell for working out
      let resultCell = document.createElement('td');

      // Set content 
      rollCell.textContent = `Roll ${i + 1}: ${roll}`;
      workingCell.textContent = `${roll} + 9`; // Add the working
      resultCell.textContent = attackResult;

      // Apply color classes based on the roll
      if (roll < 2) {
          resultCell.classList.add('low-roll'); 
      } else if (roll === 20) {
          resultCell.classList.add('critical-roll'); 
      } else {
          resultCell.classList.add('normal-roll'); 
      }

      // Add cells to row
      row.appendChild(rollCell);
      row.appendChild(workingCell);
      row.appendChild(resultCell); 
      tableBody.appendChild(row);

      console.log("diceCategory before playDiceSound:", diceCategory);
      playDiceSound(numRolls); // Call the function to play the sound 
    
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

      // 1. Create cells
      let row = document.createElement('tr');
      let rollsCell = document.createElement('td');
      let workingCell = document.createElement('td'); // Cell for working out 
      let resultCell = document.createElement('td');

      // 2. Set content
      rollsCell.textContent = `Roll ${i + 1}: ${roll1}, ${roll2}`;
      workingCell.textContent = `${Math.max(roll1, roll2)} + 9`; 
      resultCell.textContent = attackResult;

      // 3. Apply color classes 
      let higherRoll = Math.max(roll1, roll2); 
      applyColorClass(higherRoll, resultCell); 

      // 4. Append elements
      row.appendChild(rollsCell);
      row.appendChild(workingCell);
      row.appendChild(resultCell); 
      tableBody.appendChild(row);

      playDiceSound(numRolls); // Call the function to play the sound 
      
  }
}

// Helper function to apply the color class
function applyColorClass(roll, resultCell) {
  resultCell.classList.remove('low-roll', 'normal-roll', 'critical-roll'); // Clear existing classes
  if (roll < 2) {
      resultCell.classList.add('low-roll'); 
  } else if (roll === 20) {
      resultCell.classList.add('critical-roll'); 
  } else {
      resultCell.classList.add('normal-roll'); 
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

      // 1. Create cells
      let row = document.createElement('tr');
      let rollsCell = document.createElement('td');
      let workingCell = document.createElement('td'); // Cell for working out
      let resultCell = document.createElement('td');

      // 2. Set content
      rollsCell.textContent = `Roll ${i + 1}: ${roll1}, ${roll2}`;
      workingCell.textContent = `${Math.min(roll1, roll2)} + 9`; 
      resultCell.textContent = attackResult;

      // 3. Apply color classes 
      let lowerRoll = Math.min(roll1, roll2); 
      applyColorClass(lowerRoll, resultCell); 

      // 4. Append elements
      row.appendChild(rollsCell);
      row.appendChild(workingCell);
      row.appendChild(resultCell); 
      tableBody.appendChild(row);

      playDiceSound(numRolls); // Call the function to play the sound 
  }
}

// Helper function to apply the color class
function applyColorClass(roll, resultCell) {
  resultCell.classList.remove('low-roll', 'normal-roll', 'critical-roll'); // Clear existing classes
  if (roll < 2) {
      resultCell.classList.add('low-roll'); 
  } else if (roll === 20) {
      resultCell.classList.add('critical-roll'); 
  } else {
      resultCell.classList.add('normal-roll'); 
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

  playDiceSound(numRolls); // Call the function to play the sound 
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

  playDiceSound(numRolls); // Call the function to play the sound 

}

const rollButtons = document.querySelectorAll('.roll-button');
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');


rollButtons.forEach(button => {
  button.addEventListener('click', () => {
      const type = button.dataset.type;
      const numRolls = parseInt(button.parentNode.querySelector('.num-rolls').textContent, 10);
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
  
  function playDiceSound(numRolls) {
    console.log("playDiceSound called with numRolls (at the start):", numRolls); 

    // Force diceCategory calculation here 
    let diceCategory; 
    if (numRolls === 1 || numRolls === 0) {
        diceCategory = "1die"; 
    } else if (numRolls === 2) {
        diceCategory = "2dice"; 
    } else { 
        diceCategory = "many"; 
    }

    console.log("PlayDiceSound called with diceCategory (an the end):", diceCategory);

    sound = selectSound(diceCategory);  
    sound.play(); 
}


function selectSound(diceCategory) {

  console.log("selectSound called with diceCategory:", diceCategory);
    
    const variation = Math.floor(Math.random() * 3) + 1; 
    const soundFile = `sounds/roll_${diceCategory}_${variation}.ogg`; // Adjust path if needed
    return new Audio(soundFile);
}