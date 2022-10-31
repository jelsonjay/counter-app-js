'use strict';

const counter = document.querySelector('.counter');
const increse = document.querySelector('.increse');
const decrese = document.querySelector('.decrese');
const sort = document.querySelector('.sort');

increse.addEventListener('click', () => {
	counter.innerHTML++;
});
