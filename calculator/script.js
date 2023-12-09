let keyIsPressed = false;

document.getElementById('calculator-form').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateResult();
});

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) && !keyIsPressed) {
    keyIsPressed = true;
    const focusedInput = document.activeElement;
    if (focusedInput.tagName === 'INPUT' && focusedInput.type === 'number') {
      focusedInput.value += key;
    }
  }
});

document.addEventListener('keyup', function(event) {
  keyIsPressed = false;
});

function calculateResult() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;

  let result;
  switch(operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
      break;
    default:
      result = 'Please select an operation';
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}

// Clear button functionality
document.getElementById('clear-button').addEventListener('click', function() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('operation').selectedIndex = 0;
  document.getElementById('result').textContent = '';
});
