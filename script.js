// Global variables
var display = 0;
var operator = null;
var solution = null;
var past = null;
const errorMessage = "Divide by 0"

// DOM Elements
const number = document.querySelectorAll('.btn-num');
const signs = document.querySelectorAll('.btn-operator');
const screen = document.querySelector('.current-number');
const clear = document.querySelector('#clear');
const history = document.querySelector('.history');
const equals = document.querySelector('.btn-equal');
const delB = document.querySelector('.btn-del');

// Page operation
updateDisplay();
remove();
getOperator();
clear.onclick = () => clearAll();
equals.onclick = () => {
    if (operator === '%') {

    }
    else if (operator === null) {

    }
    else {
        operate(operator, parseFloat(past), parseFloat(display));
        history.innerText = `${past} ${operator} ${display}`;
        display = solution;
        operator = null;
    };
    roundDisplay(display);
};

number.forEach((button) => {
    button.addEventListener('click', () => {
        if (solution != null && operator === null) {
            clearAll();
            display = button.value;
            screen.innerText = display;
        };
    })
})

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
        case '/':
            if (num2 === 0) {
                solution = errorMessage;
                return solution;
            }
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
            };
        });
    });
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
                operator = null;
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
    solution = null;
    past = null;
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
    else if (number === errorMessage){
        screen.innerText = number;
    }
    else if (number.toString().length >= 9) {
        screen.innerText = round(number, 4);
    }
};

// Delete last character
function remove() {
    delB.addEventListener('click', () => {
        display = display.slice(0, -1);
        screen.innerText = display;
    });
};