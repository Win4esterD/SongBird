//birdsData - там данные о птицах
//document structure
const menu = document.querySelector('.menu');
const playside = document.querySelector('.playside');
const wrapper = document.querySelector('.wrapper');
let birdsData = birdsDataRu;

//options
const options = document.querySelectorAll('.option__p');
const optionsBG = document.querySelectorAll('.option');
const navigation = document.querySelectorAll('.menu__div');

// block of unknown bird
const birdPic = document.querySelector('.bird-pic__img');
const answerBlock = document.querySelector('.answer-block');
const callToListen = document.querySelector('.wrapper__p');
const birdPlayer = new Audio()
const birdName = document.querySelector('.player-block__p');
const defaultBirdImg = 'assets/IMG/bird_06a46938.jpg';
const points = document.querySelector('.points');

//Player1
const playBtn = document.querySelector('.playback-button')
const playBtnImg = document.querySelector('.playback-button__img')
const timeNow = document.querySelector('.time-now')
const durationTime = document.querySelector('.duration-time')
const volume = document.querySelector('.volume')
const timeLine2 = document.querySelector('.timeline-2')

//answer block
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
let counter = 5;
let round = 0;
let adder = 0;
let result = 0;

//Player 1 development

playBtn.addEventListener('click', () => {
    if(playBtnImg.getAttribute('src') === "assets/IMG/play.png"){
        birdPlayer.play();
        playBtnImg.setAttribute("src", "assets/IMG/pause.png")
    }else if(playBtnImg.getAttribute('src') === "assets/IMG/pause.png"){
        birdPlayer.pause();
        playBtnImg.setAttribute("src", "assets/IMG/play.png")
    }
})

function updateProgress(event){
    const {duration, currentTime} = event.srcElement
    // const progressPercents = (currentTime / duration) * 100;
    const curSecs = document.querySelector('.cur-secs')
    const curMins = document.querySelector('.cur-mins')

    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor(currentTime / 60)

    if(seconds < 10){
        curSecs.innerHTML = `0${seconds}`
    }else if(seconds > 9){
        curSecs.innerHTML = seconds
    }

    if(minutes < 10){
        curMins.innerHTML = `0${minutes}`
    }else{
        curMins.innerHTML = minutes
    }
    
}

birdPlayer.addEventListener('timeupdate', updateProgress)

birdPlayer.addEventListener('loadedmetadata', function(){
    const durSecs = document.querySelector('.dur-sec')
    const durMins = document.querySelector('.dur-min')
    let duration = birdPlayer.duration;

    let durSeconds = Math.floor(duration%60)
    let durMinutes = Math.floor(duration / 60)

    if(durSeconds < 10){
        durSecs.innerHTML = `0${durSeconds}`
    }else if(durSeconds > 9){
        durSecs.innerHTML = durSeconds
    }

    if(durMinutes < 10){
        durMins.innerHTML = `0${durMinutes}`
    }else{
        durMins.innerHTML = durMinutes
    }
}, false)



function volumeChange(event){
    birdPlayer.volume = volume.value
}

volume.addEventListener('change', volumeChange)


//Range progress

function updatetimeLine2(event){
    const {duration, currentTime} = event.srcElement
    timeLine2.setAttribute('max', duration)
    timeLine2.value = currentTime;
}

birdPlayer.addEventListener('timeupdate', updatetimeLine2)

function audioProgress(event){
    birdPlayer.currentTime = timeLine2.value
}

timeLine2.addEventListener('input', audioProgress)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }


//Player2 development

const player2Btn = document.querySelector('.player2-btn');
const player2BtnImg = document.querySelector('.player2-img');
const player2 = new Audio()
const player2TimeLine = document.querySelector('.player2__timeline')
const player2Volume = document.querySelector('.player2__volume')

player2Btn.addEventListener('click', () => {
    if(player2BtnImg.getAttribute('src') === "assets/IMG/play.png"){
        player2.play();
        player2BtnImg.setAttribute("src", "assets/IMG/pause.png")
    }else if(player2BtnImg.getAttribute('src') === "assets/IMG/pause.png"){
        player2.pause();
        player2BtnImg.setAttribute("src", "assets/IMG/play.png")
    }
})

player2.addEventListener('loadedmetadata', function(){
    const durSecs = document.querySelector('.p2-dur-sec')
    const durMins = document.querySelector('.p2-dur-min')
    let duration = player2.duration;

    let durSeconds = Math.floor(duration % 60)
    let durMinutes = Math.floor(duration / 60)

    if(durSeconds < 10){
        durSecs.innerHTML = `0${durSeconds}`
    }else if(durSeconds > 9){
        durSecs.innerHTML = durSeconds
    }

    if(durMinutes < 10){
        durMins.innerHTML = `0${durMinutes}`
    }else{
        durMins.innerHTML = durMinutes
    }
}, false)



