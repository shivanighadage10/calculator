let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(display.value);
        console.log('Result: ', result);
        alert('Result: ' + result);
        display.value = result;
    } catch (e) {
        alert('Error');
        display.value = '';
    }
}

function performOperation(operation) {
    let currentValue = parseFloat(display.value);
    let result;

    switch (operation) {
        case 'sqrt':
            result = Math.sqrt(currentValue);
            console.log('Square root: ', result);
            alert('Square root: ' + result);
            display.value = result;
            break;
        case 'exp':
            result = Math.pow(currentValue, 2); // For square exponentiation
            console.log('Exponentiation: ', result);
            alert('Exponentiation: ' + result);
            display.value = result;
            break;
        case 'mod':
            let modulus = prompt("Enter the divisor for modulus operation:");
            result = currentValue % modulus;
            console.log('Modulus: ', result);
            alert('Modulus: ' + result);
            display.value = result;
            break;
        default:
            break;
    }
}
