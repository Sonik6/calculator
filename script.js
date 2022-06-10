
const numberButtons = document.querySelectorAll('.num');
const operationButtons = document.querySelectorAll('.op');
const equalButton = document.querySelector('.eq');
const deleteButton = document.querySelector('.del'); 
const clearButton = document.querySelector('.cl'); 
const previousEl = document.querySelector('.prev'); 
const currentEl = document.querySelector('.curr');


let previous = '';
let current = '';
let operation = '';


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (current === '.') {
            current = '0.';
        }
        current += button.innerHTML;
        current = current.substring(0, 10);
        currentEl.innerHTML = current;
    });
});


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        operation = button.innerHTML;
        previous = current;
        current = '';
        previousEl.innerHTML = previous;
    });
});


equalButton.addEventListener('click', () => {
    let result = '';
    if (operation === '+') {
        result = parseInt(previous) + parseInt(current);
        result = result.toString().substring(0, 10);
    } else if (operation === '-') {
        result = parseInt(previous) - parseInt(current);
        result = result.toString().substring(0, 10);
    } else if (operation === '*') {
        result = parseInt(previous) * parseInt(current);
        result = result.toString().substring(0, 10);
    } else if (operation === '/') {
        result = parseInt(previous) / parseInt(current);
        result = result.toString().substring(0, 10);
    } else {
        result = 'Invalid Operation';
    }

    currentEl.innerHTML = result;
   
});


clearButton.addEventListener('click', () => {
    previous = '';
    current = '';
    operation = '';
    previousEl.innerHTML = previous;
    currentEl.innerHTML = current;
});


deleteButton.addEventListener('click', () => {
    current = current.slice(0, -1);
    currentEl.innerHTML = current;
}, false);
