let currVal = 0;
let btnTitle = document.querySelector('#title');
let btnDecrement = document.querySelector('#decrement');
let btnReset = document.querySelector('#reset');
let btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
    currVal++;
    btnTitle.textContent = currVal;
})

btnDecrement.addEventListener('click', () => {
    currVal--;
    btnTitle.textContent = currVal;
})

btnReset.addEventListener('click', () => {
    currVal = 0;
    btnTitle.textContent = currVal;
})