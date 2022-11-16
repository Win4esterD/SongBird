//birdsData - там данные о птицах
//document structure
const menu = document.querySelector('.menu');
const playside = document.querySelector('.playside');
const wrapper = document.querySelector('.wrapper');
//options
const options = document.querySelectorAll('.option__p');
const optionsBG = document.querySelectorAll('.option');
const navigation = document.querySelectorAll('.menu__div');

// block of unknown bird
const birdPic = document.querySelector('.bird-pic__img');
const answerBlock = document.querySelector('.answer-block');
const callToListen = document.querySelector('.wrapper__p');
const birdPlayer = document.querySelector('.player');
const birdName = document.querySelector('.player-block__p');
const defaultBirdImg = 'assets/IMG/bird_06a46938.jpg';
const points = document.querySelector('.points');

//answer block
const player2 = document.querySelector('.answer-block__player')
const answerBirdPic = document.querySelector('.answer-block__img');
const answerBirdName = document.querySelector('.bird-name');
const species = document.querySelector('.species');
const basicDescr = document.querySelector('.answer-block__basic-descr')
const detailedDescription = document.querySelector('.answer-block__descr')
const nextLevel = document.querySelector('#next-lvl');
const btnBlocker = document.querySelector('.blocker');


//Victory Screen
const victoryScreen = document.querySelector('.victory-screen');
const victoryMessage = document.querySelector('.victory-screen__p');
const restartBtn = document.querySelector('.restart-btn')

//audios
const victorySound = new Audio('https://promosounds.ru/wp-content/uploads/2021/10/vernyy-otvet-iz-o-schastlivchik.mp3')
const wrongAnswer = new Audio('assets/audio/wrongAnswer.mp3')
const finalVictory = new Audio('assets/audio/priz.mp3')

//other variables
const startButton = document.querySelector('.play-btn')
let round = 0;
let adder = 0;
let result = 0;



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

function createOptions(round){
    birdPlayer.setAttribute('src', birdsData[round][getRandomInt(0, 6)].audio)
    for(let i=0; i<options.length; i++){
        options[i].innerHTML = birdsData[round][i].name
    }
  }

  function optionsUpdate(round){
    for(let i=0; i<options.length; i++){
        options[i].remove();
    }

    for(let i=0; i<optionsBG.length; i++){
        optionsBG[i].innerHTML = `<p class='option__p'>${birdsData[round][i].name}</p>`
    }

    btnBlocker.style.display = "block";
  }

function chooseOption(round){
    createOptions(round)
    let counter = 5;
    document.querySelectorAll('.option__p').forEach((option, index) =>{
        option.addEventListener('click', function eventHandler(){
            callToListen.style.display = 'none';
            answerBlock.style.display = 'block';
            answerBirdPic.setAttribute('src', birdsData[round][index].image)
            answerBirdName.innerHTML = birdsData[round][index].name
            player2.setAttribute('src', birdsData[round][index].audio)
            species.innerHTML = birdsData[round][index].species;
            detailedDescription.innerHTML = birdsData[round][index].description
            if(birdPlayer.src != player2.src){
                wrongAnswer.play();
                option.parentNode.style.background = "red"
                option.removeEventListener('click', eventHandler)
                counter -= 1;
            }else{
                option.parentNode.style.background = "#1EC069";
                birdPlayer.setAttribute('src', ' ')
                birdPic.src = answerBirdPic.src;
                birdName.innerHTML = answerBirdName.innerHTML;
                option.removeEventListener('click', eventHandler)
                adder += counter;
                counter = 5;
                points.innerHTML = `Очков: ${adder}`
                optionsUpdate(round);
                victorySound.play();
                btnBlocker.style.display = 'none';
            }
        }, false)
    })
}

function callVictoryScreen(){
    menu.style.opacity = 0;
    playside.style.opacity = '0';
    points.style.opacity = '0';
    wrapper.style.opacity = '0';
    victoryScreen.style.display = 'block';
    victoryScreen.style.opacity = 1;
    result = adder;
    victoryMessage.innerHTML = `Поздравляем! Вы набрали ${result} очков из 30-и. Хотите попробовать ещё раз?`;
}

function backToTheGame(){
    menu.style.opacity = 1;
    playside.style.opacity = '1';
    points.style.opacity = '1';
    wrapper.style.opacity = '1';
    victoryScreen.style.opacity = 0;
    victoryScreen.style.display = 'none';
}

function restartGame(){
    menu.style.opacity = 1;
    playside.style.opacity = '1';
    points.style.opacity = '1';
    wrapper.style.opacity = '1';
    victoryScreen.style.opacity = 0;
    victoryScreen.style.display = 'none';
    round = 0;
    adder = 0;
    counter = 5;
    for(let el of document.querySelectorAll('.option__p')){
        el.remove()
    }

    for(let i=0; i<optionsBG.length; i++){
        optionsBG[i].innerHTML = `<p class='option__p'>${birdsData[0][i].name}</p>`
        optionsBG[i].style.background = "#473A3A"
    }
    points.innerHTML = `Очков: ${adder}`;
    chooseOption(0);
    answerBlock.style.display = 'none';
    callToListen.style.display = 'block';
    birdPic.src = defaultBirdImg;
    btnBlocker.style.display = "block";
    birdName.innerHTML = "******"
    for(let nav of navigation){
        nav.removeAttribute('id')
    }

    // navigation[0].setAttribute('id', 'tab-now')
    tabs[1].click()
}

startButton.addEventListener('click', restartGame);
restartBtn.addEventListener('click', restartGame);


function changeRound(){
    nextLevel.addEventListener('click', ()=>{
        if(round < 5){
            round += 1;
            answerBlock.style.display = 'none';
            callToListen.style.display = 'block';
            birdPic.src = defaultBirdImg;
            birdName.innerHTML = "******"
            for(let bg of optionsBG){
                bg.style.background = "#473A3A";
            }

            for(let nav of navigation){
                nav.removeAttribute('id')
            }
            optionsUpdate(round)
            navigation[round].setAttribute('id', 'tab-now');
            chooseOption(round);
        }else if(round === 5){
            finalVictory.play()
            tabs[2].click()
            // callVictoryScreen()
        }
    })
}


chooseOption(round)
changeRound()
