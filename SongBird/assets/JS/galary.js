"use strict"

const menuDivs = document.querySelectorAll('.menu__div')
let birdsGalary;

function translateGalaryToEnglish(){
    const levelNames = [
        "Warm-up",
        "Passerine",
        "Forestal",
        "Singing birds",
        "Predators",
        "Sea birds"
    ]

    const levels = document.querySelectorAll('.menu__p')

    levels.forEach((level, index)=>{
        level.innerHTML = levelNames[index]
    })

    const galaryMenu =  document.querySelectorAll('.nav-ul__li__a');
    galaryMenu[0].innerHTML = "Return to the game"
    galaryMenu[1].innerHTML = "Gallary"
}

function translateGalaryToRussian(){
    const levelNames = [
        "Разминка",
        "Воробьиные",
        "Лесные птицы",
        "Певчие птицы",
        "Хищные птицы",
        "Морские птицы"
    ]

    const levels = document.querySelectorAll('.menu__p')

    levels.forEach((level, index)=>{
        level.innerHTML = levelNames[index]
    })

    const galaryMenu =  document.querySelectorAll('.nav-ul__li__a');
    galaryMenu[0].innerHTML = "Вернуться в игру"
    galaryMenu[1].innerHTML = "Галерея"
}

if(!localStorage.getItem('lang') || localStorage.getItem('lang') == "RU"){
    birdsGalary = birdsDataRu;
    translateGalaryToRussian()
}else if(localStorage.getItem('lang') == "EN"){
    birdsGalary = birdsDataEn;
    translateGalaryToEnglish()
}

fillGalary(0)

function fillGalary(index){
    const names = document.querySelectorAll('.bird-block__name')
    const IMGs = document.querySelectorAll('.bird-block__img');
    const latinNames = document.querySelectorAll('.bird-block__latin');
    const players = document.querySelectorAll('.galary-player');
    const descriptions = document.querySelectorAll('.bird-block__description');


    for(let i=0; i<6; i++){
        names[i].innerHTML = birdsGalary[index][i].name
        IMGs[i].setAttribute('src', birdsGalary[index][i].image);
        latinNames[i].innerHTML = birdsGalary[index][i].species
        players[i].src = birdsGalary[index][i].audio
        descriptions[i].innerHTML = birdsGalary[index][i].description
    }
}


menuDivs.forEach((div, index) =>{
    div.addEventListener('click', () => {
        for(let el of menuDivs){
            el.removeAttribute('id')
        }

        div.setAttribute("id", "tab-now")
        fillGalary(index)
    })
})