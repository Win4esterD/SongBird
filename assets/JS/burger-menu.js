"use strict"

const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const header = document.querySelector('.header');



burger.addEventListener('click', ()=>{
    let style = window.getComputedStyle(nav);
    if(style.display == "none"){
        header.style.height = 'auto';
        logo.style.display = 'block';
        nav.style.display = 'block'; 
    }else{
        header.style.height = '50px';
        logo.style.display = 'none';
        nav.style.display = 'none'; 
    }
})