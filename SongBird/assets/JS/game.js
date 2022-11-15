//birdsData - там данные о птицах
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
const nextLevel = document.querySelector('.next-lvl');

//other variables
let round = 0;
let adder = 0;

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
                option.parentNode.style.background = "red"
                option.removeEventListener('click', eventHandler)
                counter -= 1;
                console.log(counter)
            }else{
                option.parentNode.style.background = "#1EC069";
                birdPlayer.setAttribute('src', ' ')
                birdPic.src = answerBirdPic.src;
                birdName.innerHTML = answerBirdName.innerHTML;
                option.removeEventListener('click', eventHandler)
                adder += counter;
                counter = 5;
                points.innerHTML = `Очков: ${adder}`
                optionsUpdate(round)
                console.log(counter)
            }
        }, false)
    })
}

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
        }
    })
}



chooseOption(round)
changeRound()