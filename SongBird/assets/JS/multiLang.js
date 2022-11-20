const language = document.querySelector("#language")


document.addEventListener('DOMContentLoaded', function(){
	if(localStorage.getItem('lang')){
        language.value = localStorage.getItem('lang')
        if(localStorage.getItem('lang') == "EN"){
            birdsData = birdsDataEn;
            translateToEnglish()
        }else if(localStorage.getItem('lang') == "RU"){
            birdsData = birdsDataRu;
            translateToRussian()
        }
    }
    chooseOption(round)
});

language.addEventListener('DOMContentLoaded', function(){
    if(language.value === "RU"){
        birdsData = birdsDataRu;
        localStorage.setItem('lang', "RU");
        language.value = localStorage.getItem('lang')
        // translateToRussian()
    }else if(language.value === "EN"){
        birdsData = birdsDataEn;
        localStorage.setItem('lang', "EN");
        language.value = localStorage.getItem('lang')
        // translateToEnglish()
    }
})


language.addEventListener('change', (event)=>{
    if(language.value === "RU"){
        birdsData = birdsDataRu;
        localStorage.setItem('lang', "RU");
        language.value = localStorage.getItem('lang')
        translateToRussian()
    }else if(language.value === "EN"){
        birdsData = birdsDataEn;
        localStorage.setItem('lang', "EN");
        language.value = localStorage.getItem('lang')
        translateToEnglish()
    }
    createOptions(round)
})



function translateToEnglish(){
    const menu = document.querySelectorAll('.nav-ul__li__a')

    menu[0].innerHTML = "Main page"
    menu[1].innerHTML = "Quiz"
    menu[2].innerHTML = "Results"

    const welcome = document.querySelector('.welcome__h1')
    welcome.innerHTML = "Welcome to the game<span class='game-name'> Song Bird!</span>"

    const welcomeText = document.querySelector('.welcome__p');
    welcomeText.innerHTML = "You are going to guess the names of the birds, listening to their voices. Try to guess as many as possible."

    document.querySelector('.play-btn').innerHTML = "PLAY"

    const levels =  document.querySelectorAll('.menu__p')
    
    const levelNames = [
        "Warm-up",
        "Passerine",
        "Forestal",
        "Singing birds",
        "Predators",
        "Sea birds"
    ]

    levels.forEach((level, index)=>{
        level.innerHTML = levelNames[index]
    })

    callToListen.innerHTML = "Listen to the player and select a bird from the list."

    for(let el of document.querySelectorAll('.next-lvl__p')){
        el.innerHTML = "Next level"
    }

    document.querySelector('.restart-btn').innerHTML = "PLAY AGAIN"

}


function translateToRussian(){
    const menu = document.querySelectorAll('.nav-ul__li__a')

    menu[0].innerHTML = "Главная страница"
    menu[1].innerHTML = "Викторина"
    menu[2].innerHTML = "Результаты"

    const welcome = document.querySelector('.welcome__h1')
    welcome.innerHTML = "Добро пожаловать в игру <span class='game-name'> Song Bird!</span>"

    const welcomeText = document.querySelector('.welcome__p');
    welcomeText.innerHTML = "Вам предстоит отгадывать названия птиц прослушивая записи их голосов. Постарайтесь отгадать как можно больше названий птиц."

    document.querySelector('.play-btn').innerHTML = "ИГРАТЬ"

    const levels =  document.querySelectorAll('.menu__p')
    
    const levelNames = [
        "Разминка",
        "Воробьиные",
        "Лесные птицы",
        "Певчие птицы",
        "Хищные птицы",
        "Морские птицы"
    ]

    levels.forEach((level, index)=>{
        level.innerHTML = levelNames[index]
    })

    callToListen.innerHTML = "Послушайте плеер, выберите птицу из списка.";

    for(let el of document.querySelectorAll('.next-lvl__p')){
        el.innerHTML = "Следующий уровень"
    }

    document.querySelector('.restart-btn').innerHTML = "ИГРАТЬ СНОВА"

}