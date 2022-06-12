// Selecting elements variables
var firstPlayer = document.querySelector('.player--0');
var secondPlayer = document.querySelector('.player--1');
var score1 = document.getElementById('score--0');
var score2 = document.getElementById('score--1');
var current1 = document.getElementById('current--0');
var current2 = document.getElementById('current--1');

var dice = document.querySelector('.dice');
var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// functions
function getRandom(){
    var rand = Math.floor(Math.random() * 6) + 1;
    dice.src = 'images/dice-' + rand + '.png';
    if (rand !== 1) {
        currentScore += rand;
    } else {
        moveTurn();
    }
}

function checkWinner(){
    if (scores[activePlayer] >= 30) {
        playing = false;
        document.getElementById('score--'+activePlayer).textContent = 'Winner'; 
        dice.classList.add('hidden');
        document.querySelector('.player--'+activePlayer).classList.add('player--winner');
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');
    } else {
        moveTurn();
    }
}

function moveTurn(){
    document.getElementById('current--'+activePlayer).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    firstPlayer.classList.toggle('player--active');
    secondPlayer.classList.toggle('player--active');
}

// Evenet listener for 3 button
btnRoll.addEventListener('click', function () {
    if(playing) {
        getRandom();
        dice.classList.remove('hidden');
        document.getElementById('current--'+activePlayer).textContent = currentScore;
    }    
});

btnHold.addEventListener('click', function () {
    if(playing){
        scores[activePlayer] += currentScore;
        document.getElementById('score--'+activePlayer).textContent = scores[activePlayer];
        checkWinner();
    }
});

btnNew.addEventListener('click', init);                       

// intit function
function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    
    dice.classList.add('hidden');
    firstPlayer.classList.remove('player--winner');
    secondPlayer.classList.remove('player--winner');
    firstPlayer.classList.add('player--active');
    secondPlayer.classList.remove('player--active');
};

init();
