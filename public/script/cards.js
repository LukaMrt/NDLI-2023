import { addToScore, score } from "./variables";

let questions = [];
let answer = 1;

const r1 = document.getElementById('card1');
const r2 = document.getElementById('card2');
const r3 = document.getElementById('card3');

r1.addEventListener('click', function () {
    if (answer === 1) {
        alert('Bravo !');
    } else {
        alert('C\'est faux !');
        addToScore(15);
        if (score >= 100) {
            window.location.href = 'images/bonk.gif';
        }
    }
    if (questions.length === 1) {
        alert('Vous avez gagné !');
        window.location.href = 'pages/win.html';
        return;
    }
    questions.shift();
    loadCardsFromData(questions);
});

r2.addEventListener('click', function () {
    if (answer === 2) {
        alert('Bravo !');
    } else {
        alert('C\'est faux !');
        addToScore(15);
        if (score >= 100) {
            window.location.href = 'images/bonk.gif';
        }
    }
    if (questions.length === 1) {
        alert('Vous avez gagné !');
        window.location.href = 'pages/win.html';
        return;
    }
    questions.shift();
    loadCardsFromData(questions);
});

r3.addEventListener('click', function () {
    if (answer === 3) {
        alert('Bravo !');
    } else {
        alert('C\'est faux !');
        addToScore(15);
        if (score >= 100) {
            window.location.href = 'images/bonk.gif';
        }
    }
    if (questions.length === 1) {
        alert('Vous avez gagné !');
        window.location.href = 'pages/win.html';
        return;
    }
    questions.shift();
    loadCardsFromData(questions);
});

export async function loadCards() {
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            questions = shuffle(data.Tableau);
            loadCardsFromData(questions);
        });
}

function loadCardsFromData() {
    const h2 = document.getElementById('question');
    h2.innerHTML = questions[0].question;

    const h1 = document.getElementById('category');
    h1.innerHTML = questions[0].categorie;

    const avancement = document.getElementById('avancement');
    avancement.innerHTML = 'Question ' + (11 - (questions.length)) + '/10';

    answer = Math.floor(Math.random() * 3) + 1;

    if (answer === 1) {
        r1.innerHTML = questions[0].reponse3;
        r2.innerHTML = questions[0].reponse2;
        r3.innerHTML = questions[0].reponse1;
    }

    if (answer === 2) {
        r1.innerHTML = questions[0].reponse2;
        r2.innerHTML = questions[0].reponse3;
        r3.innerHTML = questions[0].reponse1;
    }

    if (answer === 3) {
        r1.innerHTML = questions[0].reponse2;
        r2.innerHTML = questions[0].reponse1;
        r3.innerHTML = questions[0].reponse3;
    }

}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
