'use strict';

// Variabler
const button = document.querySelector('button');
const nav = document.getElementById('desktop-nav');
const section = document.querySelector('section');
let count = 0;

// Händelsehanterare
button.addEventListener('click', toggle);

// Flyttar menyn till höger eller vänster
function toggle() {
    count++;

    if (count % 2) {
        nav.style.float = 'right';
        nav.style.paddingLeft = '10px';
        nav.style.paddingRight = '0';
        section.style.float = 'left';
        button.innerHTML = 'Flytta menyn till vänster';
    } else {
        nav.style.float = 'left';
        nav.style.paddingRight = '10px';
        nav.style.paddingLeft = '0px';
        section.style.float = 'right';
        button.innerHTML = 'Flytta menyn till höger';
    }
}