function updatePlayer2TimeLine(event){
    const {duration, currentTime} = event.srcElement
    player2TimeLine.setAttribute('max', duration)
    player2TimeLine.value = currentTime;
}

player2.addEventListener('timeupdate', updatePlayer2TimeLine)

function player2SetProgress(event){
    player2.currentTime = player2TimeLine.value
}

player2TimeLine.addEventListener('input', player2SetProgress)


function p2UpdateProgress(event){
    const {duration, currentTime} = event.srcElement
    const curSecs = document.querySelector('.p2-cur-sec')
    const curMins = document.querySelector('.p2-cur-min')

    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor(currentTime / 60)

    if(seconds < 10){
        curSecs.innerHTML = `0${seconds}`
    }else if(seconds > 9){
        curSecs.innerHTML = seconds
    }

    if(minutes < 10){
        curMins.innerHTML = `0${minutes}`
    }else{
        curMins.innerHTML = minutes
    }
    
}

player2.addEventListener('timeupdate', p2UpdateProgress)


function p2VolumeChange(event){
    player2.volume = player2Volume.value
}

player2Volume.addEventListener('change', p2VolumeChange)

//Game process

function createOptions(round){
    birdPlayer.src = birdsData[round][getRandomInt(0, 6)].audio
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

function revealBirdInfo(){
    document.querySelectorAll('.option').forEach((el, index) => {
        el.addEventListener('click', () =>{
            player2BtnImg.setAttribute('src', 'assets/IMG/play.png')
            answerBirdPic.setAttribute('src', birdsData[round][index].image);
            answerBirdName.innerHTML = birdsData[round][index].name;
            player2.src = birdsData[round][index].audio;
            species.innerHTML = birdsData[round][index].species;
            detailedDescription.innerHTML = birdsData[round][index].description;
        })
    })
}

document.querySelectorAll('.nav-ul__li')[1].addEventListener('click', restartGame)


function chooseOption(round){
    createOptions(round)
    // let counter = 5;
    document.querySelectorAll('.option__p').forEach((option, index) =>{
        option.addEventListener('click', function eventHandler(){
            callToListen.style.display = 'none';
            answerBlock.style.display = 'block';
            answerBirdPic.setAttribute('src', birdsData[round][index].image);
            answerBirdName.innerHTML = birdsData[round][index].name;
            player2.setAttribute('src', birdsData[round][index].audio);
            species.innerHTML = birdsData[round][index].species;
            detailedDescription.innerHTML = birdsData[round][index].description;
            if(birdPlayer.src != player2.src){
                wrongAnswer.play();
                option.parentNode.style.background = "red"
                option.removeEventListener('click', eventHandler)
                counter -= 1;
            }else{
                option.parentNode.style.background = "#1EC069";
                birdPlayer.pause()
                playBtnImg.setAttribute('src', 'assets/IMG/play.png')
                birdPic.src = answerBirdPic.src;
                birdName.innerHTML = answerBirdName.innerHTML;
                option.removeEventListener('click', eventHandler)
                adder += counter;
                counter = 5;
                // points.innerHTML = `Score: ${adder}`;
                pointsTranslater()
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
    if(!localStorage.getItem('lang') || localStorage.getItem('lang') == "RU"){
        victoryMessage.innerHTML = `Поздравляем! Вы набрали ${result} очков из 30-и. Хотите попробовать ещё раз?`;
    }else if(localStorage.getItem('lang') == "EN"){
        `Congratulations! You've got ${result} points out of 30-и. Want to try again?`
    }
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
    // points.innerHTML = `Score: ${adder}`;
    pointsTranslater()
    chooseOption(0);
    answerBlock.style.display = 'none';
    callToListen.style.display = 'block';
    birdPic.src = defaultBirdImg;
    btnBlocker.style.display = "block";
    birdName.innerHTML = "******"
    for(let nav of navigation){
        nav.removeAttribute('id')
    }

    navigation[0].setAttribute('id', 'tab-now')
    tabs[1].click()
}

startButton.addEventListener('click', restartGame);
restartBtn.addEventListener('click', restartGame);


function changeRound(){
    nextLevel.addEventListener('click', ()=>{
        player2.pause()
        player2BtnImg.setAttribute('src', 'assets/IMG/play.png')
        playBtnImg.setAttribute('src', 'assets/IMG/play.png')
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
revealBirdInfo()
changeRound()
