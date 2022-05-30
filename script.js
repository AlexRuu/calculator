// Global variables
var display = [];
var past;
var operator;
var solution;

// DOM elements
const numbers = document.querySelectorAll('.btn-num');
const current = document.querySelector('.current-number');
const signs = document.querySelectorAll('.btn-operator');
const equal = document.querySelector('.btn-equal');
const equation = document.querySelector('.history');
const clear = document.querySelector('#clear');

// Operating page
updateDisplay();

signs.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.value;
        past = display.join('')
        equation.innerText = `${past} ${operator}`
        current.innerHTML = ''
        display = [];
    });
});

if (display != [] && past != "") {
    equal.onclick = () => {
        operate(operator, parseFloat(past), parseFloat(display.join('')));
        current.innerText = solution;
        equation.innerText = `${past} ${operator} ${display.join('')}`
        display = [];
        past = '';
    };
};

clear.onclick = () => clearAll();

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

// Display value
function updateDisplay() {
    numbers.forEach((button) => {
        button.addEventListener('click', () => {
            if (display.length <= 8) {
                display.push(button.value);
                current.innerText = display.join('');
            };
        });
    });
};

// Clear everything 
function clearAll() {
    display = [];
    past = '';
    solution = '';
    operator = '';
    current.innerText = '';
    equation.innerText = '';
};