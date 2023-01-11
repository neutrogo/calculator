let displayValue = '';

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

numButtons.forEach((button) => (button.addEventListener('click', diplayAdd)));

//adds numbers clicked to the display
function diplayAdd(e) {
    displayValue = e.currentTarget.innerText;
    let display = document.querySelector('.display');
    display.innerText = display.innerText + displayValue;
}