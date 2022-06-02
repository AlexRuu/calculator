// Global variables
var display = 0;
var past;
var operator;
var solution;

// DOM Elements
const number = document.querySelectorAll('.btn-num');
const signs = document.querySelectorAll('.btn-operator');
const screen = document.querySelector('.current-number');


updateDisplay();
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

function updateDisplay() {
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
            }
        });
    });
};