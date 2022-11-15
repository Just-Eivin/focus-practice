const playButton = document.querySelector('#play-button');
const playerCircle = document.querySelector('#player');
const gameArea = document.querySelector('.game-wrapper');

let roundCounter = document.querySelector('#round-counter');
let hitCounter = document.querySelector('#hit-counter');
let missCounter = document.querySelector('#miss-counter');
let accCounter = document.querySelector('#acc-counter');

const limitA = document.querySelector('.outer-circle').offsetWidth;
const limitB = document.querySelector('.inner-circle').offsetWidth;

let isGameOn = false;

let round = 0, hit = 0, miss = 0, acc = 0;

playButton.addEventListener('click', ()=> {
    if(!isGameOn) {
        setTimeout(() => {
            isGameOn = true;
            playerCircle.classList.add('play-game-anim');
            playerCircle.addEventListener('animationend', ()=>{
                playerCircle.classList.remove('play-game-anim');
                isGameOn = false;
            })
        }, 300);
    }
})

gameArea.addEventListener('click', ()=> {
    if(isGameOn) {
        let currentPlayerSize = playerCircle.offsetWidth;
        if(currentPlayerSize <= limitA && currentPlayerSize >= limitB) {
            playerCircle.classList.remove('play-game-anim');
            round++;
            hit++;
            CalculateAcc();
            WriteScore();
            isGameOn = false;
        } else {
            playerCircle.classList.remove('play-game-anim');
            round++;
            miss++;
            CalculateAcc();
            WriteScore();
            isGameOn = false;
        }
    }
})

function WriteScore() {
    roundCounter.textContent = round;
    hitCounter.textContent = hit;
    missCounter.textContent = miss;
    accCounter.textContent = acc;
}

function CalculateAcc() {
    acc = Math.trunc((hit / round) * 100);
}

