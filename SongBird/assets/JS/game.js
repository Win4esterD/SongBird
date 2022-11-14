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


function chooseOption(round){
    createOptions(round)
    options.forEach((option, index) =>{
        option.addEventListener('click', ()=>{
            callToListen.style.display = 'none';
            answerBlock.style.display = 'block';
            answerBirdPic.setAttribute('src', birdsData[round][index].image)
            answerBirdName.innerHTML = birdsData[round][index].name
            player2.setAttribute('src', birdsData[round][index].audio)
            species.innerHTML = birdsData[round][index].species;
            detailedDescription.innerHTML = birdsData[round][index].description
            if(birdPlayer.src != player2.src){
                option.parentNode.style.background = "red"
            }else{
                option.parentNode.style.background = "#1EC069";
                birdPlayer.setAttribute('src', ' ')
                birdPic.src = answerBirdPic.src;
            }
        })
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

            navigation[round].setAttribute('id', 'tab-now');
            chooseOption(round);
        }
    })
}



chooseOption(round)
changeRound()
