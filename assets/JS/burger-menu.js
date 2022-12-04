"use strict"

const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const header = document.querySelector('.header');
const tabs = document.querySelectorAll('.nav-ul__li__a')
const gameFrame = document.querySelector('.game')
const welcomeFrame = document.querySelector('.welcome')

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

tabs.forEach((tab, index) =>{
    tab.addEventListener('click', () =>{
        for(let tab of tabs){
            tab.removeAttribute('id');
        }
        tabs[index].setAttribute('id', 'active')
        if(index === 0){
            try{
                gameFrame.style.display = 'none';
                welcomeFrame.style.opacity = 1;
                welcomeFrame.style.display = 'block';
            }catch(err){

            }
        }else if(index === 1){
            welcomeFrame.style.opacity = 0;
            welcomeFrame.style.display = 'none';
            gameFrame.style.display = 'block';
            backToTheGame()
        }else if(index === 2){
            welcomeFrame.style.opacity = 0;
            welcomeFrame.style.display = 'none';
            gameFrame.style.display = 'block';
            callVictoryScreen()
        }
    })
})
