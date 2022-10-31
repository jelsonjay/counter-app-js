'use strict';

const counter = document.querySelector('.counter');
const increse = document.querySelector('.increse');
const decrese = document.querySelector('.decrese');
const reset = document.querySelector('.reset');

increse.addEventListener('click', () => {
	counter.innerHTML++;
	counter.style.color = '#7deb9e';
});

decrese.addEventListener('click', () => {
	counter.innerHTML--;
	counter.style.color = '#e67d7d';
});

reset.addEventListener('click', () => {
	counter.innerHTML = 0;
	counter.style.color = '#adabab';
});
