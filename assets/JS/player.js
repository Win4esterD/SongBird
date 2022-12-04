"use strict"

const playBtn = document.querySelector('.playback-button')
const playImg = document.querySelector('.playback-button__img')
const timeNow = document.querySelector('.time-now')
const durationTime = document.querySelector('.duration-time')
const volume = document.querySelector('.volume')

const audio = new Audio();



playBtn.addEventListener('click', () => {
    if(playImg.getAttribute('src') === "img/play.png"){
        audio.play();
        playImg.setAttribute("src", "img/pause.png")
    }else if(playImg.getAttribute('src') === "img/pause.png"){
        audio.pause();
        playImg.setAttribute("src", "img/play.png")
    }
})




function updateProgress(event){
    const {duration, currentTime} = event.srcElement
    const progressPercents = (currentTime / duration) * 100;

    let currentSecs = 0;
    let currentMins = 0

    currentSecs += currentTime
    if(currentSecs < 10){
        timeNow.innerHTML = `0${currentMins}:0${Math.floor(currentSecs)}`
    }else if (currentSecs > 0 && currentTime < 60){
        timeNow.innerHTML = `0${currentMins}:${Math.floor(currentSecs)}`
    }else if(currentSecs > 59){
        currentMins += 1;
        if(Math.floor(currentSecs - (60*currentMins)) < 10){
            timeNow.innerHTML = `0${currentMins}:0${Math.floor(currentSecs - (60*currentMins))}`
        }else{
            timeNow.innerHTML = `0${currentMins}:${Math.floor(currentSecs - (60*currentMins))}`
        }
    }

    let durSecs = Math.floor(duration%60)
    let durMins = Math.floor(duration / 60)
    
    durationTime.innerHTML = `0${durMins}:${durSecs}`
}

audio.addEventListener('timeupdate', updateProgress)


function volumeChange(event){
    audio.volume = volume.value
}

volume.addEventListener('change', volumeChange)


//Сделаем Range работающим

const timeLine2 = document.querySelector('.timeline-2')

function updatetimeLine2(event){
    const {duration, currentTime} = event.srcElement
    timeLine2.setAttribute('max', duration)
    timeLine2.value = currentTime;
}

audio.addEventListener('timeupdate', updatetimeLine2)

function audioProgress(event){
    console.log(timeLine2.value)
    audio.currentTime = timeLine2.value
}

timeLine2.addEventListener('input', audioProgress)