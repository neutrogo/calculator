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

numButtons.forEach((button) => (button.addEventListener('click', diplayAdd)));
opButtons.forEach((button) => (button.addEventListener('click', setOperator)));


//adds numbers clicked to the display
function diplayAdd(e) {
    let tmp = e.currentTarget.innerText;
    displayValue = displayValue + tmp;
    let display = document.querySelector('.display');
    display.innerText = displayValue;
}

// this currently only accepts two values, could be extended
function setOperator(e) {
    let operator = e.currentTarget.innerText;
    let display = document.querySelector('.display');
    
    // check for empty values (ie no numbers pressed before operator)
    if(operator !== '=') {
        display.innerText = operator;
        currentUseOperator = operator;
        num1 = displayValue;
        displayValue = '';
    }
    // change so the user can also input "3 =", returning "3"
    if(operator === '=') {
        if(num1 !== '') {
            let result = operate(currentUseOperator, +num1, +displayValue);
            displayValue = result;
            display.innerText = displayValue;
        }
        else {
            display.innerText = '';
        }
    }
}

