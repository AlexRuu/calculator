// Global variables
var display = 0;
var operator = null;
var solution = null;

// DOM Elements
const number = document.querySelectorAll('.btn-num');
const signs = document.querySelectorAll('.btn-operator');
const screen = document.querySelector('.current-number');
const change = document.querySelector('#sign');
const clear = document.querySelector('#clear');


// Page operation
updateDisplay();
change.onclick = () => {
    changeSign(display);
};
clear.onclick = () => clearAll();
getOperator();



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
            else {
                display += button.value;
            }
            if (display.length >= 9) {
                screen.innerText = display.substring(0, 9);
            }
            else {
                screen.innerText = display;
            };
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
        });    
    });
};

// Clear 
function clearAll() {
    display = 0;
    operator = null;
    solution = null;
    screen.innerText = display;
};