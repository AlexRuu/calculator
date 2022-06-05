// Global variables
var display = 0;
var operator = null;
var solution = 0;
var past = 0;

// DOM Elements
const number = document.querySelectorAll('.btn-num');
const signs = document.querySelectorAll('.btn-operator');
const screen = document.querySelector('.current-number');
const change = document.querySelector('#sign');
const clear = document.querySelector('#clear');
const history = document.querySelector('.history');
const equals = document.querySelector('.btn-equal');


// Page operation
updateDisplay();
clear.onclick = () => clearAll();
getOperator();
equals.onclick = () => {
    if (operator === '%') {}
    else {
        operate(operator, parseFloat(past), parseFloat(display));
        history.innerText = `${past} ${operator} ${display}`;
        display = solution;
    };
    roundDisplay(display);
};

// Functions
// Calculate function
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            solution = num1 + num2;
            return solution;
        case '-':
            solution = num1 - num2;
            return solution;
        case 'x':
            solution = num1 * num2;
            return solution;
        case '÷':
            solution = num1 / num2;
            return solution;
    };
};

// Update the calculator display
function updateDisplay() {
    screen.innerText = display;
    number.forEach((button) => {
        button.addEventListener('click', () => {
            if (display === 0) {
                display = button.value;
            }
            else if (display.length < 9) {
                if (display.includes('.') && button.value === '.') {

                }
                else {
                    display += button.value;
                };
            };
            if (display.length <= 9) {
                screen.innerText = display;
            }
        });
    });
};

// Change sign of the display when button is clicked
function changeSign(value) {
    display = value * -1;
    screen.innerText = display;
};

// Get operator when pressed
function getOperator() {
    signs.forEach((button) => {
        button.addEventListener('click', () => {
            operator = button.value;
            past = display;
            history.innerText = `${past} ${operator}`;
            if (button.value === '%') {
                solution = percent(display);
                display = solution;
                past = solution;
                roundDisplay(display);
            }
            else {
                display = 0;
                screen.innerText = display;
            }
        });    
    });
};

// Clear 
function clearAll() {
    display = 0;
    operator = null;
    solution = 0;
    past = 0;
    screen.innerText = display;
    history.innerText = '';
};

// Convert to scientific notation
function round(value, value2) {
    return Number.parseFloat(value).toExponential(value2);
};

// Percentage button 
function percent(number) {
    return number / 100;
};

// Display gets displayed in scientific notation if above 9 characters
function roundDisplay(number) {
    if (number.toString().length < 9) {
        screen.innerText = number;
    }
    else if (number.toString().length >= 9) {
        screen.innerText = round(number, 4);
    };
};