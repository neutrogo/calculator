let displayValue = '';
let currentUseOperator = '';
let num1 = '';

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            alert("An error has occurred");
    }
}

let numPad = document.querySelector('.numbers');
let numButtons = Array.from(numPad.children);
let opPad = document.querySelector('.operators');
let opButtons = Array.from(opPad.children);
let clearButton = document.querySelector('#clear');

numButtons.forEach((button) => (button.addEventListener('click', diplayAdd)));
opButtons.forEach((button) => (button.addEventListener('click', setOperator)));
clearButton.addEventListener('click', clearAll);


//adds numbers clicked to the display
function diplayAdd(e) {
    let tmp = e.currentTarget.innerText;
    displayValue = displayValue + tmp;
    checkDisplayValue();
    let display = document.querySelector('.display');
    display.innerText = displayValue;
}

// sets the operator and works out the sum if two numbers are present/given
function setOperator(e) {
    let operator = e.currentTarget.innerText;
    let display = document.querySelector('.display');

    //could add support for repeatedly pressing "="

    if(displayValue === '0' && currentUseOperator === '/'){
        alert("Are you crazy? YOU CAN'T JUST DIVIDE BY 0!!!");
        return;
    }
    if(num1 !== '' && displayValue !== '') {
        let result = operate(currentUseOperator, +num1, +displayValue);
        result = Math.round(result * 100000) / 100000
        displayValue = result;
        display.innerText = displayValue;
        num1 = '';
    }
    if(displayValue !== '' && operator !== '=' && num1 === '') {
        currentUseOperator = operator;
        num1 = displayValue;
        displayValue = '';
    }
}

// clears everything (slight issue in that C and blank are technically still
// entered into displayValue, though this doesn't affect the user)
function clearAll() {
    displayValue = '';
    currentUseOperator = '';
    num1 = '';
    let display = document.querySelector('.display');
    display.innerText = '';
}

function checkDisplayValue() {
    if(displayValue.length > 18) {
        displayValue = displayValue.slice(0,-1);
    }
}

// need to ensure text doesn't overflow when working out big numbers